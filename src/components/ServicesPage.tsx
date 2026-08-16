import React from 'react';
import { 
  Megaphone, 
  RotateCw, 
  Settings2, 
  Check, 
  Rocket, 
  Search, 
  Users, 
  FileText, 
  User, 
  Calendar, 
  Bell, 
  Star, 
  CheckCircle2,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

// Authentic SVG Brand Icons & Custom Illustrations
const MetaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#0081FB]`}>
    <path d="M16.96 4c-1.8 0-3.37.89-4.96 2.5C10.41 4.89 8.84 4 7.04 4 3.73 4 1 6.8 1 10.42c0 4.19 3.4 8.08 7.04 8.08 1.94 0 3.39-.98 3.96-1.54.57.56 2.02 1.54 3.96 1.54 3.64 0 7.04-3.89 7.04-8.08C23 6.8 20.27 4 16.96 4zm-9.92 12c-2.3 0-4.54-2.8-4.54-5.58 0-2.22 1.56-3.92 3.54-3.92 1.34 0 2.56.78 3.67 2.2-1.39 3.25-2.26 6.13-2.67 7.3zm4.96-1.63c-.5-.54-1.25-1.12-1.83-1.61.42-1.32 1.13-3.4 2.1-5.1.97 1.7 1.68 3.78 2.1 5.1-.58.49-1.33 1.07-1.83 1.61zm4.96 1.63c-.41-1.17-1.28-4.05-2.67-7.3 1.11-1.42 2.33-2.2 3.67-2.2 1.98 0 3.54 1.7 3.54 3.92 0 2.78-2.24 5.58-4.54 5.58z"/>
  </svg>
);

const GoogleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
  </svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#25D366]`}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.32 4.54 17.88 6.1C19.44 7.66 20.3 9.73 20.3 11.93C20.3 16.47 16.6 20.15 12.05 20.15ZM16.57 14.33C16.32 14.21 15.11 13.61 14.88 13.53C14.65 13.44 14.49 13.4 14.32 13.65C14.16 13.9 13.69 14.45 13.54 14.62C13.4 14.78 13.25 14.8 13 14.68C12.75 14.55 11.94 14.29 10.99 13.44C10.25 12.78 9.74 11.96 9.6 11.71C9.46 11.46 9.58 11.33 9.71 11.2C9.82 11.09 9.96 10.91 10.08 10.77C10.21 10.63 10.25 10.52 10.33 10.36C10.41 10.19 10.37 10.05 10.31 9.93C10.25 9.8 9.76 8.59 9.55 8.1C9.35 7.62 9.15 7.68 9 7.68C8.86 7.67 8.7 7.67 8.53 7.67C8.36 7.67 8.1 7.73 7.87 7.98C7.65 8.23 7.02 8.81 7.02 10.01C7.02 11.21 7.89 12.36 8.01 12.53C8.14 12.69 9.73 15.15 12.18 16.21C12.76 16.46 13.22 16.61 13.57 16.72C14.16 16.91 14.7 16.88 15.12 16.82C15.6 16.75 16.57 16.23 16.78 15.66C16.98 15.08 16.98 14.59 16.92 14.49C16.86 14.39 16.71 14.33 16.46 14.21L16.57 14.33Z"/>
  </svg>
);

const LandingPageIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
    <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="2" className="text-blue-500" />
    <path d="M2 8H22" strokeWidth="2" className="text-blue-500" />
    <circle cx="5" cy="5.5" r="1" fill="#3B82F6" />
    <circle cx="8" cy="5.5" r="1" fill="#3B82F6" />
    <rect x="5" y="11" width="6" height="7" rx="1" fill="#93C5FD" stroke="none" />
    <path d="M14 12H19M14 15H19M14 18H17" strokeWidth="2" strokeLinecap="round" className="text-blue-400" />
  </svg>
);

const LeadFormIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" strokeWidth="2" className="text-blue-500" />
    <path d="M14 2V8H20" strokeWidth="2" className="text-blue-500" />
    <path d="M8 13H16M8 17H13" strokeWidth="2" strokeLinecap="round" className="text-blue-500" />
    <rect x="8" y="9" width="3" height="3" rx="0.5" fill="#3B82F6" stroke="none" />
  </svg>
);

const RetargetingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
    <circle cx="12" cy="12" r="9" strokeWidth="2" className="text-blue-500" />
    <circle cx="12" cy="12" r="5" strokeWidth="2" className="text-blue-400" />
    <circle cx="12" cy="12" r="2" fill="#2563EB" stroke="none" />
    <path d="M12 2V5M12 19V22M2 12H5M19 12H22" strokeWidth="2" strokeLinecap="round" className="text-blue-500" />
  </svg>
);

const ConversionTrackingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 20H21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
    <rect x="5" y="13" width="3" height="7" rx="0.5" fill="#93C5FD" />
    <rect x="10" y="9" width="3" height="11" rx="0.5" fill="#60A5FA" />
    <rect x="15" y="5" width="3" height="15" rx="0.5" fill="#2563EB" />
    <path d="M6 10L11 6L16 3L20 7" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ServicesPageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onRequestAudit,
  onNavigate
}) => {
  const handleNav = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else if (sectionId === 'home') {
      onBackToHome();
    } else if (sectionId === 'services') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBackToHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-blue-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar 
        activeSection="services"
        onRequestAudit={onRequestAudit}
        onNavigate={handleNav}
        ctaLabel="Get Started"
      />

      {/* Main Content */}
      <main className="flex-1 pb-10 sm:pb-12">
        
        {/* Header Section */}
        <section className="bg-white border-b border-slate-200/80 pt-8 pb-9 sm:pt-10 sm:pb-11 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
          
          {/* Subtle Dotted Pattern Left */}
          <div className="absolute top-6 left-8 w-36 h-36 opacity-30 pointer-events-none hidden md:block">
            <div className="grid grid-cols-6 gap-2.5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              ))}
            </div>
          </div>

          {/* Subtle Dotted Pattern Right */}
          <div className="absolute top-6 right-8 w-36 h-36 opacity-30 pointer-events-none hidden md:block">
            <div className="grid grid-cols-6 gap-2.5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 relative z-10">
            <div className="inline-block">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Our Services
              </h1>
              <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mt-2" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-normal pt-1">
              We help businesses attract more customers, reactivate existing ones, and automate their marketing for sustainable growth.
            </p>
          </div>
        </section>

        {/* 3 Core Services Sections Container */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-5 sm:space-y-6">
          
          {/* ======================================================== */}
          {/* 1. CUSTOMER ACQUISITION CARD */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xs border border-slate-200/90 transition-all hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Acquisition Strategy & Channels */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                    <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                      1. Customer Acquisition
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-1 leading-relaxed">
                      We help businesses get new customers through targeted marketing and high-converting campaigns.
                    </p>
                  </div>
                </div>

                {/* How we do it: 7 Channel Boxes */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2.5">
                    How we do it:
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 sm:gap-2.5">
                    
                    {/* Meta Ads */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/30 transition-all shadow-2xs">
                      <MetaIcon className="w-6 h-6" />
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Meta Ads</span>
                    </div>

                    {/* Google Ads */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/30 transition-all shadow-2xs">
                      <GoogleIcon className="w-6 h-6" />
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Google Ads</span>
                    </div>

                    {/* Landing Pages */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/30 transition-all shadow-2xs">
                      <LandingPageIcon className="w-6 h-6" />
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Landing Pages</span>
                    </div>

                    {/* Lead Forms */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/30 transition-all shadow-2xs">
                      <LeadFormIcon className="w-6 h-6" />
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Lead Forms</span>
                    </div>

                    {/* WhatsApp Lead Capture */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/30 transition-all shadow-2xs">
                      <WhatsAppIcon className="w-6 h-6" />
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">WhatsApp Lead Capture</span>
                    </div>

                    {/* Retargeting */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/30 transition-all shadow-2xs">
                      <RetargetingIcon className="w-6 h-6" />
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Retargeting</span>
                    </div>

                    {/* Conversion Tracking */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/30 transition-all shadow-2xs">
                      <ConversionTrackingIcon className="w-6 h-6" />
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Conversion Tracking</span>
                    </div>

                  </div>
                </div>

                {/* 4 Checked Outcomes in 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      New customer acquisition
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      More qualified leads
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      Increased online visibility
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      Higher conversion rates
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: "This is done through:" */}
              <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-8 space-y-3.5">
                <h3 className="text-xs font-black uppercase tracking-wider text-blue-600">
                  This is done through:
                </h3>

                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Social media marketing
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Meta advertising
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <GoogleIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Google advertising
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Search className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      SEO
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Content marketing
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Influencer/creator campaigns
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. CUSTOMER REACTIVATION CARD */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 lg:p-9 shadow-xs border border-slate-200/90 transition-all hover:shadow-md">
            
            {/* Top Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#009640] text-white flex items-center justify-center shrink-0 shadow-sm">
                <RotateCw className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  2. Customer Reactivation
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-1 leading-relaxed">
                  A business may have thousands of previous customers sitting in its database. We help you identify and bring them back.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
              
              {/* Left Column: We identify (5 items) */}
              <div className="lg:col-span-4 space-y-3">
                <h4 className="text-sm font-bold text-[#009640]">
                  We identify:
                </h4>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      Customers who haven't returned
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      Customers due for another service
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      Customers who abandoned an enquiry
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      Customers who requested information but never purchased
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      Customers who haven't booked again
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Column: Visual Funnel Diagram (Database Cylinder -> Downward card & Curved Dashed Arrows to 3 Channels) */}
              <div className="lg:col-span-4 flex items-center justify-center py-2">
                <div className="relative flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[280px]">
                  
                  {/* Cylinder + Downward Arrow + Inactive Customers Badge */}
                  <div className="flex flex-col items-center shrink-0">
                    
                    {/* 3D Database Cylinder SVG matching reference image */}
                    <div className="relative w-20 sm:w-22 h-20 sm:h-22 flex items-center justify-center">
                      <svg viewBox="0 0 90 90" className="w-full h-full drop-shadow-xs">
                        {/* Cylinder Body (Green) */}
                        <path d="M12 24 V66 C12 76 78 76 78 66 V24 Z" fill="#009640" />
                        
                        {/* Middle Tier Separators */}
                        <path d="M12 38 C12 48 78 48 78 38" stroke="#34D399" strokeWidth="1.75" fill="none" />
                        <path d="M12 52 C12 62 78 62 78 52" stroke="#34D399" strokeWidth="1.75" fill="none" />
                        
                        {/* Status / LED Indicator dots on right edge of each tier */}
                        <circle cx="70" cy="31" r="2" fill="#FBBF24" />
                        <circle cx="70" cy="45" r="2" fill="#FBBF24" />
                        <circle cx="70" cy="59" r="2" fill="#FBBF24" />

                        {/* Top Oval Lid (Light silver/off-white with subtle stroke) */}
                        <ellipse cx="45" cy="24" rx="33" ry="11" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Downward Arrow */}
                    <div className="flex justify-center -my-0.5 text-slate-400">
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
                        <path d="M8 1a.75.75 0 0 1 .75.75v10.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V1.75A.75.75 0 0 1 8 1Z" />
                      </svg>
                    </div>

                    {/* Inactive / Lost Customers Card */}
                    <div className="mt-1 bg-white border border-slate-200/90 rounded-2xl px-3 py-2 text-center shadow-xs w-28 sm:w-30">
                      <div className="flex items-center justify-center text-[#009640] mb-0.5">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-900 block leading-tight">
                        Inactive / Lost<br />Customers
                      </span>
                    </div>

                  </div>

                  {/* Radiating Curved Dashed Arrows SVG */}
                  <div className="relative w-12 sm:w-14 h-36 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 50 140" className="w-full h-full overflow-visible">
                      <defs>
                        <marker id="arrow-blue-sm" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                          <path d="M0,0 L6,3 L0,6" fill="#93C5FD" />
                        </marker>
                      </defs>
                      
                      {/* Top Arrow to Email */}
                      <path 
                        d="M 2 65 Q 22 25 45 15" 
                        fill="none" 
                        stroke="#93C5FD" 
                        strokeWidth="1.75" 
                        strokeDasharray="3 3" 
                        markerEnd="url(#arrow-blue-sm)"
                      />

                      {/* Middle Arrow to WhatsApp */}
                      <path 
                        d="M 2 70 Q 25 70 45 70" 
                        fill="none" 
                        stroke="#93C5FD" 
                        strokeWidth="1.75" 
                        strokeDasharray="3 3" 
                        markerEnd="url(#arrow-blue-sm)"
                      />

                      {/* Bottom Arrow to SMS */}
                      <path 
                        d="M 2 75 Q 22 115 45 125" 
                        fill="none" 
                        stroke="#93C5FD" 
                        strokeWidth="1.75" 
                        strokeDasharray="3 3" 
                        markerEnd="url(#arrow-blue-sm)"
                      />
                    </svg>
                  </div>

                  {/* 3 Target Channels Cards (Email, WhatsApp, SMS) */}
                  <div className="flex flex-col justify-between h-36 shrink-0 py-0.5">
                    
                    {/* 1. Email Card (Golden / Amber) */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FFF9ED] border border-amber-100 flex items-center justify-center shadow-xs">
                      <div className="w-6 h-6 rounded-md bg-[#FFB020] text-white flex items-center justify-center shadow-2xs">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                        </svg>
                      </div>
                    </div>

                    {/* 2. WhatsApp Card (Official Green) */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#F0FDF4] border border-emerald-100 flex items-center justify-center shadow-xs">
                      <div className="w-6 h-6 rounded-md bg-[#25D366] text-white flex items-center justify-center shadow-2xs">
                        <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>

                    {/* 3. SMS Card (Purple) */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FAF5FF] border border-purple-100 flex items-center justify-center shadow-xs">
                      <div className="w-6 h-6 rounded-md bg-[#7C3AED] text-white flex items-center justify-center shadow-2xs">
                        <span className="text-[7.5px] font-black tracking-tight">SMS</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* Right Column: This is done through (6 items) - Separated by vertical border on desktop */}
              <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-8 space-y-3">
                <h4 className="text-sm font-bold text-[#009640]">
                  This is done through:
                </h4>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Email marketing
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      SMS / WhatsApp campaigns
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Customer follow-ups
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Abandoned-lead recovery
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Customer reactivation
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#009640] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Review / reputation campaigns
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. MARKETING AUTOMATION CARD */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xs border border-slate-200/90 transition-all hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Automation Flowchart Diagram */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20">
                    <Settings2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                      3. Marketing Automation
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-1 leading-relaxed">
                      We build automated systems that nurture leads and customers from the first interaction to repeat business.
                    </p>
                  </div>
                </div>

                {/* Automation Flowchart */}
                <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/70 space-y-3 sm:space-y-4">
                  
                  {/* Row 1: Lead comes in -> CRM -> Automated response -> Qualification */}
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    
                    {/* Node 1: Lead comes in */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-2xs mb-1">
                        <User className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        Lead comes in
                      </span>
                    </div>

                    <div className="text-slate-300 font-bold shrink-0 text-xs sm:text-sm">→</div>

                    {/* Node 2: CRM */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-2xs mb-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                          <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2"/>
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" strokeWidth="2"/>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        CRM
                      </span>
                    </div>

                    <div className="text-slate-300 font-bold shrink-0 text-xs sm:text-sm">→</div>

                    {/* Node 3: Automated response */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center shadow-2xs mb-1">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                        </svg>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        Automated response
                      </span>
                    </div>

                    <div className="text-slate-300 font-bold shrink-0 text-xs sm:text-sm">→</div>

                    {/* Node 4: Qualification */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shadow-2xs mb-1">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        Qualification
                      </span>
                    </div>

                  </div>

                  {/* Down Arrow indicator */}
                  <div className="flex justify-end pr-8 sm:pr-10">
                    <span className="text-slate-400 font-bold text-xs sm:text-sm">↓</span>
                  </div>

                  {/* Row 2: Appointment booking -> Reminder -> Follow-up -> Reporting */}
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    
                    {/* Node 5: Appointment booking */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center shadow-2xs mb-1">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        Appointment booking
                      </span>
                    </div>

                    <div className="text-slate-300 font-bold shrink-0 text-xs sm:text-sm">→</div>

                    {/* Node 6: Reminder */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-2xs mb-1">
                        <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        Reminder
                      </span>
                    </div>

                    <div className="text-slate-300 font-bold shrink-0 text-xs sm:text-sm">→</div>

                    {/* Node 7: Follow-up */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-2xs mb-1">
                        <RotateCw className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        Follow-up
                      </span>
                    </div>

                    <div className="text-slate-300 font-bold shrink-0 text-xs sm:text-sm">→</div>

                    {/* Node 8: Reporting */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-2xs mb-1">
                        <ConversionTrackingIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                        Reporting
                      </span>
                    </div>

                  </div>

                </div>

              </div>

              {/* Right Column: Compatible Tools & Ecosystem */}
              <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-8 space-y-4">
                
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-purple-600 mb-2.5">
                    You could use tools such as:
                  </h3>

                  {/* 8 Branded Tool Badges in 4x2 Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    
                    {/* Make */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1.5 shadow-2xs">
                      <span className="font-black text-[#6d28d9] text-sm tracking-tight">///</span>
                      <span className="font-extrabold text-slate-900 text-xs">make</span>
                    </div>

                    {/* Zapier */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1 shadow-2xs">
                      <span className="font-black text-[#FF4F00] text-sm">_</span>
                      <span className="font-extrabold text-[#FF4F00] text-xs">zapier</span>
                    </div>

                    {/* Brevo */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col items-center justify-center shadow-2xs">
                      <span className="font-black text-[#006E52] text-xs tracking-wide">Brevo</span>
                      <span className="text-[8px] text-slate-400 -mt-0.5">(sendinblue)</span>
                    </div>

                    {/* Meta */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1.5 shadow-2xs">
                      <MetaIcon className="w-4 h-4" />
                      <span className="font-extrabold text-slate-900 text-xs">Meta</span>
                    </div>

                    {/* Google */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1 shadow-2xs">
                      <span className="font-black text-[#4285F4] text-xs">G</span>
                      <span className="font-black text-[#EA4335] text-xs">o</span>
                      <span className="font-black text-[#FBBC05] text-xs">o</span>
                      <span className="font-black text-[#4285F4] text-xs">g</span>
                      <span className="font-black text-[#34A853] text-xs">l</span>
                      <span className="font-black text-[#EA4335] text-xs">e</span>
                    </div>

                    {/* WhatsApp Business API */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex items-center justify-center gap-1.5 shadow-2xs">
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <div className="text-left">
                        <span className="font-extrabold text-slate-800 text-[10px] block leading-tight">WhatsApp</span>
                        <span className="text-[8px] text-slate-500 font-medium block leading-tight">Business API</span>
                      </div>
                    </div>

                    {/* CRM Platforms */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col items-center justify-center shadow-2xs text-center">
                      <span className="font-extrabold text-slate-800 text-[10px] leading-tight">CRM<br/>Platforms</span>
                    </div>

                    {/* AI Tools */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex items-center justify-center gap-1.5 shadow-2xs">
                      <div className="w-5 h-5 rounded-md border border-purple-300 text-purple-600 flex items-center justify-center text-[8px] font-black">
                        AI
                      </div>
                      <span className="font-extrabold text-slate-800 text-[10px]">AI<br/>Tools</span>
                    </div>

                  </div>
                </div>

                {/* Blue/Purple Bottom Callout Box */}
                <div className="bg-purple-50/90 border border-purple-200/90 rounded-2xl p-3.5 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-xs font-semibold text-purple-950 leading-relaxed">
                    You don't need to build software yourself. We connect existing systems into a working customer-acquisition machine.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* ======================================================== */}
        {/* Bottom Blue CTA Section: Ready to grow your business? */}
        {/* ======================================================== */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
          <div className="bg-[#0052FF] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden">
            
            {/* Subtle glow circle */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 sm:gap-5 text-center md:text-left relative z-10">
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0 shadow-lg">
                <Rocket className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                  Ready to grow your business?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm lg:text-base mt-1 max-w-xl">
                  Let's build a digital solution that brings more customers and better results.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-1.5 shrink-0 relative z-10">
              <button
                onClick={onRequestAudit}
                className="px-7 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#0052FF] font-extrabold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
              <span className="text-xs text-blue-200 font-medium">
                Or contact us for more information.
              </span>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNav}
        onRequestAudit={onRequestAudit}
      />

    </div>
  );
};
