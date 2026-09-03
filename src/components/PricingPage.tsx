import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { 
  Check, 
  CheckCircle2,
  MousePointerClick,
  ArrowRight, 
  Search, 
  Share2, 
  TrendingUp, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  ChevronRight,
  ChevronLeft,
  Rocket,
  Server,
  Cloud,
  Edit3,
  Globe,
  Sparkles,
  Target,
  BarChart2,
  Megaphone,
  Layers,
  Smartphone,
  Video,
  Award,
  PhoneCall,
  MessageSquare
} from 'lucide-react';

export interface PricingTier {
  id: string;
  name: string;
  isPopular?: boolean;
  price: string;
  period?: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  buttonText?: string;
}

export interface PricingCategory {
  id: 'social' | 'seo' | 'ppc';
  title: string;
  bannerTitle: string;
  shortName: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  tiers: PricingTier[];
  footnote?: string;
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'social',
    title: 'Social Media Marketing Pricing',
    bannerTitle: 'OUR SOCIAL MEDIA PACKAGES',
    shortName: 'Social Media',
    subtitle: 'Build brand affinity, drive organic engagement & turn followers into paying customers',
    description: 'Bespoke social media management designed to build community, establish consistency, and scale organic lead generation across Meta (Instagram & Facebook), TikTok, and LinkedIn.',
    icon: Share2,
    tiers: [
      {
        id: 'smm-starter',
        name: 'STARTER',
        price: 'From KSh 10,000',
        period: '/month',
        description: 'Build your presence.',
        icon: Rocket,
        features: [
          '1 Social Platform (Instagram or Facebook, or TikTok)',
          '8 Custom Branded Posts per month (upto 6 reels)',
          'Monthly Content Calendar',
          'Social Media Strategy',
          'Short-Form Video Content - Basic editing of client-provided videos',
          'Strategic Caption & Hashtag Writing',
          'Optimal Peak-Time Scheduling & Publishing',
          'Community Comment & DM Monitoring Assistance',
          'Monthly Performance Report'
        ],
        buttonText: 'GET STARTED'
      },
      {
        id: 'smm-growth',
        name: 'GROWTH',
        isPopular: true,
        price: 'From KSh 20,000',
        period: '/month',
        description: 'Grow your reach and engagement.',
        icon: Video,
        features: [
          'Everything in Starter',
          '12-16 Custom Branded Posts per month',
          '2 Social Platforms (Meta, TikTok or LinkedIn)',
          'Professional Photography & Videography',
          'Includes upto 3 on-location shoots',
          'Deeper + ongoing optimization strategy',
          'Paid Ads A/B Testing + Paid Advertising Management',
          'Weekly Performance Updates + Monthly Report'
        ],
        buttonText: 'GET STARTED'
      },
      {
        id: 'smm-custom',
        name: 'CUSTOM',
        price: 'Custom Pricing',
        period: '',
        description: 'Built around your goals.',
        icon: Edit3,
        features: [
          'Custom Social Media Strategy',
          'Custom Platform Selection',
          'Custom Content Production',
          'Photography & Videography',
          'Paid Advertising',
          'Influencer Campaigns',
          'SEO',
          'Community Management',
          'Campaign Management',
          'Custom Reporting'
        ],
        buttonText: 'GET STARTED'
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization) Pricing',
    bannerTitle: 'OUR SEO PACKAGES',
    shortName: 'SEO',
    subtitle: 'Dominate Google Search and Google Maps for high-intent, compounding organic leads',
    description: 'Position your business at the top of Google Maps and organic search when local customers are ready to buy.',
    icon: Search,
    tiers: [
      {
        id: 'seo-local',
        name: 'STARTER',
        price: 'From KSh 15,000',
        period: '/month',
        description: 'Dominate local neighborhood search and Google Maps inquiries to capture nearby buyers.',
        icon: Target,
        features: [
          'Google Business Profile (GBP) Full Optimization',
          'Local 3-Pack Map Ranking Strategy',
          'Top 10 High-Intent Local Keyword Tracking',
          'NAP (Name, Address, Phone) Citation Cleanup',
          'Google Review Generation Automation Strategy',
          'Weekly Geo-Tagged Google Business Posts',
          'Monthly Google Maps Discovery & Call Report'
        ],
        buttonText: 'GET STARTED'
      },
      {
        id: 'seo-growth',
        name: 'GROWTH',
        isPopular: true,
        price: 'From KSh 30,000',
        period: '/month',
        description: 'Comprehensive on-page, technical, and content SEO to beat major competitors across search engines.',
        icon: Rocket,
        features: [
          'Google Business Profile & Multi-Location Optimization',
          'Up to 30 Targeted High-Value Keyword Rankings',
          'Full Technical SEO & Core Web Vitals Optimization',
          'On-Page Architecture, Meta & Heading Enhancements',
          '2 High-Authority SEO Blog Articles / Service Pages per month',
          'Local & Industry Backlink Acquisition Outreach',
          'Google Search Console & GA4 Funnel Tracking'
        ],
        buttonText: 'GET STARTED'
      },
      {
        id: 'seo-custom',
        name: 'CUSTOM',
        price: 'Custom Pricing',
        period: '',
        description: 'Tailored enterprise SEO for multi-branch organizations, e-commerce, and high-competition niches.',
        icon: Edit3,
        features: [
          'Multi-domain / International SEO structure',
          'Custom content velocity & technical sprints',
          'AI Search & Google Gemini / SGE optimization',
          'Dedicated SEO squad with engineer support',
          'Quarterly market share & revenue attribution reports',
          'Full site migration & architecture protection',
          '24/7 rank monitoring & alerts'
        ],
        buttonText: 'GET STARTED'
      }
    ]
  },
  {
    id: 'ppc',
    title: 'PPC (Pay-Per-Click Advertising) Pricing',
    bannerTitle: 'OUR PPC PACKAGES',
    shortName: 'Paid Ads',
    subtitle: 'Immediate customer acquisition through hyper-targeted Google and Meta ad campaigns',
    description: 'Put your small business in front of ideal customers through Pay-Per-Click campaigns like Google Ads and Meta Ads with maximum visibility and minimum cost.',
    icon: TrendingUp,
    footnote: 'Prices exclude ad spend paid directly to Google.',
    tiers: [
      {
        id: 'ppc-starter',
        name: 'PPC STARTER',
        price: 'From KSh 15,000',
        period: '/month',
        description: 'Ideal for small businesses looking to generate leads and get quick visibility.',
        icon: MousePointerClick,
        features: [
          'Google Ads Account Setup & Management',
          'Keyword Research & Competitor Analysis',
          'Search Ads (Up to 15 Keywords)',
          'Ad Copywriting & Extensions',
          'Conversion Tracking Setup',
          'Monthly Performance Report',
          'Campaign Optimization'
        ],
        buttonText: 'GET STARTED'
      },
      {
        id: 'ppc-growth',
        name: 'PPC GROWTH',
        price: 'From KSh 30,000',
        period: '/month',
        description: 'For businesses ready to scale with high-performing ad campaigns.',
        icon: TrendingUp,
        features: [
          'Everything in PPC Starter',
          'Advanced Keyword Strategy',
          'Search & Display Campaigns',
          'Retargeting Ads',
          'Landing Page Recommendations',
          'A/B Ad Testing',
          'Weekly Optimization & Reporting'
        ],
        buttonText: 'GET STARTED'
      },
      {
        id: 'ppc-custom',
        name: 'CUSTOM',
        price: 'Custom Pricing',
        period: '',
        description: 'Tailored enterprise campaigns with dedicated account management and custom ad funnels.',
        icon: Sparkles,
        features: [
          'Everything in PPC Growth',
          'Multi-Channel Ad Campaigns (Google, Meta, TikTok)',
          'Dedicated PPC Account Manager',
          'Custom Landing Page Strategy & CRO',
          'CRM Integration & Offline Conversion Tracking',
          'Custom Audience & Retargeting Funnels',
          'Bi-Weekly Strategy & ROI Review Calls'
        ],
        buttonText: 'GET STARTED'
      }
    ]
  }
];

interface PricingPageProps {
  initialCategory?: 'all' | 'social' | 'seo' | 'ppc';
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onOpenCustomBuilder?: () => void;
  onNavigate?: (sectionId: string) => void;
}

// High-fidelity 3D-styled Social Media & Growth vector graphic matching screenshot
const SocialMediaHeroGraphic: React.FC = () => {
  return (
    <svg
      viewBox="0 0 640 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[500px] lg:max-w-[560px] h-auto drop-shadow-2xl select-none"
      aria-label="Social Media Marketing Growth Graphic"
    >
      <defs>
        {/* Deep blue linear & radial gradients */}
        <linearGradient id="phoneCaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E4CB8" />
          <stop offset="45%" stopColor="#143D99" />
          <stop offset="100%" stopColor="#0B2668" />
        </linearGradient>

        <linearGradient id="phoneScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#11337B" />
          <stop offset="100%" stopColor="#081E4E" />
        </linearGradient>

        <linearGradient id="phoneBevelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.3" />
        </linearGradient>

        <linearGradient id="bubbleBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1742A1" />
        </linearGradient>

        <linearGradient id="bubbleHighlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
        </linearGradient>

        <linearGradient id="barFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1743A5" />
        </linearGradient>

        <linearGradient id="barSideGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#0C2563" />
        </linearGradient>

        <linearGradient id="barTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>

        <radialGradient id="phoneAmbientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
        </radialGradient>

        <filter id="heroShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#001438" floodOpacity="0.45" />
        </filter>
        <filter id="bubbleDropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#00102E" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Ambient background glow behind elements */}
      <ellipse cx="330" cy="220" rx="270" ry="170" fill="url(#phoneAmbientGlow)" />

      {/* 3D Ascending Bar Chart (Right side behind/beside phone) */}
      <g filter="url(#heroShadow)">
        {/* Bar 1 (Shortest - x: 445) */}
        <g>
          <polygon points="450,350 478,338 502,348 474,360" fill="url(#barTopGrad)" />
          <polygon points="450,350 474,360 474,402 450,392" fill="url(#barFrontGrad)" />
          <polygon points="474,360 502,348 502,390 474,402" fill="url(#barSideGrad)" />
        </g>

        {/* Bar 2 (Medium Low - x: 485) */}
        <g>
          <polygon points="485,315 513,303 537,313 509,325" fill="url(#barTopGrad)" />
          <polygon points="485,315 509,325 509,402 485,392" fill="url(#barFrontGrad)" />
          <polygon points="509,325 537,313 537,390 509,402" fill="url(#barSideGrad)" />
        </g>

        {/* Bar 3 (Medium High - x: 520) */}
        <g>
          <polygon points="520,275 548,263 572,273 544,285" fill="url(#barTopGrad)" />
          <polygon points="520,275 544,285 544,402 520,392" fill="url(#barFrontGrad)" />
          <polygon points="544,285 572,263 572,390 544,402" fill="url(#barSideGrad)" />
        </g>

        {/* Bar 4 (Tallest - x: 555) */}
        <g>
          <polygon points="555,230 583,218 607,228 579,240" fill="url(#barTopGrad)" />
          <polygon points="555,230 579,240 579,402 555,392" fill="url(#barFrontGrad)" />
          <polygon points="579,240 607,228 607,390 579,402" fill="url(#barSideGrad)" />
        </g>

        {/* 3D Growth Arrow shooting Up-Right */}
        <path
          d="M 440 355 L 588 185 L 582 152 L 628 148 L 622 194 L 588 185"
          fill="url(#arrowGrad)"
          stroke="#93C5FD"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Arrow bevel highlight line */}
        <path
          d="M 442 357 L 590 187 L 628 148"
          stroke="#DBEAFE"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      {/* 3D Smartphone (Angled/Isometric) */}
      <g filter="url(#heroShadow)" transform="translate(175, 40) rotate(-6 160 200)">
        {/* Outer Phone Case Shadow/Back Depth */}
        <rect
          x="35"
          y="15"
          width="210"
          height="370"
          rx="32"
          fill="#0B2050"
          transform="translate(8, 12)"
        />

        {/* Phone Case Body */}
        <rect
          x="35"
          y="15"
          width="210"
          height="370"
          rx="32"
          fill="url(#phoneCaseGrad)"
          stroke="url(#phoneBevelGrad)"
          strokeWidth="3.5"
        />

        {/* Glossy Bevel Inner Frame */}
        <rect
          x="42"
          y="22"
          width="196"
          height="356"
          rx="26"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Phone Screen */}
        <rect
          x="47"
          y="30"
          width="186"
          height="340"
          rx="22"
          fill="url(#phoneScreenGrad)"
        />

        {/* Top Speaker Ear-piece */}
        <rect x="115" y="40" width="50" height="4" rx="2" fill="#60A5FA" opacity="0.6" />

        {/* Top Camera Dot */}
        <circle cx="102" cy="42" r="3" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1" />

        {/* App Header (Social Feed) */}
        {/* Avatar */}
        <circle cx="72" cy="68" r="13" fill="#2563EB" stroke="#60A5FA" strokeWidth="1.5" />
        {/* Username Lines */}
        <rect x="94" y="60" width="65" height="6" rx="3" fill="#60A5FA" opacity="0.9" />
        <rect x="94" y="70" width="40" height="4" rx="2" fill="#3B82F6" opacity="0.6" />

        {/* Main Post Media Card */}
        <rect x="60" y="92" width="160" height="135" rx="14" fill="#0C255E" stroke="#1D4ED8" strokeWidth="1" />
        
        {/* Post inner graphic (abstract landscape/social graphic) */}
        <rect x="68" y="100" width="144" height="100" rx="8" fill="#173B8A" />
        <circle cx="100" cy="125" r="14" fill="#3B82F6" opacity="0.8" />
        <path d="M 75 190 L 105 150 L 135 180 L 165 140 L 205 190 Z" fill="#2563EB" opacity="0.9" />
        <path d="M 125 190 L 155 155 L 185 190 Z" fill="#60A5FA" opacity="0.7" />

        {/* Post Actions (Like, Comment, Share) */}
        <circle cx="75" cy="212" r="5" fill="#60A5FA" />
        <circle cx="95" cy="212" r="5" fill="#3B82F6" />
        <circle cx="115" cy="212" r="5" fill="#3B82F6" />

        {/* Caption placeholder lines */}
        <rect x="60" y="240" width="140" height="5" rx="2.5" fill="#60A5FA" opacity="0.7" />
        <rect x="60" y="250" width="95" height="5" rx="2.5" fill="#3B82F6" opacity="0.5" />

        {/* Second Post Preview (Avatar & Card top) */}
        <circle cx="72" cy="285" r="10" fill="#2563EB" />
        <rect x="90" y="280" width="55" height="5" rx="2.5" fill="#60A5FA" opacity="0.8" />
        <rect x="90" y="288" width="35" height="4" rx="2" fill="#3B82F6" opacity="0.5" />
        <rect x="60" y="305" width="160" height="55" rx="10" fill="#0C255E" />

        {/* Bottom Home Indicator Bar */}
        <rect x="105" y="358" width="70" height="3.5" rx="1.75" fill="#60A5FA" opacity="0.7" />
      </g>

      {/* Floating 3D Bubble: Thumbs Up (Top Left) */}
      <g filter="url(#bubbleDropShadow)" transform="translate(125, 78)">
        <path
          d="M 10 30 C 10 13.43 23.43 0 40 0 L 70 0 C 86.57 0 100 13.43 100 30 C 100 46.57 86.57 60 70 60 L 45 60 L 25 75 L 28 60 C 18 57 10 45 10 30 Z"
          fill="url(#bubbleBlueGrad)"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        {/* Top glossy curve */}
        <path
          d="M 18 25 C 18 15 28 8 45 8 L 65 8 C 82 8 92 15 92 25"
          stroke="url(#bubbleHighlightGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Thumbs Up Icon */}
        <g transform="translate(42, 16) scale(1.1)" fill="#FFFFFF">
          <path d="M2 10h3v10H2V10zm17-1c0-.55-.45-1-1-1h-5.63l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L11.83 2 6.41 7.41C6.15 7.67 6 8.02 6 8.4V18c0 1.1.9 2 2 2h7c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </g>
      </g>

      {/* Floating 3D Bubble: Speech / 3 Dots (Top Right behind phone) */}
      <g filter="url(#bubbleDropShadow)" transform="translate(390, 88)">
        <path
          d="M 10 25 C 10 11.2 21.2 0 35 0 L 65 0 C 78.8 0 90 11.2 90 25 C 90 38.8 78.8 50 65 50 L 40 50 L 22 62 L 25 50 C 16 47 10 37 10 25 Z"
          fill="url(#bubbleBlueGrad)"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        {/* Top highlight */}
        <path
          d="M 16 20 C 16 11 25 6 40 6 L 60 6"
          stroke="url(#bubbleHighlightGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* 3 Dots */}
        <circle cx="34" cy="25" r="4.5" fill="#FFFFFF" />
        <circle cx="50" cy="25" r="4.5" fill="#FFFFFF" />
        <circle cx="66" cy="25" r="4.5" fill="#FFFFFF" />
      </g>

      {/* Floating 3D Bubble: Heart (Bottom Left) */}
      <g filter="url(#bubbleDropShadow)" transform="translate(95, 235)">
        <circle cx="38" cy="38" r="36" fill="url(#bubbleBlueGrad)" stroke="#60A5FA" strokeWidth="2" />
        {/* Glossy top edge */}
        <path
          d="M 16 28 C 22 14 54 14 60 28"
          stroke="url(#bubbleHighlightGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Heart Icon */}
        <g transform="translate(23, 23)" fill="#FFFFFF">
          <path d="M15 4.7C12.8 1.8 8.8 1.4 6 3.6c-2.8 2.2-3.2 6.2-1 9 3.5 4.5 10 10.4 10 10.4s6.5-5.9 10-10.4c2.2-2.8 1.8-6.8-1-9-2.8-2.2-6.8-1.8-9 1.1z" />
        </g>
      </g>

      {/* Small 3D Potted Plant (Bottom Right) */}
      <g transform="translate(555, 328)">
        {/* Pot */}
        <polygon points="12,45 48,45 42,75 18,75" fill="#153E9B" stroke="#60A5FA" strokeWidth="1.5" />
        <ellipse cx="30" cy="45" rx="18" ry="5" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1" />
        {/* Succulent Leaves */}
        <path d="M 30 45 C 20 30 15 15 30 5 C 45 15 40 30 30 45 Z" fill="#2563EB" stroke="#93C5FD" strokeWidth="1.2" />
        <path d="M 30 45 C 10 40 0 25 10 15 C 25 20 28 35 30 45 Z" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1.2" />
        <path d="M 30 45 C 50 40 60 25 50 15 C 35 20 32 35 30 45 Z" fill="#3B82F6" stroke="#93C5FD" strokeWidth="1.2" />
      </g>
    </svg>
  );
};

// ============================================================================
// DEDICATED GOOGLE ADS & PPC HERO 3D VECTOR GRAPHIC (Matches uploaded screenshot)
// ============================================================================
const GoogleAdsHeroGraphic: React.FC = () => {
  return (
    <svg
      viewBox="0 0 740 430"
      className="w-full max-w-[560px] h-auto drop-shadow-2xl select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Background Subtle Ambient Glow */}
        <radialGradient id="ppcGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
        </radialGradient>

        {/* Laptop Screen Gradient */}
        <linearGradient id="laptopScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#EDF2F7" />
        </linearGradient>

        {/* Laptop Outer Bezel & Body */}
        <linearGradient id="laptopBezelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        <linearGradient id="laptopBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>

        {/* Floating Card Gradient */}
        <linearGradient id="floatingCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>

        {/* 3D Target Blue Ring */}
        <linearGradient id="targetBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>

        {/* 3D Google Ads Badge Bubble */}
        <linearGradient id="gadsBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0D3B9C" />
        </linearGradient>

        {/* Bar Chart 3D Gradients */}
        <linearGradient id="chartBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>

        <linearGradient id="chartBarTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>

        {/* Soft Drop Shadows */}
        <filter id="ppcShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#040F2D" floodOpacity="0.45" />
        </filter>
        <filter id="cardShadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#061A4E" floodOpacity="0.35" />
        </filter>
        <filter id="badgeShadow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#061A4E" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Ambient background glow behind elements */}
      <circle cx="430" cy="220" r="210" fill="url(#ppcGlow)" />

      {/* Network Dotted Connecting Lines */}
      <g stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" fill="none">
        <path d="M 180 110 L 290 150 L 390 110" />
        <path d="M 180 280 L 260 270 L 320 300" />
        <path d="M 520 220 L 590 190 L 650 240" />
      </g>

      {/* 3D Rising Bar Chart Columns (Right Background behind target) */}
      <g transform="translate(605, 230)">
        {/* Bar 1 (Shortest) */}
        <g transform="translate(0, 70)">
          {/* Front Face */}
          <rect x="0" y="0" width="22" height="60" rx="3" fill="url(#chartBarGrad)" />
          {/* Top Face */}
          <polygon points="0,0 6,-6 28,-6 22,0" fill="url(#chartBarTop)" />
          {/* Side Face */}
          <polygon points="22,0 28,-6 28,54 22,60" fill="#173E8A" />
        </g>

        {/* Bar 2 (Medium) */}
        <g transform="translate(32, 40)">
          {/* Front Face */}
          <rect x="0" y="0" width="22" height="90" rx="3" fill="url(#chartBarGrad)" />
          {/* Top Face */}
          <polygon points="0,0 6,-6 28,-6 22,0" fill="url(#chartBarTop)" />
          {/* Side Face */}
          <polygon points="22,0 28,-6 28,84 22,90" fill="#173E8A" />
        </g>

        {/* Bar 3 (Tallest) */}
        <g transform="translate(64, 10)">
          {/* Front Face */}
          <rect x="0" y="0" width="22" height="120" rx="3" fill="url(#chartBarGrad)" />
          {/* Top Face */}
          <polygon points="0,0 6,-6 28,-6 22,0" fill="url(#chartBarTop)" />
          {/* Side Face */}
          <polygon points="22,0 28,-6 28,114 22,120" fill="#173E8A" />
        </g>
      </g>

      {/* 3D Target Dartboard with Arrow (Right side) */}
      <g filter="url(#badgeShadow)" transform="translate(565, 140)">
        {/* Outer Deep Blue Ring */}
        <ellipse cx="60" cy="60" rx="55" ry="55" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="3" />
        {/* White Ring */}
        <ellipse cx="60" cy="60" rx="43" ry="43" fill="#FFFFFF" />
        {/* Middle Blue Ring */}
        <ellipse cx="60" cy="60" rx="31" ry="31" fill="#2563EB" />
        {/* Inner White Ring */}
        <ellipse cx="60" cy="60" rx="19" ry="19" fill="#FFFFFF" />
        {/* Center Bullseye (Red/Blue accent) */}
        <ellipse cx="60" cy="60" rx="9" ry="9" fill="#1D4ED8" />

        {/* 3D Arrow hitting center */}
        <g transform="translate(60, 60) rotate(-40)">
          {/* Arrow Shaft */}
          <line x1="0" y1="0" x2="65" y2="0" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
          {/* Arrow Shadow */}
          <line x1="2" y1="2" x2="65" y2="2" stroke="#94A3B8" strokeWidth="2" opacity="0.6" />
          {/* Feathers / Fletching */}
          <polygon points="50,-8 68,-14 62,0" fill="#3B82F6" />
          <polygon points="50,8 68,14 62,0" fill="#1D4ED8" />
        </g>
      </g>

      {/* 3D Open Laptop (Center Stage) */}
      <g filter="url(#ppcShadow)" transform="translate(230, 70)">
        {/* --- LAPTOP SCREEN (Lid) --- */}
        {/* Screen Outer Dark Metal Bezel */}
        <rect
          x="30"
          y="20"
          width="320"
          height="215"
          rx="12"
          fill="url(#laptopBezelGrad)"
          stroke="#475569"
          strokeWidth="2"
        />

        {/* Top Webcam Dot */}
        <circle cx="190" cy="27" r="2.5" fill="#64748B" />

        {/* Glossy Screen Display Area */}
        <rect
          x="42"
          y="35"
          width="296"
          height="188"
          rx="6"
          fill="url(#laptopScreenGrad)"
        />

        {/* SCREEN UI HEADER: Google Ads Logo & Search Bar */}
        {/* "Google" & "Ads" text badge */}
        <g transform="translate(56, 48)">
          <text x="0" y="16" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" fill="#4285F4">G</text>
          <text x="12" y="16" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" fill="#EA4335">o</text>
          <text x="21" y="16" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" fill="#FBBC04">o</text>
          <text x="30" y="16" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" fill="#4285F4">g</text>
          <text x="39" y="16" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" fill="#34A853">l</text>
          <text x="44" y="16" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" fill="#EA4335">e</text>
          
          <text x="0" y="32" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" fill="#1E293B">Ads</text>
        </g>

        {/* Top Mini Search Input on Screen */}
        <rect x="180" y="47" width="144" height="18" rx="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
        <circle cx="312" cy="56" r="4" fill="none" stroke="#64748B" strokeWidth="1.2" />
        <line x1="315" y1="59" x2="318" y2="62" stroke="#64748B" strokeWidth="1.2" />

        {/* SCREEN UI: Main Analytics Area */}
        <rect x="56" y="86" width="268" height="96" rx="8" fill="#F0F7FF" stroke="#BFDBFE" strokeWidth="1" />

        {/* Analytics Grid Lines */}
        <line x1="68" y1="110" x2="312" y2="110" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="68" y1="135" x2="312" y2="135" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="68" y1="160" x2="312" y2="160" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="3 3" />

        {/* Rising Area Gradient */}
        <path
          d="M 72 165 L 105 145 L 140 152 L 175 125 L 210 135 L 250 102 L 285 110 L 310 95 L 310 172 L 72 172 Z"
          fill="#3B82F6"
          fillOpacity="0.18"
        />

        {/* Rising Line Graph Curve */}
        <path
          d="M 72 165 L 105 145 L 140 152 L 175 125 L 210 135 L 250 102 L 285 110 L 310 95"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Graph Data Node Dots */}
        <circle cx="72" cy="165" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="105" cy="145" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="140" cy="152" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="175" cy="125" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="210" cy="135" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="250" cy="102" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="285" cy="110" r="3" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
        <circle cx="310" cy="95" r="3.5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* SCREEN UI: Stat Cards at bottom of display */}
        <rect x="56" y="190" width="70" height="12" rx="3" fill="#3B82F6" opacity="0.8" />
        <rect x="134" y="190" width="70" height="12" rx="3" fill="#93C5FD" opacity="0.7" />
        <rect x="212" y="190" width="40" height="12" rx="3" fill="#E2E8F0" />
        <rect x="260" y="190" width="64" height="12" rx="3" fill="#F59E0B" opacity="0.8" />

        {/* --- LAPTOP BASE (Keyboard Plate & Trackpad) --- */}
        {/* Isometric Base Plate */}
        <polygon
          points="5,235 375,235 410,290 -30,290"
          fill="url(#laptopBaseGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Front Edge Thickness / Lip */}
        <polygon
          points="-30,290 410,290 405,297 -25,297"
          fill="#0B132B"
        />

        {/* Keyboard Well / Depression */}
        <polygon
          points="25,242 355,242 375,274 5,274"
          fill="#0F172A"
          stroke="#334155"
          strokeWidth="1"
        />

        {/* Subtle Keyboard Key Rows */}
        <line x1="25" y1="248" x2="355" y2="248" stroke="#1E293B" strokeWidth="2.5" />
        <line x1="18" y1="255" x2="362" y2="255" stroke="#1E293B" strokeWidth="2.5" />
        <line x1="12" y1="262" x2="368" y2="262" stroke="#1E293B" strokeWidth="2.5" />
        <line x1="7" y1="269" x2="373" y2="269" stroke="#1E293B" strokeWidth="2.5" />

        {/* Trackpad */}
        <polygon
          points="150,277 230,277 235,288 145,288"
          fill="#1E293B"
          stroke="#475569"
          strokeWidth="0.75"
        />
      </g>

      {/* Floating Google Ads 3D Icon Badge (Top Left of Laptop) */}
      <g filter="url(#badgeShadow)" transform="translate(145, 45)">
        {/* Glossy Rounded Square Base */}
        <rect
          x="0"
          y="0"
          width="82"
          height="82"
          rx="22"
          fill="url(#gadsBadgeGrad)"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        {/* Subtle Top Highlight Line */}
        <path
          d="M 12 18 C 12 10 20 6 38 6 L 60 6"
          stroke="#93C5FD"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Iconic Google Ads Polygon / Pills */}
        <g transform="translate(18, 14) scale(0.9)">
          {/* Yellow Diagonal Left Bar */}
          <polygon
            points="14,10 28,2 38,18 24,26"
            fill="#FBBC04"
          />
          {/* Blue Diagonal Main Bar */}
          <polygon
            points="24,18 46,55 34,62 12,25"
            fill="#4285F4"
          />
          {/* Green Circle / Bottom Connector */}
          <circle
            cx="40"
            cy="52"
            r="8"
            fill="#34A853"
          />
        </g>
      </g>

      {/* Floating 3D Search Magnifying Glass Tile (Bottom Left) */}
      <g filter="url(#badgeShadow)" transform="translate(100, 205)">
        <rect
          x="0"
          y="0"
          width="74"
          height="74"
          rx="20"
          fill="url(#gadsBadgeGrad)"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        {/* Top Glint */}
        <path
          d="M 10 16 C 10 9 18 5 35 5"
          stroke="#93C5FD"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Magnifying Glass Icon */}
        <g transform="translate(20, 20)">
          <circle cx="14" cy="14" r="11" fill="none" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="22" y1="22" x2="33" y2="33" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>

      {/* Floating Google Sponsored Ad Card (Front of Laptop) */}
      <g filter="url(#cardShadow)" transform="translate(170, 185) rotate(-2)">
        {/* Card Body */}
        <rect
          x="0"
          y="0"
          width="195"
          height="92"
          rx="12"
          fill="url(#floatingCardGrad)"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* Ad Indicator & URL */}
        <text
          x="12"
          y="20"
          fontFamily="system-ui, sans-serif"
          fontWeight="700"
          fontSize="10"
          fill="#1E293B"
        >
          Ad
        </text>
        <circle cx="31" cy="17" r="1.5" fill="#64748B" />
        <text
          x="38"
          y="20"
          fontFamily="system-ui, sans-serif"
          fontWeight="500"
          fontSize="9.5"
          fill="#475569"
        >
          www.yourbusiness.com
        </text>

        {/* Blue Headline Bar */}
        <rect x="12" y="32" width="145" height="11" rx="4" fill="#2563EB" />

        {/* Snippet Line 1 */}
        <rect x="12" y="52" width="170" height="6" rx="3" fill="#94A3B8" opacity="0.6" />

        {/* Snippet Line 2 */}
        <rect x="12" y="64" width="125" height="6" rx="3" fill="#CBD5E1" opacity="0.7" />

        {/* Mini Green Trust/Rating Dots */}
        <circle cx="14" cy="78" r="2" fill="#10B981" />
        <circle cx="21" cy="78" r="2" fill="#10B981" />
        <circle cx="28" cy="78" r="2" fill="#10B981" />
        <circle cx="35" cy="78" r="2" fill="#10B981" />
        <circle cx="42" cy="78" r="2" fill="#10B981" />
      </g>
    </svg>
  );
};

interface CategoryPricingSectionProps {
  category: PricingCategory;
  onRequestAudit: () => void;
  onOpenCustomBuilder?: () => void;
}

const CategoryPricingSection: React.FC<CategoryPricingSectionProps> = ({
  category,
  onRequestAudit,
  onOpenCustomBuilder
}) => {
  const [activeTierIdx, setActiveTierIdx] = useState(0);
  const activeTier = category.tiers[activeTierIdx] || category.tiers[0];
  const ActiveTierIcon = activeTier.icon;

  return (
    <section id={category.id} className="space-y-6 sm:space-y-8 scroll-mt-24">
      {/* Category Header */}
      <div className="text-center py-2 sm:py-4">
        <h2 className="text-sm sm:text-lg lg:text-xl font-extrabold tracking-wider sm:tracking-widest uppercase text-[#0B132B] px-1 sm:px-2">
          {category.bannerTitle}
        </h2>
      </div>

      {/* MOBILE ONLY VIEW: Compact Segmented Plan Switcher */}
      <div className="block md:hidden space-y-3.5">
        {/* Touch-Friendly Plan Tabs */}
        <div className="bg-slate-200/90 p-1 rounded-xl flex items-center gap-1 overflow-x-auto scrollbar-none shadow-2xs">
          {category.tiers.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTierIdx(idx)}
              className={`flex-1 min-w-[68px] py-2 px-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap text-center cursor-pointer ${
                activeTierIdx === idx
                  ? 'bg-[#0B132B] text-[#DE8E53] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Quick Stepper Bar (Prev / Dots / Next) */}
        <div className="flex items-center justify-between px-1 text-xs text-slate-500">
          <button
            type="button"
            onClick={() => setActiveTierIdx(prev => (prev > 0 ? prev - 1 : category.tiers.length - 1))}
            className="flex items-center gap-1 font-bold text-[#DE8E53] hover:text-[#C25E00] cursor-pointer py-1 px-2 -ml-2 select-none"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          {/* Stepper Dots & Label */}
          <div className="flex items-center gap-1.5">
            {category.tiers.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveTierIdx(dotIdx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeTierIdx === dotIdx ? 'bg-[#0B132B] w-5' : 'bg-slate-300 w-2'
                }`}
                aria-label={`Select plan ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveTierIdx(prev => (prev < category.tiers.length - 1 ? prev + 1 : 0))}
            className="flex items-center gap-1 font-bold text-[#DE8E53] hover:text-[#C25E00] cursor-pointer py-1 px-2 -mr-2 select-none"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Single Active Mobile Plan Card */}
        <div className="rounded-xl overflow-hidden shadow-md border border-slate-200/80 bg-white flex flex-col justify-between transition-all duration-200">
          {/* Card Obsidian Header */}
          <div className="bg-[#0B132B] text-white p-5 flex items-center gap-4 min-h-[90px]">
            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DE8E53]">
              <ActiveTierIcon className="w-5 h-5 text-[#DE8E53]" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-white leading-tight">
                  {activeTier.name}
                </h3>
                {activeTier.isPopular && (
                  <span className="px-2 py-0.5 bg-gradient-to-r from-[#DE8E53] to-[#E5A958] text-[#070D1E] text-[10px] font-black uppercase rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                {activeTier.description}
              </p>
            </div>
          </div>

          {/* Card White Body */}
          <div className="p-5 bg-white flex flex-col justify-between space-y-5">
            {/* Price Callout */}
            <div className="text-center pt-1">
              <div className="inline-flex items-baseline gap-1.5 justify-center flex-wrap">
                <span className="text-3xl font-extrabold text-[#0B132B] tracking-tight">
                  {activeTier.price}
                </span>
                {activeTier.period && (
                  <span className="text-xs text-slate-500 font-medium">
                    {activeTier.period}
                  </span>
                )}
              </div>
            </div>

            {/* Feature Checklist with Copper Checkmark Badges */}
            <div className="divide-y divide-slate-100 border-y border-slate-100">
              {activeTier.features.map((feat, idx) => (
                <div key={idx} className="py-2.5 flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#DE8E53] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={() => {
                  if (activeTier.id.includes('custom') || activeTier.name.toLowerCase().includes('custom')) {
                    if (onOpenCustomBuilder) {
                      onOpenCustomBuilder();
                      return;
                    }
                  }
                  onRequestAudit();
                }}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-[#DE8E53] to-[#C25E00] hover:from-[#e59b64] hover:to-[#a85000] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-xs transition-all cursor-pointer block text-center"
              >
                {activeTier.buttonText || 'GET STARTED'}
              </button>
            </div>
          </div>
        </div>

        {category.footnote && (
          <p className="text-center text-xs text-slate-500 font-medium pt-3">
            {category.footnote}
          </p>
        )}
      </div>

      {/* DESKTOP & TABLET VIEW: Single Row for 3 Cards or 2-Col for 2/4 Cards */}
      <div className={`hidden md:grid gap-6 lg:gap-8 mx-auto items-stretch ${category.tiers.length === 3 ? 'md:grid-cols-3 max-w-7xl' : 'md:grid-cols-2 max-w-5xl'}`}>
        {category.tiers.map((tier) => {
          const TierIcon = tier.icon;

          return (
            <div
              key={tier.id}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200/80 bg-white flex flex-col justify-between"
            >
              {/* Card Obsidian Header */}
              <div className="bg-[#0B132B] text-white p-6 sm:p-7 flex items-center gap-4 sm:gap-5 min-h-[115px]">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#DE8E53]">
                  <TierIcon className="w-6 h-6 text-[#DE8E53]" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-white leading-tight">
                      {tier.name}
                    </h3>
                    {tier.isPopular && (
                      <span className="px-2 py-0.5 bg-gradient-to-r from-[#DE8E53] to-[#E5A958] text-[#070D1E] text-[10px] font-black uppercase rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              </div>

              {/* Card White Body */}
              <div className="p-5 sm:p-7 bg-white flex flex-col justify-between flex-1 space-y-4">
                {/* Price Callout */}
                <div className="text-center pt-1 min-h-[44px] flex items-center justify-center">
                  <div className="inline-flex items-baseline gap-1.5 justify-center flex-wrap">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs sm:text-sm text-slate-500 font-medium">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Feature Checklist with Horizontal Separators & Copper Checkmark Badges */}
                <div className="divide-y divide-slate-100 border-y border-slate-100">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="py-2.5 min-h-[46px] flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-[#DE8E53] shrink-0" />
                      <span className="leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Button */}
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      if (tier.id.includes('custom') || tier.name.toLowerCase().includes('custom')) {
                        if (onOpenCustomBuilder) {
                          onOpenCustomBuilder();
                          return;
                        }
                      }
                      onRequestAudit();
                    }}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-[#DE8E53] to-[#C25E00] hover:from-[#e59b64] hover:to-[#a85000] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-xs transition-all cursor-pointer block text-center"
                  >
                    {tier.buttonText || 'GET STARTED'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {category.footnote && (
        <p className="hidden md:block text-center text-xs sm:text-sm text-slate-500 font-medium pt-4 sm:pt-6">
          {category.footnote}
        </p>
      )}
    </section>
  );
};

export const PricingPage: React.FC<PricingPageProps> = ({
  initialCategory = 'all',
  onBackToHome,
  onRequestAudit,
  onOpenCustomBuilder,
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'social' | 'seo' | 'ppc'>(initialCategory || 'all');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Sync if initialCategory prop changes
  React.useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleNav = (sectionId: string) => {
    if (sectionId === 'pricing-custom' || sectionId === 'custom-package' || sectionId === 'pricing-web') {
      if (onOpenCustomBuilder) {
        onOpenCustomBuilder();
      } else if (onNavigate) {
        onNavigate('pricing-custom');
      }
      return;
    }
    if (sectionId === 'pricing-social') {
      setActiveCategory('social');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'pricing-seo') {
      setActiveCategory('seo');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'pricing-ppc') {
      setActiveCategory('ppc');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'pricing') {
      setActiveCategory('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate(sectionId);
    } else {
      onBackToHome();
    }
  };

  const filteredCategories = activeCategory === 'all' 
    ? pricingCategories 
    : pricingCategories.filter(cat => cat.id === activeCategory);

  const faqs = [
    {
      q: 'Are there any long-term contracts or cancellation fees?',
      a: 'No. All our monthly management packages operate on a flexible month-to-month retainer. You can upgrade, pause, or cancel at any time with a simple 14-day notice.'
    },
    {
      q: 'How long will it take before we start seeing traction?',
      a: 'Paid campaigns (Google & Meta Ads) and WhatsApp automations can start producing qualified enquiries within 7 to 14 days. Social media audience growth gains strong momentum within 30 days, while SEO compounds predictably over 60 to 90 days.'
    },
    {
      q: 'How do you determine which pricing tier is right for my business?',
      a: 'We evaluate your current digital foundation, target geographic radius, competitive intensity, and monthly revenue goals. You can also request our Free Growth Audit for a personalized recommendation.'
    },
    {
      q: 'Does the PPC pricing include our ad spend budget?',
      a: 'Our PPC pricing covers complete campaign strategy, ad creation, copy, tracking, and daily optimization. Your ad spend is paid directly to Google or Meta with 100% transparency and zero markup.'
    },
    {
      q: 'Can I combine Web Design, SEO, Social Media, and PPC into a single package?',
      a: 'Yes! We offer bundled custom packages that combine multiple services at discounted multi-service rates. Click "Build Custom Package" to customize your ideal stack.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 font-sans antialiased selection:bg-[#DE8E53] selection:text-white pb-16 md:pb-0">
      
      {/* Navbar */}
      <Navbar 
        activeSection="pricing"
        onRequestAudit={onRequestAudit}
        onNavigate={handleNav}
        ctaLabel="Get Free Growth Audit"
      />

      {/* Hero Section */}
      {activeCategory === 'social' ? (
        // Dedicated Social Media Hero matching D-EDGE rich navy with warm amber accents
        <section className="relative overflow-hidden bg-gradient-to-br from-[#070D1E] via-[#0B132B] to-[#162235] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 shadow-md">
          {/* Subtle Geometric Grid Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="social-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(222,142,83,0.3)" strokeWidth="0.8" />
                  <circle cx="20" cy="20" r="1.5" fill="rgba(222,142,83,0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#social-hero-grid)" />
            </svg>
          </div>

          {/* Ambient Glows */}
          <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 right-1/4 w-80 h-80 bg-[#DE8E53]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Subheading */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black uppercase tracking-tight text-white leading-[1.12]">
                SOCIAL MEDIA PACKAGES<br />THAT DRIVE REAL GROWTH
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-normal">
                Choose the right social media marketing package for your business. Professional content, smart strategy, and consistent growth.
              </p>
            </div>

            {/* Right Column: 3D Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <SocialMediaHeroGraphic />
            </div>

          </div>
        </section>
      ) : activeCategory === 'ppc' ? (
        // Dedicated Google Ads & PPC Hero matching D-EDGE rich navy with warm amber accents
        <section className="relative overflow-hidden bg-gradient-to-br from-[#070D1E] via-[#0B132B] to-[#162235] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 shadow-md">
          {/* Subtle Geometric Grid Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ppc-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(222,142,83,0.3)" strokeWidth="0.8" />
                  <circle cx="20" cy="20" r="1.5" fill="rgba(222,142,83,0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ppc-hero-grid)" />
            </svg>
          </div>

          {/* Ambient Glows */}
          <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 right-1/4 w-80 h-80 bg-[#DE8E53]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Subheading */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black uppercase tracking-tight text-white leading-[1.12]">
                GOOGLE ADS & PPC PRICING<br />PACKAGES
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-normal">
                Performance-driven campaigns that put your business in front of the right people at the right time.
              </p>
            </div>

            {/* Right Column: 3D Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <GoogleAdsHeroGraphic />
            </div>

          </div>
        </section>
      ) : (
        // General Pricing Hero Header for other tabs
        <section className="relative overflow-hidden bg-gradient-to-r from-[#070D1E] via-[#0B132B] to-[#162235] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 shadow-sm">
          {/* SVG Geometric Dot Matrix & Grid Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pricing-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(222,142,83,0.4)" strokeWidth="1" />
                  <circle cx="20" cy="20" r="1.5" fill="rgba(222,142,83,0.6)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pricing-grid-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider text-white leading-tight">
              {activeCategory === 'seo' ? 'SEO PACKAGES FOR DOMINANT VISIBILITY'
                : 'Transparent Pricing For Real Business Growth'}
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              {activeCategory === 'seo' ? 'Dominate Google Search and Google Maps for high-intent, compounding organic leads.'
                : 'Choose specialized tiers for Social Media, SEO, and Paid Advertising. Engineered specifically for small and growing enterprises with zero hidden fees.'}
            </p>
          </div>
        </section>
      )}

      {/* Main Pricing Tables (Exact Design Matching Image) */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-16 space-y-8 sm:space-y-24">
        {filteredCategories.map((category) => (
          <CategoryPricingSection 
            key={category.id} 
            category={category} 
            onRequestAudit={onRequestAudit} 
            onOpenCustomBuilder={onOpenCustomBuilder}
          />
        ))}

        {/* Custom Solution / Consultation Banner */}
        <section className="bg-gradient-to-r from-[#070D1E] via-[#0B132B] to-[#162235] text-white rounded-2xl p-6 sm:p-12 shadow-md relative overflow-hidden max-w-5xl mx-auto border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-4">
            <h3 className="text-xl sm:text-3xl font-black uppercase tracking-wider text-white">
              Not sure which package is right for you?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              Book a free 30-minute strategy call. We&apos;ll review your business, identify the highest-ROI opportunity, and recommend the right starting point.
            </p>
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
              <a
                href="https://calendar.app.google/i9YT96iwcduZDF8Q8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] bg-gradient-to-r from-[#DE8E53] to-[#C25E00] hover:from-[#e59b64] hover:to-[#a85000] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 text-center active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4 text-white shrink-0" />
                <span>BOOK A CALL</span>
              </a>
              
              <a
                href="https://wa.me/254758544241?text=Hi%20there,%20I'd%20like%20to%20consult%20about%20your%20digital%20marketing%20packages"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 text-center active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-white shrink-0" />
                <span>TALK ON WHATSAPP</span>
              </a>

              <button
                type="button"
                onClick={onRequestAudit}
                className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center text-center active:scale-[0.98]"
              >
                GET A FREE AUDIT
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-6 max-w-4xl mx-auto pt-4">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers to common questions about our pricing, timelines, and commitments.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${faqOpen === idx ? 'rotate-90 text-[#DE8E53]' : ''}`} />
                </button>
                {faqOpen === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer 
        onRequestAudit={onRequestAudit}
        onNavigate={handleNav}
      />

    </div>
  );
};
