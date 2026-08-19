// Pure lightweight Google Sheet submission service
// Target Sheet URL: https://docs.google.com/spreadsheets/d/1zEPEw0k0Ucs0po7nckzQxMiywFOVNxAlIGzgSCkgtJ8/edit?gid=0#gid=0

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
export const TARGET_SPREADSHEET_ID = '1zEPEw0k0Ucs0po7nckzQxMiywFOVNxAlIGzgSCkgtJ8';
export const TARGET_SHEET_GID = '0';
export const GROWTH_AUDIT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzHZx1a6BKcNwq-sYp3xSOatUvwJkVoZNtX9vkPOe8vcLhXmf9ZWiDAlmuYmkMOO7cr/exec';
export const GOOGLE_APPS_SCRIPT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwya0i8IyAh5IF_E3yFnkcevissgHB-kw25-JiPBWPtxJxOo25UBTy7qflml0VYzQkOPw/exec';
export const GOOGLE_FORM_RESPONSE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe0yrKVlIZqcvuBUVjFp9aWVexz_xZXQvCg5AajqvdSyrWCmw/formResponse';

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

// Submit lead directly to Growth Audit Google Sheet via Web App (linked to spreadsheet 1zEPEw0k0Ucs0po7nckzQxMiywFOVNxAlIGzgSCkgtJ8)
export const submitToGoogleForm = async (lead: AuditSubmissionRecord): Promise<{ success: boolean; error?: string }> => {
  try {
    const fullPhone = `${lead.phoneCode || ''} ${lead.phone || ''}`.trim();
    
    const formattedDateTime = lead.timestamp 
      ? new Date(lead.timestamp).toLocaleString('en-KE', { timeZone: 'Africa/Nairobi', dateStyle: 'medium', timeStyle: 'short' })
      : new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi', dateStyle: 'medium', timeStyle: 'short' });

    const challengesText = Array.isArray(lead.challenges) && lead.challenges.length > 0
      ? lead.challenges.join(', ')
      : '';

    const notesSummary = [
      lead.additionalNotes ? `Notes: ${lead.additionalNotes}` : '',
      lead.industry ? `Industry: ${lead.industry}` : '',
      lead.marketingBudget ? `Budget: ${lead.marketingBudget}` : '',
      lead.referralSource ? `Referral: ${lead.referralSource}` : ''
    ].filter(Boolean).join(' | ') || 'Growth Audit Request';

    const rowValues = [
      formattedDateTime,
      (lead.fullName || '').trim(),
      (lead.businessName || '').trim(),
      (lead.email || '').trim(),
      fullPhone,
      (lead.website || 'N/A').trim(),
      lead.industry || '',
      lead.primaryGoal || '',
      challengesText,
      lead.marketingBudget || '',
      lead.referralSource || '',
      lead.additionalNotes || ''
    ];

    const scriptPayload: Record<string, any> = {
      rowValues,
      values: rowValues,
      data: rowValues,
      "Submission Date and Time": formattedDateTime,
      "Timestamp": formattedDateTime,
      "Full name": (lead.fullName || '').trim(),
      "Full Name": (lead.fullName || '').trim(),
      "Business Name": (lead.businessName || '').trim(),
      "Email": (lead.email || '').trim(),
      "Email Address": (lead.email || '').trim(),
      "Phone Number": fullPhone,
      "Phone": fullPhone,
      "Website": (lead.website || 'N/A').trim(),
      "Industry": lead.industry || '',
      "Primary Goal": lead.primaryGoal || '',
      "Goal": lead.primaryGoal || '',
      "Challenges": challengesText,
      "Key Challenges": challengesText,
      "Marketing Budget": lead.marketingBudget || '',
      "Budget": lead.marketingBudget || '',
      "Referral Source": lead.referralSource || '',
      "Additional Notes": lead.additionalNotes || '',
      "Services you are interested in": lead.primaryGoal ? `${lead.primaryGoal}${challengesText ? ' (' + challengesText + ')' : ''}` : challengesText,
      "What do you need help with?": notesSummary,
      date: formattedDateTime,
      fullName: (lead.fullName || '').trim(),
      name: (lead.fullName || '').trim(),
      businessName: (lead.businessName || '').trim(),
      company: (lead.businessName || '').trim(),
      email: (lead.email || '').trim(),
      phone: fullPhone,
      phoneNumber: fullPhone,
      website: (lead.website || 'N/A').trim(),
      industry: lead.industry || '',
      primaryGoal: lead.primaryGoal || '',
      challenges: challengesText,
      marketingBudget: lead.marketingBudget || '',
      referralSource: lead.referralSource || '',
      additionalNotes: lead.additionalNotes || '',
      notes: notesSummary,
      services: lead.primaryGoal ? `${lead.primaryGoal}${challengesText ? ' (' + challengesText + ')' : ''}` : challengesText,
      message: notesSummary,
      formType: 'Growth Audit'
    };

    // Prepare URL with search parameters in case the Apps Script reads e.parameter
    const urlWithParams = new URL(GROWTH_AUDIT_WEBAPP_URL);
    urlWithParams.searchParams.set('Submission Date and Time', formattedDateTime);
    urlWithParams.searchParams.set('date', formattedDateTime);
    urlWithParams.searchParams.set('Full name', (lead.fullName || '').trim());
    urlWithParams.searchParams.set('fullName', (lead.fullName || '').trim());
    urlWithParams.searchParams.set('Business Name', (lead.businessName || '').trim());
    urlWithParams.searchParams.set('businessName', (lead.businessName || '').trim());
    urlWithParams.searchParams.set('Email', (lead.email || '').trim());
    urlWithParams.searchParams.set('email', (lead.email || '').trim());
    urlWithParams.searchParams.set('Phone Number', fullPhone);
    urlWithParams.searchParams.set('phone', fullPhone);
    urlWithParams.searchParams.set('Website', (lead.website || 'N/A').trim());
    urlWithParams.searchParams.set('website', (lead.website || 'N/A').trim());
    urlWithParams.searchParams.set('Industry', lead.industry || '');
    urlWithParams.searchParams.set('Primary Goal', lead.primaryGoal || '');
    urlWithParams.searchParams.set('Challenges', challengesText);
    urlWithParams.searchParams.set('Marketing Budget', lead.marketingBudget || '');
    urlWithParams.searchParams.set('Referral Source', lead.referralSource || '');
    urlWithParams.searchParams.set('Additional Notes', lead.additionalNotes || '');
    urlWithParams.searchParams.set('Services you are interested in', lead.primaryGoal ? `${lead.primaryGoal}${challengesText ? ' (' + challengesText + ')' : ''}` : challengesText);
    urlWithParams.searchParams.set('What do you need help with?', notesSummary);

    // Send single POST request to the dedicated Growth Audit Google Apps Script Web App
    await fetch(urlWithParams.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(scriptPayload),
      mode: 'no-cors'
    });

    return { success: true };
  } catch (err: any) {
    console.error('Failed submitting Growth Audit to Google Sheet:', err);
    return { success: false, error: err.message };
  }
};

// ==========================================
// CUSTOM PACKAGE LEADS & INVOICE SHEET SYNC
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

export const submitCustomPackageLeadToGoogleSheet = async (
  record: CustomPackageLeadRecord
): Promise<{ success: boolean; sheetUrl?: string; error?: string }> => {
  try {
    const savedRecord = saveLocalCustomPackageLead(record);

    const fullPhone = savedRecord.phone;
    const servicesStr = savedRecord.selectedServices.join(', ');
    const notesStr = `Monthly: KSh ${savedRecord.monthlyTotal.toLocaleString()} | Setup: KSh ${savedRecord.setupFeeTotal.toLocaleString()} | ${savedRecord.notes || ''}`;

    const fieldPairs: Array<[string, string]> = [
      ['entry.1668860375', savedRecord.contactName],
      ['entry.433709509', savedRecord.businessName],
      ['entry.1766097410', savedRecord.email],
      ['entry.1871152956', fullPhone],
      ['entry.1619825275', savedRecord.website || 'N/A'],
      ['entry.724343250', savedRecord.industry || 'Other SME'],
      ['entry.1931951336', 'Custom Package Quote'],
      ['entry.1288868283', `KSh ${savedRecord.monthlyTotal.toLocaleString()}`],
      ['entry.1595124604', 'Custom Package Calculator'],
      ['entry.2011061417', notesStr],
      ['fvv', '1'],
      ['pageHistory', '0']
    ];

    savedRecord.selectedServices.forEach(s => {
      fieldPairs.push(['entry.1281264565', s]);
    });

    if (typeof document !== 'undefined') {
      const iframeName = `gform_pkg_${Date.now()}`;
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

      setTimeout(() => {
        try {
          document.body.removeChild(form);
          document.body.removeChild(iframe);
        } catch {}
      }, 6000);
    }

    try {
      const urlParams = new URLSearchParams();
      fieldPairs.forEach(([k, v]) => urlParams.append(k, v));
      await fetch(GOOGLE_FORM_RESPONSE_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlParams.toString()
      });
    } catch {}

    return {
      success: true,
      sheetUrl: `https://docs.google.com/spreadsheets/d/${TARGET_SPREADSHEET_ID}/edit?resourcekey=&gid=${TARGET_SHEET_GID}#gid=${TARGET_SHEET_GID}`
    };
  } catch (err: any) {
    console.error('Error submitting custom package lead:', err);
    return {
      success: false,
      error: err.message || 'Failed to submit custom package lead'
    };
  }
};

// ==========================================
// CONTACT US FORM SHEET SYNC
// Target Sheet URL: https://docs.google.com/spreadsheets/d/1zEPEw0k0Ucs0po7nckzQxMiywFOVNxAlIGzgSCkgtJ8/edit?gid=0#gid=0
// Columns:
// A: Submission Date and Time
// B: Full name
// C: Email
// D: Phone Number
// E: Services you are interested in
// F: What do you need help with?
// ==========================================

export interface ContactMessageRecord {
  submissionDateTime?: string;
  fullName: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

export const CONTACT_SPREADSHEET_ID = '1zEPEw0k0Ucs0po7nckzQxMiywFOVNxAlIGzgSCkgtJ8';
export const CONTACT_SHEET_GID = '0';
export const CONTACT_SHEET_URL = `https://docs.google.com/spreadsheets/d/${CONTACT_SPREADSHEET_ID}/edit?gid=${CONTACT_SHEET_GID}#gid=${CONTACT_SHEET_GID}`;

const CONTACT_STORAGE_KEY = 'aceso_contact_messages';

export const getLocalContactMessages = (): ContactMessageRecord[] => {
  try {
    const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveLocalContactMessage = (record: ContactMessageRecord): ContactMessageRecord => {
  const messages = getLocalContactMessages();
  const formattedDate = record.submissionDateTime || new Date().toLocaleString('en-KE', {
    timeZone: 'Africa/Nairobi',
    dateStyle: 'medium',
    timeStyle: 'short'
  });
  
  const newRecord: ContactMessageRecord = {
    ...record,
    submissionDateTime: formattedDate
  };
  messages.unshift(newRecord);
  try {
    localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(messages));
  } catch (e) {
    console.error('Failed to save contact message locally:', e);
  }
  return newRecord;
};

export const submitContactMessageToGoogleSheet = async (
  record: ContactMessageRecord
): Promise<{ success: boolean; sheetUrl: string; error?: string }> => {
  const savedRecord = saveLocalContactMessage(record);
  const sheetUrl = CONTACT_SHEET_URL;

  const formattedDateTime = savedRecord.submissionDateTime || new Date().toLocaleString('en-KE', {
    timeZone: 'Africa/Nairobi',
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  const servicesText = Array.isArray(savedRecord.services) && savedRecord.services.length > 0
    ? savedRecord.services.join(', ')
    : '';

  const nameVal = savedRecord.fullName.trim();
  const emailVal = savedRecord.email.trim();
  const phoneVal = savedRecord.phone.trim();
  const messageVal = savedRecord.message.trim();

  // Exactly 6 columns (A through F)
  const scriptPayload: Record<string, any> = {
    "Submission Date and Time": formattedDateTime,
    "Full name": nameVal,
    "Email": emailVal,
    "Phone Number": phoneVal,
    "Services you are interested in": servicesText,
    "What do you need help with?": messageVal,
    date: formattedDateTime,
    fullName: nameVal,
    name: nameVal,
    email: emailVal,
    phone: phoneVal,
    phoneNumber: phoneVal,
    services: servicesText,
    message: messageVal
  };

  try {
    // Exactly ONE single POST to Google Apps Script Web App
    await fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(scriptPayload),
      mode: 'no-cors'
    });
  } catch (err) {
    console.warn('Web App fetch error:', err);
  }

  return { success: true, sheetUrl };
};
