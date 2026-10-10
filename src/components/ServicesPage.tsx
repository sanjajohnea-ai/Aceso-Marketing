import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import socialMediaPhoneImg from '../assets/images/social_media_3d_phone_1786954171422.jpg';
import businessBenefitsImg from '../assets/images/business_benefits_growth_1788265402410.jpg';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp,
  Award,
  BarChart3,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';

export interface PerformanceKPI {
  metric: string;
  focus: string;
  whyWeTrackIt: string;
}

export interface ServiceFAQItem {
  id: string;
  question: string;
  answer: string | string[];
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
  pricingCategoryKey: 'social' | 'ppc' | 'web' | 'seo' | 'all' | 'custom';
  faqs?: ServiceFAQItem[];
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
        metric: 'Post Engagement & Interactions',
        focus: 'Audience Interest',
        whyWeTrackIt: 'Shows if people actually care about your content by saving, sharing, and commenting instead of just scrolling past.'
      },
      {
        metric: 'Local Follower & Reach Growth',
        focus: 'Nearby Potential Customers',
        whyWeTrackIt: 'Ensures your social media reaches real local people who can actually visit your business, call you, or buy your services.'
      },
      {
        metric: 'Customer Inquiries & Messages',
        focus: 'New Business Leads',
        whyWeTrackIt: 'Tracks how many people reach out through Instagram/Facebook direct messages, WhatsApp, or website links to ask about prices and book.'
      },
      {
        metric: 'Posting Consistency & Regularity',
        focus: 'Staying Top of Mind',
        whyWeTrackIt: 'Ensures we publish on schedule every week so social platforms favor your profile and nearby customers remember your business first.'
      }
    ],
    pricingCategoryKey: 'social',
    faqs: [
      {
        id: 'faq-social-traction',
        question: 'How long will it take before we start seeing traction from social media?',
        answer: 'Most businesses notice increased profile visits, video views, and direct message interactions within the first 3 to 4 weeks of consistent posting. Because social media algorithms require consistent publication to categorize your brand, sustained inquiry flow and customer acquisition hit high momentum by month two and continue to compound.'
      },
      {
        id: 'faq-social-1',
        question: 'Which social media platforms do you manage, and how do we choose the right ones?',
        answer: 'We manage Instagram, Facebook, TikTok, LinkedIn, and YouTube Shorts. During our initial onboarding strategy session, we analyze where your prospective clients and high-intent buyers spend their time. We then focus your energy and budget on the 2 or 3 platforms that drive genuine business inquiries rather than stretching resources thin across networks that do not convert.'
      },
      {
        id: 'faq-social-2',
        question: 'How do you ensure the content aligns with our brand voice and visual style?',
        answer: 'In week one, we craft a tailored Brand Style & Messaging Guide establishing your tone, aesthetic standards, color codes, approved messaging, and target audience personas. We prepare monthly content calendars 2 to 3 weeks in advance for your review and approval, so your team has complete visibility before anything is published.'
      },
      {
        id: 'faq-social-3',
        question: 'Do we need to supply photos and videos, or does your team create them?',
        answer: 'We handle graphic design, typography, motion graphics, carousels, and scriptwriting. If you have raw smartphone clips, clinic/office photos, or past work examples, our video team edits, color grades, and captions them into high-performing Reels and TikToks. We also provide clear shot lists guiding your staff on how to capture quick, authentic 10-second clips using a smartphone.'
      },
      {
        id: 'faq-social-4',
        question: 'How does social media marketing translate into paying clients rather than just likes?',
        answer: 'We do not focus on vanity metrics. Every piece of content is engineered with strong hooks, clear value, and frictionless calls to action that direct viewers to WhatsApp inquiries, direct message consultations, or dedicated booking landing pages where conversions are tracked.'
      },
      {
        id: 'faq-social-5',
        question: 'Do you monitor and respond to comments and direct messages (DMs)?',
        answer: 'Yes. Our community management workflows monitor your profiles daily for questions, comments, and incoming direct messages. We provide rapid initial greetings, answer common operational questions (hours, location, services), and route qualified booking inquiries immediately to your team or WhatsApp.'
      }
    ]
  },
  ppc: {
    id: 'ppc',
    title: 'Google & Meta Ads (PPC)',
    category: 'Paid Advertising (PPC)',
    heroHeadline: 'Google & Meta Pay-Per-Click Advertising',
    description: 'Get your business in front of customers ready to buy right now. We create and manage targeted ads on Google, Facebook, and Instagram. You set your daily budget, and we make sure every shilling brings in phone calls, messages, and sales.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Targeted ads that bring in phone calls, messages, and booked appointments every day.',
    subServices: [
      {
        title: 'Google Search & Local Services Ads (LSA)',
        description: 'Show up at the very top of Google when people search for your services in your city.',
        example: 'Showing your ad whenever someone searches for "best dentist near me" or "emergency plumber Nairobi."',
        whyItMatters: 'People searching on Google have urgent needs and are ready to buy immediately.'
      },
      {
        title: 'Meta (Facebook & Instagram) Lead Ads',
        description: 'Reach your ideal local customers on social media with attractive photo and video ads that invite them to chat or book.',
        example: 'Targeting local homeowners with a special offer that opens a 1-tap WhatsApp consultation.',
        whyItMatters: 'Builds quick awareness and brings in leads from people relaxing on their phones.'
      },
      {
        title: 'Reminder & Retargeting Ads',
        description: 'Show friendly reminder ads to people who visited your website but did not finish booking.',
        example: 'Showing customer reviews or a limited-time bonus to people who checked your service prices.',
        whyItMatters: 'Brings back interested buyers who just needed a little more time to decide.'
      },
      {
        title: 'Budget Management & Tracking',
        description: 'We monitor your ad spend every day so you never waste money on irrelevant clicks or bad keywords.',
        example: 'Blocking negative search terms so you do not pay for searches like "free service" or "job openings."',
        whyItMatters: 'Ensures your entire ad budget is spent only on real potential buyers.'
      }
    ],
    benefitsParagraph: 'Paid ads work like a switch: when you need more customers, we turn them on. You get a steady flow of phone calls and bookings without guessing, and you can see exactly how much revenue your ads bring in.',
    keyBenefits: [
      'New customer calls and messages starting from week one',
      'Strict daily budget limits so you never overspend',
      'Continuous testing to get you more leads for less money',
      'Clear live reports showing cost per lead and total revenue',
      'You own all ad campaigns, accounts, and customer lists'
    ],
    deliverables: [
      'Competitor and keyword research for your city',
      'Complete ad campaign setup on Google and Meta',
      'Custom ad copywriting, graphics, and video clips',
      'Weekly bid checks and negative keyword filtering',
      'Monthly performance review with simple ROI numbers'
    ],
    kpis: [
      {
        metric: 'Return on Ad Spend (ROAS)',
        focus: 'Profitability',
        whyWeTrackIt: 'Shows how many shillings in revenue you earned for every shilling spent on ads.'
      },
      {
        metric: 'Cost Per Lead (CPA)',
        focus: 'Cost Per Inquiry',
        whyWeTrackIt: 'Tells you the exact amount spent to generate one phone call, message, or booked appointment.'
      },
      {
        metric: 'Click-Through Rate (CTR)',
        focus: 'Ad Appeal',
        whyWeTrackIt: 'Shows what percentage of people who saw your ad clicked on it, proving the offer is attractive.'
      },
      {
        metric: 'Landing Page Conversion Rate',
        focus: 'Completed Actions',
        whyWeTrackIt: 'Shows how many ad clickers actually called, sent a message, or filled out your form.'
      }
    ],
    pricingCategoryKey: 'ppc',
    faqs: [
      {
        id: 'faq-ppc-1',
        question: 'How much ad budget do I need to start seeing meaningful results?',
        answer: 'Ad spend is paid directly to Google or Meta and depends on your industry and competition. For most local practices and growing businesses in Kenya, we typically recommend a starting ad budget of KSh 25,000 to KSh 75,000 per month. This allows the advertising algorithms to gather statistical significance, test multiple ad creatives, and begin generating verified enquiries from week one.'
      },
      {
        id: 'faq-ppc-2',
        question: 'How long will it take before we start seeing traction from paid ads?',
        answer: 'Paid search and social campaigns can start driving clicks and qualified inquiries within 3 to 7 days of campaign launch. Over the first 30 days, we continuously test negative keywords, audience exclusions, bidding strategies, and ad copy to lower your cost-per-lead and accelerate conversion momentum.'
      },
      {
        id: 'faq-ppc-3',
        question: 'Who owns the advertising accounts, data, and pixels?',
        answer: 'You retain 100% ownership of your Google Ads, Meta Business Manager, pixel data, tracking scripts, and payment profiles. We manage your campaigns as an authorized partner. If you ever pause or conclude our services, your entire account structure, negative keyword libraries, and conversion history remain fully yours.'
      },
      {
        id: 'faq-ppc-4',
        question: 'Should my business run Google Search Ads or Meta (Facebook/Instagram) Ads?',
        answer: 'Google Search targets high-intent demand—people actively typing and searching for a solution right now (such as "emergency dental clinic near me" or "corporate tax consultant"). Meta Ads target latent demand through visual storytelling, video demonstrations, and retargeting people who visited your website but did not finish booking. Most successful clients benefit from a balanced combination of both.'
      },
      {
        id: 'faq-ppc-5',
        question: 'How do you prevent wasted ad spend on unqualified clicks?',
        answer: 'We eliminate wasted spend through aggressive negative keyword lists, tight geographic radius controls, mobile-optimized landing pages, and pre-qualifying question forms that screen out tire-kickers. We optimize campaigns around verified phone calls, form completions, and confirmed bookings rather than superficial clicks.'
      }
    ]
  },
  webdesign: {
    id: 'webdesign',
    title: 'Web Design & Development',
    category: 'Web Design & Conversions',
    heroHeadline: 'Fast, Modern Websites Built to Sell',
    description: 'Your website is your online shop. We build clean, fast, and mobile-friendly websites designed to turn visitors into paying clients. From easy booking buttons to clear service details, we make it effortless for customers to contact you.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Fast loading speeds, simple mobile layouts, and easy booking buttons.',
    subServices: [
      {
        title: 'Mobile-Friendly Design',
        description: 'We design websites that look clean and work smoothly on smartphones, tablets, and computers.',
        example: 'Making sure your phone number and WhatsApp button are always one tap away on phone screens.',
        whyItMatters: 'Over 80% of local customers will visit your website from their phone.'
      },
      {
        title: 'Easy Booking & Clear Contact Buttons',
        description: 'We place contact forms, WhatsApp links, and call buttons in easy-to-find spots so visitors reach out fast.',
        example: 'Adding a quick 2-step booking form and genuine customer reviews right next to your service prices.',
        whyItMatters: 'Making it simple to contact you doubles the number of customer inquiries from existing visitors.'
      },
      {
        title: 'Fast Page Loading Speeds',
        description: 'We optimize pictures and code so your pages open in under two seconds on any internet connection.',
        example: 'Compressing images and removing heavy code so the site loads instantly even on mobile data.',
        whyItMatters: 'Visitors leave if a website takes more than 3 seconds to load.'
      },
      {
        title: 'Easy Content Updates & Lead Alerts',
        description: 'We set up your site so you can easily change text and photos, with instant alerts whenever someone reaches out.',
        example: 'Connecting forms directly to your email, WhatsApp, or Google Sheets so you never miss a new lead.',
        whyItMatters: 'You get notified immediately the moment a new customer asks for a quote.'
      }
    ],
    benefitsParagraph: 'A fast, modern website builds instant trust. Instead of losing interested visitors, your site guides them clearly to call, message, or book. It works for your business 24 hours a day, even while you sleep.',
    keyBenefits: [
      'Loads in under 2 seconds on mobile phones',
      'Clear layout that makes it easy for visitors to call or message',
      'Built for Google search so nearby customers can find you',
      'Full ownership of your website with simple content editing',
      'Direct WhatsApp chat and instant email alerts for new inquiries'
    ],
    deliverables: [
      'Custom website layout tailored to your business brand',
      'Mobile-friendly design for phones, tablets, and laptops',
      'Direct WhatsApp, call, and contact form integrations',
      'Fast speed optimization and secure SSL setup',
      'Simple training so your team can make easy text updates'
    ],
    kpis: [
      {
        metric: 'Mobile Load Time',
        focus: 'Speed & User Experience',
        whyWeTrackIt: 'Fast loading keeps visitors on your page and helps you rank higher on Google.'
      },
      {
        metric: 'Visitor-to-Lead Rate',
        focus: 'Website Effectiveness',
        whyWeTrackIt: 'Shows what percentage of site visitors actually call, message, or book with you.'
      },
      {
        metric: 'Mobile Usability',
        focus: 'Ease of Use',
        whyWeTrackIt: 'Checks that buttons and text are easy to read and tap on any phone screen.'
      },
      {
        metric: 'Bounce Rate',
        focus: 'Visitor Interest',
        whyWeTrackIt: 'Shows if visitors stay to explore your services or leave right away.'
      }
    ],
    pricingCategoryKey: 'custom',
    faqs: [
      {
        id: 'faq-web-traction',
        question: 'How long will it take before our new website starts gaining traction and generating enquiries?',
        answer: 'Immediately upon launch, your new high-performance website begins converting incoming traffic with fast mobile load speeds and prominent WhatsApp click-to-chat triggers. When combined with paid ads or local search campaigns, businesses typically see conversion rates improve within the very first week of live visitor traffic.'
      },
      {
        id: 'faq-web-1',
        question: 'How long does it take to design and launch a new website or landing page?',
        answer: 'Dedicated high-converting campaign landing pages are typically launched within 7 to 14 business days from wireframe approval. Full custom multi-page business websites generally take 3 to 5 weeks, depending on the scope of custom features, integrations, and content review cycles.'
      },
      {
        id: 'faq-web-2',
        question: 'Will our website load quickly on mobile devices and slow connections?',
        answer: 'Yes. Over 75% of local service traffic originates from mobile devices. We build mobile-first with clean code, compressed next-generation images, optimized typography, and minimal script weight, ensuring page load times under 2 seconds even on standard mobile networks.'
      },
      {
        id: 'faq-web-3',
        question: 'Can our team easily make text and photo updates after launch?',
        answer: 'Absolutely. We build on user-friendly content management platforms and provide complete video training and documentation. Your team will be able to update prices, swap out photos, publish announcements, and review incoming enquiries without needing to write any code.'
      },
      {
        id: 'faq-web-4',
        question: 'Do you write the website copy or do we need to provide it?',
        answer: 'We handle the copywriting for you. We interview your team to uncover your unique differentiators, customer pain points, and competitive strengths, then write conversion-focused headlines, benefit breakdowns, and clear calls-to-action designed to convert visitors into booked appointments.'
      },
      {
        id: 'faq-web-5',
        question: 'Do you set up analytics, tracking pixels, and conversion forms?',
        answer: 'Yes. Every website we build includes full integration of Google Analytics 4, Google Tag Manager, Meta Pixel, automated contact forms with email/WhatsApp notifications, and foundational technical SEO (meta titles, sitemaps, semantic tags).'
      }
    ]
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
        metric: 'Google Maps 3-Pack Rankings',
        focus: 'Top Local Search Position',
        whyWeTrackIt: 'Checks if your business appears in the top 3 Google Maps results when nearby customers search for what you offer (e.g., "dentist near me").'
      },
      {
        metric: 'First-Page Keyword Rankings',
        focus: 'Google Search Visibility',
        whyWeTrackIt: 'Tracks how high your website ranks on the first page of Google for the specific search terms your prospective customers type in.'
      },
      {
        metric: 'Direct Phone Calls & Direction Requests',
        focus: 'Real Customer Enquiries',
        whyWeTrackIt: 'Counts how many people tapped to call your business, asked for driving directions, or clicked your website directly from Google.'
      },
      {
        metric: 'New Website Visitors from Google',
        focus: 'Free Customer Traffic',
        whyWeTrackIt: 'Measures how many new people discover your business through Google search each month without having to pay for ads.'
      }
    ],
    pricingCategoryKey: 'seo',
    faqs: [
      {
        id: 'faq-seo-1',
        question: 'How long will it take before we start seeing traction from SEO?',
        answer: 'SEO is a compounding growth engine. Most businesses notice initial Google Business Profile impressions, indexed search gains, and local keyword movement within 60 to 90 days. Substantial organic traffic expansion, Google Map 3-Pack dominance, and a steady stream of unpaid patient or client bookings typically mature between months 4 and 6.'
      },
      {
        id: 'faq-seo-2',
        question: 'What is the difference between Local SEO and Organic Search SEO?',
        answer: 'Local SEO focuses on placing your business in the Google Map 3-Pack for searches with localized intent (such as "vet clinic Westlands" or "hotel near airport"). Organic SEO ranks your website pages, articles, and service guides in standard Google search listings regionally and nationally. We execute both concurrently for maximum search real estate.'
      },
      {
        id: 'faq-seo-3',
        question: 'Can you guarantee a #1 ranking on Google?',
        answer: 'No ethical SEO agency can guarantee a #1 position, as Google frequently updates its algorithms and competitors actively optimize. What we do guarantee is strict adherence to Google\'s official guidelines, transparent technical execution, high-intent local content production, and monthly reporting tied to phone calls, direction requests, and real customer enquiries.'
      },
      {
        id: 'faq-seo-4',
        question: 'What specific tasks are completed every month for ongoing SEO?',
        answer: 'Monthly SEO includes continuous technical health and page speed maintenance, local citation audits and cleanups, Google Business Profile posts and review management, on-page optimization for new high-volume keywords, internal link optimization, and building authoritative local backlinks.'
      },
      {
        id: 'faq-seo-5',
        question: 'How do we track whether SEO is actually generating revenue?',
        answer: 'We measure what matters: Google Maps direction requests, click-to-call phone calls, appointment form completions, and keyword ranking trends. You receive an executive summary every month showing organic visitor growth and the exact customer enquiries it generated.'
      }
    ]
  },
  whatsapp: {
    id: 'whatsapp',
    title: 'WhatsApp Marketing & Lead Automations',
    category: 'WhatsApp & Automations',
    heroHeadline: 'Automate WhatsApp to Reply and Book 24/7',
    description: 'Turn WhatsApp into your fastest sales channel. We set up automatic replies that answer questions instantly, book appointments, send friendly reminders, and follow up with past clients—all without needing someone on your staff to type every message.',
    heroImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop',
    imageCaption: 'Instant 24/7 replies, easy appointment booking, and automatic reminders on WhatsApp.',
    subServices: [
      {
        title: 'Instant 24/7 Customer Replies',
        description: 'Set up automatic replies that answer common questions about prices, locations, and open hours in seconds.',
        example: 'A customer messages at 10 PM and gets an instant menu with service details and an easy booking button.',
        whyItMatters: 'You never lose an interested customer just because your office is closed.'
      },
      {
        title: 'Click-to-WhatsApp Ad Links',
        description: 'Send people from Facebook and Instagram ads directly into a WhatsApp chat with a friendly opening greeting.',
        example: 'An ad where clicking "Message Us" opens WhatsApp with the message "Hi, I would like to book a visit" already typed.',
        whyItMatters: 'Customers love chatting on WhatsApp because it is fast, familiar, and easy.'
      },
      {
        title: 'Automatic Appointment Reminders',
        description: 'Send automated reminder messages 24 hours and 2 hours before a booked visit, with a simple button to confirm.',
        example: 'Sending: "Hello Sarah, your appointment is tomorrow at 2 PM. Please reply 1 to confirm or 2 to reschedule."',
        whyItMatters: 'Cuts missed appointments and no-shows by more than half.'
      },
      {
        title: 'Customer Database & Follow-Up Messages',
        description: 'Save all your customer contacts cleanly and send special holiday greetings or service check-up reminders.',
        example: 'Sending a friendly reminder to past clients when their routine 6-month check-up is due.',
        whyItMatters: 'Brings back past clients for repeat visits without having to find new customers.'
      }
    ],
    benefitsParagraph: 'Speed matters. When someone asks about your services, getting an answer in 5 seconds means they book with you instead of calling another business. Automated WhatsApp messages handle inquiries, remind clients of their bookings, and save your front desk hours of work every week.',
    keyBenefits: [
      'Instant replies under 5 seconds, day or night',
      'Over 90% of messages are read within minutes',
      'Cuts missed appointments and no-shows in half',
      'Saves your staff hours of typing repetitive replies',
      'Easy for your customers because they already use WhatsApp every day'
    ],
    deliverables: [
      'Custom WhatsApp reply flows and menu setup',
      'Automated greeting and inquiry capture system',
      'Direct WhatsApp chat links for your website and social ads',
      'Google Calendar sync with automated booking reminders',
      'Staff walk-through so your team knows how to manage incoming chats'
    ],
    kpis: [
      {
        metric: 'Response Time',
        focus: 'Fast Replies',
        whyWeTrackIt: 'Measures how fast a new prospect gets their first greeting and answer.'
      },
      {
        metric: 'Booked Appointments',
        focus: 'Confirmed Bookings',
        whyWeTrackIt: 'Tracks how many WhatsApp conversations turned into scheduled visits.'
      },
      {
        metric: 'Appointment Attendance Rate',
        focus: 'Reduced No-Shows',
        whyWeTrackIt: 'Shows how many customers showed up on time thanks to automated WhatsApp reminders.'
      },
      {
        metric: 'Past Client Re-bookings',
        focus: 'Repeat Business',
        whyWeTrackIt: 'Measures how many previous clients booked again after receiving seasonal reminder messages.'
      }
    ],
    pricingCategoryKey: 'custom',
    faqs: [
      {
        id: 'faq-wa-1',
        question: 'How long will it take before we start seeing traction with WhatsApp automations?',
        answer: 'You will see traction from day one. As soon as your WhatsApp automations go live, every click on your ads, website buttons, or social profiles triggers instant automated conversations. Businesses typically experience a 30% to 50% increase in fast inquiry-to-booking conversions within the first two weeks.'
      },
      {
        id: 'faq-wa-2',
        question: 'Will automated WhatsApp messages sound robotic or alienate customers?',
        answer: 'Not at all. We write warm, conversational, and natural copy tailored to your brand voice. The automation acts as a friendly concierge handling routine repetitive questions, and instantly notifies your human team the moment a customer requests personalized advice or a complex quotation.'
      },
      {
        id: 'faq-wa-3',
        question: 'Can we broadcast messages and updates to our customer list without getting blocked?',
        answer: 'Yes. We use official WhatsApp Business API compliant methods with strict opt-in protocols. We help you segment your contacts so messages are relevant, personalized, and timely—such as automated 6-month checkup reminders, seasonal VIP promotions, or post-visit satisfaction reviews.'
      },
      {
        id: 'faq-wa-4',
        question: 'How does WhatsApp automation reduce missed appointments and no-shows?',
        answer: 'We set up automated reminder sequences sent 24 hours and 2 hours before a scheduled visit, featuring simple 1-tap confirmation or rescheduling buttons. Because over 90% of WhatsApp messages are opened within minutes, no-show rates typically drop by 50% or more.'
      },
      {
        id: 'faq-wa-5',
        question: 'Can multiple staff members respond to incoming chats from one business number?',
        answer: 'Yes. Through our multi-agent team inbox setup, multiple front desk team members, clinicians, or sales agents can log in simultaneously from desktops or mobile phones, assign chats to specific departments, add internal notes, and manage customer records seamlessly.'
      }
    ]
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

  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Set first FAQ open by default or reset when service changes
  React.useEffect(() => {
    if (activeService.faqs && activeService.faqs.length > 0) {
      setOpenFaqId(activeService.faqs[0].id);
    } else {
      setOpenFaqId(null);
    }
  }, [activeService.id]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const handleBookConsultation = () => {
    if (onRequestAudit) {
      onRequestAudit();
    } else if (onNavigate) {
      onNavigate('free-audit');
    }
  };

  const handleViewPricing = () => {
    if (onNavigate) {
      if (activeService.id === 'whatsapp' || activeService.id === 'web' || activeService.pricingCategoryKey === 'custom') {
        onNavigate('pricing-custom');
      } else {
        onNavigate(`pricing-${activeService.pricingCategoryKey}`);
      }
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
      <main className="flex-1 pt-5 sm:pt-8 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 sm:space-y-10">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 sm:space-y-10"
          >
            {/* HERO SECTION */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                <span className="text-[#1D63ED]">{activeService.title}</span>
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Hero Visual Image (With Caption Overlay) - Left side on desktop */}
                {activeService.heroImage && (
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-900 w-full h-[260px] sm:h-[320px] lg:h-[360px] shadow-md border border-slate-200/80">
                      <img 
                        src={activeService.heroImage} 
                        alt={activeService.title} 
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {activeService.imageCaption && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-5 sm:p-6">
                          <p className="text-sm sm:text-base text-white font-medium leading-relaxed drop-shadow-xs">
                            {activeService.imageCaption}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className={`space-y-6 ${activeService.heroImage ? 'lg:col-span-6' : 'lg:col-span-12 max-w-4xl'}`}>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                    {activeService.description}
                  </p>

                  <div className="flex flex-row items-center gap-2 sm:gap-3.5 pt-2 w-full sm:w-auto">
                    <button
                      onClick={handleBookConsultation}
                      className="flex-1 sm:flex-initial sm:w-auto min-h-[44px] sm:min-h-[48px] px-2.5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] active:bg-[#C26B00] text-slate-950 font-bold text-xs sm:text-base transition-all shadow-sm flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-[0.98] text-center"
                    >
                      <span>Book Free Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden sm:inline-block" />
                    </button>
                    <button
                      onClick={handleViewPricing}
                      className="flex-1 sm:flex-initial sm:w-auto min-h-[44px] sm:min-h-[48px] px-2.5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-base transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-[0.98] text-center whitespace-nowrap"
                    >
                      View Pricing Plans
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CORE SUB-SERVICES & PILLARS */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2.5 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  What We Deliver in <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">{activeService.title}</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Every component is engineered to work together seamlessly, capturing attention, building trust, and generating consistent customer inquiries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                {activeService.subServices.map((sub, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
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
                          <p className="font-bold text-[#C25E00] text-xs uppercase tracking-wider">
                            Real-World Example
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">{sub.example}</p>
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
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-7 space-y-5 shadow-2xs">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#C25E00]" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide">
                  Key Business Benefits
                </h3>
              </div>

              {/* Dedicated Benefit Content and Visual Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-3.5">
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {activeService.benefitsParagraph}
                  </p>
                  
                  <ul className="space-y-2.5 pt-1">
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
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                          Measurable Impact
                        </span>
                        <p className="text-white text-sm font-semibold leading-snug">
                          Data-backed execution designed for consistent SME revenue expansion
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. STRATEGIC PERFORMANCE TRACKING KPIS (Dedicated full-width section) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-7 space-y-5 shadow-2xs">
              <div className="border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-[#1D63ED]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide">
                    Performance Tracking KPIs
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-1">
                {activeService.kpis.map((kpi, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50/90 border border-slate-200 rounded-xl p-4 sm:p-4.5 space-y-3 flex flex-col justify-between"
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

            {/* 3. FREQUENTLY ASKED QUESTIONS SECTION */}
            {activeService.faqs && activeService.faqs.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-7 space-y-5 shadow-2xs">
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-[#DE8E53]" />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-wide">
                      Frequently Asked Questions
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-1">
                  {activeService.faqs.map((faq) => {
                    const isOpen = openFaqId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                          isOpen
                            ? 'bg-amber-50/25 border-amber-400/60 shadow-xs ring-1 ring-amber-400/30'
                            : 'bg-slate-50/70 border-slate-200/90 hover:border-slate-300'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                          aria-expanded={isOpen}
                        >
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {faq.question}
                          </h4>
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                              isOpen ? 'bg-amber-500/15 text-[#C25E00]' : 'bg-slate-200/70 text-slate-600'
                            }`}
                          >
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-5 sm:px-6 pt-0 pb-5 sm:pb-6 border-t border-slate-200/60">
                            {Array.isArray(faq.answer) ? (
                              <div className="space-y-2.5 pt-3.5">
                                {faq.answer.map((para, pIdx) => (
                                  <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                                    {para}
                                  </p>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-3.5">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

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

              <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 pt-2 w-full max-w-xl mx-auto">
                <button
                  onClick={handleBookConsultation}
                  className="flex-1 sm:flex-initial sm:w-auto min-h-[44px] sm:min-h-[48px] px-2.5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-[#F28E13] hover:bg-[#DE7C05] text-slate-950 font-bold text-xs sm:text-base tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center active:scale-[0.98]"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden sm:inline-block" />
                </button>
                <button
                  onClick={handleViewPricing}
                  className="flex-1 sm:flex-initial sm:w-auto min-h-[44px] sm:min-h-[48px] px-2.5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-base tracking-wide uppercase transition-all flex items-center justify-center cursor-pointer text-center active:scale-[0.98] whitespace-nowrap"
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
