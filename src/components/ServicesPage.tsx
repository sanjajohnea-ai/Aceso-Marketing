import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import socialMediaPhoneImg from '../assets/images/social_media_3d_phone_1786954171422.jpg';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  X,
  Search,
  Globe,
  Target,
  Palette,
  Send,
  Check
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  subServices: {
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

const serviceModalData: Record<string, ServiceDetail> = {
  seo: {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'SEO',
    badge: 'ORGANIC SEARCH VISIBILITY',
    description: 'With our unique SEO strategy, we get your small business visibility online. As experts in the algorithms behind platforms like Google, we take a comprehensive approach to getting your small business SEEN by the billions of searches that happen each day. With SEO, we position your business right in front of your ideal clients, exactly where they are looking for you.',
    subServices: [
      {
        title: 'Local SEO & Google Business Profile Optimization',
        description: 'Dominate Google Maps and local 3-pack rankings with verified citations, profile optimization, and geotagged imagery.'
      },
      {
        title: 'High-Intent Keyword Architecture & On-Page SEO',
        description: 'Target the exact high-value keywords your customers search with optimized metadata, headers, and content structure.'
      },
      {
        title: 'Technical SEO & Core Web Vitals Auditing',
        description: 'Fix crawl errors, optimize schema markup, speed up page loads, and ensure indexing across all search engines.'
      },
      {
        title: 'Local Authority Link Building & Digital PR',
        description: 'Earn high-authority local backlinks and industry citations that build permanent domain authority.'
      }
    ],
    keyBenefits: [
      'Top 3 Google Maps and local search discovery',
      'Consistent organic leads without perpetual ad costs',
      'Compounds in value and traffic over time',
      'Transparent monthly keyword ranking and phone call reports'
    ],
    deliverables: [
      'Comprehensive SEO & Competitor Gap Audit',
      'Full Google Business Profile Overhaul',
      'On-Page Metadata & Keyword Optimization',
      'Monthly Ranking Dashboard & Strategy Consultation'
    ],
    timeline: '3 - 6 Months for compounding momentum',
    idealFor: 'Local service businesses, medical practices, contractors, and boutique professional firms.'
  },
  social: {
    id: 'social',
    title: 'Social Media Marketing & Management',
    category: 'Social Media',
    badge: 'AUTHENTIC ENGAGEMENT & GROWTH',
    description: 'Build an influential and engaging digital presence where your prospective clients spend their time. At Aceso Solutions, our social media marketing services transform your social channels into consistent lead-generating engines, connecting you directly with your local community and target audience.',
    subServices: [
      {
        title: 'Custom Content Strategy & Monthly Calendars',
        description: 'Tailored content themes, strategic educational posts, behind-the-scenes showcases, and conversion-focused promotions.'
      },
      {
        title: 'Graphic & Short-Form Video Production',
        description: 'High-converting graphics, carousel slides, short-form reels, and stories crafted specifically for your brand voice.'
      },
      {
        title: 'Community Engagement & Local Outreach',
        description: 'Active comment moderation, direct messaging response support, and localized partner engagement to amplify organic reach.'
      },
      {
        title: 'Audience Growth & Analytics Reporting',
        description: 'Monthly KPI tracking across follower growth, post engagement, link clicks, and direct customer conversions.'
      }
    ],
    keyBenefits: [
      'Consistent, professional brand presence across Instagram, Facebook & LinkedIn',
      'Engaged local community that drives organic referrals and inquiries',
      'Custom high-quality visuals and Reels without taking up your valuable time',
      'Transparent monthly engagement and audience growth analytics'
    ],
    deliverables: [
      'Comprehensive Social Media Growth Strategy',
      '12 - 20 Custom Branded Posts & Video Reels per Month',
      'Profile & Bio Optimization Suite',
      'Monthly Performance Review & Strategic Planning Session'
    ],
    timeline: 'Ongoing monthly management or campaign-based',
    idealFor: 'Small businesses, clinics, contractors, and local brands wanting an active, polished social media presence without the headache.'
  },
  ppc: {
    id: 'ppc',
    title: 'Paid Advertising (PPC)',
    category: 'Paid Ads',
    badge: 'TARGETED & MEASURABLE LEADS',
    description: 'If you\'re interested in running advertisements for your small business, you\'ve come to the right place. Aceso Solutions provides the tools, strategy, and creative assets to put your small business in front of ideal customers through Pay-Per-Click campaigns like Google Ads and Meta Ads. We create strategic campaigns designed to convert while maximizing visibility and minimizing your cost-per-acquisition.',
    subServices: [
      {
        title: 'Google Search & Local Services Ads (LSA)',
        description: 'Capture active buyers at the exact moment they search for your service with keyword and negative match tuning.'
      },
      {
        title: 'Meta (Facebook & Instagram) Lead Generation',
        description: 'Hyper-targeted demographic and interest campaigns using engaging visuals and instant lead forms.'
      },
      {
        title: 'Strategic Retargeting Funnels',
        description: 'Re-engage website visitors who did not convert on their first visit with compelling reminder offers.'
      },
      {
        title: 'Conversion Tracking & ROAS Optimization',
        description: 'Granular call tracking, form submission tracking, and real-time dashboard reporting.'
      }
    ],
    keyBenefits: [
      'Immediate stream of qualified inbound customer inquiries',
      'Strict daily budget management with no wasteful ad spend',
      'Continuous A/B split-testing to reduce cost-per-lead',
      'Transparent live performance reporting dashboard'
    ],
    deliverables: [
      'Competitor Ad Analysis & Keyword Research',
      'Campaign Build & Tracking Pixel Configuration',
      'Custom Ad Copywriting & High-Impact Creatives',
      'Weekly Bid Adjustments & Monthly ROI Reviews'
    ],
    timeline: 'Campaigns live in 5 - 7 business days',
    idealFor: 'Businesses needing immediate leads, seasonal service providers, and companies scaling client acquisition.'
  }
};

interface ServicesPageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onOpenCustomBuilder?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onRequestAudit,
  onNavigate
}) => {
  const [activeModal, setActiveModal] = useState<ServiceDetail | null>(null);

  const handleNav = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else if (sectionId === 'home') {
      onBackToHome();
    } else if (sectionId === 'services') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBackToHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. MATCHING MAIN NAVBAR (From Home Page) */}
      {/* ========================================================= */}
      <Navbar 
        activeSection="services"
        onRequestAudit={onRequestAudit}
        onNavigate={handleNav}
        ctaLabel="Get Free Growth Audit"
      />

      {/* ========================================================= */}
      {/* 2. HERO BANNER (Modern Color Gradient with Geometric Patterns) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#04142d] via-[#003B95] to-[#0284c7] text-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 shadow-md">
        
        {/* SVG Geometric Grid & Dot Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-pattern-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" />
                <circle cx="18" cy="18" r="1.5" fill="rgba(255,255,255,0.6)" />
              </pattern>
              <linearGradient id="patternFade" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
              </linearGradient>
              <mask id="patternMask">
                <rect width="100%" height="100%" fill="url(#patternFade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-pattern-grid)" mask="url(#patternMask)" />
          </svg>
        </div>

        {/* Ambient Gradient Glow Accents */}
        <div className="absolute -top-24 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -left-20 w-[420px] h-[420px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full text-left space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight font-sans">
            Digital Marketing Services<br />
            Made For The Small Business
          </h1>
          <p className="text-white/95 text-xs sm:text-sm lg:text-base max-w-3xl leading-relaxed font-normal">
            At Aceso Solutions, we believe every small business deserves the opportunity to grow, compete, and thrive in today’s digital marketplace. From the websites we build to the campaigns we manage and the ads we optimize, every solution is tailored to your business, your audience, and your goals, with a focus on measurable growth and long-term results.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. INTRO SECTION: FULL-SERVICE DIGITAL MARKETING AGENCY */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        
        {/* Dotted Accent Header */}
        <div className="flex items-center justify-center gap-3 text-[#003B95] font-bold text-xs sm:text-sm uppercase tracking-widest">
          <span className="tracking-[0.3em] font-mono text-xs opacity-70">••••••••••</span>
          <span className="px-1">Full-Service Digital Marketing Agency</span>
          <span className="tracking-[0.3em] font-mono text-xs opacity-70">••••••••••</span>
        </div>

        {/* Intro Paragraph (Rephrased for Aceso Solutions) */}
        <div className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto space-y-4 text-center">
          <p>
            Whether your goal is to scale your business, strengthen your online presence, or generate a consistent flow of qualified leads, Aceso Solutions is here to help you grow. We are a full-service digital marketing agency specializing in SEO, social media marketing, and targeted PPC advertising, with strategies built specifically for small and growing businesses.
          </p>
          <p>
            We combine data-driven marketing, strong creative execution, and a deep understanding of how customers search, engage, and make purchasing decisions online. Every campaign is designed to increase your visibility, attract the right audience, convert more opportunities, and deliver measurable results and meaningful ROI.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ALTERNATING 50/50 FULL-WIDTH SERVICE BLOCKS (EXACTLY 3 SERVICES) */}
      {/* ========================================================= */}
      <section className="w-full">
        
        {/* ------------------------------------------------------- */}
        {/* ROW 1: SEARCH ENGINE OPTIMIZATION (Blue Left / Image Right) */}
        {/* ------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[380px]">
          
          {/* Blue Box (Left) */}
          <div className="bg-gradient-to-r from-[#003B95] to-[#0D47A1] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              Search Engine Optimization
            </h2>
            <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-xl">
              With our unique SEO strategy, we get your small business visibility online. As experts in the algorithms behind platforms like Google, we take a comprehensive approach to getting your small business SEEN by the billions of searches that happen each day. With SEO, we position your business right in front of your ideal clients, exactly where they are looking for you. If you’re ready to increase your leads, close more sales, and have a digital presence that you’re proud of, Aceso Solutions is your partner.
            </p>
          </div>

          {/* Photo (Right) */}
          <div className="relative min-h-[280px] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80" 
              alt="African digital marketing professionals collaborating on search engine strategy and analytics" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

        {/* ------------------------------------------------------- */}
        {/* ROW 2: SOCIAL MEDIA MARKETING (Image Left / White Right) */}
        {/* ------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[380px]">
          
          {/* Photo (Left) - 3D Smartphone with Floating Social Icons */}
          <div className="relative min-h-[300px] lg:min-h-full order-last lg:order-first bg-[#2b1055] overflow-hidden flex items-center justify-center">
            <img 
              src={socialMediaPhoneImg} 
              alt="3D smartphone displaying social media creator with floating 3D social icons" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* White Box (Right) */}
          <div className="bg-white text-slate-800 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#003B95]">
              Social Media Marketing
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-xl">
              Build an active, loyal community where your target audience spends their time every single day. The Aceso Solutions team delivers custom social media marketing and management services tailored specifically for growing businesses. From bespoke graphic designs, trending Reels, and monthly content calendars to proactive community engagement and targeted promotions, we establish a commanding presence that turns social followers into qualified leads.
            </p>
          </div>

        </div>

        {/* ------------------------------------------------------- */}
        {/* ROW 3: PAID ADVERTISING (PPC) (Blue Left / Image Right) */}
        {/* ------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[380px]">
          
          {/* Blue Box (Left) */}
          <div className="bg-gradient-to-r from-[#003B95] to-[#0D47A1] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              Paid Advertising (PPC)
            </h2>
            <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-xl">
              If you’re interested in running advertisements for your small business, you’ve come to the right place. Aceso Solutions contains the tools and assets to put your small business in front of ideal customers through Pay-Per-Click campaigns like Google Ads and Meta Ads. With a deep understanding of ad platforms and algorithms, combined with consumer psychology, we create strategic campaigns designed to convert while maximizing visibility and minimizing your cost.
            </p>
          </div>

          {/* Photo (Right) */}
          <div className="relative min-h-[280px] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
              alt="African business and marketing professionals collaborating in tech workspace analyzing paid campaigns" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* 5. OUR MARKETING PHILOSOPHY SECTION */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        
        {/* Dotted Accent Header */}
        <div className="flex items-center justify-center gap-3 text-[#003B95] font-bold text-xs sm:text-sm uppercase tracking-widest">
          <span className="tracking-[0.3em] font-mono text-xs opacity-70">••••••••••</span>
          <span className="px-1">Our Marketing Philosophy</span>
          <span className="tracking-[0.3em] font-mono text-xs opacity-70">••••••••••</span>
        </div>

        {/* Philosophy Paragraph */}
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
          At Aceso Solutions, we connect the right businesses with the right customers. Our expertise spans SEO, paid advertising, and social media marketing, helping small businesses improve their visibility across Google, Meta, and other digital platforms. We combine data-driven strategy with compelling content, strong creative, and conversion-focused campaigns to attract the right audience and turn attention into real business opportunities. Through clear communication and measurable results, we help businesses compete confidently and grow sustainably.
        </p>
      </section>

      {/* ========================================================= */}
      {/* 6. MATCHING FOOTER (From Home Page) */}
      {/* ========================================================= */}
      <Footer 
        onNavigate={handleNav}
        onRequestAudit={onRequestAudit}
      />

      {/* ========================================================= */}
      {/* 8. SERVICE DETAIL MODAL (Opens when clicking any service button) */}
      {/* ========================================================= */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge & Title */}
            <div className="space-y-1 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#003B95]">
                {activeModal.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                {activeModal.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              {activeModal.description}
            </p>

            {/* Sub Services */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                What's Included:
              </h4>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {activeModal.subServices.map((sub, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-0.5">
                    <p className="text-xs font-bold text-slate-900">{sub.title}</p>
                    <p className="text-[11px] text-slate-600">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables & Outcomes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 bg-blue-50/60 rounded-xl border border-blue-100">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#003B95] mb-1">
                  Estimated Timeline
                </p>
                <p className="text-xs font-semibold text-slate-800">{activeModal.timeline}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#003B95] mb-1">
                  Ideal For
                </p>
                <p className="text-xs text-slate-700 leading-snug">{activeModal.idealFor}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveModal(null);
                  onRequestAudit();
                }}
                className="flex-1 py-3 bg-[#003B95] hover:bg-[#002D72] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Proposal & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
