import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SolutionItem } from '../types';

interface SolutionsProps {
  onSelectSolution?: (solution: SolutionItem) => void;
  onViewAllServices?: () => void;
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'acquisition',
    stepNumber: '01',
    title: 'Customer Acquisition',
    description: 'Bring more paying customers to your business.',
    iconType: 'acquisition',
    badgeColor: 'text-blue-600',
    iconBg: 'bg-blue-50 text-blue-600',
    checkColor: 'text-blue-600 bg-blue-50',
    items: [
      'Social media marketing',
      'Google & Facebook ads',
      'Google Maps & SEO',
      'Simple landing pages',
      'Fast lead generation',
      'Direct phone inquiries'
    ],
    detailedDescription: 'We help you attract new customers using Facebook, Instagram, Google ads, and local search. We turn online attention into real phone calls, messages, and paying customers.',
    deliverables: [
      'Setting up and managing your Google and Meta ads',
      'Designing fast, simple pages that encourage people to book or call',
      'Helping your business show up on Google Maps and search results',
      'Writing clear ad words and creating eye-catching pictures and videos',
      'Tracking where your calls, messages, and sales come from'
    ],
    caseStudyHighlight: 'Helped a Nairobi logistics company get 180% more inquiries within 60 days.'
  },
  {
    id: 'reactivation',
    stepNumber: '02',
    title: 'Customer Reactivation',
    description: 'Bring back past customers so they buy from you again.',
    iconType: 'reactivation',
    badgeColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
    checkColor: 'text-emerald-600 bg-emerald-50',
    items: [
      'WhatsApp messages',
      'Friendly SMS reminders',
      'Quick customer follow-ups',
      'Reconnecting with past clients',
      'Special loyalty offers',
      'Collecting 5-star Google reviews'
    ],
    detailedDescription: 'It is easier to sell to people who already know you. We send friendly WhatsApp messages, SMS, and emails to your past clients so they book appointments and buy from you again.',
    deliverables: [
      'Sending helpful WhatsApp updates and offers to past customers',
      'Quick SMS reminders for special deals and seasonal bookings',
      'Automated follow-ups when someone asks for a price but does not finish booking',
      'Simple systems to gather happy 5-star Google reviews',
      'Special perks and reward messages for loyal customers'
    ],
    caseStudyHighlight: 'Generated KSh 1.2M in sales from past clients with a single helpful WhatsApp campaign.'
  },
  {
    id: 'automation',
    stepNumber: '03',
    title: 'Marketing Automation',
    description: 'Save time by letting smart tools handle repetitive daily tasks.',
    iconType: 'automation',
    badgeColor: 'text-purple-600',
    iconBg: 'bg-purple-50 text-purple-600',
    checkColor: 'text-purple-600 bg-purple-50',
    items: [
      'Lead tracking tools',
      'Instant chat replies',
      'Appointment reminders',
      'Connecting your daily apps',
      'Simple weekly reports',
      'Less manual admin work'
    ],
    detailedDescription: 'We connect your website, WhatsApp, and calendar. When a new person reaches out, they get an instant reply, an automatic reminder before their appointment, and your team never loses their phone number.',
    deliverables: [
      'One simple place to see all your new leads and customer phone numbers',
      'Automatic WhatsApp and SMS reminders to stop missed appointments',
      'Instant friendly replies when someone asks about your services',
      'Connecting your website forms straight to your phone or team chat',
      'A clear weekly report showing your new calls, bookings, and revenue'
    ],
    caseStudyHighlight: 'Cut missed appointments by 85% and reduced reply time from 4 hours to 45 seconds.'
  }
];

export const Solutions: React.FC<SolutionsProps> = ({ 
  onSelectSolution, 
  onViewAllServices
}) => {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-white text-slate-900 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      
      {/* Subtle ambient warm light gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header (Centered) */}
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C25E00] mb-3 sm:mb-4">
            OUR CORE SOLUTIONS
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-3 sm:mb-4">
            Simple marketing. <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">Real business growth.</span>
          </h2>

          {/* Subheading */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            We help you find new customers, bring back past clients, and save hours of manual work with easy automations.
          </p>
        </div>

        {/* 3 Core Solution Pillars with D-EDGE Hexagon Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          
          {/* 1. Customer Acquisition */}
          <div 
            className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 bg-[#FAF9F6] hover:bg-white border border-slate-200/90 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/5"
          >
            {/* Hexagon with Search & Pin Icon */}
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 115.47" className="w-full h-full drop-shadow-sm">
                <polygon
                  points="50 2, 98 29.87, 98 85.6, 50 113.47, 2 85.6, 2 29.87"
                  className="fill-amber-50/80 stroke-[#DE8E53] stroke-[2.5] transition-colors group-hover:fill-amber-100/80"
                />
              </svg>
              
              {/* Custom Search + Location Pin Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-[#C25E00] group-hover:text-[#DE8E53] transition-colors">
                <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <line x1="21" y1="21" x2="15.8" y2="15.8" />
                  <path d="M10.5 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="currentColor" />
                  <path d="M10.5 7.5v4" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-900 mb-2.5 group-hover:text-[#C25E00] transition-colors">
              GET NEW CUSTOMERS
            </h3>
            <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed font-normal max-w-xs">
              Reach people who are looking for your services right now and turn them into paying clients.
            </p>
          </div>

          {/* 2. Customer Reactivation */}
          <div 
            className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 bg-[#FAF9F6] hover:bg-white border border-slate-200/90 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/5"
          >
            {/* Hexagon with 2-Arrow Refresh Icon */}
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 115.47" className="w-full h-full drop-shadow-sm">
                <polygon
                  points="50 2, 98 29.87, 98 85.6, 50 113.47, 2 85.6, 2 29.87"
                  className="fill-amber-50/80 stroke-[#DE8E53] stroke-[2.5] transition-colors group-hover:fill-amber-100/80"
                />
              </svg>

              {/* 2-Arrow Circular Loop Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-[#C25E00] group-hover:text-[#DE8E53] transition-colors">
                <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M16 21h5v-5" />
                </svg>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-900 mb-2.5 group-hover:text-[#C25E00] transition-colors">
              BRING BACK PAST CLIENTS
            </h3>
            <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed font-normal max-w-xs">
              Stay in touch with past clients through friendly messages so they return and buy from you again.
            </p>
          </div>

          {/* 3. Marketing Automation */}
          <div 
            className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 bg-[#FAF9F6] hover:bg-white border border-slate-200/90 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/5"
          >
            {/* Hexagon with Cursor Pointer Icon */}
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 115.47" className="w-full h-full drop-shadow-sm">
                <polygon
                  points="50 2, 98 29.87, 98 85.6, 50 113.47, 2 85.6, 2 29.87"
                  className="fill-amber-50/80 stroke-[#DE8E53] stroke-[2.5] transition-colors group-hover:fill-amber-100/80"
                />
              </svg>

              {/* Cursor Mouse Arrow Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-[#C25E00] group-hover:text-[#DE8E53] transition-colors">
                <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3l7 18 3.5-7.5L21 10 3 3z" />
                </svg>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-900 mb-2.5 group-hover:text-[#C25E00] transition-colors">
              SAVE TIME WITH AUTOMATION
            </h3>
            <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed font-normal max-w-xs">
              Send instant replies, appointment reminders, and follow-ups on autopilot without extra staff.
            </p>
          </div>

        </div>

        {/* Action Button: VIEW OUR SERVICES */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={onViewAllServices}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0B132B] to-[#16223D] hover:from-[#121E3E] hover:to-[#223354] text-white border border-[#DE8E53]/40 font-bold text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-amber-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>VIEW OUR SERVICES</span>
            <ArrowRight className="w-4 h-4 text-[#DE8E53] stroke-[2.5]" />
          </button>
        </div>

      </div>

    </section>
  );
};


