import React from 'react';
import { 
  ArrowRight, 
  Check, 
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export interface IndustryDataModel {
  id: string;
  name: string;
  category: string;
  highlightKeyword: string;
  tagline: string;
  heroDefinition1: string;
  heroDefinition2: string;
  activeChannels: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  whyFailsEyebrow: string;
  whyFailsTitle: string;
  whyFailsHighlight: string;
  whyFailsSubtitle: string;
  heroImage: string;
  heroImageCaption: string;
  narrativeParagraph1: string;
  narrativeParagraph2: string;
  breakdownCards: {
    num: string;
    text: string;
  }[];
  tableEyebrow: string;
  tableTitle: string;
  tableHighlight: string;
  tableSubtitle: string;
  channelsTable: {
    channel: string;
    whoItReaches: string;
    bestUsedFor: string;
    speedToResults: string;
    isActive?: boolean;
  }[];
  economicsTitle: string;
  economicsParagraph1: string;
  economicsParagraph2: string;
  economicsMetrics: {
    value: string;
    label: string;
  }[];
  comparisonEyebrow: string;
  comparisonTitle: string;
  comparisonHighlight: string;
  comparisonSubtitle: string;
  genericAgencyName: string;
  specialistAgencyName: string;
  comparisonRows: {
    topic: string;
    generic: string;
    specialist: string;
  }[];
  bottomCtaTitle: string;
  bottomCtaSubtitle: string;
}

export const allIndustriesData: Record<string, IndustryDataModel> = {
  'hospitality': {
    id: 'hospitality',
    name: 'Hotels & Resorts',
    category: 'HOSPITALITY & RESORTS',
    highlightKeyword: 'Hotels & Resorts',
    tagline: 'High-margin direct bookings, staycation demand campaigns & commission-free guest acquisition',
    heroDefinition1: 'A hospitality digital marketing agency specializes in helping luxury lodges, boutique hotels, safari camps, and resorts drive direct bookings and eliminate heavy 18%–25% OTA commissions.',
    heroDefinition2: 'Unlike a generalist agency, it understands hospitality search cycles, rate-parity psychology, seasonal traveler behavior, and what drives instant direct reservations across Google Hotel Ads, Meta, and WhatsApp concierge messaging.',
    activeChannels: [
      {
        title: 'Google Hotel & Search Ads',
        description: 'Captures high-intent travelers actively searching for boutique hotels, safari lodges, and luxury stays right now'
      },
      {
        title: 'Google Maps & Local 3-Pack',
        description: 'Positions your property at the top of local accommodation and tourist destination searches'
      },
      {
        title: 'Meta & Instagram Visual Ads',
        description: 'Immersive vertical video showcases suites, infinity pools, fine dining, and authentic guest experiences'
      },
      {
        title: 'WhatsApp Direct Concierge Ads',
        description: 'Direct click-to-chat bookings for corporate stays, conferences, weddings, and weekend staycations'
      },
      {
        title: 'Dynamic Retargeting Funnels',
        description: 'Re-engages travelers who viewed rooms or dates on your booking engine without completing checkout'
      }
    ],
    stats: [
      { value: '0% OTA Fee', label: 'Drive direct bookings and keep 100% of guest revenue' },
      { value: '5 to 7 Days', label: 'To first direct booking inquiries on Google Search & Hotel Ads' },
      { value: 'WhatsApp', label: 'Direct concierge booking for instant quotes and staycations' },
      { value: '100%', label: 'Transparent reporting on cost-per-room booked' },
      { value: 'Yours', label: 'You own every guest list, pixel data, and ad account' }
    ],
    whyFailsEyebrow: 'WHY AD SPEND FAILS FOR MOST HOTELS & LODGES',
    whyFailsTitle: 'Why Your Current Hospitality Marketing ',
    whyFailsHighlight: 'Is Not Working',
    whyFailsSubtitle: 'Understanding why conventional agency campaigns waste budget is the first step to building a predictable direct booking engine.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Direct booking funnels built for independent resorts, lodges, and boutique hotels.',
    narrativeParagraph1: 'Most hotels that have tried paid advertising came away frustrated. They spent budget on generic Facebook boost posts or broad Google ads that sent traffic to a cluttered homepage. Guests bounced without booking, leaving the property dependent on Online Travel Agencies (OTAs) that charge 18% to 25% commissions on every single reservation.',
    narrativeParagraph2: 'Here is what goes wrong most often. Campaigns do not integrate with real-time booking engines or rate-parity incentives. Traffic is targeted too broadly without filtering for high-income feeder markets. And no automated WhatsApp concierge is in place to close lucrative corporate conferences, private dining, and group weekend getaways.',
    breakdownCards: [
      {
        num: '01',
        text: 'Sending expensive ad clicks to slow, generic homepages without a frictionless mobile direct booking engine'
      },
      {
        num: '02',
        text: 'No dynamic retargeting for travelers who selected dates and room types but abandoned the checkout cart'
      },
      {
        num: '03',
        text: 'Lack of targeted weekday corporate conference & weekend staycation packages for local urban professionals'
      },
      {
        num: '04',
        text: 'Ignoring WhatsApp click-to-chat ads for guests who want instant custom quotes, group rates, and event bookings'
      }
    ],
    tableEyebrow: 'AD CHANNEL BREAKDOWN',
    tableTitle: 'Multi-Channel Direct Booking Advertising ',
    tableHighlight: 'for Hotels & Resorts',
    tableSubtitle: 'Every channel reaches travelers at a different point in their trip planning. We deploy the right channel to maximize direct occupancy and guest revenue.',
    channelsTable: [
      {
        channel: 'Google Search & Hotel Ads',
        whoItReaches: 'Travelers actively searching for "boutique hotel in [City]", luxury lodges, and weekend stays',
        bestUsedFor: 'Direct room reservations, high-intent searches, competing against OTA placements',
        speedToResults: 'First direct inquiries within 3 to 7 days of launch'
      },
      {
        channel: 'Google Maps & Local 3-Pack',
        whoItReaches: 'Mobile travelers and corporate visitors searching for nearby accommodation and venue locations',
        bestUsedFor: 'Local visibility, corporate guest acquisition, driving direct phone calls & website clicks',
        speedToResults: 'Live within 1 to 2 weeks after optimization'
      },
      {
        channel: 'Google Review & TripAdvisor Optimization',
        whoItReaches: 'Guests comparing guest ratings, cleanliness scores, and hospitality reviews before reserving',
        bestUsedFor: 'Automated 5-star review collection, ranking boost on Google Maps & TripAdvisor',
        speedToResults: 'Review velocity increases within 7 to 14 days',
        isActive: true
      },
      {
        channel: 'WhatsApp Direct Concierge Ads',
        whoItReaches: 'Travelers on mobile looking for instant room availability, group quotes, or conference packages',
        bestUsedFor: 'Instant booking assistance, corporate stay packages, staycation deals, and event inquiries',
        speedToResults: 'Direct conversation inquiries from day one',
        isActive: true
      },
      {
        channel: 'Meta Ads (Instagram & Facebook Reels)',
        whoItReaches: 'Affluent demographics targeted by travel affinity, income signals, and lifestyle interests',
        bestUsedFor: 'Staycation campaigns, honeymoon promotions, restaurant/spa awareness, and holiday packages',
        speedToResults: 'Optimization ramps up over 14 to 30 days'
      },
      {
        channel: 'Dynamic Cart Retargeting',
        whoItReaches: 'High-intent guests who viewed room rates on your booking engine but left before paying',
        bestUsedFor: 'Recovering abandoned bookings with exclusive direct-booking perks (free breakfast, late checkout)',
        speedToResults: 'High conversion rate from week one'
      }
    ],
    economicsTitle: 'Understand What Hospitality Paid Advertising Should Cost and What It Should Return',
    economicsParagraph1: 'Before you run ads, you need to calculate your true cost of guest acquisition against OTA commission bleed. When an OTA charges 20% commission on a $600 3-night reservation, you are losing $120 on a single stay.',
    economicsParagraph2: 'A well-engineered direct booking campaign acquires that same guest directly for $25 to $45 in ad spend. Even better, that direct guest enters your CRM database for future email and WhatsApp campaigns, driving repeat stays with zero future ad cost.',
    economicsMetrics: [
      { value: '$1,200', label: 'Typical minimum monthly ad spend for competitive destinations' },
      { value: '18% - 25%', label: 'Commission fees saved on every direct reservation' },
      { value: 'Week 1', label: 'When direct booking inquiries begin on Google & WhatsApp' }
    ],
    comparisonEyebrow: 'GENERIC VS SPECIALIST',
    comparisonTitle: 'The Revenue Difference ',
    comparisonHighlight: 'a Hospitality Specialist Makes',
    comparisonSubtitle: 'Compare standard agency approaches against our dedicated direct booking engine.',
    genericAgencyName: 'What a Generic Marketing Agency Does',
    specialistAgencyName: 'What We Do as a Hospitality Digital Marketing Agency',
    comparisonRows: [
      {
        topic: 'Strategy & Direct Booking',
        generic: 'Runs generic brand awareness ads that send visitors to an unoptimized homepage with no booking link.',
        specialist: 'Builds direct booking funnels with rate-parity guarantees, room availability widgets, and one-click booking.'
      },
      {
        topic: 'Targeting & Travel Feeder Markets',
        generic: 'Targets broad local radius without filtering for travel intent, disposable income, or seasonal holiday cycles.',
        specialist: 'Targets verified outbound travel demographics, affluent urban staycationers, and corporate travel planners.'
      },
      {
        topic: 'Landing Experience',
        generic: 'Sends paid clicks to heavy image sliders that take 6+ seconds to load on mobile devices.',
        specialist: 'Deploys ultra-fast mobile booking pages highlighting room perks, direct-booking discounts, and instant WhatsApp chat.'
      },
      {
        topic: 'Direct Messaging & WhatsApp',
        generic: 'Does not utilize WhatsApp for booking assistance or conference lead qualification.',
        specialist: 'Integrates 24/7 WhatsApp concierge flows for instant staycation reservations, corporate inquiries, and menu bookings.'
      },
      {
        topic: 'Performance & Revenue Metrics',
        generic: 'Reports on clicks, pageviews, and vanity impressions with zero room revenue attribution.',
        specialist: 'Tracks cost-per-room-booked, direct revenue ROI, and net commission savings vs OTA channels.'
      },
      {
        topic: 'Reputation & Review Growth',
        generic: 'Leaves TripAdvisor and Google reviews unmanaged, allowing negative reviews to suppress occupancy.',
        specialist: 'Implements automated post-checkout review request workflows that elevate your 5-star Google & TripAdvisor rankings.'
      }
    ],
    bottomCtaTitle: 'Ready To Maximize Direct Bookings & Cut OTA Commissions?',
    bottomCtaSubtitle: 'Get a tailored Hospitality Direct Booking Audit & Competitor Strategy for your property.'
  },

  'tours-travel': {
    id: 'tours-travel',
    name: 'Tours & Travel',
    category: 'TOURS & TRAVEL',
    highlightKeyword: 'Tours & Travel',
    tagline: 'High-ticket safari bookings, international group departures & direct traveler acquisition',
    heroDefinition1: 'A specialized travel digital marketing agency engineered to help safari operators, destination management companies (DMCs), and luxury travel brands attract high-ticket international travelers.',
    heroDefinition2: 'Unlike general agencies, we understand international traveler booking cycles, seasonal safari demand, visa/itinerary concerns, and how to turn casual social video viewers into confirmed multi-thousand-dollar bookings.',
    activeChannels: [
      {
        title: 'Google Search Ads (Safari & Tour Intent)',
        description: 'Captures international travelers actively typing "Masai Mara safari packages" or "Serengeti luxury tours"'
      },
      {
        title: 'Meta & TikTok Video Showcase Ads',
        description: 'Immersive 4K wildlife footage, lodge showcases, and traveler testimonials that build deep emotional desire'
      },
      {
        title: 'WhatsApp Instant Tour Specialist Ads',
        description: 'Connects prospective travelers directly with your tour planners for immediate itinerary customization'
      },
      {
        title: 'Google Maps & TripAdvisor Optimization',
        description: 'Dominates local tour operator discovery, safari reviews, and international search trust'
      },
      {
        title: 'Email & WhatsApp Follow-Up Nurture',
        description: 'Automated nurture sequences that follow up with hesitant travelers and close multi-thousand-dollar bookings'
      }
    ],
    stats: [
      { value: 'High-Ticket', label: 'Specializing in $2,000 - $15,000+ tour package client acquisition' },
      { value: '7 Days', label: 'To first qualified international safari inquiry on Google Search' },
      { value: 'WhatsApp', label: 'Instant itinerary consultation directly on mobile' },
      { value: '100%', label: 'Transparent reporting on cost per qualified tour lead' },
      { value: 'Yours', label: 'Full ownership of client lists, ad pixels, and ad accounts' }
    ],
    whyFailsEyebrow: 'WHY AD SPEND FAILS FOR TOUR OPERATORS',
    whyFailsTitle: 'Why Your Current Travel Marketing ',
    whyFailsHighlight: 'Is Not Working',
    whyFailsSubtitle: 'Understanding why conventional travel campaigns produce unqualified leads is the key to building a predictable high-ticket booking pipeline.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'High-ticket itinerary funnels built for safari and travel operators.',
    narrativeParagraph1: 'Travel packages are high-consideration purchases. Generic agencies run broad Facebook ads with generic stock photos, collecting cheap unqualified leads who have no budget or travel intent. Operators end up spending hours replying to inquiries that never convert.',
    narrativeParagraph2: 'Without high-intent search targeting, clear itinerary pricing frameworks, and rapid WhatsApp follow-up within 15 minutes, international travelers lose patience and book with competing destination operators.',
    breakdownCards: [
      {
        num: '01',
        text: 'Advertising generic itineraries to low-intent audiences rather than high-income outbound travel markets'
      },
      {
        num: '02',
        text: 'Slow response times: taking 24-48 hours to send quotes when international travelers need answers immediately'
      },
      {
        num: '03',
        text: 'Missing WhatsApp click-to-chat funnels for seamless mobile itinerary discussions'
      },
      {
        num: '04',
        text: 'No off-season promotions targeting local residents, ex-pats, and corporate team retreats'
      }
    ],
    tableEyebrow: 'AD CHANNEL BREAKDOWN',
    tableTitle: 'Multi-Channel Travel Advertising ',
    tableHighlight: 'for Safari & Tour Operators',
    tableSubtitle: 'Every channel reaches travelers at a different consideration stage. We deploy the right mix to fill group departures and private safari vehicles.',
    channelsTable: [
      {
        channel: 'Google Search Ads (Safari & Tour Queries)',
        whoItReaches: 'International tourists searching "Kenya safari packages", "Tanzania luxury tours", and destination itineraries',
        bestUsedFor: 'Capturing active trip planners with high booking intent and immediate travel dates',
        speedToResults: 'First inquiries within 3 to 7 days of launch'
      },
      {
        channel: 'Meta & Instagram Video Showcase',
        whoItReaches: 'High-income travelers in key source markets (US, UK, Europe, UAE, India) dreaming of Africa travel',
        bestUsedFor: 'Visual storytelling, wildlife experiences, customer reviews, and seasonal early-bird discounts',
        speedToResults: 'Optimizes over 14 to 30 days'
      },
      {
        channel: 'WhatsApp Instant Tour Specialist Ads',
        whoItReaches: 'Travelers on mobile wanting quick answers on pricing, safari schedules, visa, and packing lists',
        bestUsedFor: 'Direct 1-on-1 itinerary planning, qualification, and closing high-ticket bookings',
        speedToResults: 'Direct inquiries from day one',
        isActive: true
      },
      {
        channel: 'Google Maps & Local Search SEO',
        whoItReaches: 'Travelers arriving in Nairobi/Mombasa searching for day tours, airport transfers, and excursions',
        bestUsedFor: 'Last-minute bookings, city excursions, and local corporate team retreats',
        speedToResults: 'Live within 1 to 2 weeks'
      },
      {
        channel: 'TripAdvisor & Google Review Velocity',
        whoItReaches: 'Prospective travelers researching operator credibility, safety records, and guide reviews',
        bestUsedFor: 'Automated post-safari review collection to build top-tier TripAdvisor rankings',
        speedToResults: 'Review count increases within 7 to 14 days',
        isActive: true
      },
      {
        channel: 'Itinerary Retargeting Sequences',
        whoItReaches: 'Travelers who downloaded a sample itinerary or viewed a package page without contacting you',
        bestUsedFor: 'Re-engaging warm prospects with traveler video testimonials and limited-seat alerts',
        speedToResults: 'High conversion rate from week one'
      }
    ],
    economicsTitle: 'Understand What Tour Operator Paid Advertising Should Cost and What It Should Return',
    economicsParagraph1: 'A private safari or group tour booking carries an average package value of $2,500 to $10,000+ with strong operating margins. Acquiring that booking through targeted paid ads typically costs between $75 and $180 in ad spend.',
    economicsParagraph2: 'Because travel experiences generate powerful word-of-mouth referrals and repeat bucket-list trips, every acquired high-value client significantly elevates your annual tour revenue.',
    economicsMetrics: [
      { value: '$1,500', label: 'Typical minimum monthly ad spend for international travel campaigns' },
      { value: '$3,500+', label: 'Average booking value for multi-day private and group tours' },
      { value: '5x - 12x', label: 'Typical return on ad spend (ROAS) on high-intent search campaigns' }
    ],
    comparisonEyebrow: 'GENERIC VS SPECIALIST',
    comparisonTitle: 'The Clinical Difference ',
    comparisonHighlight: 'a Travel Marketing Specialist Makes',
    comparisonSubtitle: 'Compare standard agency approaches against our dedicated travel client acquisition engine.',
    genericAgencyName: 'What a Generic Marketing Agency Does',
    specialistAgencyName: 'What We Do as a Tours & Travel Digital Marketing Agency',
    comparisonRows: [
      {
        topic: 'Audience & Feeder Markets',
        generic: 'Runs broad ads in random regions collecting unqualified contacts who cannot afford private tours.',
        specialist: 'Targets verified affluent traveler demographics in high-converting source markets with verified travel intent.'
      },
      {
        topic: 'Creative & Video Storytelling',
        generic: 'Uses generic stock photos with generic captions like "Book your safari today!"',
        specialist: 'Creates captivating 4K short-form video reels of real wildlife, luxury tented camps, and guest reactions.'
      },
      {
        topic: 'Landing Page & Itinerary Funnels',
        generic: 'Sends ad clicks to a 20-page confusing website where package prices and schedules are hidden.',
        specialist: 'Builds dedicated itinerary landing pages with clear day-by-day maps, transparent inclusions, and 1-click WhatsApp chat.'
      },
      {
        topic: 'Lead Qualification & Speed',
        generic: 'Relies on slow email forms that sit unread in general inboxes for 24+ hours.',
        specialist: 'Integrates WhatsApp instant-routing so travel planners can respond in under 5 minutes.'
      },
      {
        topic: 'Reporting & Transparency',
        generic: 'Reports on generic link clicks and impressions rather than actual confirmed bookings.',
        specialist: 'Tracks qualified inquiry cost, package pipeline value, and confirmed safari booking ROI.'
      },
      {
        topic: 'Off-Season Revenue Strategy',
        generic: 'Stops marketing during low season, leaving vehicles and guides idle for months.',
        specialist: 'Runs seasonal resident deals, corporate team retreats, and early-bird international campaigns.'
      }
    ],
    bottomCtaTitle: 'Ready To Fill Your Safari Vehicles and Group Departures?',
    bottomCtaSubtitle: 'Get a tailored Tour Operator Growth Strategy & International Competitor Analysis.'
  },

  'dental-clinics': {
    id: 'dental-clinics',
    name: 'Dental Clinics',
    category: 'DENTAL & ORAL HEALTH',
    highlightKeyword: 'Dental Clinic',
    tagline: 'High-production patient acquisition, clear aligners, dental implants & 24/7 WhatsApp scheduling',
    heroDefinition1: 'A specialized dental digital marketing agency helps dental practices and orthodontic clinics attract high-production patients for clear aligners, dental implants, cosmetic veneers, and routine dental care.',
    heroDefinition2: 'Unlike general agencies, we understand dental procedure economics, patient anxiety triggers, local search proximity, and how to automate appointment booking to keep dental chairs consistently filled.',
    activeChannels: [
      {
        title: 'High-Value Google Search Ads',
        description: 'Captures active patients searching "dental implants near me", "Invisalign cost", or "emergency dentist"'
      },
      {
        title: 'Google Maps 3-Pack Local SEO',
        description: 'Positions your dental clinic at the top of local map searches in your exact suburb and surrounding neighborhoods'
      },
      {
        title: 'Meta Smile Transformation Ads',
        description: 'Engaging before-and-after video showcases demonstrating cosmetic whitening, veneers, and orthodontic aligners'
      },
      {
        title: '24/7 WhatsApp AI Booking Assistant',
        description: 'Instant consultation scheduling, procedure FAQs, and automated pre-visit reminder sequences'
      },
      {
        title: 'Automated 5-Star Review Generation',
        description: 'Systematically collects 5-star Google reviews from satisfied patients right after their appointment'
      }
    ],
    stats: [
      { value: 'High-Production', label: 'Focus on implants, aligners, veneers & smile makeovers' },
      { value: '3 to 7 Days', label: 'To first high-value dental appointment inquiries' },
      { value: '24/7 WhatsApp', label: 'Automated scheduling that reduces front desk phone burden' },
      { value: '60% Drop', label: 'In clinic no-show rates via automated pre-appointment reminders' },
      { value: 'Yours', label: 'Full ownership of all patient acquisition campaigns and data' }
    ],
    whyFailsEyebrow: 'WHY AD SPEND FAILS FOR MOST DENTAL CLINICS',
    whyFailsTitle: 'Why Your Current Dental Marketing ',
    whyFailsHighlight: 'Is Not Working',
    whyFailsSubtitle: 'Understanding why conventional clinic advertising fails to attract high-value procedures is the key to maximizing chair revenue.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'High-value patient funnels built specifically for dental and orthodontic practices.',
    narrativeParagraph1: 'Most dental practices waste marketing budget competing for low-margin routine cleanings while missing lucrative clear aligner, dental implant, and cosmetic dentistry cases. General agencies send ad traffic to generic clinic homepages where patients get lost in clinical jargon.',
    narrativeParagraph2: 'Furthermore, front desk staff are often overwhelmed with phone calls during peak hours, resulting in missed calls and lost patients. Without automated 24/7 WhatsApp booking and pre-visit reminders, chair downtime and no-show rates remain unpredictably high.',
    breakdownCards: [
      {
        num: '01',
        text: 'Bidding broadly on low-margin keywords instead of high-production cosmetic and restorative dental cases'
      },
      {
        num: '02',
        text: 'Lack of dedicated landing pages for specific treatments like clear aligners, dental implants, or emergency tooth relief'
      },
      {
        num: '03',
        text: 'High patient cancellation and no-show rates due to lack of automated WhatsApp appointment reminders'
      },
      {
        num: '04',
        text: 'Low Google Maps rankings allowing nearby competing dental practices to capture all local walk-ins'
      }
    ],
    tableEyebrow: 'AD CHANNEL BREAKDOWN',
    tableTitle: 'Multi-Channel Patient Acquisition ',
    tableHighlight: 'for Dental & Orthodontic Practices',
    tableSubtitle: 'Every channel targets patients at a different stage of oral healthcare decision-making. We deploy the right channels to maximize chair production.',
    channelsTable: [
      {
        channel: 'Google Search Ads (High-Value Dental Queries)',
        whoItReaches: 'Patients actively searching "dentist near me", "teeth alignment cost", "dental implants", or "emergency tooth extraction"',
        bestUsedFor: 'Immediate patient bookings, high-production cosmetic/restorative cases, and emergency relief',
        speedToResults: 'First patient inquiries within 3 to 7 days of launch'
      },
      {
        channel: 'Google Maps 3-Pack & Local SEO',
        whoItReaches: 'Nearby residents searching for dentists within a 5–10km radius of your clinic',
        bestUsedFor: 'Capturing local suburban traffic, driving calls, and establishing top-ranked local reputation',
        speedToResults: 'Ranking improvements within 2 to 4 weeks'
      },
      {
        channel: 'Automated 5-Star Google Reviews',
        whoItReaches: 'Prospective patients comparing star ratings and reading patient testimonials before calling',
        bestUsedFor: 'Automated post-treatment review collection, building 5-star clinic authority and map dominance',
        speedToResults: 'Review velocity increases within 7 to 14 days',
        isActive: true
      },
      {
        channel: 'WhatsApp 24/7 Dental Booking Assistant',
        whoItReaches: 'Mobile patients looking for instant appointment booking, pricing guidelines, or after-hours emergency triage',
        bestUsedFor: 'Instant consultation booking, automated reminders, reducing front-desk call burden',
        speedToResults: 'Direct patient conversations from day one',
        isActive: true
      },
      {
        channel: 'Meta Smile Transformation Ads',
        whoItReaches: 'Adults and parents on Instagram/Facebook interested in teeth whitening, veneers, or orthodontic aligners',
        bestUsedFor: 'Elective cosmetic dentistry awareness, smile makeover promos, and seasonal campaigns',
        speedToResults: 'Optimizes over 14 to 30 days'
      },
      {
        channel: 'Patient Reactivation & Retargeting',
        whoItReaches: 'Website visitors who checked treatment costs or past patients due for 6-month checkups',
        bestUsedFor: 'Reactivating overdue patients and converting warm website visitors into booked consultations',
        speedToResults: 'High conversion rate from week one'
      }
    ],
    economicsTitle: 'Understand What Dental Patient Acquisition Should Cost and What It Should Return',
    economicsParagraph1: 'High-production dental cases—such as clear aligners, dental implants, veneers, and full-mouth restorations—generate between $1,500 and $5,000+ in immediate production value per patient.',
    economicsParagraph2: 'Acquiring a high-value dental patient through targeted search campaigns typically costs $65 to $140. When combined with family retention and recurring hygiene visits over 5+ years, the lifetime value of every acquired patient exceeds $4,000.',
    economicsMetrics: [
      { value: '$1,200', label: 'Typical minimum monthly ad spend for competitive dental clinics' },
      { value: '$3,500+', label: 'Average 5-year lifetime value of an acquired dental patient' },
      { value: 'Week 1', label: 'When first dental appointment inquiries arrive on Google & WhatsApp' }
    ],
    comparisonEyebrow: 'GENERIC VS SPECIALIST',
    comparisonTitle: 'The Clinical Difference ',
    comparisonHighlight: 'a Dental Marketing Specialist Makes',
    comparisonSubtitle: 'Compare standard agency approaches against our dedicated high-production dental patient acquisition system.',
    genericAgencyName: 'What a Generic Marketing Agency Does',
    specialistAgencyName: 'What We Do as a Dental Digital Marketing Agency',
    comparisonRows: [
      {
        topic: 'Treatment Focus',
        generic: 'Runs broad campaigns advertising cheap routine cleanings with razor-thin margins.',
        specialist: 'Builds targeted campaigns for high-production cases: clear aligners, dental implants, and cosmetic makeovers.'
      },
      {
        topic: 'Landing Page Architecture',
        generic: 'Sends ad clicks to a generic homepage with confusing dental terminology and no clear CTA.',
        specialist: 'Creates dedicated treatment landing pages with before/after showcases, doctor credentials, and 1-click WhatsApp booking.'
      },
      {
        topic: 'Local Proximity & Map Ranking',
        generic: 'Ignores Google Business Profile optimization, leaving your practice invisible in local map searches.',
        specialist: 'Dominates the Google Maps 3-Pack with local SEO, citation building, and automated 5-star review collection.'
      },
      {
        topic: 'Appointment Automation & No-Shows',
        generic: 'Relies solely on phone calls, resulting in lost inquiries during busy clinical hours and after-hours.',
        specialist: 'Deploys 24/7 WhatsApp booking bots and automated pre-appointment reminders that slash no-shows by 60%.'
      },
      {
        topic: 'Tracking & Production Metrics',
        generic: 'Reports on clicks and impressions rather than actual booked chair production value.',
        specialist: 'Tracks cost-per-patient inquiry, confirmed consultations, and estimated clinical production revenue.'
      },
      {
        topic: 'Patient Retention & Hygiene Recall',
        generic: 'Never runs retargeting or recall campaigns, losing patients to competing nearby clinics.',
        specialist: 'Runs automated 6-month hygiene recall sequences and retargeting campaigns to maximize patient retention.'
      }
    ],
    bottomCtaTitle: 'Ready To Fill Your Dental Chairs With High-Production Cases?',
    bottomCtaSubtitle: 'Get a tailored Dental Practice Growth Strategy & Local Competitor Analysis.'
  },

  'vet-clinics': {
    id: 'vet-clinics',
    name: 'Vet Clinics',
    category: 'VETERINARY & ANIMAL HOSPITALS',
    highlightKeyword: 'Veterinary',
    tagline: 'High-Value Clinical Intent (HVCI) pet owner acquisition, Google Maps 3-Pack SEO & PIMS appointment booking automation',
    heroDefinition1: 'A veterinary digital marketing agency specializes in helping veterinary practices attract more pet owners through SEO, Google Ads, Meta Ads, and other digital channels.',
    heroDefinition2: 'Unlike a general agency, it understands the veterinary industry and creates strategies around how pet owners search for care, what drives urgent decisions, and what builds trust and encourages appointments.',
    activeChannels: [
      {
        title: 'Google Search Ads',
        description: 'Captures pet owners searching "emergency vet near me" or urgent care right now'
      },
      {
        title: 'Google Local Services Ads',
        description: 'Google Screened badge at the very top of mobile local veterinary results'
      },
      {
        title: 'Google Review Optimization',
        description: 'Automated 5-star review generation & Google Business Profile ranking dominance'
      },
      {
        title: 'WhatsApp Direct Booking Ads',
        description: 'Direct click-to-WhatsApp messaging campaigns for instant pet triage and appointments'
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Reaches pet owner demographics while they scroll social feeds with wellness care'
      }
    ],
    stats: [
      { value: '5', label: 'Active ad channels & growth services' },
      { value: '7 Days', label: 'To first new appointment inquiries on Google Ads' },
      { value: 'WhatsApp', label: 'Direct booking ads for animal hospitals' },
      { value: '100%', label: 'Transparent reporting on confirmed bookings' },
      { value: 'Yours', label: 'You own every account and all campaign data' }
    ],
    whyFailsEyebrow: 'WHY AD SPEND FAILS FOR MOST VET CLINICS',
    whyFailsTitle: 'Why Your Current Veterinary Marketing ',
    whyFailsHighlight: 'Is Not Working',
    whyFailsSubtitle: 'Understanding why conventional agency campaigns waste budget is the first step to building a predictable veterinary patient acquisition system.',
    heroImage: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Paid campaigns built for animal hospitals, not generic local ads.',
    narrativeParagraph1: 'Most vet clinics that have tried paid advertising came away frustrated. The ads ran. The budget disappeared. The phone did not ring enough to justify the cost. That is not a paid advertising problem. That is a veterinary digital marketing problem. Broad campaigns built by generalist agencies do not account for how pet owners actually behave when they need a vet.',
    narrativeParagraph2: 'Targeting is set too wide so budget goes to clicks that were never going to convert. Landing pages send people to a generic homepage instead of a page built around one specific action. Conversion tracking is missing so there is no way to know which ads drove real bookings. And no one is running follow-up for the people who clicked but did not book that day.',
    breakdownCards: [
      {
        num: '01',
        text: 'Targeting reaches too many people who are not in a position to book a veterinary appointment right now'
      },
      {
        num: '02',
        text: 'Landing pages are not built to convert for a specific service or a specific type of pet owner'
      },
      {
        num: '03',
        text: 'No retargeting is running for the pet owners who visited your site and left without booking'
      },
      {
        num: '04',
        text: 'No one is running WhatsApp Ads and direct messaging campaigns even though mobile pet owners prefer instant booking'
      }
    ],
    tableEyebrow: 'AD CHANNEL BREAKDOWN',
    tableTitle: 'Multi-Channel Paid Advertising ',
    tableHighlight: 'for Animal Hospitals',
    tableSubtitle: 'Every channel reaches pet owners at a different decision point. We deploy the right channel for the right moment, maximizing patient volume and appointment conversions.',
    channelsTable: [
      {
        channel: 'Google Search Ads',
        whoItReaches: 'Pet owners actively typing "vet near me" or service-specific searches into Google right now',
        bestUsedFor: 'Emergency care, surgery inquiries, new client acquisition with high booking intent',
        speedToResults: 'First inquiries within 3 to 7 days of launch'
      },
      {
        channel: 'Google Local Services Ads',
        whoItReaches: 'Mobile searchers who see the Google Screened placement above all other results',
        bestUsedFor: 'Trust building with new clients, high-visibility local positioning, reducing cost per call',
        speedToResults: 'Live within 1 to 2 weeks after verification'
      },
      {
        channel: 'Google Review Optimization',
        whoItReaches: 'Pet owners on Google Maps & search results comparing star ratings before calling',
        bestUsedFor: 'Automated review requests, 5-star social proof, Google Maps 3-Pack ranking boost',
        speedToResults: 'Review velocity increases within 7 to 14 days',
        isActive: true
      },
      {
        channel: 'WhatsApp Ads',
        whoItReaches: 'Pet owners on mobile looking for quick answers or direct booking with your clinic staff',
        bestUsedFor: 'Instant appointment booking, direct messaging, wellness inquiries, and triage support',
        speedToResults: 'Direct conversation inquiries from day one',
        isActive: true
      },
      {
        channel: 'Meta Ads (Facebook & Instagram)',
        whoItReaches: 'Pet owner demographics targeted by location, pet ownership signals, and household profile',
        bestUsedFor: 'Awareness campaigns, wellness plan promotions, animal care, new neighbourhood coverage',
        speedToResults: 'Optimization ramps up over 30 to 60 days'
      },
      {
        channel: 'Retargeting (all platforms)',
        whoItReaches: 'Pet owners who already visited your website but left without booking an appointment',
        bestUsedFor: 'Converting warm traffic, reducing wasted ad spend, closing the loop on high-intent visitors',
        speedToResults: 'High conversion rate from week one'
      }
    ],
    economicsTitle: 'Understand What Veterinarian Paid Advertising Should Cost and What It Should Return',
    economicsParagraph1: 'Before you run any ads, you need to know what a new client is worth to your clinic over their lifetime and what you can afford to pay to acquire them. Most vet clinics spend money on ads without ever answering those two questions. That is why the budget disappears without results.',
    economicsParagraph2: 'A new client who books for a wellness exam and stays with your clinic typically returns for 3 to 7 years. Across that time they spend several hundred to several thousand dollars depending on their pet\'s health. The math on acquiring that client through paid advertising works well when the campaign is built correctly.',
    economicsMetrics: [
      { value: '$1,500', label: 'Typical minimum monthly ad spend for a competitive city' },
      { value: '3 to 7', label: 'Years an average new client stays with a vet clinic' },
      { value: 'Week 1', label: 'When Google Search Ads typically produce the first appointment inquiry' }
    ],
    comparisonEyebrow: 'GENERIC VS SPECIALIST',
    comparisonTitle: 'The Clinical Difference ',
    comparisonHighlight: 'a Specialist Agency Makes',
    comparisonSubtitle: 'Compare standard agency approaches against our dedicated veterinary patient acquisition engine.',
    genericAgencyName: 'What a Generic Marketing Agency Does',
    specialistAgencyName: 'What We Do as a Veterinary Digital Marketing Agency',
    comparisonRows: [
      {
        topic: 'Strategy & Campaign Intent',
        generic: 'Uses the same broad campaign template they use for plumbers, local retail, and general businesses.',
        specialist: 'Builds every campaign specifically around how pet owners search for, evaluate, and choose a vet clinic.'
      },
      {
        topic: 'Audience & Demographic Targeting',
        generic: 'Targets broadly by location without filtering for pet owners, pet species, or pet-related behavior signals.',
        specialist: 'Targets audiences using verified pet ownership signals, breed health triggers, and high-intent clinical services.'
      },
      {
        topic: 'Landing Pages & Funnels',
        generic: 'Sends all expensive ad clicks to your homepage where pet owners get distracted and bounce without calling.',
        specialist: 'Builds dedicated conversion landing pages for each service and campaign with one clear, frictionless booking action.'
      },
      {
        topic: 'Direct Messaging & WhatsApp',
        generic: 'Does not know how to run WhatsApp Ads or direct messaging campaigns for modern mobile pet owners.',
        specialist: 'Runs WhatsApp Ads alongside Google and Meta so pet owners can chat, triage, and book directly from their phone.'
      },
      {
        topic: 'Tracking & Clinical Attribution',
        generic: 'Reports on meaningless impressions and clicks rather than actual confirmed veterinary appointment inquiries.',
        specialist: 'Reports on confirmed appointments, cost per new acquired pet owner, and multi-year practice revenue growth.'
      },
      {
        topic: 'Reviews & Maps 3-Pack Dominance',
        generic: 'Leaves Google Reviews unmanaged, ignores review velocity, and lets competitors outrank your practice on Google Maps.',
        specialist: 'Sets up automated post-visit review generation, reputation protection, and Google Maps 3-Pack optimization.'
      }
    ],
    bottomCtaTitle: 'Ready To Fill Your Operating Rooms and Exam Slots?',
    bottomCtaSubtitle: 'Get a tailored Veterinary Growth Strategy & Competitor Analysis for your practice.'
  },

  'professional-services': {
    id: 'professional-services',
    name: 'Professional & Legal Services',
    category: 'B2B & ADVISORY',
    highlightKeyword: 'Professional & Legal Services',
    tagline: 'High-ticket corporate retainers, inbound partner leads & qualified advisory client acquisition',
    heroDefinition1: 'A specialized B2B and legal digital marketing agency helping corporate law firms, accounting consultancies, tax advisors, and management consultants acquire high-ticket corporate retainers.',
    heroDefinition2: 'Unlike general agencies, we understand professional ethics, corporate buying cycles, complex advisory value propositions, and how to position senior partners as authoritative industry leaders.',
    activeChannels: [
      {
        title: 'High-Intent Google Search Ads',
        description: 'Captures corporate decision-makers searching for commercial litigation, tax structuring, M&A advisory, or corporate audits'
      },
      {
        title: 'LinkedIn B2B Thought Leadership Ads',
        description: 'Positions partners in front of C-suite executives, CFOs, and founders in your specific geographic market'
      },
      {
        title: 'Practice Area SEO & Google Maps',
        description: 'Ranks your firm for high-value legal and financial advisory queries in local and regional search'
      },
      {
        title: 'WhatsApp Direct Partner Intake',
        description: 'Instant preliminary inquiries for urgent legal and financial advisory matters'
      },
      {
        title: 'Case Study & Whitepaper Retargeting',
        description: 'Nurtures corporate prospects with industry case studies until retainer agreement'
      }
    ],
    stats: [
      { value: 'Retainer-Led', label: 'Focus on recurring corporate retainers and high-ticket advisory mandates' },
      { value: '7 Days', label: 'To first high-intent corporate consultation inquiries on Google Search' },
      { value: 'Pre-Qualified', label: 'Automated intake questionnaires filtering out non-target leads' },
      { value: '100%', label: 'Transparent reporting on cost-per-corporate lead and pipeline value' },
      { value: 'Yours', label: 'Full ownership of all corporate lead assets and advertising data' }
    ],
    whyFailsEyebrow: 'WHY AD SPEND FAILS FOR LAW & ADVISORY FIRMS',
    whyFailsTitle: 'Why Your Current B2B Marketing ',
    whyFailsHighlight: 'Is Not Working',
    whyFailsSubtitle: 'Understanding why conventional agency campaigns attract low-budget clients is the key to building an elite corporate advisory pipeline.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'High-ticket advisory funnels built for corporate law, accounting, and consulting firms.',
    narrativeParagraph1: 'Advisory services require immense trust. Generalist agencies treat law and consulting firms like eCommerce shops, running flashy discount ads that attract time-wasters and low-budget individual inquiries. Partners end up wasting billable hours in non-productive initial consultations.',
    narrativeParagraph2: 'Without practice-area landing pages, authoritative thought leadership, and automated pre-qualification questionnaires, premium corporate clients choose established competitors who clearly demonstrate industry sector expertise.',
    breakdownCards: [
      {
        num: '01',
        text: 'Attracting low-budget individual inquiries instead of lucrative corporate retainers and institutional clients'
      },
      {
        num: '02',
        text: 'Outdated, text-heavy websites that fail to demonstrate modern practice area depth or case studies'
      },
      {
        num: '03',
        text: 'Lack of automated pre-consultation questionnaires to filter prospect budget and company size'
      },
      {
        num: '04',
        text: 'Zero retargeting running for corporate visitors who read practice area pages but didn\'t book an initial briefing'
      }
    ],
    tableEyebrow: 'AD CHANNEL BREAKDOWN',
    tableTitle: 'Multi-Channel B2B Client Acquisition ',
    tableHighlight: 'for Law & Advisory Practices',
    tableSubtitle: 'Every channel reaches corporate executives at a different stage of their decision-making process. We deploy the right channels to build an elite retainer pipeline.',
    channelsTable: [
      {
        channel: 'Google Search Ads (Commercial Intent Queries)',
        whoItReaches: 'Corporate directors, founders, and CFOs searching for commercial law, tax advisory, audit, or restructuring services',
        bestUsedFor: 'Capturing high-budget corporate mandates at the exact moment of urgent legal or financial need',
        speedToResults: 'First inquiries within 3 to 7 days of launch'
      },
      {
        channel: 'LinkedIn B2B Account-Based Marketing',
        whoItReaches: 'C-suite executives, general counsels, and enterprise procurement leads in targeted industries',
        bestUsedFor: 'Brand positioning, establishing partner thought leadership, and winning high-value retainer accounts',
        speedToResults: 'Ramps up over 30 to 60 days'
      },
      {
        channel: 'Practice Area SEO & Local Maps Ranking',
        whoItReaches: 'Businesses searching for regional law firms and corporate financial advisors',
        bestUsedFor: 'Organic discovery for commercial practice areas, building sustainable long-term authority',
        speedToResults: 'Authority compounds over 3 to 6 months'
      },
      {
        channel: 'WhatsApp Direct Partner Briefing Channel',
        whoItReaches: 'Business owners on mobile needing rapid preliminary consultation on urgent corporate matters',
        bestUsedFor: 'Instant corporate qualification and direct calendar scheduling for partner briefings',
        speedToResults: 'Direct inquiries from day one',
        isActive: true
      },
      {
        channel: 'Case Study & Thought Leadership Funnels',
        whoItReaches: 'Corporate decision-makers evaluating firm credentials, published whitepapers, and regulatory updates',
        bestUsedFor: 'Demonstrating sector expertise in banking, real estate, energy, and corporate governance',
        speedToResults: 'Nurtures leads over 14 to 45 days'
      },
      {
        channel: 'High-Ticket Retargeting Sequences',
        whoItReaches: 'Executives who visited specific practice area pages but haven\'t yet requested a consultation',
        bestUsedFor: 'Staying top of mind with partner credentials and client testimonials during RFP evaluations',
        speedToResults: 'High conversion rate from week one'
      }
    ],
    economicsTitle: 'Understand What Professional Services Paid Advertising Should Cost and What It Should Return',
    economicsParagraph1: 'A corporate legal or advisory client typically engages on an ongoing monthly retainer of $1,500 to $5,000+, representing an annual value of $18,000 to $60,000+ per account.',
    economicsParagraph2: 'Acquiring a qualified corporate advisory client through intent-driven search and LinkedIn ABM typically costs $150 to $350 in ad spend. The return on investment on a single closed corporate retainer is extraordinary.',
    economicsMetrics: [
      { value: '$1,500', label: 'Typical minimum monthly ad spend for competitive advisory firms' },
      { value: '$25,000+', label: 'Average annual value of an acquired corporate retainer client' },
      { value: 'Week 1', label: 'When first corporate consultation inquiries arrive on Google Search' }
    ],
    comparisonEyebrow: 'GENERIC VS SPECIALIST',
    comparisonTitle: 'The Advisory Difference ',
    comparisonHighlight: 'a B2B Marketing Specialist Makes',
    comparisonSubtitle: 'Compare standard agency approaches against our dedicated corporate retainer acquisition engine.',
    genericAgencyName: 'What a Generic Marketing Agency Does',
    specialistAgencyName: 'What We Do as a Professional & Legal Marketing Agency',
    comparisonRows: [
      {
        topic: 'Client Targeting & Value',
        generic: 'Runs broad consumer ads that attract individuals with small, unprofitable one-off matters.',
        specialist: 'Targets corporate decision-makers, CFOs, and founders seeking high-margin corporate retainers.'
      },
      {
        topic: 'Practice Area Landing Pages',
        generic: 'Sends ad traffic to generic homepages with dense walls of legal text and no clear conversion action.',
        specialist: 'Creates dedicated practice area landing pages with sector case studies, partner bios, and intake forms.'
      },
      {
        topic: 'Pre-Qualification & Filtering',
        generic: 'Sends all incoming inquiries directly to senior partners without filtering for budget or fit.',
        specialist: 'Implements automated intake questionnaires that filter out unqualified leads before scheduling calls.'
      },
      {
        topic: 'Thought Leadership & LinkedIn',
        generic: 'Ignores LinkedIn and B2B account-based marketing, focusing solely on consumer social media.',
        specialist: 'Builds LinkedIn executive positioning campaigns that establish partners as authoritative industry leaders.'
      },
      {
        topic: 'Attribution & Pipeline Value',
        generic: 'Reports on website visits and clicks without tracking qualified pipeline value.',
        specialist: 'Tracks cost-per-corporate lead, consultation show rate, and closed retainer pipeline revenue.'
      },
      {
        topic: 'Compliance & Brand Integrity',
        generic: 'Uses sensationalist marketing language that risks violating professional legal/accounting standards.',
        specialist: 'Maintains pristine compliance with professional ethics codes, delivering sophisticated brand execution.'
      }
    ],
    bottomCtaTitle: 'Ready To Build a Predictable Inbound Retainer Pipeline?',
    bottomCtaSubtitle: 'Get a tailored Professional Services Growth Strategy & B2B Competitor Analysis.'
  },

  'education': {
    id: 'education',
    name: 'Education',
    category: 'EDTECH & TRAINING',
    highlightKeyword: 'Education & Training',
    tagline: 'Student intake sprint campaigns, open-day webinars & automated WhatsApp admissions advisors',
    heroDefinition1: 'A specialized education digital marketing agency helping private schools, universities, professional training academies, and edtech providers fill student intake cohorts.',
    heroDefinition2: 'Unlike general agencies, we understand academic enrollment cycles, parent/student decision criteria, fee structure transparency, and how to automate admissions follow-ups before intake deadlines.',
    activeChannels: [
      {
        title: 'High-Urgency Google Search Ads',
        description: 'Captures parents and prospective students actively searching for degree programs, diplomas, and certifications'
      },
      {
        title: 'TikTok & Meta Video Campus Ads',
        description: 'Student testimonials, virtual campus tours, and career outcome showcases that drive student excitement'
      },
      {
        title: 'WhatsApp 24/7 Admissions Advisor',
        description: 'Instant answers to fee structures, entry requirements, scholarship criteria, and application assistance'
      },
      {
        title: 'Google Maps & Local School SEO',
        description: 'Positions your institution at the top of local school and academy searches in your metropolitan area'
      },
      {
        title: 'Multi-Channel Intake Sprints',
        description: 'High-urgency campaigns 30–60 days before semester deadlines to fill remaining classroom seats'
      }
    ],
    stats: [
      { value: 'Intake Sprints', label: 'Purpose-built 30–60 day enrollment blitzes' },
      { value: '5 Days', label: 'To first prospective student inquiry submissions on Google & Meta' },
      { value: '24/7 WhatsApp', label: 'Automated fee and syllabus answers with instant tour booking' },
      { value: '40% Higher', label: 'Application completion rate through frictionless mobile forms' },
      { value: 'Yours', label: 'Full ownership of all prospective student data and campaigns' }
    ],
    whyFailsEyebrow: 'WHY AD SPEND FAILS FOR EDUCATION INSTITUTIONS',
    whyFailsTitle: 'Why Your Current Education Marketing ',
    whyFailsHighlight: 'Is Not Working',
    whyFailsSubtitle: 'Understanding why conventional student recruitment campaigns suffer high drop-off rates is the key to filling every cohort.',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'High-urgency enrollment funnels built for schools, universities, and training academies.',
    narrativeParagraph1: 'Educational decisions involve significant financial commitment and strict semester deadlines. Most institutions wait until the last minute, running generic ads that lead to lengthy 15-page application forms where 80% of students drop off halfway through.',
    narrativeParagraph2: 'Without an automated WhatsApp admissions assistant to answer fee structures, payment plans, and entry requirements instantly, interested candidates go cold and apply to competing institutions.',
    breakdownCards: [
      {
        num: '01',
        text: 'Long, complicated application forms causing prospective students to abandon registrations halfway through'
      },
      {
        num: '02',
        text: 'Slow admissions team response times allowing excited candidates to lose interest or enroll elsewhere'
      },
      {
        num: '03',
        text: 'Advertising without clear career outcomes, alumni success stories, or scholarship incentives'
      },
      {
        num: '04',
        text: 'No automated WhatsApp reminders for open-day webinars, campus tours, and application cutoff dates'
      }
    ],
    tableEyebrow: 'AD CHANNEL BREAKDOWN',
    tableTitle: 'Multi-Channel Student Recruitment ',
    tableHighlight: 'for Schools & Academies',
    tableSubtitle: 'Every channel reaches students and parents at a different stage of their educational search. We deploy the right mix to fill classroom seats.',
    channelsTable: [
      {
        channel: 'Google Search Ads (Course & Intake Queries)',
        whoItReaches: 'Students and parents actively searching for diploma courses, degree programs, professional certifications, or private schools',
        bestUsedFor: 'Capturing high-intent applicants searching during active intake periods',
        speedToResults: 'First student inquiries within 3 to 7 days of launch'
      },
      {
        channel: 'TikTok & Instagram Video Reels',
        whoItReaches: 'Gen-Z students and working professionals looking to upskill or pursue higher education',
        bestUsedFor: 'Campus culture showcases, student testimonials, career outcomes, and open-day registration buzz',
        speedToResults: 'Optimizes over 14 to 30 days'
      },
      {
        channel: 'WhatsApp 24/7 Admissions Advisor',
        whoItReaches: 'Applicants on mobile needing instant syllabus downloads, fee breakdowns, and entrance requirements',
        bestUsedFor: 'Instant lead qualification, automated campus tour booking, and rapid document submission',
        speedToResults: 'Direct student conversations from day one',
        isActive: true
      },
      {
        channel: 'Google Maps & Local Education SEO',
        whoItReaches: 'Parents searching for top-rated private schools and training centers in their local area',
        bestUsedFor: 'Local school discovery, driving campus visit inquiries, and building neighborhood reputation',
        speedToResults: 'Rankings compound over 2 to 4 weeks'
      },
      {
        channel: 'Virtual Open-Day & Masterclass Funnels',
        whoItReaches: 'Prospective students wanting a preview of faculty quality, curriculum depth, and job placement support',
        bestUsedFor: 'Building massive trust, demonstrating career ROI, and closing hesitant student inquiries',
        speedToResults: 'Fills webinars in 7 to 14 days'
      },
      {
        channel: 'Application Abandonment Retargeting',
        whoItReaches: 'Students who initiated an application form or downloaded course prospectuses but didn\'t enroll',
        bestUsedFor: 'High-urgency countdown reminders highlighting scholarship deadlines and remaining seats',
        speedToResults: 'High conversion rate from week one'
      }
    ],
    economicsTitle: 'Understand What Student Enrollment Paid Advertising Should Cost and What It Should Return',
    economicsParagraph1: 'A single enrolled student contributes between $1,500 and $8,000+ per academic year in tuition fees, with multi-year degree programs generating upwards of $15,000+ in institutional revenue.',
    economicsParagraph2: 'Acquiring an enrolled student through targeted digital sprint campaigns typically costs between $35 and $95 in ad spend, delivering an exceptional return on recruitment marketing investments.',
    economicsMetrics: [
      { value: '$1,200', label: 'Typical minimum monthly ad spend for education intake campaigns' },
      { value: '$6,500+', label: 'Average annual tuition revenue per enrolled student' },
      { value: '5x - 15x', label: 'Return on ad spend (ROAS) across annual student cohorts' }
    ],
    comparisonEyebrow: 'GENERIC VS SPECIALIST',
    comparisonTitle: 'The Admissions Difference ',
    comparisonHighlight: 'an Education Marketing Specialist Makes',
    comparisonSubtitle: 'Compare standard agency approaches against our dedicated student intake engine.',
    genericAgencyName: 'What a Generic Marketing Agency Does',
    specialistAgencyName: 'What We Do as an Education Digital Marketing Agency',
    comparisonRows: [
      {
        topic: 'Intake Timing & Strategy',
        generic: 'Runs the same constant ad year-round with no regard for intake deadlines or semester schedules.',
        specialist: 'Executes high-urgency 30–60 day intake sprints synchronized with application deadlines and open days.'
      },
      {
        topic: 'Application Experience',
        generic: 'Forces prospective students into clunky, 20-field application forms on outdated web portals.',
        specialist: 'Deploys 2-step mobile-first lead forms and WhatsApp instant admissions routing with 40% higher completion.'
      },
      {
        topic: 'Messaging & Career Outcomes',
        generic: 'Focuses on generic campus photos with no mention of job placement rates or salary outcomes.',
        specialist: 'Highlights alumni success stories, hiring partner networks, and tangible career outcomes.'
      },
      {
        topic: 'Automated Admissions Assistant',
        generic: 'Leaves student inquiries in an unmonitored admissions email inbox for days.',
        specialist: 'Implements 24/7 WhatsApp automated advisors answering tuition fees and booking campus tours instantly.'
      },
      {
        topic: 'Tracking & Cost per Enrolled Student',
        generic: 'Reports only on website visits rather than cost per verified enrolled student.',
        specialist: 'Tracks cost-per-application, completed enrollment conversion rate, and cohort tuition ROI.'
      },
      {
        topic: 'Nurture & Open-Day Follow-Up',
        generic: 'Never follows up with open-day attendees, allowing warm candidates to apply to other schools.',
        specialist: 'Runs automated WhatsApp and email reminder sequences with scholarship countdown alerts.'
      }
    ],
    bottomCtaTitle: 'Ready To Fill Your Next Student Intake Cohort?',
    bottomCtaSubtitle: 'Get a tailored Education Recruitment Strategy & Enrollment Intake Analysis.'
  }
};

interface IndustryDetailedSectionProps {
  industryId: string;
  onRequestAudit?: () => void;
  onNavigate?: (view: string) => void;
}

export const IndustryDetailedSection: React.FC<IndustryDetailedSectionProps> = ({
  industryId,
  onRequestAudit,
  onNavigate
}) => {
  const data = allIndustriesData[industryId] || (industryId === 'vet' ? allIndustriesData['vet-clinics'] : undefined) || allIndustriesData['hospitality'];

  const handleBookConsultation = () => {
    if (onRequestAudit) {
      onRequestAudit();
    } else if (onNavigate) {
      onNavigate('free-audit');
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 text-slate-800">
      
      {/* 1. HERO SECTION */}
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            <span className="text-[#1D63ED]">{data.highlightKeyword}</span> Digital Marketing Agency
          </h1>
          <div className="space-y-3 max-w-3xl text-sm sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
            <p>{data.heroDefinition1}</p>
            <p>{data.heroDefinition2}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 sm:pt-3">
            <button
              onClick={handleBookConsultation}
              className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] active:bg-[#C26B00] text-slate-950 font-bold text-sm sm:text-base transition-all shadow-sm flex items-center justify-center cursor-pointer active:scale-[0.98]"
            >
              Book Free Consultation Now
            </button>
          </div>
        </div>

        {/* Active Channels Grid Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xs space-y-4">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
            Active Channels &amp; Services — {data.category} Growth Engine
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {data.activeChannels.map((channel, idx) => (
              <div key={idx} className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{channel.title}</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md uppercase shrink-0">
                    ACTIVE
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. STATS BAR (NAVY BANNER) */}
      <div className="bg-[#0B2545] rounded-2xl p-5 sm:p-8 lg:p-10 text-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
        {data.stats.map((stat, idx) => (
          <div key={idx} className={`space-y-1 ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
            <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#F28E13]">{stat.value}</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* 3. WHY MARKETING FAILS */}
      <div className="space-y-6 sm:space-y-8 pt-2">
        <div className="space-y-3 max-w-3xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C25E00]">
            {data.whyFailsEyebrow}
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
            {data.whyFailsTitle} <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">{data.whyFailsHighlight}</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-lg leading-relaxed pt-1">
            {data.whyFailsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Image with Caption */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm aspect-4/3 lg:aspect-auto lg:h-[340px]">
            <img 
              src={data.heroImage} 
              alt={data.name} 
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-white font-medium">
                {data.heroImageCaption}
              </p>
            </div>
          </div>

          {/* Right Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-sm sm:text-lg text-slate-700 leading-relaxed">
            <p>{data.narrativeParagraph1}</p>
            <p>{data.narrativeParagraph2}</p>
          </div>
        </div>

        {/* 4 Numbered Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 pt-2">
          {data.breakdownCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4 shadow-2xs">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0F223D] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0">
                {card.num}
              </span>
              <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-medium pt-0.5 sm:pt-1">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2 sm:pt-3">
          <button
            onClick={handleBookConsultation}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] active:bg-[#C26B00] text-slate-950 font-bold text-sm sm:text-base transition-all shadow-sm cursor-pointer active:scale-[0.98]"
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* 4. AD CHANNEL BREAKDOWN TABLE */}
      <div className="space-y-4 sm:space-y-8 pt-4">
        <div className="space-y-3 max-w-4xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C25E00]">
            {data.tableEyebrow}
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
            {data.tableTitle} <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">{data.tableHighlight}</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-lg leading-relaxed pt-1">
            {data.tableSubtitle}
          </p>
        </div>

        {/* Mobile Horizontal Swipe Indicator */}
        <div className="flex md:hidden items-center justify-between px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs font-semibold text-[#C25E00]">
          <span>👉 Swipe table sideways to view full channel details</span>
        </div>

        {/* Responsive Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto overscroll-x-contain">
            <table className="w-full text-left border-collapse min-w-[650px] sm:min-w-[700px]">
              <thead>
                <tr className="bg-[#0B2545] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                  <th className="py-3.5 sm:py-4 px-4 sm:px-5 w-1/4">CHANNEL</th>
                  <th className="py-3.5 sm:py-4 px-4 sm:px-5 w-1/3">WHO IT REACHES</th>
                  <th className="py-3.5 sm:py-4 px-4 sm:px-5 w-1/4">BEST USED FOR</th>
                  <th className="py-3.5 sm:py-4 px-4 sm:px-5 w-1/6">SPEED TO RESULTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-base text-slate-700">
                {data.channelsTable.map((ch, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 sm:py-4 px-4 sm:px-5 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span>{ch.channel}</span>
                        {ch.isActive && (
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded uppercase">
                            ACTIVE
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 sm:py-4 px-4 sm:px-5 text-slate-600">
                      {ch.whoItReaches}
                    </td>
                    <td className="py-3.5 sm:py-4 px-4 sm:px-5 text-slate-600">
                      {ch.bestUsedFor}
                    </td>
                    <td className="py-3.5 sm:py-4 px-4 sm:px-5 font-medium text-slate-900">
                      {ch.speedToResults}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 5. ECONOMICS BANNER */}
      <div className="bg-[#0B2545] rounded-3xl p-5 sm:p-10 lg:p-12 text-white space-y-5 sm:space-y-6">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            {data.economicsTitle}
          </h2>
          <p className="text-sm sm:text-lg text-slate-200 leading-relaxed">
            {data.economicsParagraph1}
          </p>
          <p className="text-sm sm:text-lg text-slate-200 leading-relaxed">
            {data.economicsParagraph2}
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 pt-2">
          {data.economicsMetrics.map((metric, idx) => (
            <div key={idx} className="bg-[#103058] border border-slate-700/80 rounded-2xl p-4 sm:p-6 text-center space-y-1.5 sm:space-y-2">
              <div className="text-2xl sm:text-4xl font-extrabold text-[#F28E13]">
                {metric.value}
              </div>
              <p className="text-xs sm:text-base text-slate-300 leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2 sm:pt-3">
          <button
            onClick={handleBookConsultation}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] active:bg-[#C26B00] text-slate-950 font-bold text-sm sm:text-base transition-all shadow-sm cursor-pointer active:scale-[0.98]"
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* 6. GENERIC VS SPECIALIST COMPARISON SECTION */}
      <div className="space-y-6 sm:space-y-8 pt-2">
        <div className="space-y-3 max-w-4xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C25E00]">
            {data.comparisonEyebrow}
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
            {data.comparisonTitle} <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">{data.comparisonHighlight}</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-lg leading-relaxed pt-1">
            {data.comparisonSubtitle}
          </p>
        </div>

        {/* Side-by-Side Comparison with clear row boundaries and mobile labels */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          {/* Header Row (visible on desktop) */}
          <div className="hidden md:grid grid-cols-2 divide-x divide-slate-200">
            <div className="bg-red-50/70 p-5 border-red-100">
              <h3 className="text-base sm:text-lg font-bold text-red-700 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-xs">✕</span>
                {data.genericAgencyName}
              </h3>
            </div>
            <div className="bg-[#0B2545] p-5 text-white">
              <h3 className="text-base sm:text-lg font-bold flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-300 font-bold flex items-center justify-center text-xs">✓</span>
                {data.specialistAgencyName}
              </h3>
            </div>
          </div>

          {/* Comparison Rows with Boundaries */}
          <div className="divide-y divide-slate-200">
            {data.comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* Generic agency column */}
                <div className="p-4 sm:p-5 bg-red-50/20 text-xs sm:text-base text-slate-700 flex items-start gap-3">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✕</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{row.topic}</span>
                      <span className="md:hidden text-[10px] bg-red-100 text-red-700 font-semibold px-1.5 py-0.5 rounded">Generic Agency</span>
                    </div>
                    <span className="leading-relaxed">{row.generic}</span>
                  </div>
                </div>

                {/* Specialist agency column */}
                <div className="p-4 sm:p-5 bg-emerald-50/20 text-xs sm:text-base text-slate-700 flex items-start gap-3">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">✓</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{row.topic}</span>
                      <span className="md:hidden text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.5 rounded">Specialist</span>
                    </div>
                    <span className="leading-relaxed">{row.specialist}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. BOTTOM CALL TO ACTION */}
      <div className="bg-gradient-to-r from-[#0B2545] via-[#103058] to-[#0B2545] text-white rounded-3xl p-6 sm:p-12 lg:p-14 text-center space-y-5 sm:space-y-6 shadow-sm">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            {data.bottomCtaTitle}
          </h2>
          <p className="text-slate-200 text-sm sm:text-lg leading-relaxed">
            {data.bottomCtaSubtitle}
          </p>
        </div>

        <div className="flex items-center justify-center pt-2">
          <button
            onClick={handleBookConsultation}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] active:bg-[#C26B00] text-slate-950 font-bold text-sm sm:text-base tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
