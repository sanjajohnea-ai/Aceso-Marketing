import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandLogos } from './components/BrandLogos';
import { Process } from './components/Process';
import { Solutions } from './components/Solutions';
import { HomeFAQ } from './components/HomeFAQ';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { PackageItem, SolutionItem } from './types';
import { CustomPackagePage } from './components/CustomPackagePage';
import { FreeAuditPage } from './components/FreeAuditPage';
import { ServicesPage } from './components/ServicesPage';
import { IndustriesPage } from './components/IndustriesPage';
import { PricingPage } from './components/PricingPage';
import { PortfolioPage } from './components/PortfolioPage';
import { HomePortfolioSection } from './components/HomePortfolioSection';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/TermsOfUsePage';
import { PackageDetailsModal } from './components/PackageDetailsModal';
import { SolutionDetailsModal } from './components/SolutionDetailsModal';
import { LeadDetailsModal } from './components/LeadDetailsModal';

// SEO Page Metadata Configuration
const pageMetadata = {
  home: {
    title: 'Aceso Solutions | Digital Marketing Agency in Kenya',
    description: 'Looking to grow your business online? Aceso Solutions helps Kenyan SMEs attract customers through social media marketing, SEO, Google Ads, Meta Ads, and marketing automation.',
    keywords: 'digital marketing agency Kenya, social media management Nairobi, Meta ads Kenya, TikTok ads Nairobi, WhatsApp business automation, SEO services Nairobi, SME marketing solutions, customer acquisition agency, conversion rate optimization, Aceso Solutions'
  },
  'custom-package': {
    title: 'Custom Package Builder | Aceso Solutions',
    description: 'Build your custom digital marketing package with Aceso Solutions. Select social media management, Meta & TikTok ads, web design, SEO, and WhatsApp automation.',
    keywords: 'custom marketing package, bespoke digital marketing pricing, marketing package builder Kenya, customized SEO and ads package, SME marketing calculator Nairobi, Aceso Solutions custom package'
  },
  'free-audit': {
    title: 'Free Digital Growth Audit | Aceso Solutions',
    description: 'Request a free digital marketing and customer acquisition audit for your business. Uncover quick wins, fix funnel leaks, and accelerate revenue.',
    keywords: 'free digital marketing audit, website audit Kenya, marketing funnel analysis Nairobi, social media performance review, SEO audit Kenya, growth consultation SME'
  },
  services: {
    title: 'Digital Marketing & Growth Services | Aceso Solutions',
    description: 'Comprehensive digital solutions for SMEs: Customer Acquisition, Retention & Reactivation, and Revenue Automation systems.',
    keywords: 'customer acquisition services Nairobi, search engine optimization Kenya, PPC paid advertising Nairobi, social media marketing agency, WhatsApp automation CRM, marketing strategy Kenya'
  },
  industries: {
    title: 'Industries We Work With | Aceso Solutions',
    description: 'Purpose-built digital customer acquisition and revenue automation systems for Dental Clinics, Vet Clinics, Hotels & Resorts, Tours & Travel, Professional Services & Education.',
    keywords: 'dental clinic digital marketing Nairobi, veterinary digital marketing agency, vet clinic patient acquisition, animal hospital SEO, hospitality marketing Kenya, hotel direct bookings Nairobi, law firm marketing Kenya, legal SEO Nairobi, education student intake campaigns, SME vertical growth agency Kenya'
  },
  pricing: {
    title: 'Transparent Pricing & Plans | Aceso Solutions',
    description: 'Transparent pricing for Web Design, Social Media Marketing, SEO, and PPC Advertising designed for small and growing enterprises.',
    keywords: 'digital marketing prices Kenya, social media management cost Nairobi, web design pricing Kenya, SEO packages Nairobi, PPC advertising management fees, affordable SME marketing packages'
  },
  portfolio: {
    title: 'Our Work | Real Campaigns & Tangible Results | Aceso Solutions',
    description: 'Explore verified client case studies, social media content, and high-converting ad campaigns created for businesses across Kenya by Aceso Solutions.',
    keywords: 'digital marketing portfolio Kenya, SME case studies Nairobi, social media campaigns Kenya, social media content Kenya, marketing agency work Nairobi, client case studies Kenya'
  },
  contact: {
    title: 'Contact Us | Aceso Solutions',
    description: 'Get in touch with Aceso Solutions. Discuss your digital marketing, SEO, paid ads, web design, and automation goals with our growth strategy team.',
    keywords: 'contact Aceso Solutions, digital marketing agency contact Nairobi, hire marketing agency Kenya, digital marketing consultation Nairobi'
  },
  'privacy-policy': {
    title: 'Privacy Policy | Aceso Solutions',
    description: 'Privacy Policy and data protection standards for Aceso Solutions. Learn how we safeguard your personal and business marketing data.',
    keywords: 'Aceso Solutions privacy policy, data protection Kenya, digital marketing privacy, SME confidentiality'
  },
  'terms-of-use': {
    title: 'Terms of Use | Aceso Solutions',
    description: 'Terms of Use and service agreements for Aceso Solutions digital marketing, paid ads, SEO, and automation services.',
    keywords: 'Aceso Solutions terms of use, marketing agency service agreement Kenya, legal terms SME marketing'
  }
};

// SEO Metadata for Individual Client Case Studies (Dynamic Social Cards & SERP Rich Snippets)
export const caseStudiesMetadata: Record<string, {
  title: string;
  description: string;
  keywords: string;
  image: string;
  imageAlt: string;
  ogType: string;
  client: string;
  industry: string;
}> = {
  'the-parkstay-hospitality': {
    title: 'The Parkstay Vacation Stay Tour Case Study | Aceso Solutions',
    description: 'How Aceso Solutions generated +142 direct bookings at Ksh 3,500/night (89% occupancy) for The Parkstay with high-impact social media video walkthroughs.',
    keywords: 'The Parkstay case study, hospitality social media marketing Kenya, apartment video tour Nairobi, vacation rental marketing Nairobi, Airbnb video marketing Kenya, direct booking campaign Nairobi, Aceso Solutions',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'The Parkstay Luxury Vacation Apartment Walkthrough Tour Case Study by Aceso Solutions',
    ogType: 'article',
    client: 'The Parkstay Luxury Stays',
    industry: 'Hospitality'
  },
  'amazon-selection-bodywork': {
    title: 'Amazon Selection Auto Works Video Case Study | Aceso Solutions',
    description: 'How Aceso Solutions achieved a 62% watch rate and +84 collision repair jobs (KSh 65,000+ avg ticket) for Amazon Selection with cinematic process videos.',
    keywords: 'Amazon Selection case study, automotive social media marketing Kenya, car repair video Nairobi, spray booth process video Kenya, auto body shop advertising Nairobi, Aceso Solutions',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Amazon Selection Auto Works Car Spray Painting Process Video Case Study by Aceso Solutions',
    ogType: 'article',
    client: 'Amazon Selection Auto Works',
    industry: 'Automotive'
  },
  'ajenda-kenya-id-advocacy': {
    title: 'Ajenda Kenya #SiasaYaID NGO Comic Carousel Case Study | Aceso Solutions',
    description: 'How Aceso Solutions created an educational Sheng comic carousel for Ajenda Kenya reaching 148k+ views, 5.3k likes, 225 comments, and 710 shares on TikTok.',
    keywords: 'Ajenda Kenya case study, #SiasaYaID, NGO social media campaigns Kenya, youth advocacy content Nairobi, TikTok comic carousel Kenya, civic rights educational content, Aceso Solutions',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Ajenda Kenya #SiasaYaID Youth Advocacy Comic Carousel Case Study by Aceso Solutions',
    ogType: 'article',
    client: 'Ajenda Kenya',
    industry: 'NGO'
  }
};

// Helper to parse current view and state from URL using HashRouter strategy
type PageView = 'home' | 'custom-package' | 'free-audit' | 'services' | 'industries' | 'pricing' | 'portfolio' | 'contact' | 'privacy-policy' | 'terms-of-use';

const parseRouteFromLocation = (): {
  view: PageView;
  section: string;
  pricingCategory: 'all' | 'social' | 'seo' | 'ppc';
  industryId?: string;
  serviceId?: string;
  caseStudyId?: string;
} => {
  if (typeof window === 'undefined') {
    return { view: 'home', section: 'home', pricingCategory: 'all', industryId: 'hospitality', serviceId: 'social' };
  }

  const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const rawHash = (window.location.hash || '').toLowerCase().replace(/^#\/?/, '').replace(/\/+$/, '');

  // Determine effective route string (hash is primary source of truth)
  let effectiveRoute = rawHash;

  // Fallback / migration: If someone lands on a direct pathname (e.g. /services/social or /our-work),
  // migrate it immediately to a hash route so subsequent browser refreshes will never 404!
  if (!effectiveRoute && rawPath !== '/' && rawPath !== '/index.html') {
    effectiveRoute = rawPath.replace(/^\/+/, '');
    window.history.replaceState({ route: `#/${effectiveRoute}` }, '', `/#/${effectiveRoute}`);
  }

  // 1. Root / Home
  if (!effectiveRoute || effectiveRoute === 'home' || effectiveRoute === '/') {
    return { view: 'home', section: 'home', pricingCategory: 'all' };
  }

  // 2. Services routes: #/services, #/services/:id, #/service-:id
  if (effectiveRoute === 'services' || effectiveRoute.startsWith('services/') || effectiveRoute.startsWith('service-')) {
    let srvId = 'social';
    if (effectiveRoute.startsWith('services/')) {
      srvId = effectiveRoute.replace('services/', '').split('/')[0] || 'social';
    } else if (effectiveRoute.startsWith('service-')) {
      srvId = effectiveRoute.replace('service-', '').split('/')[0] || 'social';
    }
    if (srvId === 'services') srvId = 'social';
    return { view: 'services', section: `service-${srvId}`, pricingCategory: 'all', serviceId: srvId };
  }

  // 3. Industries routes: #/industries, #/industries/:id, #/industry-:id
  if (effectiveRoute === 'industries' || effectiveRoute.startsWith('industries/') || effectiveRoute.startsWith('industry-')) {
    let indId = 'hospitality';
    if (effectiveRoute.startsWith('industries/')) {
      indId = effectiveRoute.replace('industries/', '').split('/')[0] || 'hospitality';
    } else if (effectiveRoute.startsWith('industry-')) {
      indId = effectiveRoute.replace('industry-', '').split('/')[0] || 'hospitality';
    }
    if (indId === 'industries') indId = 'hospitality';
    return { view: 'industries', section: `industry-${indId}`, pricingCategory: 'all', industryId: indId };
  }

  // 4. Pricing routes: #/pricing, #/pricing/web, #/pricing/social, etc.
  if (effectiveRoute === 'pricing/web' || effectiveRoute === 'pricing-web') {
    return { view: 'custom-package', section: 'pricing', pricingCategory: 'all' };
  }
  if (effectiveRoute === 'pricing' || effectiveRoute.startsWith('pricing/') || effectiveRoute.startsWith('pricing-')) {
    let cat: 'all' | 'social' | 'seo' | 'ppc' = 'social';
    if (effectiveRoute === 'pricing/social' || effectiveRoute === 'pricing-social') cat = 'social';
    else if (effectiveRoute === 'pricing/seo' || effectiveRoute === 'pricing-seo') cat = 'seo';
    else if (effectiveRoute === 'pricing/ppc' || effectiveRoute === 'pricing-ppc') cat = 'ppc';
    else if (effectiveRoute === 'pricing/all') cat = 'all';
    return { view: 'pricing', section: 'pricing', pricingCategory: cat };
  }

  // 5. Custom Package Builder: #/custom-package, #/pricing-custom
  if (effectiveRoute === 'custom-package' || effectiveRoute === 'pricing-custom') {
    return { view: 'custom-package', section: 'pricing', pricingCategory: 'all' };
  }

  // 6. Free Audit: #/free-audit, #/audit
  if (effectiveRoute === 'free-audit' || effectiveRoute === 'audit-page') {
    return { view: 'free-audit', section: 'audit', pricingCategory: 'all' };
  }

  // 7. Our Work / Portfolio & Case Studies: #/our-work, #/work, #/portfolio, #/our-work/:caseStudyId
  if (
    effectiveRoute === 'portfolio' || 
    effectiveRoute === 'our-work' || 
    effectiveRoute === 'work' || 
    effectiveRoute === 'portolio' ||
    effectiveRoute.startsWith('portfolio/') ||
    effectiveRoute.startsWith('our-work/') ||
    effectiveRoute.startsWith('work/')
  ) {
    let csId: string | undefined;
    if (effectiveRoute.startsWith('portfolio/')) {
      csId = effectiveRoute.replace('portfolio/', '').split('/')[0];
    } else if (effectiveRoute.startsWith('our-work/')) {
      csId = effectiveRoute.replace('our-work/', '').split('/')[0];
    } else if (effectiveRoute.startsWith('work/')) {
      csId = effectiveRoute.replace('work/', '').split('/')[0];
    }
    if (csId === 'portfolio' || csId === 'our-work' || csId === 'work' || csId === '') {
      csId = undefined;
    }
    return { view: 'portfolio', section: 'portfolio', pricingCategory: 'all', caseStudyId: csId };
  }

  // 8. Contact: #/contact
  if (effectiveRoute === 'contact') {
    return { view: 'contact', section: 'contact', pricingCategory: 'all' };
  }

  // 8. Legal pages
  if (effectiveRoute === 'privacy-policy') {
    return { view: 'privacy-policy', section: 'privacy-policy', pricingCategory: 'all' };
  }
  if (effectiveRoute === 'terms-of-use') {
    return { view: 'terms-of-use', section: 'terms-of-use', pricingCategory: 'all' };
  }

  // 9. In-page home section anchors (e.g. #/solutions, #/process, #/faq, #/audit)
  return { view: 'home', section: effectiveRoute, pricingCategory: 'all' };
};

export default function App() {
  const initialRoute = parseRouteFromLocation();
  const [currentView, setCurrentView] = useState<PageView>(initialRoute.view);
  const [activeSection, setActiveSection] = useState<string>(initialRoute.section);
  const [pricingCategory, setPricingCategory] = useState<'all' | 'social' | 'seo' | 'ppc'>(initialRoute.pricingCategory);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(initialRoute.industryId || 'hospitality');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialRoute.serviceId || 'social');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(initialRoute.caseStudyId || null);
  
  // Modal states
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // Sync URL hash when navigating (HashRouter strategy protects against 404s on refresh)
  const updateUrlHash = (targetRoute: string, replace = false) => {
    if (typeof window === 'undefined') return;
    const cleanRoute = targetRoute.replace(/^#\/?/, '').replace(/^\/+/, '');
    const targetHash = cleanRoute ? `#/${cleanRoute}` : '#/';

    if (window.location.hash !== targetHash) {
      if (replace) {
        window.history.replaceState({ route: targetHash }, '', targetHash);
      } else {
        window.history.pushState({ route: targetHash }, '', targetHash);
      }
    }
  };

  // Listen to browser Back, Forward, and Hash change events
  useEffect(() => {
    const handleRouteChange = () => {
      const route = parseRouteFromLocation();
      setCurrentView(route.view);
      setActiveSection(route.section);
      setPricingCategory(route.pricingCategory);
      if (route.industryId) {
        setSelectedIndustryId(route.industryId);
      }
      if (route.serviceId) {
        setSelectedServiceId(route.serviceId);
      }
      if (route.caseStudyId !== undefined) {
        setSelectedCaseStudyId(route.caseStudyId || null);
      } else if (route.view !== 'portfolio') {
        setSelectedCaseStudyId(null);
      }

      if (route.view === 'home' && route.section && route.section !== 'home') {
        setTimeout(() => {
          performScroll(route.section);
        }, 50);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  // Initial scroll if mounted with hash on homepage
  useEffect(() => {
    if (initialRoute.view === 'home' && initialRoute.section && initialRoute.section !== 'home') {
      setTimeout(() => {
        performScroll(initialRoute.section);
      }, 100);
    }
  }, []);

  // Dynamic SEO meta tags update based on current page/view & active case study
  useEffect(() => {
    // Check if viewing an individual case study
    const isCaseStudy = currentView === 'portfolio' && selectedCaseStudyId && caseStudiesMetadata[selectedCaseStudyId];
    const caseStudyMeta = isCaseStudy ? caseStudiesMetadata[selectedCaseStudyId] : null;

    const baseMeta = pageMetadata[currentView] || pageMetadata.home;
    const title = caseStudyMeta ? caseStudyMeta.title : baseMeta.title;
    const description = caseStudyMeta ? caseStudyMeta.description : baseMeta.description;
    const keywords = caseStudyMeta ? caseStudyMeta.keywords : baseMeta.keywords;
    const ogImage = caseStudyMeta 
      ? caseStudyMeta.image 
      : 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop';
    const ogImageAlt = caseStudyMeta 
      ? caseStudyMeta.imageAlt 
      : 'Aceso Solutions Digital Marketing and Customer Acquisition Specialists';
    const ogType = caseStudyMeta ? caseStudyMeta.ogType : 'website';

    document.title = title;

    // Helper to safely set meta tag content
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Update primary meta tags
    setMetaTag('meta[name="title"]', 'name', 'title', title);
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // Dynamic canonical & OpenGraph URL
    const currentUrl = typeof window !== 'undefined'
      ? `https://acesosolutions.co.ke/${window.location.hash ? window.location.hash : ''}`
      : 'https://acesosolutions.co.ke/';

    // Update OpenGraph tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', ogImageAlt);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Aceso Solutions');

    // Update Twitter Card tags
    setMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', title);
    setMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', description);
    setMetaTag('meta[property="twitter:image"]', 'property', 'twitter:image', ogImage);
    setMetaTag('meta[property="twitter:url"]', 'property', 'twitter:url', currentUrl);
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Dynamic JSON-LD Structured Data Schema for Active Case Study or Portfolio Page
    let dynamicLd = document.getElementById('dynamic-case-study-ld') as HTMLScriptElement | null;
    if (caseStudyMeta && selectedCaseStudyId) {
      if (!dynamicLd) {
        dynamicLd = document.createElement('script');
        dynamicLd.id = 'dynamic-case-study-ld';
        dynamicLd.type = 'application/ld+json';
        document.head.appendChild(dynamicLd);
      }
      dynamicLd.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'headline': title,
        'name': title,
        'description': description,
        'image': ogImage,
        'url': currentUrl,
        'creator': {
          '@type': 'Organization',
          'name': 'Aceso Solutions',
          'url': 'https://acesosolutions.co.ke'
        },
        'provider': {
          '@type': 'Organization',
          'name': caseStudyMeta.client
        },
        'genre': 'Social Media Content',
        'keywords': keywords
      });
    } else if (currentView === 'portfolio') {
      if (!dynamicLd) {
        dynamicLd = document.createElement('script');
        dynamicLd.id = 'dynamic-case-study-ld';
        dynamicLd.type = 'application/ld+json';
        document.head.appendChild(dynamicLd);
      }
      dynamicLd.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'Our Work | Real Campaigns & Tangible Results | Aceso Solutions',
        'description': baseMeta.description,
        'url': 'https://acesosolutions.co.ke/#/our-work',
        'publisher': {
          '@type': 'Organization',
          'name': 'Aceso Solutions',
          'url': 'https://acesosolutions.co.ke'
        }
      });
    } else {
      if (dynamicLd) {
        dynamicLd.remove();
      }
    }
  }, [currentView, selectedCaseStudyId]);

  // Smooth scroll & view navigation handler with browser URL hash sync
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'custom-package' || sectionId === 'pricing-custom') {
      setCurrentView('custom-package');
      setActiveSection('pricing');
      updateUrlHash('/custom-package');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'services' || sectionId.startsWith('service-')) {
      let targetServiceId = 'social';
      if (sectionId.startsWith('service-')) {
        targetServiceId = sectionId.replace('service-', '');
      } else if (selectedServiceId) {
        targetServiceId = selectedServiceId;
      }
      setSelectedServiceId(targetServiceId);
      setCurrentView('services');
      setActiveSection(`service-${targetServiceId}`);
      updateUrlHash(`/services/${targetServiceId}`);
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'industries' || sectionId.startsWith('industry-')) {
      let targetIndId = 'hospitality';
      if (sectionId.startsWith('industry-')) {
        targetIndId = sectionId.replace('industry-', '');
      } else if (selectedIndustryId) {
        targetIndId = selectedIndustryId;
      }
      setSelectedIndustryId(targetIndId);
      setCurrentView('industries');
      setActiveSection(`industry-${targetIndId}`);
      updateUrlHash(`/industries/${targetIndId}`);
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'pricing-web') {
      setCurrentView('custom-package');
      setActiveSection('pricing');
      updateUrlHash('/custom-package');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'pricing' || sectionId === 'pricing-social' || sectionId === 'pricing-seo' || sectionId === 'pricing-ppc') {
      let cat: 'all' | 'social' | 'seo' | 'ppc' = 'social';
      if (sectionId === 'pricing-social') {
        cat = 'social';
      } else if (sectionId === 'pricing-seo') {
        cat = 'seo';
      } else if (sectionId === 'pricing-ppc') {
        cat = 'ppc';
      }
      setPricingCategory(cat);
      setCurrentView('pricing');
      setActiveSection(sectionId);
      updateUrlHash(`/pricing/${cat}`);
      window.scrollTo(0, 0);
      return;
    }

    if (
      sectionId === 'portfolio' || 
      sectionId === 'our-work' || 
      sectionId === 'work' || 
      sectionId === 'portolio' ||
      sectionId.startsWith('our-work/') ||
      sectionId.startsWith('portfolio/')
    ) {
      let targetCsId: string | null = null;
      if (sectionId.startsWith('our-work/')) {
        targetCsId = sectionId.replace('our-work/', '').split('/')[0] || null;
      } else if (sectionId.startsWith('portfolio/')) {
        targetCsId = sectionId.replace('portfolio/', '').split('/')[0] || null;
      }

      if (currentView === 'home' && !targetCsId) {
        const el = document.getElementById('our-work') || document.getElementById('portfolio');
        if (el) {
          const navOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setActiveSection('portfolio');
          updateUrlHash('/our-work');
          return;
        }
      }
      setSelectedCaseStudyId(targetCsId);
      setCurrentView('portfolio');
      setActiveSection('portfolio');
      updateUrlHash(targetCsId ? `/our-work/${targetCsId}` : '/our-work');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'contact') {
      setCurrentView('contact');
      setActiveSection('contact');
      updateUrlHash('/contact');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'free-audit' || sectionId === 'audit-page') {
      setCurrentView('free-audit');
      setActiveSection('audit');
      updateUrlHash('/free-audit');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'privacy-policy') {
      setCurrentView('privacy-policy');
      setActiveSection('privacy-policy');
      updateUrlHash('/privacy-policy');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'terms-of-use') {
      setCurrentView('terms-of-use');
      setActiveSection('terms-of-use');
      updateUrlHash('/terms-of-use');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'home') {
      setCurrentView('home');
      setActiveSection('home');
      updateUrlHash('/');
      window.scrollTo(0, 0);
      return;
    }

    // Navigating to in-page section on home (e.g. solutions, process, faq, audit)
    if (currentView !== 'home') {
      setCurrentView('home');
      updateUrlHash(`/${sectionId}`);
      window.scrollTo(0, 0);
      setTimeout(() => {
        performScroll(sectionId);
      }, 50);
    } else {
      updateUrlHash(`/${sectionId}`);
      performScroll(sectionId);
    }
  };

  const performScroll = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo(0, 0);
      return;
    }
    const targetId = sectionId === 'contact' ? 'audit' : sectionId;
    const element = document.getElementById(targetId) || document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenCustomPackagePage = () => {
    setCurrentView('custom-package');
    setActiveSection('pricing');
    updateUrlHash('/custom-package');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSection('home');
    updateUrlHash('/');
    window.scrollTo(0, 0);
  };

  const handleRequestAudit = () => {
    setCurrentView('free-audit');
    setActiveSection('audit');
    updateUrlHash('/free-audit');
    window.scrollTo(0, 0);
  };

  const handleSelectPackageForAudit = (pkgName: string) => {
    setCurrentView('free-audit');
    setActiveSection('audit');
    updateUrlHash('/free-audit');
    window.scrollTo(0, 0);
  };

  const handleSolutionToAudit = (solutionTitle: string) => {
    setCurrentView('free-audit');
    setActiveSection('audit');
    updateUrlHash('/free-audit');
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentView === 'custom-package' && (
          <CustomPackagePage 
            onBackToHome={handleBackToHome}
            onRequestAudit={handleRequestAudit}
            onNavigate={scrollToSection}
          />
        )}

        {currentView === 'free-audit' && (
          <FreeAuditPage 
            onBackToHome={handleBackToHome}
            onNavigate={scrollToSection}
            onNavigateToPackages={() => scrollToSection('pricing')}
          />
        )}

        {currentView === 'services' && (
          <ServicesPage 
            selectedServiceId={selectedServiceId}
            onSelectService={(id) => {
              setSelectedServiceId(id);
              setActiveSection(`service-${id}`);
              updateUrlHash(`/services/${id}`);
              window.scrollTo(0, 0);
            }}
            onBackToHome={handleBackToHome}
            onRequestAudit={handleRequestAudit}
            onOpenCustomBuilder={handleOpenCustomPackagePage}
            onNavigate={scrollToSection}
          />
        )}

        {currentView === 'industries' && (
          <IndustriesPage 
            selectedIndustryId={selectedIndustryId}
            onSelectIndustry={(id) => {
              setSelectedIndustryId(id);
              setActiveSection(`industry-${id}`);
              updateUrlHash(`/industries/${id}`);
              window.scrollTo(0, 0);
            }}
            onBackToHome={handleBackToHome}
            onRequestAudit={handleRequestAudit}
            onNavigate={scrollToSection}
          />
        )}

        {currentView === 'pricing' && (
          <PricingPage 
            initialCategory={pricingCategory}
            onBackToHome={handleBackToHome}
            onRequestAudit={handleRequestAudit}
            onOpenCustomBuilder={handleOpenCustomPackagePage}
            onNavigate={scrollToSection}
          />
        )}

        {currentView === 'portfolio' && (
          <PortfolioPage 
            onBackToHome={handleBackToHome}
            onRequestAudit={handleRequestAudit}
            onNavigate={scrollToSection}
            initialCaseStudyId={selectedCaseStudyId}
            onCaseStudyChange={(csId) => {
              setSelectedCaseStudyId(csId);
              updateUrlHash(csId ? `/our-work/${csId}` : '/our-work', true);
            }}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage 
            onBackToHome={handleBackToHome}
            onRequestAudit={handleRequestAudit}
            onNavigate={scrollToSection}
          />
        )}

        {currentView === 'privacy-policy' && (
          <PrivacyPolicyPage 
            onBackToHome={handleBackToHome}
            onRequestAudit={handleRequestAudit}
            onNavigate={scrollToSection}
          />
        )}

        {currentView === 'terms-of-use' && (
          <TermsOfUsePage 
            onBackToHome={handleBackToHome}
            onRequestAudit={handleRequestAudit}
            onNavigate={scrollToSection}
          />
        )}

      {currentView === 'home' && (
        <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-blue-600 selection:text-white pb-16 md:pb-0">
          
          {/* Navigation Bar */}
          <Navbar 
            activeSection={activeSection}
            onRequestAudit={handleRequestAudit}
            onNavigate={scrollToSection}
          />

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Hero Section */}
            <Hero 
              onRequestAudit={handleRequestAudit}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
              onNavigate={scrollToSection}
            />

            {/* Brand Logos (Platform Partners Tech Stack) */}
            <BrandLogos />

            {/* How We Work Process */}
            <Process />

            {/* 3D Rotating Services Carousel */}
            <Solutions 
              onSelectSolution={(solution) => setSelectedSolution(solution)}
              onSelectService={(serviceId) => scrollToSection(`service-${serviceId}`)}
              onRequestAudit={handleRequestAudit}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />

            {/* Featured Our Work Showcase */}
            <HomePortfolioSection 
              onRequestAudit={handleRequestAudit}
              onNavigate={scrollToSection}
              onCaseStudyChange={(csId) => {
                setSelectedCaseStudyId(csId);
                updateUrlHash(csId ? `/our-work/${csId}` : '/', true);
              }}
            />

            {/* Scroll Anchors for Audit and Contact */}
            <div id="audit" className="scroll-mt-20" />
            <div id="contact" className="scroll-mt-20" />

            {/* Frequently Asked Questions */}
            <HomeFAQ />
          </main>

          {/* Footer */}
          <Footer 
            onNavigate={scrollToSection}
            onRequestAudit={handleRequestAudit}
          />

          {/* Modals & Drawers */}
          <PackageDetailsModal
            pkg={selectedPackage}
            onClose={() => setSelectedPackage(null)}
            onSelectPackageForAudit={handleSelectPackageForAudit}
          />

          <SolutionDetailsModal
            solution={selectedSolution}
            onClose={() => setSelectedSolution(null)}
            onRequestAuditForSolution={handleSolutionToAudit}
          />

          <LeadDetailsModal
            isOpen={isLeadModalOpen}
            onClose={() => setIsLeadModalOpen(false)}
          />

        </div>
      )}

      {/* Persistent Mobile Bottom Bar for WhatsApp and Quick Audit */}
      <MobileBottomBar onRequestAudit={handleRequestAudit} />
    </>
  );
}
