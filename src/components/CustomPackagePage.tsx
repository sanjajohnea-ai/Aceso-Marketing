import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  ArrowRight, 
  Check, 
  X, 
  Info, 
  HelpCircle, 
  ChevronRight,
  Globe,
  FileText,
  TrendingUp,
  Mail,
  MessageSquare,
  Users,
  Settings2,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  BarChart3,
  Edit3,
  Video,
  Sparkles,
  Layers,
  PhoneCall,
  Store,
  Star,
  Tag,
  Download,
  MessageCircle,
  Briefcase,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toast, ToastMessage } from './Toast';
import { 
  submitCustomPackageLeadToGoogleSheet, 
  CustomPackageLeadRecord,
  saveLocalAuditLead, 
  submitLeadToGoogleWebApp, 
  AuditSubmissionRecord 
} from '../lib/googleSheets';
import { generateAndDownloadInvoicePDF } from '../lib/pdfInvoice';

interface CustomPackagePageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onNavigate?: (sectionId: string) => void;
}

export interface CustomServiceDef {
  id: string;
  name: string;
  category: 'social-media' | 'advertising' | 'content' | 'website' | 'lead-gen' | 'advanced';
  price: number;
  setupFee?: number;
  description: string;
  isPopular?: boolean;
  iconType: 'meta-combo' | 'tiktok' | 'community' | 'meta-ads' | 'google-ads' | 'content-pen' | 'short-video' | 'website-globe' | 'landing-page' | 'gbp' | 'whatsapp' | 'email-mail' | 'seo-chart' | 'automation-cog';
}

export type CustomServiceItem = CustomServiceDef;

export interface BusinessInfo {
  businessName: string;
  industry: string;
  website: string;
  primaryGoal: string;
  contactName: string;
  email: string;
  phone: string;
  notes: string;
}

const customServicesData: CustomServiceDef[] = [
  // 1. SOCIAL MEDIA
  {
    id: 'meta-management',
    name: 'Meta (Facebook & Instagram) Management',
    category: 'social-media',
    price: 25000,
    setupFee: 10000,
    description: 'Content creation, posting, community management & growth',
    isPopular: true,
    iconType: 'meta-combo'
  },
  {
    id: 'tiktok-management',
    name: 'TikTok Management',
    category: 'social-media',
    price: 20000,
    setupFee: 10000,
    description: 'Content strategy, video creation, posting & growth',
    isPopular: true,
    iconType: 'tiktok'
  },
  {
    id: 'community-management',
    name: 'Community Management',
    category: 'social-media',
    price: 15000,
    setupFee: 5000,
    description: 'Respond to comments, DMs & customer enquiries',
    isPopular: false,
    iconType: 'community'
  },

  // 2. ADVERTISING
  {
    id: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    category: 'advertising',
    price: 30000,
    setupFee: 10000,
    description: 'Targeted ads to reach more customers and generate leads',
    isPopular: true,
    iconType: 'meta-ads'
  },
  {
    id: 'tiktok-ads',
    name: 'TikTok Ads',
    category: 'advertising',
    price: 20000,
    setupFee: 10000,
    description: 'Reach new audiences and drive engagement with TikTok ads',
    isPopular: false,
    iconType: 'tiktok'
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'advertising',
    price: 25000,
    setupFee: 10000,
    description: 'Get discovered on Google Search and Maps',
    isPopular: true,
    iconType: 'google-ads'
  },

  // 3. CONTENT & CREATIVE
  {
    id: 'content-creation',
    name: 'Content Creation',
    category: 'content',
    price: 15000,
    setupFee: 5000,
    description: 'High-quality graphics, captions and branded content',
    isPopular: false,
    iconType: 'content-pen'
  },
  {
    id: 'short-form-video',
    name: 'Short-form Video (Reels & TikToks)',
    category: 'content',
    price: 20000,
    setupFee: 8000,
    description: 'Engaging short videos that drive views and engagement',
    isPopular: false,
    iconType: 'short-video'
  },

  // 4. WEBSITE & PRESENCE
  {
    id: 'business-website',
    name: 'Business Website',
    category: 'website',
    price: 35000,
    setupFee: 15000,
    description: 'Professional, mobile-friendly website that converts visitors',
    isPopular: false,
    iconType: 'website-globe'
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    category: 'website',
    price: 15000,
    setupFee: 8000,
    description: 'High-converting landing pages for campaigns',
    isPopular: false,
    iconType: 'landing-page'
  },
  {
    id: 'google-business-profile',
    name: 'Google Business Profile Setup',
    category: 'website',
    price: 10000,
    setupFee: 5000,
    description: 'Optimize and manage your Google Business Profile',
    isPopular: false,
    iconType: 'gbp'
  },

  // 5. LEAD GENERATION & AUTOMATION
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business Setup',
    category: 'lead-gen',
    price: 15000,
    setupFee: 5000,
    description: 'Professional setup with automated greetings & quick replies',
    isPopular: false,
    iconType: 'whatsapp'
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    category: 'lead-gen',
    price: 15000,
    setupFee: 5000,
    description: 'Email campaigns that nurture leads and increase sales',
    isPopular: false,
    iconType: 'email-mail'
  },

  // 6. ADVANCED GROWTH (OPTIONAL)
  {
    id: 'seo',
    name: 'SEO (Search Engine Optimization)',
    category: 'advanced',
    price: 25000,
    setupFee: 10000,
    description: 'Improve rankings and get more organic traffic',
    isPopular: false,
    iconType: 'seo-chart'
  },
  {
    id: 'marketing-automation',
    name: 'Marketing Automation',
    category: 'advanced',
    price: 20000,
    setupFee: 10000,
    description: 'Automate follow-ups and save time with smart workflows',
    isPopular: false,
    iconType: 'automation-cog'
  }
];

export const CustomPackagePage: React.FC<CustomPackagePageProps> = ({ 
  onBackToHome, 
  onRequestAudit,
  onNavigate
}) => {
  const handleNav = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else if (sectionId === 'home') {
      onBackToHome();
    } else if (sectionId === 'packages') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBackToHome();
    }
  };

  // Navigation step state: 1: Choose Services, 2: Business Details & Submit
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  // Default to empty selection so user can choose their desired services from scratch
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);

  // Form State
  const [businessInfo, setBusinessInfo] = useState({
    businessName: '',
    industry: 'Technology & SaaS',
    website: '',
    primaryGoal: 'Generate more leads',
    contactName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const validateEmail = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Email address is required';
    }
    if (!trimmed.includes('@')) {
      return 'Invalid email address: Missing "@" symbol';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return 'Invalid email address (e.g. name@company.co.ke)';
    }
    return '';
  };

  const validatePhone = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Phone number is required';
    }
    if (trimmed.length < 9) {
      return 'Please enter a valid 9 or 10 digit phone number';
    }
    return '';
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Toggle single service
  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      setSelectedServiceIds(selectedServiceIds.filter(item => item !== id));
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  // Toggle Category
  const toggleCategory = (categoryKey: CustomServiceDef['category']) => {
    const catServices = customServicesData.filter(s => s.category === categoryKey);
    const catIds = catServices.map(s => s.id);
    const allCatSelected = catIds.every(id => selectedServiceIds.includes(id));

    if (allCatSelected) {
      // Deselect all in category
      setSelectedServiceIds(selectedServiceIds.filter(id => !catIds.includes(id)));
    } else {
      // Select all in category
      const unique = Array.from(new Set([...selectedServiceIds, ...catIds]));
      setSelectedServiceIds(unique);
    }
  };

  // Selected Services objects
  const selectedServices = useMemo(() => {
    return customServicesData.filter(s => selectedServiceIds.includes(s.id));
  }, [selectedServiceIds]);

  // Subtotal calculation
  const subtotal = useMemo(() => {
    return selectedServices.reduce((sum, s) => sum + s.price, 0);
  }, [selectedServices]);

  const monthlyTotal = subtotal;

  // Setup fee total
  const setupFeeTotal = useMemo(() => {
    return selectedServices.reduce((sum, s) => sum + (s.setupFee || 0), 0);
  }, [selectedServices]);

  // Render Service Brand Icon
  const renderServiceIcon = (type: CustomServiceDef['iconType']) => {
    switch (type) {
      case 'meta-combo':
        return (
          <div className="flex items-center gap-1 shrink-0">
            <div className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              f
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF512F] via-[#DD2476] to-[#7928CA] text-white flex items-center justify-center shadow-xs">
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
          </div>
        );
      case 'tiktok':
        return (
          <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center shrink-0 shadow-xs relative overflow-hidden">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.49V8.62a8.28 8.28 0 0 0 3.91 1.07V6.69z"/>
            </svg>
          </div>
        );
      case 'community':
        return (
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/80">
            <MessageSquare className="w-4 h-4" />
          </div>
        );
      case 'meta-ads':
        return (
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0081FB] flex items-center justify-center shrink-0 border border-blue-100">
            <svg className="w-4 h-4 fill-[#0081FB]" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.3 12.3c-.9 0-1.6-.4-2.1-1.1-.3-.4-.5-.9-.6-1.4-.3.9-.9 1.8-1.9 2.2-.5.2-1.1.3-1.6.3-1.9 0-3.1-1.4-3.1-3.3 0-2 1.3-3.4 3.2-3.4 1 0 1.9.4 2.4 1.2.3.4.5.9.6 1.4.3-.9.9-1.8 1.9-2.2.5-.2 1.1-.3 1.6-.3 1.9 0 3.1 1.4 3.1 3.3 0 1.9-1.2 3.3-3.1 3.3z" />
            </svg>
          </div>
        );
      case 'google-ads':
        return (
          <div className="w-7 h-7 rounded-lg bg-amber-50/80 flex items-center justify-center shrink-0 border border-amber-100">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M12.24 10.285L6.96 1L1 11.33h5.28l5.96-1.045z"/>
              <path fill="#FBBC05" d="M12.24 10.285l5.28-9.285 5.96 10.33h-5.28l-5.96-1.045z"/>
              <path fill="#34A853" d="M17.52 10.285L12.24 19.57 6.96 10.285h10.56z"/>
            </svg>
          </div>
        );
      case 'content-pen':
        return (
          <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <Edit3 className="w-4 h-4" />
          </div>
        );
      case 'short-video':
        return (
          <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
            <Video className="w-4 h-4" />
          </div>
        );
      case 'website-globe':
        return (
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <Globe className="w-4 h-4" />
          </div>
        );
      case 'landing-page':
        return (
          <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </div>
        );
      case 'gbp':
        return (
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 font-bold text-xs">
            <Store className="w-4 h-4 text-blue-600" />
          </div>
        );
      case 'whatsapp':
        return (
          <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
            <PhoneCall className="w-3.5 h-3.5" />
          </div>
        );
      case 'email-mail':
        return (
          <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4" />
          </div>
        );
      case 'seo-chart':
        return (
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
            <TrendingUp className="w-4 h-4" />
          </div>
        );
      case 'automation-cog':
        return (
          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <Settings2 className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
        );
    }
  };

  // Submit Handler
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email (must contain @)
    const emailErr = validateEmail(businessInfo.email);
    if (emailErr) {
      setEmailError(emailErr);
      return;
    }

    // Validate phone (numeric, 9-10 digits)
    const phoneErr = validatePhone(businessInfo.phone);
    if (phoneErr) {
      setPhoneError(phoneErr);
      return;
    }

    setIsSubmitting(true);
    
    const formattedPhone = `+254 ${businessInfo.phone.trim()}`;

    // 1. Prepare custom package lead record targeting "Custom Package Leads" sheet tab
    const customLead: CustomPackageLeadRecord = {
      timestamp: new Date().toISOString(),
      businessName: businessInfo.businessName.trim() || 'Custom Package SME',
      contactName: businessInfo.contactName.trim() || 'Custom Package Lead',
      email: businessInfo.email.trim(),
      phone: formattedPhone,
      website: businessInfo.website.trim(),
      industry: businessInfo.industry || 'Other SME',
      primaryGoal: businessInfo.primaryGoal || 'Custom Marketing Package',
      selectedServices: selectedServices.map(s => s.name),
      serviceCount: selectedServices.length,
      monthlyTotal: monthlyTotal,
      setupFeeTotal: setupFeeTotal,
      notes: businessInfo.notes?.trim() || '',
      status: 'Invoice Generated / New Lead'
    };

    // 2. Submit to Google Sheets under "Custom Package Leads" tab (and save locally)
    submitCustomPackageLeadToGoogleSheet(customLead).catch(console.error);

    // 3. Backward compatibility for audit leads storage
    const leadRecord: AuditSubmissionRecord = {
      timestamp: customLead.timestamp,
      fullName: customLead.contactName,
      businessName: customLead.businessName,
      email: customLead.email,
      phoneCode: '+254',
      phone: businessInfo.phone.trim(),
      website: customLead.website,
      industry: customLead.industry,
      primaryGoal: `Custom Package: ${selectedServices.map(s => s.name).join(', ')}`,
      challenges: selectedServices.map(s => s.name),
      marketingBudget: `KSh ${monthlyTotal.toLocaleString()} / mo (Setup: KSh ${setupFeeTotal.toLocaleString()})`,
      referralSource: 'Custom Package Builder',
      additionalNotes: customLead.notes || `Selected ${selectedServices.length} services: ${selectedServices.map(s => s.name).join(', ')}`,
      status: 'Pending Audit'
    };
    saveLocalAuditLead(leadRecord);
    submitLeadToGoogleWebApp(leadRecord).catch(console.error);

    setToast({
      type: 'success',
      title: 'Proposal & Invoice Ready!',
      message: `Your customized package for ${businessInfo.businessName || 'your business'} is ready.`
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col selection:bg-blue-600 selection:text-white font-sans">
      
      {/* Main Website Header Navigation Bar */}
      <Navbar 
        activeSection="packages"
        onRequestAudit={onRequestAudit}
        onNavigate={handleNav}
      />

      {/* Multi-Step Stepper Subheader */}
      <div className="bg-white border-b border-slate-200 relative z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-center">

          {/* Stepper Progress Indicator */}
          <div className="flex items-center gap-4 sm:gap-8 text-xs">
            
            {/* Step 1 */}
            <div 
              onClick={() => setCurrentStep(1)}
              className="flex items-center gap-2.5 cursor-pointer relative pb-1 group"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                currentStep === 1 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
              }`}>
                1
              </div>
              <div className="text-left hidden sm:block">
                <div className={`font-bold leading-tight ${currentStep === 1 ? 'text-blue-600' : 'text-slate-700'}`}>
                  Choose Services
                </div>
                <div className="text-[11px] text-slate-400">
                  Build your package
                </div>
              </div>
              {currentStep === 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </div>

            <div className="w-4 sm:w-8 h-px bg-slate-200" />

            {/* Step 2 */}
            <div 
              onClick={() => selectedServices.length > 0 && setCurrentStep(2)}
              className={`flex items-center gap-2.5 relative pb-1 ${
                selectedServices.length > 0 ? 'cursor-pointer group' : 'opacity-60 cursor-not-allowed'
              }`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                currentStep === 2 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
              }`}>
                2
              </div>
              <div className="text-left hidden sm:block">
                <div className={`font-bold leading-tight ${currentStep === 2 ? 'text-blue-600' : 'text-slate-700'}`}>
                  Business Details
                </div>
                <div className="text-[11px] text-slate-400">
                  Tell us about your business
                </div>
              </div>
              {currentStep === 2 && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className={`flex-1 max-w-7xl w-full mx-auto ${currentStep === 2 ? 'py-3 sm:py-5 px-4 sm:px-6' : 'py-8 sm:py-10 px-4 sm:px-6 lg:px-8'}`}>
        
        {/* STEP 1: CHOOSE SERVICES (Identical to reference screenshot) */}
        {currentStep === 1 && (
          <div className="space-y-8">
            
            {/* Header Title & Subtitle */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Choose the services you need
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-1.5">
                  Select the services that will help your business grow. You can add or remove anytime.
                </p>
              </div>
            </div>

            {/* Two Column Grid: Left 6 Categories (2x3) + Right Static Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: 6 Service Category Cards (8 cols on desktop) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                
                {/* 1. SOCIAL MEDIA */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="mb-4 pb-2 border-b border-slate-100">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                        SOCIAL MEDIA
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {customServicesData.filter(s => s.category === 'social-media').map((srv) => {
                        const isChecked = selectedServiceIds.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className="flex items-start gap-3 cursor-pointer group select-none"
                          >
                            <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isChecked ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            {renderServiceIcon(srv.iconType)}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                                  {srv.name}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                {srv.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 2. ADVERTISING */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="mb-4 pb-2 border-b border-slate-100">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
                        ADVERTISING
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {customServicesData.filter(s => s.category === 'advertising').map((srv) => {
                        const isChecked = selectedServiceIds.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className="flex items-start gap-3 cursor-pointer group select-none"
                          >
                            <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isChecked ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            {renderServiceIcon(srv.iconType)}
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors block">
                                {srv.name}
                              </span>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                {srv.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3. CONTENT & CREATIVE */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="mb-4 pb-2 border-b border-slate-100">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-600">
                        CONTENT & CREATIVE
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {customServicesData.filter(s => s.category === 'content').map((srv) => {
                        const isChecked = selectedServiceIds.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className="flex items-start gap-3 cursor-pointer group select-none"
                          >
                            <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isChecked ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            {renderServiceIcon(srv.iconType)}
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors block">
                                {srv.name}
                              </span>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                {srv.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 4. WEBSITE & PRESENCE */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="mb-4 pb-2 border-b border-slate-100">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-500">
                        WEBSITE & PRESENCE
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {customServicesData.filter(s => s.category === 'website').map((srv) => {
                        const isChecked = selectedServiceIds.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className="flex items-start gap-3 cursor-pointer group select-none"
                          >
                            <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isChecked ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            {renderServiceIcon(srv.iconType)}
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors block">
                                {srv.name}
                              </span>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                {srv.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 5. LEAD GENERATION & AUTOMATION */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="mb-4 pb-2 border-b border-slate-100">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                        LEAD GENERATION & AUTOMATION
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {customServicesData.filter(s => s.category === 'lead-gen').map((srv) => {
                        const isChecked = selectedServiceIds.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className="flex items-start gap-3 cursor-pointer group select-none"
                          >
                            <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isChecked ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            {renderServiceIcon(srv.iconType)}
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors block">
                                {srv.name}
                              </span>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                {srv.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 6. ADVANCED GROWTH (OPTIONAL) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="mb-4 pb-2 border-b border-slate-100">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-rose-600">
                        ADVANCED GROWTH (OPTIONAL)
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {customServicesData.filter(s => s.category === 'advanced').map((srv) => {
                        const isChecked = selectedServiceIds.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className="flex items-start gap-3 cursor-pointer group select-none"
                          >
                            <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isChecked ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            {renderServiceIcon(srv.iconType)}
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors block">
                                {srv.name}
                              </span>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                {srv.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: "Your Selected Package" Summary Sidebar (4 cols on desktop - sticky on scroll) */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-5">
                
                {/* Selected Package Card */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm shadow-slate-200/50 hover:shadow-md transition-shadow">
                  
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-black text-slate-900 tracking-tight">
                      Your Selected Package
                    </h2>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/80">
                      {selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'}
                    </span>
                  </div>

                  {/* Selected Services Itemized List */}
                  <div className="space-y-2.5 mb-5 max-h-[340px] overflow-y-auto pr-1">
                    {selectedServices.length === 0 ? (
                      <div className="text-center py-8 text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl px-4">
                        No services selected yet. Pick services on the left to calculate your monthly investment.
                      </div>
                    ) : (
                      selectedServices.map((srv) => (
                        <div key={srv.id} className="flex items-center justify-between gap-3 text-xs sm:text-sm bg-slate-50/80 hover:bg-slate-50 p-2.5 rounded-xl border border-slate-100 group transition-colors">
                          <div className="flex items-center gap-2.5 min-w-0">
                            {renderServiceIcon(srv.iconType)}
                            <div className="min-w-0">
                              <div className="font-bold text-slate-800 truncate text-xs">
                                {srv.name}
                              </div>
                              <div className="text-slate-500 text-[11px]">
                                KSh {srv.price.toLocaleString()} <span className="text-slate-400">/mo</span>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleService(srv.id)}
                            className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1 rounded-lg border border-slate-200/80 transition-colors cursor-pointer shrink-0"
                            title="Remove service"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Monthly Total */}
                  <div className="pt-4 border-t border-slate-100 mb-5 flex items-baseline justify-between">
                    <span className="text-sm font-bold text-slate-900">
                      Monthly Total
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-slate-900 tracking-tight">
                        KSh {monthlyTotal.toLocaleString()}
                      </span>
                      <span className="text-xs font-normal text-slate-500 ml-1">/mo</span>
                    </div>
                  </div>

                  {/* Main CTA */}
                  <button
                    type="button"
                    disabled={selectedServices.length === 0}
                    onClick={() => setCurrentStep(2)}
                    className="w-full py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/15 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Get My Custom Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Trust Micro-Bullets */}
                  <div className="mt-4 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Free strategy call included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>No obligation • Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Setup fee may apply for some services</span>
                    </div>
                  </div>

                </div>

                {/* Need Help Choosing Card */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Need help choosing?
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Book a free strategy call and we'll recommend the best services for you.
                    </p>
                    <a
                      href="https://calendar.app.google/i9YT96iwcduZDF8Q8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 mt-2.5 cursor-pointer"
                    >
                      <span>Book Free Call</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* STEP 2: BUSINESS DETAILS & SUBMISSION */}
        {currentStep === 2 && (
          <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl p-4 sm:p-6 lg:p-7 border border-slate-200 shadow-2xs animate-in fade-in duration-150">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3.5 border-b border-slate-100 gap-2">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 block mb-0.5">
                  STEP 2 OF 2
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Business Details & Contact Info
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold">Total Monthly:</span>
                <span className="text-lg sm:text-xl font-black text-blue-600">
                  KSh {monthlyTotal.toLocaleString()}/mo
                </span>
              </div>
            </div>

            {/* Configured Package Recap - Compact Bar */}
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 mb-4 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="font-bold text-slate-800 shrink-0 text-xs">
                  {selectedServices.length} Selected Services:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedServices.map(s => (
                    <span key={s.id} className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 inline-flex items-center gap-1.5 shadow-2xs">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                      <span>{s.name}</span>
                      <span className="text-slate-400 font-normal">· KSh {s.price.toLocaleString()}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 text-xs text-slate-500 font-medium md:text-right hidden sm:block">
                No lock-in contracts • Cancel anytime
              </div>
            </div>

            <form onSubmit={handleFinalSubmit} className="space-y-3.5">
              
              {/* Row 1: Business Name, Industry, Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={businessInfo.businessName}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, businessName: e.target.value })}
                    placeholder="e.g. Acme Interiors Ltd"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Industry / Niche
                  </label>
                  <select
                    value={businessInfo.industry}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, industry: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="Technology & SaaS">Technology & SaaS</option>
                    <option value="Home & Living">Home & Living</option>
                    <option value="Healthcare & Wellness">Healthcare & Wellness</option>
                    <option value="Real Estate & Property">Real Estate & Property</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="E-commerce & Retail">E-commerce & Retail</option>
                    <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                    <option value="Manufacturing & Logistics">Manufacturing & Logistics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Kamau"
                    value={businessInfo.contactName}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, contactName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Work Email, Phone/WhatsApp, Primary Goal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="john@acme.co.ke"
                      value={businessInfo.email}
                      onChange={(e) => {
                        const val = e.target.value.trim();
                        setBusinessInfo({ ...businessInfo, email: val });
                        if (emailError) {
                          setEmailError(validateEmail(val));
                        }
                      }}
                      onBlur={() => {
                        if (businessInfo.email) {
                          setEmailError(validateEmail(businessInfo.email));
                        }
                      }}
                      className={`w-full px-3.5 py-2 rounded-xl border ${emailError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:ring-2 focus:ring-blue-500'} text-xs sm:text-sm text-slate-900 focus:outline-none transition-all`}
                    />
                  </div>
                  {emailError && (
                    <p className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{emailError}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-blue-600">*</span>
                  </label>
                  <div className={`flex rounded-xl border ${phoneError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500'} overflow-hidden bg-white transition-all`}>
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 sm:px-3 border-r border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 shrink-0 select-none">
                      <span className="text-base" role="img" aria-label="Kenya Flag">🇰🇪</span>
                      <span>+254</span>
                    </div>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="700000000"
                      value={businessInfo.phone}
                      onChange={(e) => {
                        // Numbers only, no letters, no spacing, max 10 digits
                        const numericOnly = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                        setBusinessInfo({ ...businessInfo, phone: numericOnly });
                        if (phoneError) setPhoneError('');
                      }}
                      onBlur={() => {
                        if (businessInfo.phone) {
                          setPhoneError(validatePhone(businessInfo.phone));
                        }
                      }}
                      className="w-full px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                  {phoneError ? (
                    <p className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{phoneError}</span>
                    </p>
                  ) : (
                    <p className="text-[10px] text-slate-400 mt-1">
                      Numbers only (up to 10 digits, e.g. 712345678)
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={businessInfo.primaryGoal}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, primaryGoal: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
                  >
                    <option value="Generate more leads">Generate more leads</option>
                    <option value="Increase online conversions">Increase online conversions</option>
                    <option value="Automate sales & CRM followups">Automate sales & CRM followups</option>
                    <option value="Reactivate dormant clients">Reactivate dormant clients</option>
                    <option value="Full brand repositioning">Full brand repositioning</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Website and Notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Website or Social Profile <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={businessInfo.website}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, website: e.target.value })}
                    placeholder="e.g. www.acme.co.ke"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Requirements or Bottlenecks <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. We want to scale TikTok ads and set up WhatsApp automations."
                    value={businessInfo.notes}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting || !businessInfo.businessName.trim() || !businessInfo.contactName.trim() || !businessInfo.email.trim() || !businessInfo.phone.trim()}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Generating Invoice...</span>
                  ) : (
                    <>
                      <span>Generate Invoice</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        )}

      </main>

      {/* Compare Packages Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900">
                Package Comparison Overview
              </h3>
              <button
                type="button"
                onClick={() => setShowCompareModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex justify-between items-center">
                <div>
                  <div className="font-bold text-blue-900 text-base">Essential (KSh 10,000/mo)</div>
                  <div className="text-blue-700 text-xs">1 Platform, 8 Posts, Basic Graphics & Community Moderation</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex justify-between items-center">
                <div>
                  <div className="font-bold text-emerald-900 text-base">Growth (KSh 20,000/mo)</div>
                  <div className="text-emerald-700 text-xs">2 Platforms, 12-16 Posts, 4 Videos, Strategy Call & Reports</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 flex justify-between items-center">
                <div>
                  <div className="font-bold text-purple-900 text-base">Business (KSh 35,000/mo)</div>
                  <div className="text-purple-700 text-xs">Up to 3 Platforms, 20 Posts, 8 Videos, Paid Ads & Full Strategy</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900 text-base">Custom Package (Tailored to You)</div>
                  <div className="text-slate-600 text-xs">Pick the exact services, volume & integrations you need</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowCompareModal(false)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Proposal Ready Pop-up Modal (matching reference image) */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-9 text-center shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200">
            
            {/* Top-right close button */}
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Festive Celebration Icon with sparkle dots */}
            <div className="relative w-20 h-20 mx-auto mt-1 mb-2 flex items-center justify-center">
              {/* Confetti & sparkle accents */}
              <span className="absolute -top-1 left-3 w-1.5 h-1.5 rounded-full bg-indigo-400 opacity-80" />
              <span className="absolute top-1 right-3 w-1.5 h-1.5 rounded-full bg-purple-400 opacity-80" />
              <span className="absolute bottom-2 -left-1 w-2 h-2 rounded-full bg-purple-500 opacity-70" />
              <span className="absolute -bottom-1 right-5 w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-80" />
              <span className="absolute top-7 -left-3 w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-75" />
              <span className="absolute top-5 -right-3 w-2 h-2 rounded-full bg-blue-400 opacity-80" />
              <span className="absolute bottom-6 right-2 w-1.5 h-1.5 rounded-full bg-pink-400 opacity-70" />

              {/* Main Green Check Circle */}
              <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center shadow-xs">
                <Check className="w-8 h-8 text-emerald-500 stroke-[2.5]" />
              </div>
            </div>

            {/* Modal Heading */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Proposal ready
            </h3>

            {/* Subtitle */}
            <div className="text-slate-600 text-xs sm:text-sm mb-4">
              Your custom package for{' '}
              <span className="font-bold text-slate-900 block text-sm sm:text-base mt-0.5">
                {businessInfo.businessName || 'Your Business'}
              </span>
            </div>

            {/* Service count and Price pill stats */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 my-4 py-1 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>{selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'}</span>
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div className="flex items-center gap-1.5 text-emerald-700">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black">$</span>
                <span className="font-bold">KSh {monthlyTotal.toLocaleString()}/mo</span>
              </div>
            </div>

            {/* Proposal and Invoice Ready Card */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100/80 text-center mb-6">
              {/* PDF Icon Badge */}
              <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2.5 border border-blue-100">
                <FileText className="w-5 h-5" />
              </div>

              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                Your proposal and invoice are ready to download.
              </p>

              <button
                type="button"
                onClick={() => {
                  generateAndDownloadInvoicePDF({
                    businessInfo,
                    selectedServices,
                    monthlyTotal,
                    setupFeeTotal
                  });
                }}
                className="text-blue-600 hover:text-blue-700 font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer hover:underline"
              >
                <span>Download proposal & invoice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* WhatsApp Contact Box */}
            <div className="text-center">
              <a
                href={`https://wa.me/254758544241?text=${encodeURIComponent(
                  `Hi Aceso Solutions, I just configured a custom package for ${businessInfo.businessName || 'my business'} (${selectedServices.length} services totaling KSh ${monthlyTotal.toLocaleString()}/mo). I would like to discuss next steps!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold text-sm sm:text-base transition-colors group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Chat with us on WhatsApp</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>

              <p className="text-slate-600 text-xs sm:text-sm font-semibold mt-1">
                +254 758 544 241
              </p>

              <p className="text-slate-500 text-[11px] sm:text-xs mt-3 leading-relaxed max-w-xs mx-auto">
                We'll be happy to discuss your package and answer any questions.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Footer without the top banner */}
      <Footer 
        onNavigate={onBackToHome}
        onRequestAudit={onRequestAudit}
        hideTopBanner={true}
      />

    </div>
  );
};
