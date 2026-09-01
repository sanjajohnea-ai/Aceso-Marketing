import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { VetClinicsDetailedSection } from './VetClinicsDetailedSection';
import { IndustryDetailedSection } from './IndustryDetailedSection';
import { 
  Check,
  X
} from 'lucide-react';

export interface IndustryItem {
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

export const industriesData: IndustryItem[] = [
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
    id: 'dental-clinics',
    name: 'Dental Clinics',
    category: 'DENTAL & ORAL HEALTH',
    tagline: 'High-value patient acquisition, cosmetic & restorative dental campaigns, Google Maps 3-Pack & WhatsApp appointment scheduling',
    iconEmoji: '🦷',
    roadblocks: [
      'Over-reliance on low-margin routine cleanings while missing high-production implant, aligner, and cosmetic dentistry cases',
      'High patient cancellation and no-show rates causing unpredictable chair downtime',
      'Invisibility in local search when prospective patients search "dentist near me" or "teeth whitening Nairobi"',
      'Front desk staff overwhelmed with phone calls leading to missed inquiries during busy clinical hours and after-hours'
    ],
    solutions: [
      'Targeted Google Search & Meta Ads campaigns for high-margin procedures (dental implants, Invisalign/aligners, veneers, cosmetic whitening)',
      'Google Maps 3-Pack Local SEO optimization positioning your dental practice at the top of local suburban searches',
      'Automated 24/7 WhatsApp AI booking assistant confirming appointments and sending automated pre-visit reminder sequences',
      'Systematic post-treatment review collection workflows building a trusted 5-star Google clinic reputation'
    ],
    deliverables: [
      {
        num: '01',
        title: 'High-Value Dental Funnels',
        description: 'Engineered Google & Meta ad funnels capturing high-production dental cases like clear aligners, implants, smile makeovers, and urgent emergency care.'
      },
      {
        num: '02',
        title: 'Dental Maps 3-Pack & Local SEO',
        description: 'Dominate local searches for "dentist near me" and suburb-specific queries so nearby patients choose your practice first.'
      },
      {
        num: '03',
        title: '24/7 WhatsApp Dental Booking Bot',
        description: 'Instant patient qualification, consultation scheduling, and automated reminders that virtually eliminate chair downtime.'
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

interface IndustriesPageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
  selectedIndustryId?: string;
  onSelectIndustry?: (industryId: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onBackToHome,
  onRequestAudit,
  onNavigate,
  selectedIndustryId: controlledIndustryId,
  onSelectIndustry
}) => {
  const [internalIndustryId, setInternalIndustryId] = useState<string>('hospitality');

  const currentSelectedId = controlledIndustryId || internalIndustryId;
  const activeIndustry = industriesData.find(i => i.id === currentSelectedId) || industriesData[0];

  const handleSelectIndustry = (id: string) => {
    if (onSelectIndustry) {
      onSelectIndustry(id);
    } else {
      setInternalIndustryId(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] text-slate-800 selection:bg-[#DE8E53] selection:text-white pb-16 md:pb-0">
      
      {/* Navigation */}
      <Navbar 
        activeSection={currentSelectedId ? `industry-${currentSelectedId}` : 'industries'}
        onRequestAudit={onRequestAudit}
        onNavigate={onNavigate}
      />

      {/* Main Workspace Layout */}
      <main className="flex-1 pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-5 sm:space-y-6">
        
        {/* Detail Card for Selected Industry */}
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <IndustryDetailedSection
                industryId={activeIndustry.id}
                onRequestAudit={onRequestAudit}
                onNavigate={onNavigate}
              />
            </motion.div>
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

