import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { VetClinicsDetailedSection } from './VetClinicsDetailedSection';
import { 
  Check,
  X
} from 'lucide-react';

interface IndustriesPageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
}

interface IndustryItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  iconEmoji: string;
  roadblocks: string[];
  solutions: string[];
  deliverables: {
    num: string;
    title: string;
    description: string;
  }[];
}

const industriesData: IndustryItem[] = [
  {
    id: 'hospitality',
    name: 'Hotels & Resorts',
    category: 'HOSPITALITY',
    tagline: 'Direct guest bookings, seasonal staycation campaigns & commission savings',
    iconEmoji: '🏨',
    roadblocks: [
      'Surrendering 18–25% of top-line revenue to OTA commissions (Booking.com, Expedia)',
      'Severe revenue drops during mid-week and traditional off-peak travel months',
      'Underutilized photography and lack of compelling vertical video for social discovery'
    ],
    solutions: [
      'Direct booking website engines offering exclusive perks (free breakfast, early check-in)',
      'Optimizing Google Business profiles to maximize local visibility, search ranking, and direct guest inquiries',
      'Cinematic vertical video reels capturing pool, dining, and scenic room atmospheres',
      'Google Hotel Ads and geo-targeted travel intent search campaigns'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Direct Booking Funnels',
        description: 'Convert high-intent travelers directly without third-party commission cuts.'
      },
      {
        num: '02',
        title: 'Staycation Demand Engine',
        description: 'Target local urban professionals with curated weekend getaway staycation packages.'
      },
      {
        num: '03',
        title: 'Visual Experience Storytelling',
        description: 'Viral vertical video capturing amenities, views, and culinary offerings.'
      }
    ]
  },
  {
    id: 'tours-travel',
    name: 'Tours & Travel',
    category: 'TOURS & TRAVEL',
    tagline: 'Safari bookings, group tour sales & destination marketing for African travel brands',
    iconEmoji: '✈️',
    roadblocks: [
      'Over-reliance on aggregators like Booking.com eating into margins with commission fees',
      'Seasonal demand spikes leaving the business idle during off-peak months',
      'Generic marketing that fails to differentiate from hundreds of competing operators'
    ],
    solutions: [
      'Google Search Ads capturing travellers actively searching for safaris, tours, and packages in your destination',
      'Meta and TikTok video campaigns showcasing real experiences that convert browsers into eager bookers',
      'WhatsApp and email nurture sequences that follow up on enquiries and close hesitant leads'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Direct Booking Funnels',
        description: 'Paid and organic campaigns that redirect high-intent searchers away from aggregators straight to your booking engine.'
      },
      {
        num: '02',
        title: 'Off-Season Demand Campaigns',
        description: 'Targeted promotions and curated package offers that fill tour slots during traditionally slow travel periods.'
      },
      {
        num: '03',
        title: 'Experience-Led Content Engine',
        description: 'Video-first content strategy capturing real guest moments that build trust and drive organic bookings on autopilot.'
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    category: 'MEDICAL & WELLNESS',
    tagline: 'Patient acquisition, Google Maps local visibility & automated appointment bookings',
    iconEmoji: '🏥',
    roadblocks: [
      'Heavy reliance on unpredictable word-of-mouth with empty clinic appointment slots',
      'High patient no-show rates on unconfirmed telephone consultations',
      'Lost patient inquiries due to delayed responses during busy clinical hours'
    ],
    solutions: [
      'Google Maps 3-Pack local SEO optimization dominating "clinic near me" searches',
      'Automated 24/7 WhatsApp appointment booking and multi-step reminder sequences',
      'Specialist authority video reels highlighting doctor credentials and modern facilities',
      'Systematic review collection workflows to build 5-star Google clinic reputation'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Local Maps 3-Pack Engine',
        description: 'Dominate high-intent search queries for medical specialists and clinics in your exact area.'
      },
      {
        num: '02',
        title: 'WhatsApp Booking Assistant',
        description: '24/7 self-service consultation scheduling with automated reminder notifications.'
      },
      {
        num: '03',
        title: 'Doctor Authority Content',
        description: 'Educational video clips establishing clinical trust, safety, and modern treatment methods.'
      }
    ]
  },
  {
    id: 'vet-clinics',
    name: 'Vet Clinics',
    category: 'VETERINARY & ANIMAL HOSPITALS',
    tagline: 'High-Value Clinical Intent (HVCI) pet owner acquisition, Google Maps 3-Pack SEO & PIMS appointment booking automation',
    iconEmoji: '🐾',
    roadblocks: [
      'Ineffective generalist marketing with broad ad spend that fails to understand pet-owner search behavior, urgency triggers, and clinical intent',
      'The "Volume Trap" of low-value routine wellness visits exhausting veterinary staff while corporate consolidators drive up client acquisition costs',
      'Online invisibility in local search: failing to rank in the Google Maps 3-Pack or be cited as a recommended animal hospital by AI tools like ChatGPT and Google AI Overviews',
      'Fragmented booking workflows where phone tag, unconfirmed inquiries, and lack of PIMS software integration lead to empty exam slots'
    ],
    solutions: [
      'High-Value Clinical Intent (HVCI) campaigns targeting pet owners seeking specialty surgery, advanced diagnostics, animal healthcare, and chronic disease management',
      'Multi-channel veterinary advertising across Google Search Ads, Google Local Services Ads (LSA), Meta (Facebook & Instagram), and WhatsApp direct booking campaigns',
      'Google Business Review Optimization & Maps 3-Pack positioning with automated 5-star review collection and reputation management',
      'AI-First Veterinary SEO & Google Maps optimization with Neural Entity Mapping (NEM) so your hospital is cited by search engines and dominates "emergency vet near me"',
      '100% transparent reporting on confirmed appointment inquiries, cost per new client, and direct clinical revenue attribution with full account ownership'
    ],
    deliverables: [
      {
        num: '01',
        title: 'High-Value Clinical Intent (HVCI) Engine',
        description: 'Engineered ad funnels on Google, Meta, and WhatsApp capturing high-production clinical cases like specialty surgery, animal care, and advanced diagnostics.'
      },
      {
        num: '02',
        title: 'AI-First Veterinary SEO & Local Maps 3-Pack',
        description: 'Dominate local "emergency vet near me" map searches with Neural Entity Mapping that positions your animal hospital as the top cited choice in Google AI Overviews & ChatGPT.'
      },
      {
        num: '03',
        title: 'PIMS Direct Booking Integration',
        description: 'Automated integration with Covetrus, IDEXX Neo, Cornerstone, or ezyVet converting high-intent pet owners into confirmed calendar exam appointments.'
      }
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    category: 'HIGH-VALUE ASSET SALES',
    tagline: 'High-intent buyer acquisition, diaspora investor funnels & project launch marketing',
    iconEmoji: '🏗️',
    roadblocks: [
      'High volume of low-intent "tire-kicker" leads overwhelming sales agents',
      'Prolonged buying cycles without systematic multi-touch automated nurturing',
      'High advertising cost per lead on unsegmented social campaigns'
    ],
    solutions: [
      'Pre-qualification lead funnels verifying budget and financing readiness before routing',
      'Automated WhatsApp property brochures, virtual tours, and site visit booking triggers',
      'Google Search campaigns capturing urgent high-intent "apartments for sale" buyers'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Pre-Qualified Buyer Funnels',
        description: 'Budget-filtered inquiry capture with instant WhatsApp CRM routing straight to sales reps.'
      },
      {
        num: '02',
        title: 'Diaspora Acquisition Blitz',
        description: 'Geo-targeted investor campaigns across high-income expat corridors looking to buy back home.'
      },
      {
        num: '03',
        title: 'Site Tour Booking Engine',
        description: 'Frictionless calendar scheduling for physical and virtual site visits that increase show rates.'
      }
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional & Legal Services',
    category: 'B2B & ADVISORY',
    tagline: 'Client acquisition for law firms, accounting consultancies & corporate advisors',
    iconEmoji: '⚖️',
    roadblocks: [
      'Difficulty articulating complex high-ticket advisory value online',
      'Unproductive initial consultations with low-budget or non-target prospects',
      'Outdated static websites that fail to position partners as modern industry leaders'
    ],
    solutions: [
      'High-converting practice area landing pages showcasing sector case studies',
      'Intent-driven Google Search ads capturing commercial legal and financial keywords',
      'Automated pre-consultation questionnaires filtering for budget and corporate size'
    ],
    deliverables: [
      {
        num: '01',
        title: 'High-Ticket Practice Funnels',
        description: 'Dedicated landing experiences tailored to specific corporate advisory practice areas.'
      },
      {
        num: '02',
        title: 'Inbound Retainer Engine',
        description: 'Consistent pipeline of high-margin corporate retainers rather than one-off inquiries.'
      }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    category: 'RETAIL & COMMERCE',
    tagline: 'ROAS-driven Meta & TikTok catalog ads, checkout conversion & retention loops',
    iconEmoji: '🛍️',
    roadblocks: [
      'Rising ad costs eroding product margins across generic Facebook/Instagram ads',
      'High mobile cart abandonment and drop-offs during M-Pesa or card checkout',
      'Low customer lifetime value with one-and-done shoppers never returning'
    ],
    solutions: [
      'Dynamic Product Catalog ads on Meta & TikTok retargeting view-to-cart visitors',
      'Automated WhatsApp cart abandonment sequences with 1-click M-Pesa payment links',
      'High-velocity video ads showing real product demonstrations and unboxings',
      'VIP customer retention loops with replenishment reminders and loyalty perks'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Dynamic Catalog Ad Scaling',
        description: 'High-ROAS retargeting campaigns showcasing recently viewed items to eager buyers.'
      },
      {
        num: '02',
        title: 'M-Pesa Cart Recovery Bot',
        description: 'Automated WhatsApp prompts recovering abandoned mobile shopping carts in minutes.'
      },
      {
        num: '03',
        title: 'High-Converting Video Engine',
        description: 'Authentic creator demonstrations driving product discovery and rapid impulse sales.'
      }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    category: 'EDTECH & TRAINING',
    tagline: 'Student intake marketing, open-day webinar funnels & enrollment follow-ups',
    iconEmoji: '🎓',
    roadblocks: [
      'Seasonal enrollment crunches with unfilled seats as intake deadlines approach',
      'Prospective students and parents dropping off halfway through long application forms',
      'High cost per lead with weak follow-up allowing interested candidates to go cold'
    ],
    solutions: [
      'Time-sensitive intake sprint campaigns across TikTok, Meta, and Google Search',
      'Automated WhatsApp admissions advisor answering tuition, syllabus, and visa FAQs',
      'Live masterclass and virtual open-day funnels providing proof of career outcomes'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Intake Sprint Campaigns',
        description: 'High-urgency multi-channel blitzes filling cohorts 30–60 days before semester start.'
      },
      {
        num: '02',
        title: 'WhatsApp Admissions Advisor',
        description: 'Instant automated answers to fee structures, schedules, and campus tour bookings.'
      }
    ]
  }
];

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onBackToHome,
  onRequestAudit,
  onNavigate
}) => {
  // Default to hospitality (Hotels & Resorts)
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('hospitality');

  const activeIndustry = industriesData.find(i => i.id === selectedIndustryId) || industriesData[0];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] text-slate-800 selection:bg-[#DE8E53] selection:text-white pb-16 md:pb-0">
      
      {/* Navigation */}
      <Navbar 
        activeSection="industries"
        onRequestAudit={onRequestAudit}
        onNavigate={onNavigate}
      />

      {/* Main Workspace Layout */}
      <main className="flex-1 pt-14 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-5 sm:space-y-6">
        
        {/* Top Horizontal Industry Selector (Desktop & Mobile) */}
        <div className="w-full">
          {/* Scrollable / wrapped pill container */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-1 scrollbar-none snap-x lg:flex-wrap">
            {industriesData.map((ind) => {
              const isSelected = ind.id === selectedIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustryId(ind.id)}
                  className={`snap-start shrink-0 flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border select-none ${
                    isSelected
                      ? 'bg-[#0B132B] text-[#DE8E53] border-[#0B132B] shadow-sm ring-2 ring-amber-500/30'
                      : 'bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <span className="text-base sm:text-lg">{ind.iconEmoji}</span>
                  <span className="whitespace-nowrap">{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Card Directly Underneath Top Selector */}
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {activeIndustry.id === 'vet-clinics' ? (
              <motion.div
                key="vet-clinics-detailed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <VetClinicsDetailedSection 
                  onRequestAudit={onRequestAudit}
                  onNavigate={onNavigate}
                />
              </motion.div>
            ) : (
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-6 sm:p-8 space-y-6"
              >
                {/* Header Info */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {activeIndustry.name}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mt-1.5 leading-relaxed max-w-4xl">
                    {activeIndustry.tagline}
                  </p>
                </div>

                {/* Roadblocks vs How Aceso Solves It */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-5 border-t border-b border-slate-100">
                  
                  {/* Left: Common Roadblocks */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="text-xs font-bold tracking-wider uppercase text-slate-500">
                      COMMON ROADBLOCKS
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-snug">
                      {activeIndustry.roadblocks.map((rb, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold">
                            ✕
                          </span>
                          <span>{rb}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: How Aceso Solves It */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="text-xs font-bold tracking-wider uppercase text-slate-500">
                      HOW ACESO SOLVES IT
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-snug">
                      {activeIndustry.solutions.map((sol, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                            ✓
                          </span>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Core Growth Deliverables */}
                <div className="space-y-3 pt-1">
                  <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400">
                    CORE GROWTH DELIVERABLES
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                    {activeIndustry.deliverables.map((del, idx) => (
                      <div key={idx} className="space-y-1.5 bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md bg-amber-500/15 text-[#C25E00] font-bold text-[11px] flex items-center justify-center shrink-0 font-mono">
                            {del.num}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                            {del.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {del.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer from Home */}
      <Footer 
        onNavigate={onNavigate}
        onRequestAudit={onRequestAudit}
      />

    </div>
  );
};

