import React, { useState } from 'react';
import { 
  Megaphone, 
  RotateCw, 
  Settings2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SolutionItem } from '../types';

interface SolutionsProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'acquisition',
    stepNumber: '1',
    title: '1. Customer Acquisition',
    description: 'We help you get discovered by the right people and turn them into new customers.',
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
    detailedDescription: 'Turn cold audiences into predictable, high-intent revenue with tailored omnichannel paid and organic customer acquisition engines designed specifically for SME economics in East Africa and beyond.',
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
    stepNumber: '2',
    title: '2. Customer Reactivation',
    description: 'We re-engage your existing customers and bring them back for more.',
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
    detailedDescription: 'Your existing database is a goldmine. We design personalized, high-deliverability WhatsApp, SMS, and email reactivation workflows that resurrect dormant contacts and drive repeat bookings at minimal cost.',
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
    stepNumber: '3',
    title: '3. Marketing Automation',
    description: 'We automate your marketing and sales processes to save time and improve results.',
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
    detailedDescription: 'Stop losing leads to slow response times. We build 24/7 intelligent CRM and Zapier/Make automation bridges that instantly qualify leads, send WhatsApp booking reminders, and sync data seamlessly.',
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
  const [activeTab, setActiveTab] = useState<string>('acquisition');

  const renderSolutionCard = (sol: SolutionItem) => (
    <div
      key={sol.id}
      className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 flex flex-col justify-between transition-all duration-300 group"
    >
      <div>
        {/* Icon header */}
        <div className="mb-4 sm:mb-5">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${sol.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 duration-200`}>
            {sol.iconType === 'acquisition' && <Megaphone className="w-6 h-6 sm:w-7 sm:h-7" />}
            {sol.iconType === 'reactivation' && <RotateCw className="w-6 h-6 sm:w-7 sm:h-7" />}
            {sol.iconType === 'automation' && <Settings2 className="w-6 h-6 sm:w-7 sm:h-7" />}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
          {sol.title}
        </h3>

        {/* Short description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
          {sol.description}
        </p>

        {/* Checklist */}
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          {sol.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                sol.iconType === 'acquisition' ? 'text-blue-600' :
                sol.iconType === 'reactivation' ? 'text-emerald-600' : 'text-purple-600'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current/20 text-current" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-3 sm:pt-4 border-t border-slate-100">
        <button
          onClick={() => onSelectSolution(sol)}
          className={`inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm transition-colors cursor-pointer group-hover:underline ${
            sol.iconType === 'acquisition' ? 'text-blue-600 hover:text-blue-700' :
            sol.iconType === 'reactivation' ? 'text-emerald-600 hover:text-emerald-700' : 'text-purple-600 hover:text-purple-700'
          }`}
        >
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
          OUR CORE SOLUTIONS
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive growth services built for SMEs
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mt-2 sm:mt-3">
          From first impression to long-term repeat client, we engineer the systems that scale your revenue predictably.
        </p>
      </div>

      {/* Mobile Segmented Switcher (< md) */}
      <div className="md:hidden mb-6">
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('acquisition')}
            className={`flex-1 py-2 px-1 text-center rounded-lg transition-all ${
              activeTab === 'acquisition' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Acquisition
          </button>
          <button
            onClick={() => setActiveTab('reactivation')}
            className={`flex-1 py-2 px-1 text-center rounded-lg transition-all ${
              activeTab === 'reactivation' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Reactivation
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`flex-1 py-2 px-1 text-center rounded-lg transition-all ${
              activeTab === 'automation' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Automation
          </button>
        </div>
      </div>

      {/* Mobile View (< md) */}
      <div className="md:hidden">
        {solutionsData
          .filter((s) => s.id === activeTab)
          .map((s) => renderSolutionCard(s))}
      </div>

      {/* Desktop/Tablet 3 Pillars Grid (>= md) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
        {solutionsData.map((sol) => renderSolutionCard(sol))}
      </div>
    </section>
  );
};
