import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { 
  Building2, 
  Stethoscope, 
  Briefcase, 
  ShoppingBag, 
  Hotel, 
  Wrench, 
  Cpu, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  BarChart3,
  Calendar,
  MessageSquare,
  Sparkles,
  Search,
  Share2,
  PhoneCall,
  Check,
  ChevronRight,
  Layers
} from 'lucide-react';

interface IndustriesPageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
}

interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  icon: React.ElementType;
  badgeColor: string;
  accentBg: string;
  challenges: string[];
  solutions: string[];
  growthPillars: {
    title: string;
    description: string;
  }[];
  keyMetrics: {
    label: string;
    value: string;
  }[];
}

const industriesData: IndustryItem[] = [
  {
    id: 'real-estate',
    name: 'Real Estate & Property Developers',
    tagline: 'High-intent buyer acquisition, project launch funnels & investor lead qualification',
    category: 'High-Value Asset Sales',
    icon: Building2,
    badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
    accentBg: 'from-blue-600 to-indigo-700',
    challenges: [
      'High cost per lead with unverified or low-budget inquiries',
      'Long sales cycles requiring continuous trust building',
      'Standing out among generic listing portals (BuyRent, Property24)'
    ],
    solutions: [
      'Pre-qualified buyer lead funnels with built-in budget verification',
      'Hyper-targeted Meta & Google Search campaigns for diaspora & local investors',
      'Virtual walkthrough video ads and automated WhatsApp brochures',
      'CRM integration with instant SMS & sales rep call triggers'
    ],
    growthPillars: [
      {
        title: 'Diaspora & High-Net-Worth Targeting',
        description: 'Custom audiences targeting expats and high-income earners looking to invest in verified Kenyan real estate.'
      },
      {
        title: 'Automated Buyer Qualification',
        description: 'WhatsApp bots that filter prospects by price range, preferred location, and financing readiness in real-time.'
      },
      {
        title: 'Project Launch Blitz Campaigns',
        description: 'Multi-channel digital launch strategies that fill off-plan waitlists before construction breaks ground.'
      }
    ],
    keyMetrics: [
      { label: 'Avg. Qualified Lead Rate', value: '42% Higher' },
      { label: 'Lead Response Time', value: '< 2 Mins' },
      { label: 'Cost Per Tour Booking', value: '-35%' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare, Clinics & Medical Practices',
    tagline: 'Patient acquisition, Google Maps local visibility & automated appointment bookings',
    category: 'Medical & Wellness',
    icon: Stethoscope,
    badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    accentBg: 'from-emerald-600 to-teal-700',
    challenges: [
      'Heavy reliance on word-of-mouth with unpredictable appointment flow',
      'High no-show rates on unconfirmed telephone bookings',
      'Strict advertising compliance and healthcare privacy guidelines'
    ],
    solutions: [
      'Google Maps 3-Pack local SEO to dominate "near me" medical searches',
      'Frictionless online appointment booking with automated WhatsApp confirmations',
      'Doctor & specialist authority video clips highlighting trust and expertise',
      'Automated review generation to build 5-star Google reputation'
    ],
    growthPillars: [
      {
        title: 'Local Patient Search Dominance',
        description: 'Optimizing your clinic profile so patients searching for dental, optical, pediatric, or specialist care call you first.'
      },
      {
        title: 'Zero-Friction WhatsApp Bookings',
        description: 'Direct WhatsApp booking systems that eliminate phone queues and reduce consultation no-show rates.'
      },
      {
        title: 'Reputation & Patient Trust Engine',
        description: 'Ethical review generation workflows that systematically collect positive patient feedback on Google.'
      }
    ],
    keyMetrics: [
      { label: 'Map 3-Pack Impressions', value: '+280%' },
      { label: 'No-Show Reduction', value: '65% Down' },
      { label: 'New Patient Inquiries', value: '3.2x Monthly' }
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional & Legal Services',
    tagline: 'Client acquisition for law firms, accounting consultancies & corporate advisors',
    category: 'B2B & Advisory',
    icon: Briefcase,
    badgeColor: 'text-purple-700 bg-purple-50 border-purple-100',
    accentBg: 'from-purple-600 to-indigo-800',
    challenges: [
      'Difficulty articulating high-ticket advisory value online',
      'Long consultation cycles with tire-kicker leads',
      'Outdated static websites that fail to establish modern market authority'
    ],
    solutions: [
      'Authority-driven LinkedIn campaigns targeting CEOs, CFOs, and founders',
      'High-converting case study and practice area landing pages',
      'Targeted Google Search ads capturing high-intent commercial keywords',
      'Automated consultation scheduling with pre-qualification forms'
    ],
    growthPillars: [
      {
        title: 'Executive Thought Leadership',
        description: 'Positioning your partners and consultants as top industry voices through strategic content and PR-style distribution.'
      },
      {
        title: 'Intent-Driven Search Capture',
        description: 'Ranking for high-value search terms like "corporate tax advisor Nairobi" or "commercial dispute lawyer Mombasa".'
      },
      {
        title: 'Retainer Client Pipelines',
        description: 'Inbound funnels engineered specifically to attract ongoing corporate retainers rather than one-off inquiries.'
      }
    ],
    keyMetrics: [
      { label: 'Corporate Retainer Inquiries', value: '2.5x Growth' },
      { label: 'Consultation Show Rate', value: '88%' },
      { label: 'C-Suite Lead Quality', value: '94% Match' }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Direct-to-Consumer (D2C)',
    tagline: 'ROAS-driven Meta & TikTok catalog ads, checkout conversion & retention loops',
    category: 'Retail & Commerce',
    icon: ShoppingBag,
    badgeColor: 'text-rose-700 bg-rose-50 border-rose-100',
    accentBg: 'from-rose-600 to-pink-700',
    challenges: [
      'Rising ad costs eating into product profit margins',
      'High cart abandonment on mobile checkouts and M-Pesa payments',
      'Low customer lifetime value (LTV) and weak repeat purchase rates'
    ],
    solutions: [
      'High-ROAS Meta & TikTok Dynamic Product Catalog ad campaigns',
      'Optimized lightning-fast product pages with seamless M-Pesa integration',
      'Automated WhatsApp & Email abandoned cart recovery sequences',
      'VIP customer retention and post-purchase replenishment loops'
    ],
    growthPillars: [
      {
        title: 'Creative-Led Paid Acquisition',
        description: 'Short-form UGC video ads and creator hooks that stop the scroll and drive impulse buying on Instagram and TikTok.'
      },
      {
        title: 'M-Pesa Cart Recovery Engine',
        description: 'Automated WhatsApp prompts sent 15 minutes after cart abandonment with one-click M-Pesa checkout links.'
      },
      {
        title: 'Customer Lifetime Value Maximizer',
        description: 'Segmented email and SMS campaigns that turn one-time shoppers into frequent repeat buyers.'
      }
    ],
    keyMetrics: [
      { label: 'Blended Return On Ad Spend', value: '4.2x ROAS' },
      { label: 'Cart Recovery Conversion', value: '28%' },
      { label: 'Repeat Purchase Rate', value: '+45%' }
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality, Hotels & Tourism',
    tagline: 'Direct booking engines, high-impact video reels & international traveler acquisition',
    category: 'Travel & Leisure',
    icon: Hotel,
    badgeColor: 'text-amber-700 bg-amber-50 border-amber-100',
    accentBg: 'from-amber-600 to-orange-700',
    challenges: [
      'Losing 18–25% of revenue to OTA commissions (Booking.com, Airbnb)',
      'Low off-season occupancy rates',
      'Underutilized visual assets and lack of high-converting social video'
    ],
    solutions: [
      'Direct booking website experiences with exclusive direct-rate incentives',
      'Seasonal promotional campaigns for local weekenders and holiday travelers',
      'Cinematic Instagram Reels & TikTok content highlighting room amenities and experiences',
      'Google Hotel Ads and geo-targeted travel intent marketing'
    ],
    growthPillars: [
      {
        title: 'OTA Commission Reduction',
        description: 'Shifting guest bookings from expensive third-party platforms directly to your branded website.'
      },
      {
        title: 'Seasonal Demand Stimulation',
        description: 'Dynamic offers, staycation packages, and conference packages deployed ahead of off-peak months.'
      },
      {
        title: 'Experiential Social Storytelling',
        description: 'Immersive visual content showcasing dining, beach/safari views, and guest experiences to inspire travel bookings.'
      }
    ],
    keyMetrics: [
      { label: 'Direct Booking Share', value: '55% of Total' },
      { label: 'OTA Commission Saved', value: 'Up to 20%' },
      { label: 'Off-Peak Occupancy', value: '+30%' }
    ]
  },
  {
    id: 'home-services',
    name: 'Home Services & Construction',
    tagline: 'Exclusive local contractor leads, quote funnels & Google Maps 3-Pack rank',
    category: 'Trades & Services',
    icon: Wrench,
    badgeColor: 'text-cyan-700 bg-cyan-50 border-cyan-100',
    accentBg: 'from-cyan-600 to-blue-700',
    challenges: [
      'Shared leads from directories that force price wars with competitors',
      'Missing high-intent emergency service calls after business hours',
      'Difficulty showcasing before-and-after project quality online'
    ],
    solutions: [
      'Exclusive Google Search campaigns capturing urgent "call now" service inquiries',
      'Custom instant quote calculators and visual project portfolio galleries',
      '24/7 automated WhatsApp lead capture and job quote dispatch',
      'Automated customer review requests right after job completion'
    ],
    growthPillars: [
      {
        title: 'Exclusive High-Margin Leads',
        description: '100% proprietary inquiries delivered straight to your phone—never shared with competitor contractors.'
      },
      {
        title: 'Emergency Call-Only Campaigns',
        description: 'Mobile-first Google Ads that immediately connect distressed homeowners directly to your dispatch team.'
      },
      {
        title: 'Social Proof & Project Portfolios',
        description: 'High-contrast before/after video galleries proving quality and justifying premium pricing.'
      }
    ],
    keyMetrics: [
      { label: 'Lead Close Rate', value: '38% Avg' },
      { label: 'Google Review Rating', value: '4.9 ★' },
      { label: 'Cost Per Quote Request', value: '-40%' }
    ]
  },
  {
    id: 'technology-saas',
    name: 'Technology, SaaS & Startups',
    tagline: 'B2B demo booking pipelines, product-led funnels & CAC optimization',
    category: 'Tech & Software',
    icon: Cpu,
    badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-100',
    accentBg: 'from-indigo-600 to-violet-700',
    challenges: [
      'High customer acquisition cost (CAC) on competitive tech keywords',
      'Low trial-to-paid conversion rates and user churn',
      'Explaining complex technical value propositions quickly to decision-makers'
    ],
    solutions: [
      'High-converting product demo landing pages with interactive walkthroughs',
      'LinkedIn Account-Based Marketing (ABM) targeting specific enterprise companies',
      'Automated email nurture sequences tailored to user onboarding milestones',
      'Google Search campaigns focused on high-intent software comparison terms'
    ],
    growthPillars: [
      {
        title: 'Qualified Demo Generation',
        description: 'Automating the qualification and scheduling of enterprise software demos directly with sales engineers.'
      },
      {
        title: 'Product-Led Onboarding Funnels',
        description: 'Trigger-based messaging that guides new signups to their "aha!" moment in the first 48 hours.'
      },
      {
        title: 'Competitor Alternative Campaigns',
        description: 'Capturing prospects actively seeking alternatives to expensive global software platforms.'
      }
    ],
    keyMetrics: [
      { label: 'Demo-to-Opportunity', value: '46%' },
      { label: 'Trial Activation Rate', value: '+35%' },
      { label: 'Customer Acquisition Cost', value: '-28%' }
    ]
  },
  {
    id: 'education',
    name: 'Education, Training & Academies',
    tagline: 'Student intake marketing, open-day webinar funnels & enrollment follow-ups',
    category: 'EdTech & Learning',
    icon: GraduationCap,
    badgeColor: 'text-teal-700 bg-teal-50 border-teal-100',
    accentBg: 'from-teal-600 to-emerald-700',
    challenges: [
      'Seasonal enrollment crunches with empty seats in upcoming intakes',
      'Parents & students dropping out of prolonged application processes',
      'High cost per student enrollment across traditional media channels'
    ],
    solutions: [
      'Intake sprint campaigns across Meta, TikTok, and Google to drive prospect applications',
      'Automated WhatsApp admission advisor bot answering FAQs & sending course brochures',
      'Live masterclass / Open Day webinar funnels to build trust with parents and learners',
      'Retargeting campaigns focused on scholarship and early-bird deadlines'
    ],
    growthPillars: [
      {
        title: 'Intake Sprint Campaigns',
        description: 'Time-sensitive campaigns engineered to fill classrooms 30–60 days before new semester start dates.'
      },
      {
        title: 'WhatsApp Admission Bot',
        description: 'Instant answers to fee structures, entry requirements, and campus tours 24 hours a day.'
      },
      {
        title: 'Alumni & Graduate Proof Assets',
        description: 'Showcasing real student career outcomes and hiring success stories to eliminate decision friction.'
      }
    ],
    keyMetrics: [
      { label: 'Application Completion', value: '+52%' },
      { label: 'Cost Per Enrolled Student', value: '-48%' },
      { label: 'Intake Fill Velocity', value: '2.5x Faster' }
    ]
  }
];

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onBackToHome,
  onRequestAudit,
  onNavigate
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(industriesData[0].id);

  const activeIndustry = industriesData.find(i => i.id === selectedIndustryId) || industriesData[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-blue-600 selection:text-white">
      
      {/* Navigation */}
      <Navbar 
        activeSection="industries"
        onRequestAudit={onRequestAudit}
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-24">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-12 sm:pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Specialized Sector Systems</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight sm:leading-tight">
            Industries We Help <span className="text-blue-600">Grow & Dominate</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Generic marketing produces generic results. We build customized, high-converting digital acquisition funnels engineered around the exact unit economics of your industry.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-10">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
              <div className="text-xl sm:text-2xl font-black text-slate-900">8+</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Specialized Sectors</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
              <div className="text-xl sm:text-2xl font-black text-blue-600">3.8x</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Average Client ROI</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-600">&lt; 2 Mins</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Lead Response Automations</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
              <div className="text-xl sm:text-2xl font-black text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Exclusive Lead Ownership</div>
            </div>
          </div>
        </section>

        {/* Industry Interactive Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Industry Horizontal Selector / Pill Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 pt-1 scrollbar-none no-scrollbar snap-x">
            {industriesData.map((ind) => {
              const Icon = ind.icon;
              const isSelected = ind.id === selectedIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustryId(ind.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer snap-start ${
                    isSelected 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-[1.02]' 
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Deep-Dive Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 mt-4 transition-all">
            
            {/* Header of Active Industry */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
                  <activeIndustry.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap mb-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${activeIndustry.badgeColor}`}>
                      {activeIndustry.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {activeIndustry.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                    {activeIndustry.tagline}
                  </p>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="shrink-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={onRequestAudit}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/15 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get {activeIndustry.name.split(' ')[0]} Growth Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Metrics Highlight Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6 py-4 px-5 rounded-2xl bg-slate-50/80 border border-slate-100">
              {activeIndustry.keyMetrics.map((m, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0 border border-slate-200/80 font-black text-xs shadow-2xs">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-slate-900">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 2-Column: Challenges vs Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              
              {/* Challenges Card */}
              <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-100">
                <h3 className="text-sm font-black text-rose-900 uppercase tracking-wider mb-3.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>Common Industry Roadblocks</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {activeIndustry.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✕</span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions Card */}
              <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
                <h3 className="text-sm font-black text-emerald-900 uppercase tracking-wider mb-3.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>How Aceso Solves It</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {activeIndustry.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Growth Pillars */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                Core Growth Deliverables
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeIndustry.growthPillars.map((p, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors">
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span>{p.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* All Industries Grid Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Explore All 8 Core Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Click any industry card below to inspect its dedicated growth system, deliverables, and metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industriesData.map((ind) => {
              const Icon = ind.icon;
              const isCurrent = ind.id === selectedIndustryId;
              return (
                <div
                  key={ind.id}
                  onClick={() => {
                    setSelectedIndustryId(ind.id);
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    isCurrent
                      ? 'bg-blue-50/60 border-blue-300 ring-2 ring-blue-500/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 text-slate-700 flex items-center justify-center mb-3.5 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                      {ind.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {ind.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                    <span>View Blueprint</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Banner: Don't See Your Industry? */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="bg-[#061224] rounded-3xl p-8 sm:p-12 text-white border border-[#0d2244] relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#38bdf8] block mb-1">
                Custom SME Architectures
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Don’t see your exact industry listed?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Our core customer acquisition, local SEO, and revenue automation frameworks apply directly to any B2B or B2C enterprise selling high-value goods or services.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onRequestAudit}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Industry Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/254758544241?text=Hi%20Aceso%20Solutions,%20I'd%20like%20to%20inquire%20about%20growth%20systems%20for%20my%20industry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#0e213d] hover:bg-[#1a3866] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat with Strategist</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer 
        onNavigate={onNavigate}
        onRequestAudit={onRequestAudit}
      />

    </div>
  );
};
