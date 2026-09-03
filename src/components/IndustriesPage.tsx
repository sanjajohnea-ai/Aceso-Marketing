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
    id: 'dental-clinics',
    name: 'Dental Clinics',
    category: 'DENTAL & ORAL HEALTH',
    tagline: 'Attract new patients for implants, aligners, and cleanings with top Google rankings and easy WhatsApp booking',
    iconEmoji: '🦷',
    roadblocks: [
      'Too many low-cost cleanings and not enough high-value cases like dental implants or teeth straightening',
      'Patients cancelling or not showing up, leaving empty dental chairs during the day',
      'Hard to find on Google when nearby patients search for "dentist near me" or "teeth whitening"',
      'Busy front desk staff missing phone calls during clinic hours and in the evening'
    ],
    solutions: [
      'Targeted Google and Facebook ads for popular treatments like teeth whitening, clear aligners, and dental implants',
      'Top 3 ranking on Google Maps so local patients see your clinic first',
      '24/7 automated WhatsApp booking assistant that confirms visits and sends reminders',
      'Simple review invites that turn happy patients into 5-star Google ratings'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Patient Booking Campaigns',
        description: 'Google and social media ads designed to attract patients who need implants, aligners, and cosmetic care.'
      },
      {
        num: '02',
        title: 'Dental Maps & Local Search',
        description: 'Get your dental clinic to the top of Google when nearby families search for a local dentist.'
      },
      {
        num: '03',
        title: '24/7 WhatsApp Booking Bot',
        description: 'Fast, automated answers to patient questions, appointment booking, and text reminders to cut no-shows.'
      }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    category: 'EDTECH & TRAINING',
    tagline: 'Fill student cohorts, promote open days, and speed up enrollment with automated follow-ups',
    iconEmoji: '🎓',
    roadblocks: [
      'Scrambling to fill empty classroom seats as enrollment deadlines approach',
      'Students and parents abandoning long, complicated online application forms',
      'Slow follow-up after open days, letting interested students choose other schools'
    ],
    solutions: [
      'Enrollment sprint campaigns on Google, Instagram, and TikTok before the new semester starts',
      'Automated WhatsApp advisor answering questions about fees, courses, and schedules instantly',
      'Virtual open days and online tours showing off campus life and student success stories'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Enrollment Ad Campaigns',
        description: 'High-impact ads that drive qualified student applications 30 to 60 days before classes start.'
      },
      {
        num: '02',
        title: 'WhatsApp Admissions Assistant',
        description: 'Instant answers to questions on tuition, class timetables, and campus tour bookings.'
      }
    ]
  },
  {
    id: 'hospitality',
    name: 'Hotels & Resorts',
    category: 'HOSPITALITY',
    tagline: 'Get more direct room bookings, save on travel agency commissions, and fill rooms year-round',
    iconEmoji: '🏨',
    roadblocks: [
      'Paying 18% to 25% in heavy commission fees to booking websites like Booking.com and Expedia',
      'Empty rooms during weekdays and slower travel months',
      'Great rooms and dining that are not properly showcased with modern smartphone video'
    ],
    solutions: [
      'Direct booking website engine with special perks like free breakfast or flexible check-in',
      'Optimized Google Business Profile so travelers find and book your hotel directly',
      'Eye-catching short videos showing off your pool, rooms, dining, and views',
      'Google Hotel search ads reaching travelers looking for places to stay in your area'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Direct Booking Engine',
        description: 'Attract guests directly to your website so you do not lose money to third-party fees.'
      },
      {
        num: '02',
        title: 'Weekend & Staycation Packages',
        description: 'Promote weekend getaways to local residents to keep rooms full during quiet periods.'
      },
      {
        num: '03',
        title: 'Visual Video Storytelling',
        description: 'Short, engaging videos capturing the comfort, views, and dining experience at your hotel.'
      }
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional & Legal Services',
    category: 'B2B & ADVISORY',
    tagline: 'Attract qualified corporate clients and high-value retainers for law firms, accountants, and consultants',
    iconEmoji: '⚖️',
    roadblocks: [
      'Explaining high-end legal, tax, or advisory services in a way that feels clear and approachable',
      'Wasting valuable partner hours on free introductory calls with clients who do not have the budget',
      'Old, outdated websites that do not reflect the true quality and prestige of your firm'
    ],
    solutions: [
      'Clean, modern service pages that explain your expertise with real client case studies',
      'Google Search ads that appear when business owners look for commercial lawyers or accountants',
      'Simple pre-call questionnaires that filter prospects by company size and budget before booking'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Service Landing Pages',
        description: 'Professional pages tailored to each advisory service to build immediate credibility.'
      },
      {
        num: '02',
        title: 'Inbound Retainer Engine',
        description: 'A steady flow of business inquiries from companies looking for long-term advice.'
      }
    ]
  },
  {
    id: 'tours-travel',
    name: 'Tours & Travel',
    category: 'TOURS & TRAVEL',
    tagline: 'Book more safaris, group tours, and travel experiences directly without middleman fees',
    iconEmoji: '✈️',
    roadblocks: [
      'Losing profit to booking agents and aggregators taking big percentage cuts',
      'Big seasonal swings with quiet months where tour vehicles and guides sit idle',
      'Looking identical to hundreds of competing safari and tour operators'
    ],
    solutions: [
      'Google Search ads reaching international and local travelers planning trips to your destination',
      'Inspiring video clips on TikTok and Instagram showing real wildlife sightings and happy guests',
      'Friendly WhatsApp and email follow-ups that answer questions and help travelers finalize bookings'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Direct Safari & Tour Bookings',
        description: 'Ads and search optimization that guide travelers straight to your direct booking page.'
      },
      {
        num: '02',
        title: 'Off-Season Travel Offers',
        description: 'Special packages and discount deals that keep tours running during quieter months.'
      },
      {
        num: '03',
        title: 'Real Travel Video Content',
        description: 'Exciting videos from actual trips that give travelers the confidence to book.'
      }
    ]
  },
  {
    id: 'vet-clinics',
    name: 'Vet Clinics',
    category: 'VETERINARY & ANIMAL HOSPITALS',
    tagline: 'Attract pet owners for check-ups, surgery, and care with top Google Maps rankings and easy booking',
    iconEmoji: '🐾',
    roadblocks: [
      'Wasting money on generic ads that do not reach pet owners when they actually need veterinary care',
      'Front desk overwhelmed by phone calls while handling sick pets in the clinic',
      'Not showing up on Google Maps when local pet owners search for "emergency vet near me"',
      'Missed appointments and empty exam rooms caused by delayed reminders'
    ],
    solutions: [
      'Targeted Google and social media ads reaching pet owners who need routine care, dental work, or urgent visits',
      'Top 3 ranking on Google Maps so local pet owners call your clinic first in an emergency',
      'Automatic WhatsApp appointment booking and reminder messages to cut no-shows',
      'Simple review follow-ups that collect genuine 5-star reviews from happy pet owners on Google',
      'Clear, simple monthly reports showing your new client calls and booked appointments'
    ],
    deliverables: [
      {
        num: '01',
        title: 'Pet Owner Booking Engine',
        description: 'Google and social ads that connect your clinic with local pet owners ready to book.'
      },
      {
        num: '02',
        title: 'Google Maps & Local Vet SEO',
        description: 'Put your animal clinic at the top of Google search results for "vet near me" in your area.'
      },
      {
        num: '03',
        title: 'Automated Booking & Reminders',
        description: 'Easy online booking and automated text reminders that keep your appointment calendar full.'
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

