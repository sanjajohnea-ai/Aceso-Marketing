import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  Globe, 
  ChevronDown, 
  Target, 
  TrendingUp, 
  Megaphone, 
  Users, 
  MoreHorizontal, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Clock, 
  ArrowRight, 
  Check, 
  BarChart2, 
  ArrowUpRight, 
  Eye, 
  Layers, 
  MousePointerClick, 
  UserCheck, 
  Sparkles,
  Calendar,
  Send,
  AlertCircle,
  RotateCcw,
  AlertTriangle
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toast, ToastMessage } from './Toast';
import { DiscoveryBookingPage } from './DiscoveryBookingPage';
import { saveLocalAuditLead, submitToGoogleForm, AuditSubmissionRecord } from '../lib/googleSheets';

interface FreeAuditPageProps {
  onBackToHome: () => void;
  onNavigate?: (sectionId: string) => void;
  onNavigateToPackages?: () => void;
}

export const FreeAuditPage: React.FC<FreeAuditPageProps> = ({
  onBackToHome,
  onNavigate,
  onNavigateToPackages
}) => {
  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phoneCode: '+254',
    phone: '',
    website: '',
    industry: '',
    primaryGoal: 'Generate more leads',
    challenges: [] as string[],
    marketingBudget: '',
    referralSource: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<AuditSubmissionRecord | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [websiteError, setWebsiteError] = useState<string>('');

  const validateName = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Full name is required';
    }
    return '';
  };

  const validateEmail = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Email address is required';
    }
    if (!trimmed.includes('@')) {
      return 'Invalid email address - missing @';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return 'Invalid email address (e.g. you@yourbusiness.com)';
    }
    return '';
  };

  const validatePhone = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Phone number is required';
    }
    if (trimmed.length > 13) {
      return 'Phone number must not exceed 13 characters';
    }
    if (trimmed.length < 9) {
      return 'Phone number must be at least 9 digits';
    }
    return '';
  };

  const validateWebsite = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Website / Social link is required';
    }
    if (trimmed.length < 3) {
      return 'Please enter a valid website URL or social media handle/link';
    }
    return '';
  };

  const goalOptions = [
    { id: 'leads', label: 'Generate more leads', icon: Target },
    { id: 'sales', label: 'Increase sales', icon: TrendingUp },
    { id: 'awareness', label: 'Improve brand awareness', icon: Megaphone },
    { id: 'retention', label: 'Customer retention', icon: Users },
    { id: 'other', label: 'Other', icon: MoreHorizontal },
  ];

  const challengeOptions = [
    'Generating quality leads',
    'High customer acquisition cost',
    'Lack of time / resources',
    'Low website traffic',
    'Inconsistent sales',
    'Not sure what works',
    'Low conversion rate',
    'Poor ad performance',
  ];

  const toggleChallenge = (challenge: string) => {
    if (formData.challenges.includes(challenge)) {
      setFormData({
        ...formData,
        challenges: formData.challenges.filter((c) => c !== challenge),
      });
    } else {
      setFormData({
        ...formData,
        challenges: [...formData.challenges, challenge],
      });
    }
  };

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateName(formData.fullName);
    if (nameErr) {
      setNameError(nameErr);
      return;
    }

    const emailErr = validateEmail(formData.email);
    if (emailErr) {
      setEmailError(emailErr);
      return;
    }

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) {
      setPhoneError(phoneErr);
      return;
    }

    const webErr = validateWebsite(formData.website);
    if (webErr) {
      setWebsiteError(webErr);
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const leadRecord: AuditSubmissionRecord = {
      timestamp: new Date().toISOString(),
      fullName: formData.fullName.trim(),
      businessName: formData.website.trim() || formData.fullName.trim(),
      email: formData.email.trim(),
      phoneCode: formData.phoneCode,
      phone: formData.phone.trim(),
      website: formData.website.trim(),
      industry: '',
      primaryGoal: formData.primaryGoal,
      challenges: formData.challenges,
      marketingBudget: formData.marketingBudget,
      referralSource: formData.referralSource,
      additionalNotes: formData.additionalNotes.trim(),
      status: 'Pending Audit'
    };

    // Save lead record in local store
    const savedRecord = saveLocalAuditLead(leadRecord);

    try {
      const res = await submitToGoogleForm(savedRecord);
      
      if (!res.success) {
        setIsSubmitting(false);
        const errMsg = res.error || 'Unable to record your details in Google Sheets. Please check your connection.';
        setSubmissionError(errMsg);
        setToast({
          type: 'error',
          title: 'Submission Failed',
          description: 'Failed to record in Google Sheets. Please click retry below.'
        });
        return;
      }

      setSubmissionError(null);
      setIsSubmitting(false);
      setSubmittedLead(savedRecord);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error('Audit submission error:', err);
      setIsSubmitting(false);
      const errMsg = err?.message || 'Network error: Failed to reach Google Sheets server.';
      setSubmissionError(errMsg);
      setToast({
        type: 'error',
        title: 'Submission Error',
        description: 'Could not submit audit request. Please click retry below.'
      });
    }
  };

  // If details submitted, show the dedicated Discovery Booking page (Next Page)
  if (submittedLead) {
    return (
      <DiscoveryBookingPage 
        leadData={submittedLead}
        onBackToHome={onBackToHome}
        onNavigate={onNavigate || onBackToHome}
        onNavigateToPackages={onNavigateToPackages || onBackToHome}
      />
    );
  }

  const handleNav = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      onBackToHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 selection:bg-[#DE8E53] selection:text-white pb-16 md:pb-0">
      
      {/* Top Navbar */}
      <Navbar 
        activeSection="audit"
        onRequestAudit={() => {
          window.scrollTo({ top: 350, behavior: 'smooth' });
        }}
        onNavigate={handleNav}
      />

      {/* Main Container */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-200/80 pt-6 pb-8 sm:pt-8 sm:pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          
          {/* Subtle Dotted Pattern Background */}
          <div className="absolute top-6 right-8 w-40 h-40 opacity-40 pointer-events-none hidden md:block">
            <div className="grid grid-cols-6 gap-2.5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400/40" />
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-4">
              
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
                  Get a Free <span className="text-[#C25E00]">Growth Audit</span>
                </h1>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Discover what's holding your business back and get a clear, data-driven plan to grow more leads, increase sales and maximize ROI.
              </p>

              {/* 3 Check Bullets */}
              <div className="space-y-2.5 pt-0.5">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0B132B] text-[#DE8E53] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    In-depth analysis of your marketing performance
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0B132B] text-[#DE8E53] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Actionable recommendations tailored to your business
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0B132B] text-[#DE8E53] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    No obligation. 100% free.
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: "Your Growth Snapshot" Interactive Preview Card (Hidden on mobile) */}
            <div className="hidden lg:block lg:col-span-5 mt-4 lg:mt-0">
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    Your Growth Snapshot
                  </h3>
                  <span className="text-xs font-semibold text-[#C25E00] bg-amber-500/15 px-3 py-1 rounded-lg">
                    Sample Audit
                  </span>
                </div>

                {/* Score & Metrics Grid */}
                <div className="grid grid-cols-12 gap-3 items-center mb-4">
                  
                  {/* Semicircular Radial Gauge */}
                  <div className="col-span-6 flex flex-col items-center justify-center relative">
                    <div className="relative w-48 h-36 sm:w-52 sm:h-38 flex items-center justify-center">
                      <svg viewBox="0 0 220 165" className="w-full h-full">
                        <defs>
                          <linearGradient id="gaugeBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C25E00" />
                            <stop offset="65%" stopColor="#DE8E53" />
                            <stop offset="100%" stopColor="#E5A958" />
                          </linearGradient>
                        </defs>
                        {/* Background Track */}
                        <path
                          d="M 36.4 152.5 A 85 85 0 1 1 183.6 152.5"
                          fill="none"
                          stroke="#F5EFEA"
                          strokeWidth="12"
                          strokeLinecap="round"
                        />
                        {/* Active Progress (72%) */}
                        <path
                          d="M 36.4 152.5 A 85 85 0 1 1 183.6 152.5"
                          fill="none"
                          stroke="url(#gaugeBlueGrad)"
                          strokeWidth="12"
                          strokeLinecap="round"
                          strokeDasharray="256.4 1000"
                        />
                      </svg>
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 sm:pt-9 text-center select-none pointer-events-none">
                        <span className="text-[11px] sm:text-xs font-semibold text-slate-700 tracking-tight whitespace-nowrap px-1">
                          Overall Growth Score
                        </span>
                        <div className="text-3xl sm:text-3.5xl font-black text-slate-900 leading-tight my-0.5">
                          72<span className="text-base font-bold text-slate-700">/100</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-emerald-600">
                          Good
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 5 Sub-Scores Breakdown */}
                  <div className="col-span-6 space-y-2.5">
                    
                    {/* Visibility */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5 text-slate-900 font-semibold">
                        <div className="w-6.5 h-6.5 rounded-lg bg-slate-100/90 text-slate-700 flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            <circle cx="12" cy="11" r="3" />
                          </svg>
                        </div>
                        <span className="text-slate-900 font-semibold text-xs sm:text-[13px]">Visibility</span>
                      </div>
                      <span className="font-semibold text-slate-700 text-xs sm:text-[13px]">75/100</span>
                    </div>

                    {/* Traffic */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5 text-slate-900 font-semibold">
                        <div className="w-6.5 h-6.5 rounded-lg bg-slate-100/90 text-slate-700 flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                            <path d="M3 9l6-5 6 4 6-5" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <span className="text-slate-900 font-semibold text-xs sm:text-[13px]">Traffic</span>
                      </div>
                      <span className="font-semibold text-slate-700 text-xs sm:text-[13px]">68/100</span>
                    </div>

                    {/* Leads */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5 text-slate-900 font-semibold">
                        <div className="w-6.5 h-6.5 rounded-lg bg-slate-100/90 text-slate-700 flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <span className="text-slate-900 font-semibold text-xs sm:text-[13px]">Leads</span>
                      </div>
                      <span className="font-semibold text-slate-700 text-xs sm:text-[13px]">70/100</span>
                    </div>

                    {/* Conversion */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5 text-slate-900 font-semibold">
                        <div className="w-6.5 h-6.5 rounded-lg bg-slate-100/90 text-slate-700 flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 8a4 4 0 1 0 3 3" />
                          </svg>
                        </div>
                        <span className="text-slate-900 font-semibold text-xs sm:text-[13px]">Conversion</span>
                      </div>
                      <span className="font-semibold text-slate-700 text-xs sm:text-[13px]">65/100</span>
                    </div>

                    {/* Retention */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5 text-slate-900 font-semibold">
                        <div className="w-6.5 h-6.5 rounded-lg bg-slate-100/90 text-slate-700 flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M19 8v6M22 11h-6" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <span className="text-slate-900 font-semibold text-xs sm:text-[13px]">Retention</span>
                      </div>
                      <span className="font-semibold text-slate-700 text-xs sm:text-[13px]">80/100</span>
                    </div>

                  </div>

                </div>

                {/* Bottom Top Opportunity Box with Rising Sparkline */}
                <div className="bg-[#F6F9FD] rounded-2xl p-3.5 sm:p-4 border border-blue-100/60 relative overflow-hidden">
                  <div className="relative z-10 max-w-[210px] sm:max-w-[240px]">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                      Top Opportunity
                    </h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      Improve conversion rate on your website and turn more visitors into customers.
                    </p>
                  </div>

                  {/* Upward Growth Zig-Zag Line with Dot */}
                  <div className="absolute right-2 bottom-0 w-32 sm:w-40 h-18 pointer-events-none">
                    <svg viewBox="0 0 160 80" fill="none" className="w-full h-full overflow-visible">
                      <path
                        d="M 5 75 L 30 55 L 55 68 L 80 40 L 105 46 L 135 18 L 152 4"
                        stroke="#1D4ED8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="152" cy="4" r="4.5" fill="#1D4ED8" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Audit Form Section with Left Form & Right Sticky Sidebar */}
        <section id="audit-form-start" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-6 pb-3 border-b border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Tell us about your business
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Submit your details to receive your customized growth audit and schedule your 1-on-1 Discovery Call.
              </p>
            </div>
          </div>

          {/* Form Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: Form Elements */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-7 shadow-xs border border-slate-200">
              
              {/* Unified 1-Step Audit Form */}
              <form onSubmit={handleAuditSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (nameError) setNameError('');
                      }}
                      onBlur={() => {
                        if (formData.fullName) setNameError(validateName(formData.fullName));
                      }}
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${nameError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'} text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                  </div>
                  {nameError && (
                    <p className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{nameError}</span>
                    </p>
                  )}
                </div>

                {/* Row 2: Email Address + Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="you@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => {
                          const val = e.target.value.trim();
                          setFormData({ ...formData, email: val });
                          if (emailError) {
                            setEmailError(validateEmail(val));
                          }
                        }}
                        onBlur={() => {
                          if (formData.email) {
                            setEmailError(validateEmail(formData.email));
                          }
                        }}
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${emailError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'} text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className={`flex rounded-lg border ${phoneError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500'} overflow-hidden transition-all bg-white`}>
                      <div className="flex items-center gap-1.5 bg-slate-50 px-3 border-r border-slate-300 text-xs font-semibold text-slate-700 shrink-0 select-none">
                        <span role="img" aria-label="Kenya Flag">🇰🇪</span>
                        <span>{formData.phoneCode}</span>
                      </div>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="700000000"
                        value={formData.phone}
                        onChange={(e) => {
                          const numericOnly = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                          setFormData({ ...formData, phone: numericOnly });
                          if (phoneError) setPhoneError('');
                        }}
                        onBlur={() => {
                          if (formData.phone) {
                            setPhoneError(validatePhone(formData.phone));
                          }
                        }}
                        className="w-full px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
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
                </div>

                {/* Row 3: Website / Social Link (Compulsory) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Website/Social link <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. yourwebsite.com or instagram.com/yourbusiness"
                      value={formData.website}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData({ ...formData, website: val });
                        if (websiteError) setWebsiteError('');
                      }}
                      onBlur={() => {
                        if (formData.website) {
                          setWebsiteError(validateWebsite(formData.website));
                        }
                      }}
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border ${websiteError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'} text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all`}
                    />
                  </div>
                  {websiteError ? (
                    <p className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{websiteError}</span>
                    </p>
                  ) : (
                    <p className="text-[10px] text-slate-400 mt-1">
                      Provide your website address, Instagram handle, Facebook page, or TikTok profile URL.
                    </p>
                  )}
                </div>

                  {/* Primary Business Goal Cards */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      What is your primary business goal? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {goalOptions.map((goal) => {
                        const Icon = goal.icon;
                        const isSelected = formData.primaryGoal === goal.label;
                        return (
                          <button
                            type="button"
                            key={goal.id}
                            onClick={() => setFormData({ ...formData, primaryGoal: goal.label })}
                            className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-bold ring-1 ring-blue-600 shadow-2xs'
                                : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-medium'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] leading-tight line-clamp-2">
                              {goal.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Marketing Challenges Checkboxes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      What marketing challenges are you currently facing? <span className="text-slate-500 font-normal">(Select all that apply)</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {challengeOptions.map((challenge, idx) => {
                        const isChecked = formData.challenges.includes(challenge);
                        return (
                          <label
                            key={idx}
                            className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                              isChecked
                                ? 'bg-blue-50/70 border-blue-300 text-blue-950 font-semibold'
                                : 'border-slate-200 hover:border-slate-300 text-slate-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleChallenge(challenge)}
                              className="mt-0.5 w-3.5 h-3.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                            />
                            <span className="leading-tight">{challenge}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row: Monthly Budget + Referral Source */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Monthly Marketing Budget
                      </label>
                      <select
                        value={formData.marketingBudget}
                        onChange={(e) => setFormData({ ...formData, marketingBudget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                      >
                        <option value="">Select your budget range</option>
                        <option value="Under KSh 25,000">Under KSh 25,000 / month</option>
                        <option value="KSh 25,000 – KSh 50,000">KSh 25,000 – KSh 50,000 / month</option>
                        <option value="KSh 50,000 – KSh 100,000">KSh 50,000 – KSh 100,000 / month</option>
                        <option value="KSh 100,000 – KSh 250,000">KSh 100,000 – KSh 250,000 / month</option>
                        <option value="KSh 250,000+">KSh 250,000+ / month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        How did you hear about us?
                      </label>
                      <select
                        value={formData.referralSource}
                        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                      >
                        <option value="">Select an option</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Instagram / Facebook">Instagram / Facebook</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="WhatsApp Referral">WhatsApp Referral</option>
                        <option value="Client Recommendation">Client Recommendation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Anything else */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Anything else we should know about your business?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share anything that can help us give you better insights..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Delivery Notice to Email & WhatsApp */}
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3.5 text-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-[#0B132B] text-[#DE8E53] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Send className="w-4 h-4" />
                    </div>
                    <div className="text-xs leading-relaxed">
                      <span className="font-bold text-slate-900 block mb-0.5">
                        Audit Report Delivery
                      </span>
                      <span className="text-slate-600">
                        Your personalized Growth Audit report will be sent to the <strong>email</strong> and <strong>WhatsApp number</strong> inputted in the above fields within 24–48 hours.
                      </span>
                    </div>
                  </div>

                  {/* Submission Error & Retry Banner */}
                  {submissionError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-red-900">
                            Google Sheet Submission Failed
                          </h4>
                          <p className="text-xs text-red-700 mt-0.5 leading-relaxed">
                            {submissionError}
                          </p>
                          <p className="text-[11px] text-red-600 mt-1 font-medium">
                            Your filled answers are safe. Click retry to submit again.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors disabled:opacity-50"
                        >
                          <RotateCcw className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-spin' : ''}`} />
                          <span>{isSubmitting ? 'Retrying...' : 'Retry Submission'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl ${
                        submissionError 
                          ? 'bg-red-600 hover:bg-red-700 active:bg-red-800' 
                          : 'bg-gradient-to-r from-[#DE8E53] to-[#C25E00] hover:from-[#e59b64] hover:to-[#a85000]'
                      } text-white font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99] disabled:opacity-70`}
                    >
                      {isSubmitting ? (
                        <>
                          <RotateCcw className="w-4 h-4 animate-spin" />
                          <span>Submitting Details...</span>
                        </>
                      ) : submissionError ? (
                        <>
                          <RotateCcw className="w-4 h-4" />
                          <span>Retry Submitting Details</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>

              {/* Privacy Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-600">
                <Lock className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>We respect your privacy. Your information will never be shared.</span>
              </div>

            </div>

            {/* Right Column: Sticky Sidebar "What you'll get" (Hidden on mobile) */}
            <div className="hidden lg:block lg:col-span-4 space-y-5 lg:sticky lg:top-24">
              
              {/* Card 1: What you'll get */}
              <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
                <h3 className="text-base font-extrabold text-slate-900 mb-5">
                  What you'll get
                </h3>

                <div className="space-y-4">
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-[#C25E00] flex items-center justify-center shrink-0 mt-0.5">
                      <BarChart2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Growth Score & Analysis</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        A clear scorecard of your marketing performance across key areas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Actionable Recommendations</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        Specific strategies to generate more leads, increase sales and grow faster.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0B132B] text-[#DE8E53] flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Growth Roadmap</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        A prioritized plan showing what to do first for the biggest impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-[#C25E00] flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Expected Impact</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        See the potential results you can expect from our recommendations.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNav}
        onRequestAudit={() => {
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
      />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
};
