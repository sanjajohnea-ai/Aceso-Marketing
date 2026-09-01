import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import socialMediaPhoneImg from '../assets/images/social_media_3d_phone_1786954171422.jpg';
import businessBenefitsImg from '../assets/images/business_benefits_growth_1788265402410.jpg';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp,
  Award,
  BarChart3
} from 'lucide-react';

export interface PerformanceKPI {
  metric: string;
  focus: string;
  whyWeTrackIt: string;
}

export interface ServiceDetailModel {
  id: string;
  title: string;
  category: string;
  heroHeadline: string;
  description: string;
  heroImage?: string;
  imageCaption?: string;
  subServices: {
    title: string;
    description: string;
    example?: string;
    whyItMatters?: string;
  }[];
  benefitsParagraph: string;
  keyBenefits: string[];
  deliverables: string[];
  kpis: PerformanceKPI[];
  pricingCategoryKey: 'social' | 'ppc' | 'web' | 'seo' | 'all';
}

export const servicesData: Record<string, ServiceDetailModel> = {
  social: {
    id: 'social',
    title: 'Social Media Marketing',
    category: 'Social Media Marketing',
    heroHeadline: 'Social Media Marketing & Management',
    description: 'Build an active, loyal community where your target audience spends their time every single day. At Aceso Solutions we combine strategy, creative production, publishing, and performance tracking to keep your social media consistent and focused on business growth.',
    heroImage: socialMediaPhoneImg,
    imageCaption: 'Creative branded graphics, carousels, Reels, and community engagement workflows.',
    subServices: [
      {
        title: 'Content Planning & Scheduling',
        description: 'We plan your content around your business goals, audience, promotions, and key dates, then schedule and publish it consistently across your selected platforms.',
        example: 'Planning monthly educational carousels, customer reviews, promotional campaigns, and behind-the-scenes video shoots 3 weeks in advance.',
        whyItMatters: 'Consistent posting maintains brand authority, signals reliability to algorithms, and ensures your business is always top of mind.'
      },
      {
        title: 'Creative Content Production',
        description: 'We create engaging branded graphics, carousels, Reels, TikToks, and other short-form content designed to capture attention and communicate your message clearly.',
        example: 'High-converting 9:16 short-form video reels showcasing your services, client transformations, and quick expert advice.',
        whyItMatters: 'Professional visual design stops casual scrolling and clearly articulates your value proposition in seconds.'
      },
      {
        title: 'Performance Tracking & Optimization',
        description: 'We monitor reach, engagement, audience growth, clicks, and other relevant metrics to understand what is working. We use these insights to refine your content and strategy over time.',
        example: 'Reviewing monthly engagement spikes, top-performing video hooks, profile visit rates, and link click attribution.',
        whyItMatters: 'Data-backed refinement ensures ad budget and creative energy are always focused on what drives actual customer conversions.'
      },
      {
        title: 'Community Management',
        description: 'We monitor comments, messages, and customer interactions, helping your business stay responsive and engaged with its audience.',
        example: 'Assisting in rapid replies to Instagram DMs, comment moderations, and routing inquiries to your sales team or WhatsApp.',
        whyItMatters: 'Responsive communication turns curious commenters into paying customers before they reach out to competitors.'
      }
    ],
    benefitsParagraph: 'A structured social media marketing system builds brand authority, reduces acquisition friction, and drives measurable inquiries while saving valuable internal hours.',
    keyBenefits: [
      'Builds top-of-mind brand authority that fosters audience loyalty over competitors',
      'Reduces customer acquisition friction with seamless lead and WhatsApp inquiry pathways',
      'Saves 20+ internal operational hours per month by outsourcing strategy and content execution',
      'Maintains consistent, goal-aligned publishing across selected social platforms',
      'Delivers high-converting branded graphics, carousels, Reels, and short-form video',
      'Provides ongoing performance tracking, audience insights, and responsive community management'
    ],
    deliverables: [
      'Comprehensive Monthly Social Media Content Calendar',
      '12 to 20 Custom Branded Graphics, Carousels & Video Reels',
      'Profile Bio & Story Highlights Optimization Suite',
      'Comment & Direct Message Monitoring Assistance',
      'Monthly Performance Tracking & Strategic Growth Review'
    ],
    kpis: [
      {
        metric: 'Engagement & Interaction Quality',
        focus: 'Content Resonance & Sentiment',
        whyWeTrackIt: 'Measures whether your audience actively values your content through saves, shares, and substantive comments rather than passive scrolling, signaling strong brand affinity.'
      },
      {
        metric: 'Qualified Follower & Reach Velocity',
        focus: 'Local Audience Growth',
        whyWeTrackIt: 'Ensures your follower base expands with real prospective customers in your specific geographic service radius rather than irrelevant or non-buying accounts.'
      },
      {
        metric: 'Direct Message & Bio Link Inquiries',
        focus: 'Inbound Lead Attribution',
        whyWeTrackIt: 'Tracks the exact volume of prospective customers who move from viewing content to initiating direct conversations, booking consultations, or visiting key booking pages.'
      },
      {
        metric: 'Publishing & Editorial Consistency',
        focus: 'Algorithm Reliability & Brand Recall',
        whyWeTrackIt: 'Monitors posting schedule adherence to maintain favorable ranking within platform algorithms and ensure continuous top-of-mind awareness in your market.'
      }
    ],
    pricingCategoryKey: 'social'
  },
  ppc: {
    id: 'ppc',
    title: 'Google & Meta Ads (PPC)',
    category: 'Paid Advertising (PPC)',
    heroHeadline: 'Google & Meta Pay-Per-Click Advertising',
    description: "If you're interested in running advertisements for your business, you've come to the right place. Aceso Solutions provides the tools, strategy, and creative assets to put your business in front of ideal customers through Pay-Per-Click campaigns like Google Ads and Meta Ads. We create strategic campaigns designed to convert while maximizing visibility and minimizing your cost-per-acquisition.",
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'High-intent search keyword campaigns, Meta lead ads, and real-time ROAS dashboards.',
    subServices: [
      {
        title: 'Google Search & Local Services Ads (LSA)',
        description: 'Capture active buyers at the exact moment they search for your service with keyword and negative match tuning.',
        example: 'Targeting exact searches like "emergency vet near me," "dental clinic Westlands," or "commercial lawyer Nairobi."',
        whyItMatters: 'Captures prospects with immediate buying intent right at the moment they need a solution.'
      },
      {
        title: 'Meta (Facebook & Instagram) Lead Generation',
        description: 'Hyper-targeted demographic and interest campaigns using engaging visuals and instant lead forms.',
        example: 'Targeting affluent pet owners, homeowners, or corporate directors with tailored video offers and 1-tap mobile inquiry forms.',
        whyItMatters: "Reaches potential clients who aren't actively searching today but have the exact demographic profile and need."
      },
      {
        title: 'Strategic Retargeting Funnels',
        description: 'Re-engage website visitors who did not convert on their first visit with compelling reminder offers.',
        example: 'Displaying special limited-time booking bonuses or customer testimonials to users who visited your pricing page.',
        whyItMatters: 'Recovers 15%–30% of warm traffic that would otherwise be permanently lost.'
      },
      {
        title: 'Conversion Tracking & ROAS Optimization',
        description: 'Granular call tracking, form submission tracking, and real-time dashboard reporting.',
        example: 'Setting up Google Tag Manager and Meta Pixel with server-side API conversions for 100% accurate attribution.',
        whyItMatters: 'Eliminates wasted ad spend by showing exactly which keyword, ad copy, and creative drove revenue.'
      }
    ],
    benefitsParagraph: 'Paid advertising unlocks a controllable faucet of high-intent customer leads on demand, eliminating revenue volatility and seasonality. By precisely bidding on active buyers and managing ad spend with strict negative keyword controls, your business achieves a predictable pipeline of qualified inquiries with full return on ad spend transparency.',
    keyBenefits: [
      'Immediate stream of qualified inbound customer inquiries from day one',
      'Strict daily budget management with no wasteful ad spend or keyword leaks',
      'Continuous A/B split-testing on ad copy, hooks, and landing pages',
      'Transparent live performance reporting dashboard with cost-per-lead metrics',
      'Full account ownership—you own all ad campaigns, pixels, and creative assets'
    ],
    deliverables: [
      'Competitor Ad Intelligence & Keyword Search Volume Research',
      'Campaign Architecture & Conversion Tracking Pixel Setup',
      'High-Converting Ad Copywriting & Professional Creative Assets',
      'Weekly Bid Adjustments & Negative Keyword Scrubbing',
      'Monthly Return on Ad Spend (ROAS) Review & Optimization'
    ],
    kpis: [
      {
        metric: 'Return on Ad Spend (ROAS)',
        focus: 'Revenue Efficiency & Profitability',
        whyWeTrackIt: 'Evaluates the direct gross revenue generated for each dollar invested in advertising, confirming campaigns contribute positively to business net profit.'
      },
      {
        metric: 'Cost Per Acquisition (CPA)',
        focus: 'Acquisition Budget Control',
        whyWeTrackIt: 'Monitors the exact cost required to generate a booked appointment or qualified lead, allowing us to reallocate budget to top-performing keywords and creatives.'
      },
      {
        metric: 'Click-Through Rate (CTR)',
        focus: 'Ad Copy & Creative Relevance',
        whyWeTrackIt: 'Measures how compelling and relevant your ad headlines and hooks are to active searchers, which directly lowers Google Quality Score costs and Meta CPMs.'
      },
      {
        metric: 'Landing Page Conversion Rate',
        focus: 'Post-Click Funnel Health',
        whyWeTrackIt: 'Identifies whether visitors directed from ads find the offer and booking flow frictionless enough to complete a form submission or initiate a phone call.'
      }
    ],
    pricingCategoryKey: 'ppc'
  },
  webdesign: {
    id: 'webdesign',
    title: 'Web Design & Development',
    category: 'Web Design & CRO',
    heroHeadline: 'Web Design & Conversion Optimization',
    description: 'Your website is the center of your digital marketing ecosystem. We design and build modern, ultra-fast, mobile-first websites engineered specifically to turn casual visitors into paying customers. From intuitive navigation and compelling copywriting to seamless booking and payment integrations, we create websites that look stunning and drive measurable revenue.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Responsive mobile-first architecture, sub-second load speeds, and high-converting UX layouts.',
    subServices: [
      {
        title: 'Custom Responsive UI/UX Design',
        description: 'Bespoke layouts tailored to your unique brand identity, optimized for flawless display on smartphones, tablets, and desktops.',
        example: 'Creating mobile-first responsive wireframes that make booking an appointment or requesting a quote effortless on any device.',
        whyItMatters: 'Over 75% of local service searches happen on mobile devices where clunky layouts cause instant bounce rates.'
      },
      {
        title: 'Conversion Rate Optimization (CRO) Architecture',
        description: 'Strategic placement of call-to-actions, trust badges, lead forms, and friction-free checkout/booking pathways.',
        example: 'Designing sticky mobile call/WhatsApp buttons, social proof reviews near forms, and 2-step lead capture wizards.',
        whyItMatters: 'Doubling your website conversion rate from 2% to 4% doubles your inbound leads without spending an extra dollar on ads.'
      },
      {
        title: 'Speed & Core Web Vitals Performance Tuning',
        description: 'Sub-second page loading speeds, image compression, clean semantic code, and modern CDN hosting.',
        example: 'Achieving 95+ Google PageSpeed scores with next-gen image formats, caching, and clean lightweight code.',
        whyItMatters: 'Every additional second of load time reduces conversions by 7% and directly harms Google search rankings.'
      },
      {
        title: 'Content Management & Lead Integration',
        description: 'User-friendly CMS setup with automated lead capture to CRM, email notifications, and instant WhatsApp chat links.',
        example: 'Syncing form submissions directly into Google Sheets, email alerts, and your internal sales CRM.',
        whyItMatters: 'Ensures your team gets notified in real time when a new prospect submits an inquiry.'
      }
    ],
    benefitsParagraph: 'A modern, high-converting digital storefront captures lost traffic, establishes immediate professional credibility, and turns casual site visitors into booked clients around the clock. By engineering fast loading speeds and frictionless mobile booking flows, your website converts existing traffic at a significantly higher rate, multiplying your overall marketing ROI.',
    keyBenefits: [
      'Mobile-optimized designs that load in under 2 seconds',
      'High-converting layout architecture that maximizes form fills and phone calls',
      'Complete search engine-friendly structure and schema markup',
      'Full website ownership with easy-to-edit content management',
      'Integrated WhatsApp click-to-chat and instant lead notification workflows'
    ],
    deliverables: [
      'Full Website Information Architecture & Wireframing',
      'Custom Responsive UI/UX Design & Front-End Development',
      'Lead Capture Forms & WhatsApp Click-to-Chat Integration',
      'Speed Optimization, SSL Security & Core Web Vitals Tuning',
      'Post-Launch Technical Support & CMS Training Session'
    ],
    kpis: [
      {
        metric: 'Core Web Vitals & Load Speed',
        focus: 'Technical Performance & SEO Health',
        whyWeTrackIt: 'Evaluates rendering speed and layout stability; sub-second mobile page loads prevent prospect abandonment and satisfy Google Core Web Vitals ranking criteria.'
      },
      {
        metric: 'Visitor-to-Inquiry Conversion Rate',
        focus: 'Conversion Architecture Efficiency',
        whyWeTrackIt: 'Tracks the percentage of total website visitors who complete a high-value action (call, WhatsApp message, form submission), measuring design effectiveness.'
      },
      {
        metric: 'Mobile Usability & Interaction Flow',
        focus: 'Device-Agnostic Experience',
        whyWeTrackIt: 'Monitors touch target accuracy, layout responsiveness, and ease of navigation on mobile devices where the vast majority of local service inquiries originate.'
      },
      {
        metric: 'Bounce & Key Page Retention Rate',
        focus: 'User Engagement & Clarity',
        whyWeTrackIt: 'Reveals whether visitors stay to explore your service details and pricing or exit immediately, highlighting areas where copywriting and layout can be refined.'
      }
    ],
    pricingCategoryKey: 'web'
  },
  seo: {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Search Engine Optimization',
    heroHeadline: 'Search Engine Optimization (SEO)',
    description: 'With our unique SEO strategy, we get your business visibility online. As experts in the algorithms behind platforms like Google, we take a comprehensive approach to getting your business SEEN by the billions of searches that happen each day. With SEO, we position your business right in front of your ideal clients, exactly where they are looking for you.',
    heroImage: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Google Maps 3-Pack local SEO, on-page optimization, technical speed tuning, and content strategy.',
    subServices: [
      {
        title: '1. On-Page SEO',
        description: 'Make your website more relevant to what your customers are searching for. We optimize your page titles, headings, content, images, keywords, and internal links so Google can better understand your business and connect your pages with relevant searches.',
        example: 'If you run a dental clinic in Nairobi, we can optimize your service pages around searches such as "dentist in Nairobi," "teeth cleaning Nairobi," or "emergency dentist Nairobi."',
        whyItMatters: 'Helps your website appear when potential customers are actively searching for your services.'
      },
      {
        title: '2. Technical SEO',
        description: 'Make your website easier for Google to find, understand, and rank. We identify technical issues such as slow loading speeds, broken links, poor mobile experience, indexing problems, and an unclear website structure.',
        example: "If your website takes 7 seconds to load on a mobile phone, we identify what's slowing it down and recommend improvements to make the site faster and easier to use.",
        whyItMatters: 'Even great content can struggle to perform if your website has technical problems.'
      },
      {
        title: '3. Local SEO & Google Maps 3-Pack',
        description: 'Help customers in your area find your business. We optimize your Google Business Profile, location information, reviews, and other local search signals to improve your visibility in local searches.',
        example: 'If you operate a veterinary clinic in Westlands, we can optimize your local presence so you\'re better positioned for searches such as "vet near me," "veterinary clinic in Westlands," or "animal hospital Nairobi."',
        whyItMatters: 'Helps you reach people who are nearby and more likely to visit, call, or make an enquiry.'
      },
      {
        title: '4. Content SEO & Authority Building',
        description: 'Create content that answers the questions your customers are already asking. We develop useful service pages, FAQs, articles, guides, and other content around relevant searches and customer needs.',
        example: 'A veterinary clinic could create content such as "How often should I vaccinate my dog?" or "What are the signs my cat needs a vet?" These pages attract pet owners researching these topics and introduce them to the clinic.',
        whyItMatters: 'Gives your business more opportunities to appear in search results while building trust with potential customers.'
      }
    ],
    benefitsParagraph: 'SEO creates durable, compounding organic equity for your business. Rather than paying for every individual visitor through ads, ranking in the top 3 of Google Maps and organic search generates a non-stop influx of high-intent phone calls, appointment bookings, and inquiries that appreciate in value over time.',
    keyBenefits: [
      'Top 3 Google Maps and local search discovery for high-intent nearby customers',
      'Consistent organic leads and enquiries without perpetual Pay-Per-Click ad costs',
      'Speed and technical optimization ensuring sub-2-second mobile load times',
      'Authoritative content that answers customer questions and builds lasting trust',
      'Compounding traffic growth that appreciates in value over time'
    ],
    deliverables: [
      'Comprehensive Technical & On-Page SEO Audit',
      'Full Google Business Profile & Local Citation Overhaul',
      'Keyword Mapping, Meta Titles, Headings & Schema Markup Optimization',
      'High-Intent Content Strategy & Local Landing Page Structure',
      'Monthly Search Rankings, Organic Traffic & Call Volume Reports'
    ],
    kpis: [
      {
        metric: 'Google Maps 3-Pack Local Visibility',
        focus: 'Proximity & Local Pack Dominance',
        whyWeTrackIt: 'Measures geographic visibility in Google Maps for high-intent searches (e.g. "near me"), which represent the single highest-converting source of local phone calls.'
      },
      {
        metric: 'Commercial Keyword Ranking Trajectory',
        focus: 'Search Engine Authority',
        whyWeTrackIt: 'Monitors keyword positions across Google organic search to assess page-one prominence and identify opportunities for strategic on-page content updates.'
      },
      {
        metric: 'Direct Inbound Organic Actions',
        focus: 'Confirmed Search Inquiries',
        whyWeTrackIt: 'Tracks direct phone calls, website clicks, and direction requests generated through your Google Business Profile and organic search listings.'
      },
      {
        metric: 'Non-Branded Organic Traffic Growth',
        focus: 'Net-New Customer Discovery',
        whyWeTrackIt: 'Separates existing brand searches from prospective clients discovering your business for the first time via informational and service-specific queries.'
      }
    ],
    pricingCategoryKey: 'seo'
  },
  whatsapp: {
    id: 'whatsapp',
    title: 'WhatsApp Marketing & Lead Automations',
    category: 'WhatsApp & Lead Automation',
    heroHeadline: 'WhatsApp Marketing & Lead Automation',
    description: 'Transform WhatsApp into your highest-converting sales and customer service channel. We build automated WhatsApp messaging funnels that instantly engage prospects from ads, answer inquiries 24/7, schedule consultations, send appointment reminders, and recover abandoned leads without manual effort.',
    heroImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop',
    imageCaption: '24/7 automated qualification bots, Click-to-WhatsApp ad funnels, and appointment reminder sequences.',
    subServices: [
      {
        title: '24/7 Interactive Chatbots & Menu Flows',
        description: 'Automated conversational flows that qualify prospect needs, answer service FAQs, and capture contact information around the clock.',
        example: 'A clinic bot that asks prospective patients what service they need, offers available times, and captures their phone number in under 30 seconds.',
        whyItMatters: 'Ensures zero missed leads after-hours or when your reception staff is busy.'
      },
      {
        title: 'Click-to-WhatsApp Ad Funnels',
        description: 'Direct Meta and Google ad traffic straight into pre-filled WhatsApp conversations with automated instant welcomes.',
        example: 'Ads that open WhatsApp with the message "Hi! I\'d like to book a consultation" pre-filled and an automated instant greeting.',
        whyItMatters: 'Reduces form friction to near-zero and opens a direct, personal communication channel with prospects.'
      },
      {
        title: 'Automated Appointment Booking & Reminders',
        description: 'Self-service scheduling synced to Google Calendar with automatic reminder alerts that eliminate costly no-shows.',
        example: 'Automated WhatsApp reminder sent 24 hours and 2 hours before an appointment with a 1-tap confirmation button.',
        whyItMatters: 'Reduces appointment no-shows by up to 60% and saves hours of manual receptionist phone calls.'
      },
      {
        title: 'CRM Integration & Broadcast Campaigns',
        description: 'Seamless customer data syncing into your CRM or Google Sheets, plus compliant broadcast campaigns to re-engage past clients.',
        example: 'Syncing every WhatsApp conversation to your CRM with automated tags, plus seasonal promotional broadcasts to past clients.',
        whyItMatters: 'Turns your past customer database into a repeatable source of repeat revenue.'
      }
    ],
    benefitsParagraph: 'WhatsApp automation eliminates response delays that cause prospects to contact competitors. By instantly qualifying leads under 5 seconds, answering common questions 24/7, and sending automated two-way appointment confirmation reminders, your business captures significantly more revenue while reducing manual receptionist workload.',
    keyBenefits: [
      'Instant response times (under 5 seconds) to capture high-intent leads',
      '98% message open rates compared to 20% on traditional email marketing',
      'Up to 60% reduction in appointment no-show rates via automated reminders',
      'Automated qualification that saves hours of manual receptionist work',
      'Direct, frictionless communication channel built on the platform customers already use'
    ],
    deliverables: [
      'Custom WhatsApp Automation Strategy & Conversation Flow Mapping',
      'Interactive Chatbot Build & Logic Configuration',
      'Meta Ad & Website Click-to-Chat Integration',
      'Calendar Sync & Automated Reminder Workflows',
      'CRM/Spreadsheet Webhook Sync & Staff Training Session'
    ],
    kpis: [
      {
        metric: 'First-Touch Lead Response Speed',
        focus: 'Instant Prospect Engagement',
        whyWeTrackIt: 'Monitors the time it takes to engage an inbound prospect; immediate conversational greetings prevent active leads from seeking alternatives from competitors.'
      },
      {
        metric: 'Chatbot Qualification & Intake Rate',
        focus: 'Lead Filtering & Data Completeness',
        whyWeTrackIt: 'Measures the proportion of prospects who successfully complete automated intake questions, providing your sales or reception team with pre-qualified context.'
      },
      {
        metric: 'Appointment Confirmation & Attendance',
        focus: 'No-Show Reduction & Schedule Fill',
        whyWeTrackIt: 'Tracks confirmation replies from automated 24-hour and 2-hour WhatsApp reminder sequences to minimize empty slots and protect billable hours.'
      },
      {
        metric: 'Broadcast Read & Re-Activation Rate',
        focus: 'Client Retention & Lifetime Value',
        whyWeTrackIt: 'Monitors customer response to seasonal wellness check-ups, service reminders, and promotional messages to drive repeat appointments from past clients.'
      }
    ],
    pricingCategoryKey: 'all'
  }
};

interface ServicesPageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onOpenCustomBuilder?: () => void;
  onNavigate?: (sectionId: string) => void;
  selectedServiceId?: string;
  onSelectService?: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onRequestAudit,
  onNavigate,
  selectedServiceId: controlledServiceId,
  onSelectService
}) => {
  const [internalServiceId, setInternalServiceId] = useState<string>('social');
  const currentServiceId = controlledServiceId || internalServiceId;
  const activeService = servicesData[currentServiceId] || servicesData['social'];

  const handleBookConsultation = () => {
    if (onRequestAudit) {
      onRequestAudit();
    } else if (onNavigate) {
      onNavigate('free-audit');
    }
  };

  const handleViewPricing = () => {
    if (onNavigate) {
      onNavigate(`pricing-${activeService.pricingCategoryKey}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] text-slate-800 font-sans antialiased selection:bg-[#DE8E53] selection:text-white pb-16 md:pb-0">
      
      {/* 1. MATCHING MAIN NAVBAR */}
      <Navbar 
        activeSection={`service-${activeService.id}`}
        onRequestAudit={onRequestAudit}
        onNavigate={onNavigate || onBackToHome}
        ctaLabel="Get Free Growth Audit"
      />

      {/* 2. MAIN DEDICATED SERVICE PAGE WORKSPACE */}
      <main className="flex-1 pt-6 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 sm:space-y-16"
          >
            {/* HERO SECTION */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 max-w-4xl">
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  <span className="text-[#1D63ED]">{activeService.title}</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-3xl">
                  {activeService.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                  <button
                    onClick={handleBookConsultation}
                    className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] active:bg-[#C26B00] text-slate-950 font-bold text-sm sm:text-base transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleViewPricing}
                    className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-[0.98]"
                  >
                    View Pricing &amp; Plans
                  </button>
                </div>
              </div>

              {/* Visual Spotlight Card (With Image or Graphic) */}
              {activeService.heroImage && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
                  <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-slate-900 aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:h-[280px]">
                    <img 
                      src={activeService.heroImage} 
                      alt={activeService.title} 
                      className="w-full h-full object-cover opacity-95"
                    />
                    {activeService.imageCaption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <p className="text-xs sm:text-sm text-white font-medium">
                          {activeService.imageCaption}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                      Built specifically for growing businesses and local practices.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      We eliminate the guesswork and chaotic execution of digital marketing by pairing modern creative production with rigorous lead-tracking systems, transparent reporting, and continuous optimization.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>100% Account Ownership</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Transparent Lead Tracking</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Dedicated Strategy Support</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Measurable Return on Investment</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CORE SUB-SERVICES & PILLARS */}
            <div className="space-y-8">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  What We Deliver in <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">{activeService.title}</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Every component is engineered to work together seamlessly, capturing attention, building trust, and generating consistent customer inquiries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {activeService.subServices.map((sub, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-[#0F223D] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                          {`0${idx + 1}`}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                          {sub.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {sub.description}
                      </p>

                      {sub.example && (
                        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 text-sm text-slate-700 space-y-1.5">
                          <p className="font-bold text-[#C25E00] text-xs uppercase tracking-wide">
                            Real-World Example
                          </p>
                          <p className="leading-relaxed">{sub.example}</p>
                        </div>
                      )}
                    </div>

                    {sub.whyItMatters && (
                      <p className="text-sm text-slate-600 pt-3 border-t border-slate-100 leading-relaxed">
                        <strong className="text-slate-900 font-semibold">Why it matters:</strong> {sub.whyItMatters}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 1. KEY BUSINESS BENEFITS (Dedicated full-width section) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-2xs">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#C25E00]" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide">
                  Key Business Benefits
                </h3>
              </div>

              {/* Dedicated Benefit Content and Visual Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {activeService.benefitsParagraph}
                  </p>
                  
                  <ul className="space-y-3 pt-2">
                    {activeService.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          ✓
                        </span>
                        <span className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                    <img
                      src={businessBenefitsImg}
                      alt="Strategic Business Growth & Measurable ROI Analysis"
                      referrerPolicy="no-referrer"
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                          Measurable Impact
                        </span>
                        <p className="text-white text-xs sm:text-sm font-semibold leading-snug">
                          Data-backed execution designed for consistent SME revenue expansion
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. STRATEGIC PERFORMANCE TRACKING KPIS (Dedicated full-width section) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-2xs">
              <div className="border-b border-slate-200 pb-5">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-[#1D63ED]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide">
                    Performance Tracking KPIs
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
                {activeService.kpis.map((kpi, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50/90 border border-slate-200 rounded-xl p-5 space-y-3.5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-base font-bold text-slate-900 leading-snug">
                        {kpi.metric}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-200/80 space-y-1">
                      <p className="text-xs font-bold text-[#C25E00] uppercase tracking-wider">
                        Why We Track This Metric:
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {kpi.whyWeTrackIt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM CALL TO ACTION BANNER */}
            <div className="bg-gradient-to-r from-[#0B2545] via-[#103058] to-[#0B2545] text-white rounded-3xl p-8 sm:p-12 lg:p-14 text-center space-y-6 shadow-sm">
              <div className="max-w-2xl mx-auto space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Ready To Grow With {activeService.title}?
                </h2>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                  Get a tailored growth audit and execution roadmap for your business.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={handleBookConsultation}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] text-slate-950 font-bold text-sm sm:text-base tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleViewPricing}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base tracking-wide uppercase transition-all flex items-center justify-center cursor-pointer"
                >
                  View Pricing Plans
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </main>

      {/* 3. FOOTER */}
      <Footer 
        onNavigate={onNavigate}
        onRequestAudit={onRequestAudit}
      />

    </div>
  );
};
