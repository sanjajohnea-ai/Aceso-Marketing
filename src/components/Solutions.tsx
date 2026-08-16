import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SolutionItem } from '../types';

interface SolutionsProps {
  onSelectSolution: (solution: SolutionItem) => void;
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

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  return (
    <section id="services" className="py-6 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-4 sm:mb-8 lg:mb-10">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-1 sm:mb-2">
          OUR CORE SOLUTIONS
        </p>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Digital growth solutions built around your business
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-3xl mx-auto mt-1.5 sm:mt-2 leading-relaxed">
          We help SMEs attract more customers, reactivate existing ones, and automate marketing processes so you can grow sustainably and increase revenue.
        </p>
      </div>

      {/* Solutions List */}
      <div className="divide-y divide-slate-200/80">
        
        {/* 01 Customer Acquisition */}
        <div className="py-4 sm:py-8 first:pt-0 last:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-6 lg:gap-8 items-start lg:items-center">
            
            {/* Number 01 */}
            <div className="lg:col-span-2 flex items-center lg:items-start gap-2.5">
              <span className="text-2xl sm:text-5xl lg:text-6xl font-black text-blue-600 tracking-tight">
                01
              </span>
              <span className="lg:hidden text-base sm:text-2xl font-black text-slate-900 tracking-tight">
                Customer Acquisition
              </span>
            </div>

            {/* Content (Title, Tagline, Paragraph) */}
            <div className="lg:col-span-7 space-y-1">
              <h3 className="hidden lg:block text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Customer Acquisition
              </h3>
              <p className="text-xs sm:text-base font-bold text-blue-600">
                Bring more of the right customers to your business.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                We help you attract new customers through social media marketing, Meta and Google advertising, SEO, content marketing, landing pages, and lead generation. Our focus is turning attention into qualified enquiries and customers.
              </p>
            </div>

            {/* Explore Link */}
            <div className="lg:col-span-3 flex lg:justify-end items-center pt-1.5 lg:pt-0">
              <button
                onClick={() => onSelectSolution(solutionsData[0])}
                className="inline-flex items-center gap-1.5 text-xs sm:text-base font-bold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer"
              >
                <span>Explore Customer Acquisition</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

        {/* 02 Customer Reactivation */}
        <div className="py-4 sm:py-8 first:pt-0 last:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-6 lg:gap-8 items-start lg:items-center">
            
            {/* Number 02 */}
            <div className="lg:col-span-2 flex items-center lg:items-start gap-2.5">
              <span className="text-2xl sm:text-5xl lg:text-6xl font-black text-emerald-600 tracking-tight">
                02
              </span>
              <span className="lg:hidden text-base sm:text-2xl font-black text-slate-900 tracking-tight">
                Customer Reactivation
              </span>
            </div>

            {/* Content (Title, Tagline, Paragraph) */}
            <div className="lg:col-span-7 space-y-1">
              <h3 className="hidden lg:block text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Customer Reactivation
              </h3>
              <p className="text-xs sm:text-base font-bold text-emerald-600">
                Turn existing and inactive customers into repeat business.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                Your existing customer database can be one of your most valuable marketing assets. We identify opportunities to reconnect with past customers through email, SMS, WhatsApp campaigns, follow-ups, and targeted reactivation campaigns.
              </p>
            </div>

            {/* Explore Link */}
            <div className="lg:col-span-3 flex lg:justify-end items-center pt-1.5 lg:pt-0">
              <button
                onClick={() => onSelectSolution(solutionsData[1])}
                className="inline-flex items-center gap-1.5 text-xs sm:text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors group cursor-pointer"
              >
                <span>Explore Customer Reactivation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

        {/* 03 Marketing Automation */}
        <div className="py-4 sm:py-8 first:pt-0 last:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-6 lg:gap-8 items-start lg:items-center">
            
            {/* Number 03 */}
            <div className="lg:col-span-2 flex items-center lg:items-start gap-2.5">
              <span className="text-2xl sm:text-5xl lg:text-6xl font-black text-purple-600 tracking-tight">
                03
              </span>
              <span className="lg:hidden text-base sm:text-2xl font-black text-slate-900 tracking-tight">
                Marketing Automation
              </span>
            </div>

            {/* Content (Title, Tagline, Paragraph) */}
            <div className="lg:col-span-7 space-y-1">
              <h3 className="hidden lg:block text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Marketing Automation
              </h3>
              <p className="text-xs sm:text-base font-bold text-purple-600">
                Make your marketing work harder with less manual effort.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                We connect the tools your business already uses to automate lead nurturing, customer follow-ups, appointment reminders, reporting, CRM workflows, and other repetitive marketing processes.
              </p>
            </div>

            {/* Explore Link */}
            <div className="lg:col-span-3 flex lg:justify-end items-center pt-1.5 lg:pt-0">
              <button
                onClick={() => onSelectSolution(solutionsData[2])}
                className="inline-flex items-center gap-1.5 text-xs sm:text-base font-bold text-purple-600 hover:text-purple-700 transition-colors group cursor-pointer"
              >
                <span>Explore Marketing Automation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

