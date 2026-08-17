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
  'web-design': {
    id: 'web-design',
    title: 'Web Design For Small Business',
    category: 'Web Design',
    badge: 'PERSUASIVE & CONVERSION-DRIVEN',
    description: 'We build professional, personalized, and persuasive websites for small businesses at Aceso Solutions. Our web design services capture the value and voice of your company through design and content, providing you with an unmatched digital asset that you will always own.',
    subServices: [
      {
        title: 'Custom Responsive UI/UX Design',
        description: 'Bespoke design created specifically for your demographic. 100% mobile, tablet, and desktop optimized.'
      },
      {
        title: 'WordPress & Modern CMS Development',
        description: 'Clean, secure, and fast websites with drag-and-drop editing so you retain full control over your content.'
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Strategic call-to-action placement, social proof triggers, and frictionless appointment booking forms.'
      },
      {
        title: 'Speed & Core Web Vitals Tuning',
        description: 'Sub-2-second load times engineered with next-gen image compression and clean semantic code.'
      }
    ],
    keyBenefits: [
      '100% client ownership with zero hostage platform lock-in',
      'High conversion design that turns visitors into paying clients',
      'Pre-configured on-page SEO foundations ready to rank',
      'Fast, mobile-first performance on every device'
    ],
    deliverables: [
      'Custom Wireframes & Design Prototypes',
      'Full Custom Web Development',
      'Copywriting & High-Resolution Asset Integration',
      'Google Analytics 4 & Meta Tracking Setup',
      'CMS Training & 30-Day Post-Launch Support'
    ],
    timeline: '3 - 5 Weeks from kickoff to launch',
    idealFor: 'Small businesses with outdated websites or new ventures looking to launch with immediate credibility.'
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
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
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
      {/* 2. HERO BANNER (Royal Blue Gradient with Geometric Patterns) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#002D72] via-[#003B95] to-[#0D47A1] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-12 shadow-sm">
        
        {/* SVG Geometric Dot Matrix & Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.6)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid-pattern)" />
          </svg>
        </div>

        {/* Abstract Digital Waves / Geometric Curves */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[30px] border-white/10 blur-[1px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border-[40px] border-blue-400/10 blur-[2px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto md:ml-auto md:mr-12 lg:mr-20 text-left md:text-left space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white leading-tight font-sans">
            Digital Marketing Services<br />
            Made For The Small Business
          </h1>
          <p className="text-white/95 text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed font-normal">
            At Aceso Solutions, we believe that <span className="underline decoration-white/70 underline-offset-2">small businesses</span> deserve every chance to grow, compete, and succeed. That’s why we provide comprehensive digital marketing services and strategies engineered to scale small businesses online. With every website we build, every campaign we optimize, and every ad we run, we craft <span className="underline decoration-white/70 underline-offset-2">digital marketing</span> assets as unique as the entrepreneurs themselves, all optimized for maximum visibility and sustainable revenue.
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
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
          Whether you are ready to scale to the next level, modernize your digital presence, or capture a steady stream of qualified customer inquiries, <span className="font-semibold text-slate-900">Aceso Solutions</span> is your dedicated growth partner. As a full-service <span className="text-[#003B95] underline cursor-pointer">digital marketing agency</span>, we specialize in high-performance <span className="text-[#003B95] underline cursor-pointer">search engine optimization (SEO)</span>, bespoke <span className="text-[#003B95] underline cursor-pointer">web design</span>, targeted <span className="text-[#003B95] underline cursor-pointer">paid advertising (PPC)</span>, and dynamic <span className="text-[#003B95] underline cursor-pointer">social media marketing</span> tailored specifically for small and growing enterprises. We combine deep technical mastery of search and social algorithms with persuasive conversion design to craft marketing systems that build lasting market authority and deliver measurable ROI.
        </p>

        {/* OUR WORK Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onRequestAudit}
            className="px-6 py-2.5 bg-[#003B95] hover:bg-[#002D72] active:bg-[#002255] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs transition-colors cursor-pointer"
          >
            Our Work
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ALTERNATING 50/50 FULL-WIDTH SERVICE BLOCKS */}
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
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveModal(serviceModalData['seo'])}
                className="px-6 py-2 bg-white text-[#003B95] hover:bg-blue-50 active:bg-blue-100 font-bold text-xs uppercase tracking-wider rounded-xs shadow-xs transition-colors cursor-pointer"
              >
                SEO
              </button>
            </div>
          </div>

          {/* Photo (Right) */}
          <div className="relative min-h-[280px] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" 
              alt="Person reviewing search engine optimization and digital analytics on tablet" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

        {/* ------------------------------------------------------- */}
        {/* ROW 2: WEB DESIGN FOR SMALL BUSINESS (Image Left / White Right) */}
        {/* ------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[380px]">
          
          {/* Photo (Left) */}
          <div className="relative min-h-[280px] lg:min-h-full order-last lg:order-first">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Two women collaborating on web design and creative layout on laptop" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* White Box (Right) */}
          <div className="bg-white text-slate-800 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#003B95]">
              Web Design For Small Business
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-xl">
              We build professional, personalized, and persuasive websites for small businesses at Aceso Solutions. The best part? Our web design services capture the value and voice of your company through design and content, providing you with an unmatched digital asset that you will always own. Whether you run a medical clinic, contractor service, or boutique consultancy, we’ll build you a website that embodies your mission and converts visitors into lifelong clients.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveModal(serviceModalData['web-design'])}
                className="px-6 py-2 bg-[#003B95] hover:bg-[#002D72] text-white font-bold text-xs uppercase tracking-wider rounded-xs shadow-xs transition-colors cursor-pointer"
              >
                Web Design
              </button>
            </div>
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
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveModal(serviceModalData['ppc'])}
                className="px-6 py-2 bg-white text-[#003B95] hover:bg-blue-50 active:bg-blue-100 font-bold text-xs uppercase tracking-wider rounded-xs shadow-xs transition-colors cursor-pointer"
              >
                Paid Advertising
              </button>
            </div>
          </div>

          {/* Photo (Right) */}
          <div className="relative min-h-[280px] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=80" 
              alt="Woman working on laptop with phone analyzing paid advertising performance" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

        {/* ------------------------------------------------------- */}
        {/* ROW 4: SOCIAL MEDIA MARKETING (Matched 3D Phone Image Left / White Right) */}
        {/* ------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[380px]">
          
          {/* Photo (Left) - 3D Smartphone with Floating Social Icons */}
          <div className="relative min-h-[300px] lg:min-h-full order-last lg:order-first bg-[#2b1055] overflow-hidden flex items-center justify-center">
            <img 
              src={socialMediaPhoneImg} 
              alt="3D smartphone displaying social media creator with floating 3D social icons" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
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
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveModal(serviceModalData['social'])}
                className="px-6 py-2 bg-[#003B95] hover:bg-[#002D72] text-white font-bold text-xs uppercase tracking-wider rounded-xs shadow-xs transition-colors cursor-pointer"
              >
                Social Media
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* 5. NEWSLETTER BANNER: BECOME THE MARKETING EXPERT */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-[#003B95] via-[#0D47A1] to-[#1565C0] text-white py-6 px-4 sm:px-8 lg:px-12 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
              Become The Marketing Expert Your Business Needs
            </h3>
            <p className="text-white/90 text-xs sm:text-xs">
              Level up your <span className="underline decoration-white/70">small business</span> marketing skills in just 5 minutes per week with the Aceso Solutions newsletter!
            </p>
          </div>

          {/* Interactive Sign Up Input / Button */}
          <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 w-full md:w-auto">
            {newsletterSuccess ? (
              <div className="px-5 py-2 bg-white text-[#003B95] font-bold text-xs uppercase rounded-xs flex items-center gap-1.5 shadow-xs">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>You're Subscribed!</span>
              </div>
            ) : (
              <>
                <input 
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-3.5 py-2 bg-white/95 text-slate-800 text-xs rounded-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-white text-[#003B95] hover:bg-blue-50 font-bold text-xs uppercase tracking-wider rounded-xs shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  Sign Up!
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. OUR MARKETING PHILOSOPHY SECTION */}
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
          At Aceso Solutions, we bridge the gap between the algorithms and the audience. With our expertise rooted in search engine optimization (SEO), paid search, and social platforms, we understand the complex algorithms behind Google, Meta, and beyond to make your small business discoverable to ideal clients. We combine this technical proficiency with authentic storytelling, high-converting design, and transparent communication to empower your business to compete and win.
        </p>

        {/* Discovery Call Button */}
        <div className="pt-4">
          <button
            type="button"
            onClick={onRequestAudit}
            className="px-8 py-3 bg-[#003B95] hover:bg-[#002D72] active:bg-[#002255] text-white font-bold text-xs uppercase tracking-wider rounded-xs shadow-md transition-colors cursor-pointer"
          >
            Schedule A Discovery Call
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. MATCHING FOOTER (From Home Page) */}
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
