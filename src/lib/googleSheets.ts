import { getAccessToken, signInWithGoogle } from './googleAuth';

export interface AuditSubmissionRecord {
  id?: string;
  timestamp: string;
  fullName: string;
  businessName: string;
  email: string;
  phoneCode: string;
  phone: string;
  website?: string;
  industry?: string;
  primaryGoal: string;
  challenges: string[];
  marketingBudget?: string;
  referralSource?: string;
  additionalNotes?: string;
  status: 'Pending Audit' | 'Synced' | 'Reviewing';
  syncedToGoogleSheet?: boolean;
  sheetId?: string;
}

const STORAGE_KEY = 'aceso_audit_leads';
const SHEET_ID_KEY = 'aceso_google_sheet_id';
export const TARGET_SPREADSHEET_ID = '1b-Ke5B8Tqf5frvEn24Z-IRuwbTFYMmbZg86fQ2rFtdk';
export const TARGET_SHEET_GID = '628216240';
const DEFAULT_SHEET_TITLE = 'Aceso Solutions - Growth Audits & Leads';

// Get local leads list
export const getLocalAuditLeads = (): AuditSubmissionRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// Save a lead locally
export const saveLocalAuditLead = (record: AuditSubmissionRecord): AuditSubmissionRecord => {
  const leads = getLocalAuditLeads();
  const newRecord: AuditSubmissionRecord = {
    ...record,
    id: record.id || `AUDIT-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
    timestamp: record.timestamp || new Date().toISOString()
  };
  leads.unshift(newRecord);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch (e) {
    console.error('Failed to save lead locally:', e);
  }
  return newRecord;
};

// Get stored Google Sheet ID
export const getStoredSheetId = (): string => {
  try {
    const stored = localStorage.getItem(SHEET_ID_KEY);
    return stored || TARGET_SPREADSHEET_ID;
  } catch {
    return TARGET_SPREADSHEET_ID;
  }
};

// Set stored Google Sheet ID
export const setStoredSheetId = (sheetId: string) => {
  try {
    localStorage.setItem(SHEET_ID_KEY, sheetId);
  } catch (e) {
    console.error('Failed to store sheet id:', e);
  }
};

// Find existing Growth Audits sheet on user's Drive or create a new one
export const getOrCreateSpreadsheet = async (token: string): Promise<{ id: string; url: string; title: string; targetSheetTitle?: string }> => {
  const primaryId = getStoredSheetId();
  
  if (primaryId) {
    try {
      const checkRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${primaryId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (checkRes.ok) {
        const data = await checkRes.json();
        // Find tab matching GID if specified
        let targetTab = data.sheets?.[0]?.properties?.title || 'Form Responses 1';
        if (TARGET_SHEET_GID && data.sheets) {
          const matched = data.sheets.find((s: any) => String(s.properties?.sheetId) === String(TARGET_SHEET_GID));
          if (matched?.properties?.title) {
            targetTab = matched.properties.title;
          }
        }
        return {
          id: primaryId,
          url: `https://docs.google.com/spreadsheets/d/${primaryId}/edit`,
          title: data.properties?.title || 'Growth Audits Sheet',
          targetSheetTitle: targetTab
        };
      }
    } catch {
      // Fallback
    }
  }

  // Search Drive for file with the title
  try {
    const searchRes = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=name='${encodeURIComponent(DEFAULT_SHEET_TITLE)}' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false&fields=files(id,name,webViewLink)`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      if (searchData.files && searchData.files.length > 0) {
        const found = searchData.files[0];
        setStoredSheetId(found.id);
        return {
          id: found.id,
          url: found.webViewLink || `https://docs.google.com/spreadsheets/d/${found.id}/edit`,
          title: found.name
        };
      }
    }
  } catch (err) {
    console.warn('Drive search warning:', err);
  }

  // Create new Spreadsheet
  const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: {
        title: DEFAULT_SHEET_TITLE
      },
      sheets: [
        {
          properties: {
            title: 'Growth Audits',
            gridProperties: {
              frozenRowCount: 1
            }
          },
          data: [
            {
              startRow: 0,
              startColumn: 0,
              rowData: [
                {
                  values: [
                    { userEnteredValue: { stringValue: 'Submission Date & Time' } },
                    { userEnteredValue: { stringValue: 'Audit ID' } },
                    { userEnteredValue: { stringValue: 'Full Name' } },
                    { userEnteredValue: { stringValue: 'Business Name' } },
                    { userEnteredValue: { stringValue: 'Email' } },
                    { userEnteredValue: { stringValue: 'Phone / WhatsApp' } },
                    { userEnteredValue: { stringValue: 'Website' } },
                    { userEnteredValue: { stringValue: 'Industry' } },
                    { userEnteredValue: { stringValue: 'Primary Goal' } },
                    { userEnteredValue: { stringValue: 'Key Growth Challenges' } },
                    { userEnteredValue: { stringValue: 'Marketing Budget' } },
                    { userEnteredValue: { stringValue: 'Referral Source' } },
                    { userEnteredValue: { stringValue: 'Additional Notes' } },
                    { userEnteredValue: { stringValue: 'Lead Status' } }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
  });

  if (!createRes.ok) {
    const errorBody = await createRes.text();
    throw new Error(`Failed to create spreadsheet in Google Drive: ${errorBody}`);
  }

  const createdData = await createRes.json();
  const newId = createdData.spreadsheetId;
  setStoredSheetId(newId);

  return {
    id: newId,
    url: createdData.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${newId}/edit`,
    title: DEFAULT_SHEET_TITLE
  };
};

// Append a single lead row to Google Sheet
export const GOOGLE_APPS_SCRIPT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbz9SiZbLw4WlkmGsXCF4YUfyXvzsIuNiG8oYGzC1osT9c1b5viLZcAbBclOrx6uQpK04Q/exec';
export const GOOGLE_FORM_RESPONSE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe0yrKVlIZqcvuBUVjFp9aWVexz_xZXQvCg5AajqvdSyrWCmw/formResponse';

// Submit lead directly to user's Google Apps Script Web App which appends directly to Google Sheet
export const submitLeadToGoogleWebApp = async (lead: AuditSubmissionRecord): Promise<{ success: boolean; error?: string }> => {
  try {
    const payload = {
      id: lead.id || `AUDIT-${Date.now()}`,
      timestamp: lead.timestamp || new Date().toISOString(),
      fullName: lead.fullName || '',
      businessName: lead.businessName || '',
      email: lead.email || '',
      phoneCode: lead.phoneCode || '+254',
      phone: lead.phone || '',
      website: lead.website || '',
      industry: lead.industry || 'Other SME',
      primaryGoal: lead.primaryGoal || 'Generate more leads',
      challenges: Array.isArray(lead.challenges) ? lead.challenges : [lead.challenges || ''],
      marketingBudget: lead.marketingBudget || 'Not specified',
      referralSource: lead.referralSource || 'Website',
      additionalNotes: lead.additionalNotes || '',
      status: lead.status || 'Pending Audit'
    };

    // Google Apps Script requires text/plain or no-cors to avoid browser CORS preflight blocks
    try {
      await fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload),
        mode: 'no-cors'
      });
    } catch (e) {
      // Fallback via sendBeacon
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'text/plain;charset=utf-8' });
        navigator.sendBeacon(GOOGLE_APPS_SCRIPT_WEBAPP_URL, blob);
      }
    }

    return { success: true };
  } catch (err: any) {
    console.error('Failed submitting to Google Web App:', err);
    return { success: false, error: err.message };
  }
};

// Submit lead directly to Google Form which populates the linked Google Sheet
export const submitToGoogleForm = async (lead: AuditSubmissionRecord): Promise<{ success: boolean; error?: string }> => {
  try {
    const fullPhone = `${lead.phoneCode || ''} ${lead.phone || ''}`.trim();
    
    // Map industry
    let industryVal = lead.industry || 'Others';
    if (industryVal.toLowerCase().includes('interior') || industryVal.toLowerCase().includes('home')) {
      industryVal = 'Home  & Living / Interiors';
    } else if (industryVal.toLowerCase().includes('real estate')) {
      industryVal = 'Real Estate & Property';
    } else if (industryVal.toLowerCase().includes('health') || industryVal.toLowerCase().includes('wellness') || industryVal.toLowerCase().includes('clinic')) {
      industryVal = 'Healthcare & Wellness Clinics';
    } else if (industryVal.toLowerCase().includes('professional') || industryVal.toLowerCase().includes('financial') || industryVal.toLowerCase().includes('consult')) {
      industryVal = 'Professional & Financial Services';
    } else if (industryVal.toLowerCase().includes('ecom') || industryVal.toLowerCase().includes('retail') || industryVal.toLowerCase().includes('shop')) {
      industryVal = 'Ecommerce & Retail';
    } else if (industryVal.toLowerCase().includes('hospitality') || industryVal.toLowerCase().includes('event') || industryVal.toLowerCase().includes('tour')) {
      industryVal = 'Hospitality, Events & Tours';
    } else if (industryVal.toLowerCase().includes('auto') || industryVal.toLowerCase().includes('logistic')) {
      industryVal = 'Automotive & Logistics';
    } else if (industryVal.toLowerCase().includes('educat') || industryVal.toLowerCase().includes('train')) {
      industryVal = 'Education & Training';
    } else if (industryVal.toLowerCase().includes('tech') || industryVal.toLowerCase().includes('saas') || industryVal.toLowerCase().includes('software')) {
      industryVal = 'Technology & Saas';
    }

    // Map primary goal
    let goalVal = lead.primaryGoal || 'Generate more leads';
    if (goalVal.toLowerCase().includes('lead')) goalVal = 'Generate more leads';
    else if (goalVal.toLowerCase().includes('sales') || goalVal.toLowerCase().includes('revenue')) goalVal = 'Increase sales';
    else if (goalVal.toLowerCase().includes('brand') || goalVal.toLowerCase().includes('awareness')) goalVal = 'Improve brand awareness';
    else if (goalVal.toLowerCase().includes('retention') || goalVal.toLowerCase().includes('repeat') || goalVal.toLowerCase().includes('loyal')) goalVal = 'Customer retention';

    // Map budget
    let budgetVal = lead.marketingBudget || 'Ksh 25,000 - Ksh 50,000 / month';
    if (budgetVal.includes('25,000') && budgetVal.includes('Under')) budgetVal = 'Under Ksh 25,000 / month';
    else if (budgetVal.includes('25,000') && budgetVal.includes('50,000')) budgetVal = 'Ksh 25,000 - Ksh 50,000 / month';
    else if (budgetVal.includes('50,000') && budgetVal.includes('100,000')) budgetVal = 'Ksh 50,000 - Ksh 100,000 / month';
    else if (budgetVal.includes('100,000') && budgetVal.includes('250,000')) budgetVal = 'Ksh 100,000 - Ksh 250,000 / month';
    else if (budgetVal.includes('250,000') || budgetVal.includes('250k')) budgetVal = 'Ksh 250,000+ / month';

    // Map referral
    let referralVal = lead.referralSource || 'Google Search';
    if (referralVal.toLowerCase().includes('google')) referralVal = 'Google Search';
    else if (referralVal.toLowerCase().includes('insta') || referralVal.toLowerCase().includes('face') || referralVal.toLowerCase().includes('social')) referralVal = 'Instagram / Facebook';
    else if (referralVal.toLowerCase().includes('link')) referralVal = 'LinkedIn';
    else if (referralVal.toLowerCase().includes('whats') || referralVal.toLowerCase().includes('referral')) referralVal = 'WhatsApp Referral';
    else if (referralVal.toLowerCase().includes('client') || referralVal.toLowerCase().includes('recommend')) referralVal = 'Client Recommendation';
    else referralVal = 'Other';

    const fieldPairs: Array<[string, string]> = [
      ['entry.1668860375', lead.fullName || ''],
      ['entry.433709509', lead.businessName || ''],
      ['entry.1766097410', lead.email || ''],
      ['entry.1871152956', fullPhone],
      ['entry.1619825275', lead.website || 'N/A'],
      ['entry.724343250', industryVal],
      ['entry.1931951336', goalVal],
      ['entry.1288868283', budgetVal],
      ['entry.1595124604', referralVal],
      ['entry.2011061417', lead.additionalNotes || 'Submitted via Aceso Solutions Growth Audit Web App'],
      ['fvv', '1'],
      ['pageHistory', '0']
    ];

    // Append challenges
    const challengesList = Array.isArray(lead.challenges) && lead.challenges.length > 0
      ? lead.challenges
      : ['Generating quality leads'];

    challengesList.forEach(challenge => {
      let mappedChallenge = challenge;
      if (challenge.toLowerCase().includes('quality lead')) mappedChallenge = 'Generating quality leads';
      else if (challenge.toLowerCase().includes('traffic')) mappedChallenge = 'Low website traffic';
      else if (challenge.toLowerCase().includes('conversion')) mappedChallenge = 'Low conversion rate';
      else if (challenge.toLowerCase().includes('acquisition') || challenge.toLowerCase().includes('cac')) mappedChallenge = 'High customer acquisition cost';
      else if (challenge.toLowerCase().includes('inconsistent sales')) mappedChallenge = 'Inconsistent sales';
      else if (challenge.toLowerCase().includes('ad performance') || challenge.toLowerCase().includes('poor ad')) mappedChallenge = 'Poor ad performance';
      else if (challenge.toLowerCase().includes('time') || challenge.toLowerCase().includes('resource')) mappedChallenge = 'Lack of time / resources';
      else if (challenge.toLowerCase().includes('not sure')) mappedChallenge = 'Not sure what works';
      
      fieldPairs.push(['entry.1281264565', mappedChallenge]);
    });

    // Technique 1: Create hidden iframe & HTML form to submit seamlessly with browser session
    if (typeof document !== 'undefined') {
      const iframeName = `gform_iframe_${Date.now()}`;
      const iframe = document.createElement('iframe');
      iframe.name = iframeName;
      iframe.id = iframeName;
      iframe.style.display = 'none';
      iframe.style.position = 'absolute';
      iframe.style.left = '-9999px';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.target = iframeName;
      form.action = GOOGLE_FORM_RESPONSE_URL;
      form.method = 'POST';
      form.style.display = 'none';

      fieldPairs.forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      // Clean up after 10s
      setTimeout(() => {
        try {
          document.body.removeChild(form);
          document.body.removeChild(iframe);
        } catch {}
      }, 10000);
    }

    // Technique 2: Also send background fetch
    const urlParams = new URLSearchParams();
    fieldPairs.forEach(([k, v]) => urlParams.append(k, v));
    fetch(GOOGLE_FORM_RESPONSE_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlParams.toString()
    }).catch(() => {});

    return { success: true };
  } catch (err: any) {
    console.error('Failed submitting to Google Form:', err);
    return { success: false, error: err.message };
  }
};

// Append a single lead row to Google Sheet
export const appendLeadToGoogleSheet = async (
  lead: AuditSubmissionRecord,
  token?: string
): Promise<{ success: boolean; sheetUrl?: string; error?: string }> => {
  try {
    let activeToken = token || getAccessToken();
    
    if (!activeToken) {
      // Save locally as pending sync
      return { 
        success: false, 
        error: 'Google authentication required to sync directly to Google Sheets.' 
      };
    }

    const { id: spreadsheetId, url, targetSheetTitle } = await getOrCreateSpreadsheet(activeToken);

    const formattedDate = new Date(lead.timestamp).toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const fullPhone = `${lead.phoneCode || ''} ${lead.phone || ''}`.trim();
    const challengesList = Array.isArray(lead.challenges) ? lead.challenges.join(', ') : (lead.challenges || '');

    const rowValues = [
      formattedDate,
      lead.id || `AUDIT-${Date.now()}`,
      lead.fullName || '',
      lead.businessName || '',
      lead.email || '',
      fullPhone,
      lead.website || 'N/A',
      lead.industry || 'Not specified',
      lead.primaryGoal || '',
      challengesList || 'None specified',
      lead.marketingBudget || 'Not specified',
      lead.referralSource || 'Website Form',
      lead.additionalNotes || '',
      'Pending Review'
    ];

    const tabName = targetSheetTitle ? `'${targetSheetTitle}'!A:N:append` : 'A:N:append';

    const appendRes = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${tabName}?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${activeToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          values: [rowValues]
        })
      }
    );

    if (!appendRes.ok) {
      // Retry with simple fallback range 'A:N'
      const fallbackRes = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:N:append?valueInputOption=USER_ENTERED`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${activeToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            values: [rowValues]
          })
        }
      );

      if (!fallbackRes.ok) {
        const errText = await fallbackRes.text();
        throw new Error(`Google Sheets append failed: ${errText}`);
      }
    }

    // Mark as synced locally
    const leads = getLocalAuditLeads();
    const updated = leads.map(l => l.id === lead.id ? { ...l, syncedToGoogleSheet: true, sheetId: spreadsheetId } : l);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}

    return {
      success: true,
      sheetUrl: url
    };
  } catch (err: any) {
    console.error('Error appending to Google Sheet:', err);
    return {
      success: false,
      error: err.message || 'Failed to append to Google Sheet'
    };
  }
};

// ==========================================
// CUSTOM PACKAGE LEADS & INVOICE SHEET SYNC
// Target Tab: "Custom Package Leads" (gid: 1225199164)
// ==========================================

export interface CustomPackageLeadRecord {
  id?: string;
  timestamp: string;
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  website?: string;
  industry?: string;
  primaryGoal?: string;
  selectedServices: string[];
  serviceCount: number;
  monthlyTotal: number;
  setupFeeTotal: number;
  notes?: string;
  status: string;
  syncedToGoogleSheet?: boolean;
}

const CUSTOM_PACKAGE_STORAGE_KEY = 'aceso_custom_package_leads';
export const CUSTOM_PACKAGE_TAB_NAME = 'Custom Package Leads';
export const CUSTOM_PACKAGE_GID = '1225199164';

export const getLocalCustomPackageLeads = (): CustomPackageLeadRecord[] => {
  try {
    const raw = localStorage.getItem(CUSTOM_PACKAGE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveLocalCustomPackageLead = (record: CustomPackageLeadRecord): CustomPackageLeadRecord => {
  const leads = getLocalCustomPackageLeads();
  const newRecord: CustomPackageLeadRecord = {
    ...record,
    id: record.id || `INV-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
    timestamp: record.timestamp || new Date().toISOString()
  };
  leads.unshift(newRecord);
  try {
    localStorage.setItem(CUSTOM_PACKAGE_STORAGE_KEY, JSON.stringify(leads));
  } catch (e) {
    console.error('Failed to save custom package lead locally:', e);
  }
  return newRecord;
};

// Submit Custom Package Lead directly to Google Sheet tab "Custom Package Leads"
export const submitCustomPackageLeadToGoogleSheet = async (
  record: CustomPackageLeadRecord,
  token?: string
): Promise<{ success: boolean; sheetUrl?: string; error?: string }> => {
  try {
    // 1. Save locally first
    const savedRecord = saveLocalCustomPackageLead(record);

    // 2. Redundancy: Send payload to Google Apps Script Web App
    const scriptPayload = {
      type: 'custom_package_lead',
      tabName: CUSTOM_PACKAGE_TAB_NAME,
      gid: CUSTOM_PACKAGE_GID,
      id: savedRecord.id,
      timestamp: savedRecord.timestamp,
      businessName: savedRecord.businessName,
      contactName: savedRecord.contactName,
      email: savedRecord.email,
      phone: savedRecord.phone,
      website: savedRecord.website || 'N/A',
      industry: savedRecord.industry || 'Not specified',
      primaryGoal: savedRecord.primaryGoal || 'Custom Package',
      selectedServices: savedRecord.selectedServices.join(', '),
      serviceCount: savedRecord.serviceCount,
      monthlyTotal: `KSh ${savedRecord.monthlyTotal.toLocaleString()}`,
      setupFeeTotal: `KSh ${savedRecord.setupFeeTotal.toLocaleString()}`,
      notes: savedRecord.notes || '',
      status: savedRecord.status || 'Invoice Generated'
    };

    try {
      await fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(scriptPayload),
        mode: 'no-cors'
      });
    } catch (e) {
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(scriptPayload)], { type: 'text/plain;charset=utf-8' });
        navigator.sendBeacon(GOOGLE_APPS_SCRIPT_WEBAPP_URL, blob);
      }
    }

    // 3. Direct Google Sheets API v4 Append if authenticated
    let activeToken = token || getAccessToken();
    const spreadsheetId = TARGET_SPREADSHEET_ID;
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=${CUSTOM_PACKAGE_GID}`;

    if (activeToken) {
      const formattedDate = new Date(savedRecord.timestamp).toLocaleString('en-KE', {
        timeZone: 'Africa/Nairobi',
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      const rowValues = [
        formattedDate,
        savedRecord.id || `INV-${Date.now()}`,
        savedRecord.businessName,
        savedRecord.contactName,
        savedRecord.email,
        savedRecord.phone,
        savedRecord.website || 'N/A',
        savedRecord.industry || 'Not specified',
        savedRecord.primaryGoal || 'Custom Package Builder',
        savedRecord.selectedServices.join(', '),
        savedRecord.serviceCount,
        `KSh ${savedRecord.monthlyTotal.toLocaleString()}`,
        `KSh ${savedRecord.setupFeeTotal.toLocaleString()}`,
        savedRecord.notes || '',
        savedRecord.status || 'Invoice Generated'
      ];

      // Ensure tab exists or append directly
      const range = `'${CUSTOM_PACKAGE_TAB_NAME}'!A:O:append?valueInputOption=USER_ENTERED`;
      const appendRes = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${activeToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            values: [rowValues]
          })
        }
      );

      if (!appendRes.ok) {
        // Attempt creating header / verifying sheet tab if needed
        try {
          await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${activeToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              requests: [
                {
                  addSheet: {
                    properties: {
                      title: CUSTOM_PACKAGE_TAB_NAME,
                      sheetId: parseInt(CUSTOM_PACKAGE_GID, 10) || undefined
                    }
                  }
                }
              ]
            })
          });

          // Re-attempt append
          await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${activeToken}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                values: [rowValues]
              })
            }
          );
        } catch {}
      }
    }

    return {
      success: true,
      sheetUrl
    };
  } catch (err: any) {
    console.error('Error submitting custom package lead:', err);
    return {
      success: false,
      error: err.message || 'Failed to submit custom package lead'
    };
  }
};

