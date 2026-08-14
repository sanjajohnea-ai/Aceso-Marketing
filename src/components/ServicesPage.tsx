import React from 'react';
import { 
  Megaphone, 
  RotateCw, 
  Settings2, 
  Check, 
  ArrowRight, 
  Rocket, 
  Globe, 
  FileText, 
  Filter, 
  BarChart3, 
  Target, 
  Users, 
  Mail, 
  MessageSquare, 
  MessageCircle, 
  Search, 
  Database, 
  Calendar, 
  Bell, 
  Star, 
  Bot, 
  Sparkles,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

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
      <main className="flex-1 pb-16">
        
        {/* Header Section */}
        <section className="bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-18 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
          
          {/* Subtle Dotted Pattern Left */}
          <div className="absolute top-8 left-8 w-36 h-36 opacity-30 pointer-events-none hidden md:block">
            <div className="grid grid-cols-6 gap-2.5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              ))}
            </div>
          </div>

          {/* Subtle Dotted Pattern Right */}
          <div className="absolute top-8 right-8 w-36 h-36 opacity-30 pointer-events-none hidden md:block">
            <div className="grid grid-cols-6 gap-2.5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            
            <div className="inline-block">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Our Services
              </h1>
              <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto mt-2" />
            </div>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal pt-1">
              We help businesses attract more customers, reactivate existing ones, and automate their marketing for sustainable growth.
            </p>
          </div>
        </section>

        {/* 3 Core Services Sections Container */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
          
          {/* 1. Customer Acquisition Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs border border-slate-200/90 transition-all hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Acquisition Strategy & Channels */}
              <div className="lg:col-span-8 space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      1. Customer Acquisition
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
                      We help businesses get new customers through targeted marketing and high-converting campaigns.
                    </p>
                  </div>
                </div>

                {/* How we do it channel pills */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                    How we do it:
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 sm:gap-2.5">
                    
                    {/* Meta Ads */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
                      <span className="w-6 h-6 flex items-center justify-center font-bold text-[#0081FB] text-lg">∞</span >
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Meta Ads</span>
                    </div>

                    {/* Google Ads */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
                      <span className="w-6 h-6 flex items-center justify-center font-black text-blue-600 text-base">G</span>
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Google Ads</span>
                    </div>

                    {/* Landing Pages */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Landing Pages</span>
                    </div>

                    {/* Lead Forms */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Lead Forms</span>
                    </div>

                    {/* WhatsApp Lead Capture */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <MessageCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">WhatsApp Lead Capture</span>
                    </div>

                    {/* Retargeting */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Target className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Retargeting</span>
                    </div>

                    {/* Conversion Tracking */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center gap-1.5 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                        <BarChart3 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 leading-tight">Conversion Tracking</span>
                    </div>

                  </div>
                </div>

                {/* 4 Checked Outcomes in 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      New customer acquisition
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      More qualified leads
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      Increased online visibility
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      Higher conversion rates
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: "This is done through" */}
              <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-8 space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-blue-600">
                  This is done through:
                </h3>

                <div className="space-y-3.5">
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
                      <span className="font-black text-blue-600 text-sm">G</span>
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

          {/* 2. Customer Reactivation Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs border border-slate-200/90 transition-all hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Reactivation Strategy */}
              <div className="lg:col-span-8 space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
                    <RotateCw className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      2. Customer Reactivation
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
                      A business may have thousands of previous customers sitting in its database. We help you identify and bring them back.
                    </p>
                  </div>
                </div>

                {/* Sub-grid: We Identify + Visual Database Cylinder */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                  
                  {/* Left List: We Identify */}
                  <div className="sm:col-span-7 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      We identify:
                    </h4>
                    
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          Customers who haven't returned
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          Customers due for another service
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          Customers who abandoned an enquiry
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          Customers who requested information but never purchased
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          Customers who haven't booked again
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Diagram: Database Cylinder -> Branching Dotted Arrows -> Email, WhatsApp, SMS */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center">
                    <div className="relative flex items-center gap-6 p-4">
                      
                      {/* Database Cylinder Graphic */}
                      <div className="flex flex-col items-center">
                        <div className="relative w-20 h-24 flex flex-col items-center justify-center">
                          {/* 3D Stacked Disk Cylinder */}
                          <div className="w-18 h-6 bg-emerald-100 border-2 border-emerald-500 rounded-full z-30" />
                          <div className="w-18 h-16 bg-emerald-600 border-x-2 border-b-2 border-emerald-700 rounded-b-3xl -mt-3 shadow-md flex flex-col justify-evenly px-2 py-1">
                            <div className="h-0.5 w-full bg-emerald-400/40 rounded-full" />
                            <div className="h-0.5 w-full bg-emerald-400/40 rounded-full" />
                          </div>
                        </div>

                        {/* Inactive / Lost Customers Tag */}
                        <div className="mt-2 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-center shadow-2xs">
                          <div className="flex items-center justify-center gap-1 text-emerald-600 mb-0.5">
                            <Users className="w-3 h-3" />
                          </div>
                          <span className="text-[10px] font-extrabold text-slate-900 block leading-tight">
                            Inactive / Lost<br />Customers
                          </span>
                        </div>
                      </div>

                      {/* Branching Dotted Lines */}
                      <div className="flex flex-col justify-between h-28 py-1">
                        
                        {/* Branch 1: Email */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 border-t-2 border-dashed border-amber-400" />
                          <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shadow-2xs">
                            <Mail className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Branch 2: WhatsApp */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 border-t-2 border-dashed border-emerald-500" />
                          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-2xs">
                            <MessageCircle className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Branch 3: SMS */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 border-t-2 border-dashed border-purple-400" />
                          <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shadow-2xs">
                            <span className="text-[10px] font-black">SMS</span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: "This is done through" */}
              <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-8 space-y-4">
                <div>
                  <p className="text-xs text-slate-500 mb-3">
                    Then we automate appropriate follow-ups through email, SMS or WhatsApp.
                  </p>
                  <h3 className="text-xs font-black uppercase tracking-wider text-emerald-700">
                    This is done through:
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Email marketing
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      SMS / WhatsApp campaigns
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Customer follow-ups
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Abandoned-lead recovery
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Customer reactivation
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Review / reputation campaigns
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 3. Marketing Automation Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs border border-slate-200/90 transition-all hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Automation Architecture & Visual Diagram */}
              <div className="lg:col-span-8 space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20">
                    <Settings2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      3. Marketing Automation
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
                      We build automated systems that nurture leads and customers from the first interaction to repeat business.
                    </p>
                  </div>
                </div>

                {/* Workflow Step Diagram */}
                <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/70 space-y-6">
                  
                  {/* Row 1: Lead comes in -> CRM -> Automated response -> Qualification */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
                    
                    {/* Node 1: Lead comes in */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs mb-1.5">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Lead comes in
                      </span>
                    </div>

                    {/* Node 2: CRM */}
                    <div className="flex flex-col items-center text-center relative">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs mb-1.5">
                        <Database className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        CRM
                      </span>
                    </div>

                    {/* Node 3: Automated response */}
                    <div className="flex flex-col items-center text-center relative">
                      <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-xs mb-1.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Automated response
                      </span>
                    </div>

                    {/* Node 4: Qualification */}
                    <div className="flex flex-col items-center text-center relative">
                      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shadow-xs mb-1.5">
                        <Star className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Qualification
                      </span>
                    </div>

                  </div>

                  {/* Connecting divider indicator */}
                  <div className="flex justify-end pr-6">
                    <div className="w-0.5 h-6 bg-slate-300 -my-3" />
                  </div>

                  {/* Row 2: Appointment booking -> Reminder -> Follow-up -> Reporting */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
                    
                    {/* Node 5: Appointment booking */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shadow-xs mb-1.5">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Appointment booking
                      </span>
                    </div>

                    {/* Node 6: Reminder */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs mb-1.5">
                        <Bell className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Reminder
                      </span>
                    </div>

                    {/* Node 7: Follow-up */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs mb-1.5">
                        <RotateCw className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Follow-up
                      </span>
                    </div>

                    {/* Node 8: Reporting */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs mb-1.5">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        Reporting
                      </span>
                    </div>

                  </div>

                </div>

              </div>

              {/* Right Column: Compatible Tools & Ecosystem */}
              <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-8 space-y-5">
                
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-purple-600 mb-3">
                    You could use tools such as:
                  </h3>

                  {/* 8 Branded Tool Badges in 4x2 Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    
                    {/* Make */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1.5 shadow-2xs">
                      <span className="font-extrabold text-[#6d28d9] text-xs">/// make</span>
                    </div>

                    {/* Zapier */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1.5 shadow-2xs">
                      <span className="font-extrabold text-[#ff4f00] text-xs">_zapier</span>
                    </div>

                    {/* Brevo */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center shadow-2xs">
                      <span className="font-extrabold text-emerald-700 text-xs">Brevo</span>
                      <span className="text-[8px] text-slate-400 -mt-0.5">(sendinblue)</span>
                    </div>

                    {/* Meta */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1 shadow-2xs">
                      <span className="font-bold text-[#0081FB] text-sm">∞</span >
                      <span className="font-extrabold text-slate-900 text-xs">Meta</span>
                    </div>

                    {/* Google */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1 shadow-2xs">
                      <span className="font-black text-blue-500 text-xs">G</span>
                      <span className="font-extrabold text-slate-800 text-xs">Google</span>
                    </div>

                    {/* WhatsApp Business API */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex items-center justify-center gap-1 shadow-2xs">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-extrabold text-slate-800 text-[10px] leading-tight">WhatsApp <span className="text-[8px] block font-medium text-slate-500">Business API</span></span>
                    </div>

                    {/* CRM Platforms */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center shadow-2xs">
                      <span className="font-extrabold text-slate-800 text-[11px] leading-tight">CRM Platforms</span>
                    </div>

                    {/* AI Tools */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-center gap-1.5 shadow-2xs">
                      <Bot className="w-3.5 h-3.5 text-purple-600" />
                      <span className="font-extrabold text-slate-800 text-[11px]">AI Tools</span>
                    </div>

                  </div>
                </div>

                {/* Blue/Purple Bottom Callout Box */}
                <div className="bg-purple-50/80 border border-purple-200/90 rounded-2xl p-4 flex items-start gap-3">
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

        {/* Bottom Blue CTA Section: Ready to grow your business? */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-[#0052FF] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Subtle glow circle */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-5 text-center md:text-left relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0 shadow-lg">
                <Rocket className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Ready to grow your business?
                </h3>
                <p className="text-blue-100 text-sm sm:text-base mt-1.5 max-w-xl">
                  Let's build a digital solution that brings more customers and better results.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 shrink-0 relative z-10">
              <button
                onClick={onRequestAudit}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0052FF] font-extrabold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
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
