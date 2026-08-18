import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SolutionItem } from '../types';

interface SolutionsProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onViewAllServices?: () => void;
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'acquisition',
    stepNumber: '01',
    title: 'Customer Acquisition',
    description: 'Bring more of the right customers to your business.',
    iconType: 'acquisition',
    badgeColor: 'text-blue-600',
    iconBg: 'bg-blue-50 text-blue-600',
    checkColor: 'text-blue-600 bg-blue-50',
    items: [
      'Social media marketing',
      'Meta & Google advertising',
      'SEO',
      'Content marketing',
      'Landing pages',
      'Lead generation'
    ],
    detailedDescription: 'We help you attract new customers through social media marketing, Meta and Google advertising, SEO, content marketing, landing pages, and lead generation. Our focus is not simply increasing traffic, but turning attention into qualified enquiries and customers.',
    deliverables: [
      'Meta & Google Ads Campaign Setup & Management',
      'Conversion-Optimized Landing Page Design',
      'Local & Technical SEO Audit and Optimization',
      'Creative Ad Copywriting & High-Converting Graphic Assets',
      'Multi-channel Tracking (Pixel, CAPI, GA4)'
    ],
    caseStudyHighlight: 'Delivered +180% qualified sales inquiries for Nairobi-based logistics firm within 60 days of launch.'
  },
  {
    id: 'reactivation',
    stepNumber: '02',
    title: 'Customer Reactivation',
    description: 'Turn existing and inactive customers into repeat business.',
    iconType: 'reactivation',
    badgeColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
    checkColor: 'text-emerald-600 bg-emerald-50',
    items: [
      'Email marketing',
      'SMS & WhatsApp campaigns',
      'Customer follow-ups',
      'Abandoned-lead recovery',
      'Customer reactivation',
      'Review & reputation campaigns'
    ],
    detailedDescription: 'Your existing customer database can be one of your most valuable marketing assets. We identify opportunities to reconnect with past customers through email, SMS, WhatsApp campaigns, follow-ups, abandoned-lead recovery, and targeted reactivation campaigns.',
    deliverables: [
      'WhatsApp Business API Multi-Broadcast Automations',
      'Targeted SMS Flash Offers & Dormancy Triggers',
      'Automated Abandoned Cart & Stalled Quote Sequences',
      '5-Star Google & Trustpilot Review Flywheels',
      'Customer Lifecycle Segmentation & VIP Perks'
    ],
    caseStudyHighlight: 'Re-ignited KSh 1.2M in sales from an inactive list of 3,400 past clients with a single targeted WhatsApp sequence.'
  },
  {
    id: 'automation',
    stepNumber: '03',
    title: 'Marketing Automation',
    description: 'Make your marketing work harder with less manual effort.',
    iconType: 'automation',
    badgeColor: 'text-purple-600',
    iconBg: 'bg-purple-50 text-purple-600',
    checkColor: 'text-purple-600 bg-purple-50',
    items: [
      'CRM & workflow automation',
      'Lead nurturing',
      'AI-powered automation',
      'Appointment reminders',
      'Reporting & analytics',
      'System integrations'
    ],
    detailedDescription: 'We connect the tools your business already uses to automate lead nurturing, customer follow-ups, appointment reminders, reporting, CRM workflows, and other repetitive marketing processes.',
    deliverables: [
      'HubSpot, Zoho, or Pipedrive CRM Implementation',
      'Zapier & Make (Integromat) API Pipelines',
      'Automated WhatsApp & SMS Calendar Reminders',
      'AI Lead Scoring & Instant Auto-Response Bots',
      'Real-Time Executive KPI Dashboard on Looker Studio'
    ],
    caseStudyHighlight: 'Eliminated 85% of missed appointments and reduced lead response time from 4 hours down to 45 seconds.'
  }
];

export const Solutions: React.FC<SolutionsProps> = ({ 
  onSelectSolution, 
  onViewAllServices
}) => {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-white text-slate-900 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      
      {/* Subtle ambient light gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header (Centered) */}
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="text-xs font-bold uppercase tracking-wider text-[#3b82f6] mb-2 sm:mb-3">
            OUR CORE SOLUTIONS
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 tracking-tight leading-[1.18] mb-3 sm:mb-4">
            Strategic marketing. Sustainable growth.
          </h2>

          {/* Subheading */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            We help SMEs attract more customers, reactivate existing ones, and automate marketing processes so you can grow sustainably and increase revenue.
          </p>
        </div>

        {/* 3 Core Solution Pillars with Hexagon Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          
          {/* 1. Customer Acquisition */}
          <div 
            onClick={() => onSelectSolution(solutionsData[0])}
            className="group cursor-pointer flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
          >
            {/* Hexagon with Search & Pin Icon */}
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 115.47" className="w-full h-full drop-shadow-sm">
                <polygon
                  points="50 2, 98 29.87, 98 85.6, 50 113.47, 2 85.6, 2 29.87"
                  className="fill-blue-50 stroke-[#003B95] stroke-[2.5] transition-colors group-hover:fill-blue-100/60"
                />
              </svg>
              
              {/* Custom Search + Location Pin Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-[#003B95] group-hover:text-blue-700 transition-colors">
                <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <line x1="21" y1="21" x2="15.8" y2="15.8" />
                  <path d="M10.5 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="currentColor" />
                  <path d="M10.5 7.5v4" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-900 mb-2.5 group-hover:text-[#003B95] transition-colors">
              CUSTOMER ACQUISITION
            </h3>
            <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed font-normal max-w-xs">
              We help you attract the right people and turn them into new customers through data-driven strategies and compelling campaigns.
            </p>
          </div>

          {/* 2. Customer Reactivation */}
          <div 
            onClick={() => onSelectSolution(solutionsData[1])}
            className="group cursor-pointer flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
          >
            {/* Hexagon with 2-Arrow Refresh Icon */}
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 115.47" className="w-full h-full drop-shadow-sm">
                <polygon
                  points="50 2, 98 29.87, 98 85.6, 50 113.47, 2 85.6, 2 29.87"
                  className="fill-blue-50 stroke-[#003B95] stroke-[2.5] transition-colors group-hover:fill-blue-100/60"
                />
              </svg>

              {/* 2-Arrow Circular Loop Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-[#003B95] group-hover:text-blue-700 transition-colors">
                <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M16 21h5v-5" />
                </svg>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-900 mb-2.5 group-hover:text-[#003B95] transition-colors">
              CUSTOMER REACTIVATION
            </h3>
            <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed font-normal max-w-xs">
              We re-engage your existing customers and bring them back for more with personalized campaigns and smart communication.
            </p>
          </div>

          {/* 3. Marketing Automation */}
          <div 
            onClick={() => onSelectSolution(solutionsData[2])}
            className="group cursor-pointer flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
          >
            {/* Hexagon with Cursor Pointer Icon */}
            <div className="relative w-24 h-28 sm:w-28 sm:h-32 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 115.47" className="w-full h-full drop-shadow-sm">
                <polygon
                  points="50 2, 98 29.87, 98 85.6, 50 113.47, 2 85.6, 2 29.87"
                  className="fill-blue-50 stroke-[#003B95] stroke-[2.5] transition-colors group-hover:fill-blue-100/60"
                />
              </svg>

              {/* Cursor Mouse Arrow Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-[#003B95] group-hover:text-blue-700 transition-colors">
                <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3l7 18 3.5-7.5L21 10 3 3z" />
                </svg>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-slate-900 mb-2.5 group-hover:text-[#003B95] transition-colors">
              MARKETING AUTOMATION
            </h3>
            <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed font-normal max-w-xs">
              We automate your marketing and sales processes to save time, reduce manual work, and improve results across every touchpoint.
            </p>
          </div>

        </div>

        {/* Action Button: VIEW OUR SERVICES */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              if (onViewAllServices) {
                onViewAllServices();
              } else {
                onSelectSolution(solutionsData[0]);
              }
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#162235] hover:bg-[#1f2e45] active:bg-[#131b2b] text-white border border-[#1e2e46] font-bold text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>VIEW OUR SERVICES</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>

    </section>
  );
};


