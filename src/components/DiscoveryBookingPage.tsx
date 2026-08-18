import React from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  Sparkles, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  Video
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AuditSubmissionRecord } from '../lib/googleSheets';

interface DiscoveryBookingPageProps {
  leadData: AuditSubmissionRecord;
  onBackToHome: () => void;
  onNavigate?: (sectionId: string) => void;
  onNavigateToPackages: () => void;
}

export const DiscoveryBookingPage: React.FC<DiscoveryBookingPageProps> = ({
  leadData,
  onBackToHome,
  onNavigate,
  onNavigateToPackages
}) => {
  const CALENDAR_URL = 'https://calendar.app.google/i9YT96iwcduZDF8Q8';

  const handleNav = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      onBackToHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar 
        activeSection="audit"
        onRequestAudit={() => {}}
        onNavigate={handleNav}
      />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        
        {/* Hero Confirmation Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-inner">
              <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11 stroke-[2.2]" />
            </div>

            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Details Submitted! Now Let's Book Your Discovery Call.
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Thank you, <strong>{leadData.fullName}</strong>. Our growth strategist team is analyzing <strong>{leadData.businessName}</strong>. 
                Your tailored audit report will be dispatched to <strong>{leadData.email}</strong> and WhatsApp <strong>{leadData.phoneCode} {leadData.phone}</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Appointment Booking (Left) & Submission Summary (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Calendar Appointment Scheduler Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Appointment Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-blue-800">
              
              {/* Background glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/30 border border-blue-400/30 flex items-center justify-center text-blue-300">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-300 block">
                        APPOINTMENT BOOKING
                      </span>
                      <h2 className="text-lg sm:text-xl font-black text-white">
                        1-on-1 Growth Discovery Call
                      </h2>
                    </div>
                  </div>

                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold px-3 py-1 rounded-full shrink-0">
                    100% Free
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Lock in a 30-minute strategic consultation with our Senior Growth Strategist to review your audit findings, walk through quick revenue opportunities, and clarify the best roadmap for {leadData.businessName}.
                </p>

                {/* Session Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">30 Minutes</span>
                      <span className="text-[11px] text-slate-300">Focused & high impact</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                    <Video className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">Google Meet / Phone</span>
                      <span className="text-[11px] text-slate-300">Flexible direct call</span>
                    </div>
                  </div>
                </div>

                {/* Main Action Button */}
                <div className="pt-3">
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white font-black text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer group active:scale-[0.99]"
                  >
                    <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Select Time & Book on Google Calendar</span>
                    <ArrowUpRight className="w-5 h-5 text-sky-200" />
                  </a>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Instant automated calendar confirmation & invitation link sent to your email.
                  </p>
                </div>

              </div>
            </div>

            {/* Quick Agenda Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>What We'll Cover in Your Session:</span>
              </h3>
              
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                  <span><strong>Audit Breakdown:</strong> Uncover the #1 bottleneck preventing consistent lead generation in {leadData.industry || 'your niche'}.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                  <span><strong>Actionable Fixes:</strong> 3 immediate tweaks to your funnel, ads, or website to boost conversions this month.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                  <span><strong>Custom Strategy Alignment:</strong> Practical recommendations tailored strictly to your marketing budget.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Submitted Details Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Submitted Information Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Submitted Submission Overview
              </h3>

              <div className="space-y-3 text-xs divide-y divide-slate-100">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Name:
                  </span>
                  <span className="font-bold text-slate-900">{leadData.fullName}</span>
                </div>

                <div className="flex items-center justify-between pt-2.5">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> Business:
                  </span>
                  <span className="font-bold text-slate-900">{leadData.businessName}</span>
                </div>

                <div className="flex items-center justify-between pt-2.5">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Email:
                  </span>
                  <span className="font-bold text-slate-900">{leadData.email}</span>
                </div>

                <div className="flex items-center justify-between pt-2.5">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> Phone / WhatsApp:
                  </span>
                  <span className="font-bold text-slate-900">{leadData.phoneCode} {leadData.phone}</span>
                </div>

                <div className="flex items-center justify-between pt-2.5">
                  <span className="text-slate-500">Primary Goal:</span>
                  <span className="font-bold text-blue-600">{leadData.primaryGoal}</span>
                </div>

                {leadData.industry && (
                  <div className="flex items-center justify-between pt-2.5">
                    <span className="text-slate-500">Industry:</span>
                    <span className="font-semibold text-slate-800">{leadData.industry}</span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNav}
        onRequestAudit={() => {}}
      />
    </div>
  );
};
