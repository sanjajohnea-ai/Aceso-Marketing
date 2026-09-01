import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandLogos } from './components/BrandLogos';
import { Solutions } from './components/Solutions';
import { Process } from './components/Process';
import { HomeFAQ } from './components/HomeFAQ';
import { AuditSection } from './components/AuditSection';
import { Footer } from './components/Footer';
import { CustomPackagePage } from './components/CustomPackagePage';
import { FreeAuditPage } from './components/FreeAuditPage';
import { ServicesPage } from './components/ServicesPage';
import { IndustriesPage } from './components/IndustriesPage';
import { PricingPage } from './components/PricingPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/TermsOfUsePage';
import { MobileBottomBar } from './components/MobileBottomBar';
import { PackageDetailsModal } from './components/PackageDetailsModal';
import { SolutionDetailsModal } from './components/SolutionDetailsModal';
import { LeadDetailsModal } from './components/LeadDetailsModal';
import { PackageItem, SolutionItem } from './types';

// SEO Page Metadata Configuration
const pageMetadata = {
  home: {
    title: 'Aceso Solutions | Digital Marketing, Ads & Automation for SMEs',
    description: 'Digital solutions that drive real growth for small and medium-sized businesses. Essential, Growth & Business packages with social media, paid ads, and automation.',
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

// Helper to parse current view and state from URL (supports pathnames and hash fallbacks)
type PageView = 'home' | 'custom-package' | 'free-audit' | 'services' | 'industries' | 'pricing' | 'contact' | 'privacy-policy' | 'terms-of-use';

const parseRouteFromLocation = (): {
  view: PageView;
  section: string;
  pricingCategory: 'all' | 'web' | 'social' | 'seo' | 'ppc';
  industryId?: string;
  serviceId?: string;
} => {
  if (typeof window === 'undefined') {
    return { view: 'home', section: 'home', pricingCategory: 'all', industryId: 'hospitality', serviceId: 'social' };
  }

  const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const rawHash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

  // 1. Check direct pathnames for Services
  if (rawPath === '/services' || rawPath.startsWith('/services/') || rawHash === 'services' || rawHash.startsWith('service-')) {
    let srvId = 'social';
    if (rawPath.startsWith('/services/')) {
      srvId = rawPath.replace('/services/', '');
    } else if (rawHash.startsWith('service-')) {
      srvId = rawHash.replace('service-', '');
    }
    return { view: 'services', section: `service-${srvId}`, pricingCategory: 'all', serviceId: srvId };
  }
  if (rawPath === '/industries' || rawPath.startsWith('/industries/') || rawHash === 'industries' || rawHash.startsWith('industry-')) {
    let indId = 'hospitality';
    if (rawPath.startsWith('/industries/')) {
      indId = rawPath.replace('/industries/', '');
    } else if (rawHash.startsWith('industry-')) {
      indId = rawHash.replace('industry-', '');
    }
    return { view: 'industries', section: `industry-${indId}`, pricingCategory: 'all', industryId: indId };
  }
  if (rawPath === '/pricing' || rawPath.startsWith('/pricing/') || rawHash.startsWith('pricing')) {
    let cat: 'all' | 'web' | 'social' | 'seo' | 'ppc' = 'social';
    if (rawPath === '/pricing/web' || rawHash === 'pricing-web') cat = 'web';
    else if (rawPath === '/pricing/social' || rawHash === 'pricing-social') cat = 'social';
    else if (rawPath === '/pricing/seo' || rawHash === 'pricing-seo') cat = 'seo';
    else if (rawPath === '/pricing/ppc' || rawHash === 'pricing-ppc') cat = 'ppc';
    return { view: 'pricing', section: 'pricing', pricingCategory: cat };
  }
  if (rawPath === '/contact' || rawHash === 'contact') {
    return { view: 'contact', section: 'contact', pricingCategory: 'all' };
  }
  if (rawPath === '/free-audit' || rawHash === 'free-audit' || rawHash === 'audit') {
    return { view: 'free-audit', section: 'audit', pricingCategory: 'all' };
  }
  if (rawPath === '/custom-package' || rawHash === 'custom-package' || rawHash === 'pricing-custom') {
    return { view: 'custom-package', section: 'pricing', pricingCategory: 'all' };
  }
  if (rawPath === '/privacy-policy' || rawHash === 'privacy-policy') {
    return { view: 'privacy-policy', section: 'privacy-policy', pricingCategory: 'all' };
  }
  if (rawPath === '/terms-of-use' || rawHash === 'terms-of-use') {
    return { view: 'terms-of-use', section: 'terms-of-use', pricingCategory: 'all' };
  }

  // Home section anchors (e.g. /#solutions, /#process, /#faq)
  if (rawHash) {
    return { view: 'home', section: rawHash, pricingCategory: 'all' };
  }

  return { view: 'home', section: 'home', pricingCategory: 'all' };
};

export default function App() {
  const initialRoute = parseRouteFromLocation();
  const [currentView, setCurrentView] = useState<PageView>(initialRoute.view);
  const [activeSection, setActiveSection] = useState<string>(initialRoute.section);
  const [pricingCategory, setPricingCategory] = useState<'all' | 'web' | 'social' | 'seo' | 'ppc'>(initialRoute.pricingCategory);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(initialRoute.industryId || 'hospitality');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialRoute.serviceId || 'social');
  
  // Modal states
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // Sync URL when navigating to a view/path
  const updateUrlPath = (targetPath: string, replace = false) => {
    if (typeof window === 'undefined') return;
    const currentFull = window.location.pathname + (window.location.hash ? window.location.hash : '');
    if (currentFull !== targetPath) {
      if (replace) {
        window.history.replaceState({ path: targetPath }, '', targetPath);
      } else {
        window.history.pushState({ path: targetPath }, '', targetPath);
      }
    }
  };

  // Listen to browser Back and Forward navigation buttons
  useEffect(() => {
    const handlePopState = () => {
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

      if (route.view === 'home' && route.section && route.section !== 'home') {
        setTimeout(() => {
          performScroll(route.section);
        }, 50);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initial scroll if mounted with hash on homepage
  useEffect(() => {
    if (initialRoute.view === 'home' && initialRoute.section && initialRoute.section !== 'home') {
      setTimeout(() => {
        performScroll(initialRoute.section);
      }, 100);
    }
  }, []);

  // Dynamic SEO meta tags update based on current page/view
  useEffect(() => {
    const meta = pageMetadata[currentView] || pageMetadata.home;
    document.title = meta.title;

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
    setMetaTag('meta[name="title"]', 'name', 'title', meta.title);
    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords);

    // Update OpenGraph tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);

    // Update Twitter Card tags
    setMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', meta.title);
    setMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', meta.description);
  }, [currentView]);

  // Smooth scroll & view navigation handler with browser URL sync
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'custom-package' || sectionId === 'pricing-custom') {
      setCurrentView('custom-package');
      setActiveSection('pricing');
      updateUrlPath('/custom-package');
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
      updateUrlPath(`/services/${targetServiceId}`);
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
      updateUrlPath(`/industries/${targetIndId}`);
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'pricing' || sectionId === 'pricing-web' || sectionId === 'pricing-social' || sectionId === 'pricing-seo' || sectionId === 'pricing-ppc') {
      if (sectionId === 'pricing-web') {
        setPricingCategory('web');
      } else if (sectionId === 'pricing-social') {
        setPricingCategory('social');
      } else if (sectionId === 'pricing-seo') {
        setPricingCategory('seo');
      } else if (sectionId === 'pricing-ppc') {
        setPricingCategory('ppc');
      } else {
        setPricingCategory('social');
      }
      setCurrentView('pricing');
      setActiveSection(sectionId);
      updateUrlPath('/pricing');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'contact') {
      setCurrentView('contact');
      setActiveSection('contact');
      updateUrlPath('/contact');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'free-audit' || sectionId === 'audit-page') {
      setCurrentView('free-audit');
      setActiveSection('audit');
      updateUrlPath('/free-audit');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'privacy-policy') {
      setCurrentView('privacy-policy');
      setActiveSection('privacy-policy');
      updateUrlPath('/privacy-policy');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'terms-of-use') {
      setCurrentView('terms-of-use');
      setActiveSection('terms-of-use');
      updateUrlPath('/terms-of-use');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'home') {
      setCurrentView('home');
      setActiveSection('home');
      updateUrlPath('/');
      window.scrollTo(0, 0);
      return;
    }

    // Navigating to in-page section on home (e.g. solutions, process, faq, audit)
    if (currentView !== 'home') {
      setCurrentView('home');
      updateUrlPath(`/#${sectionId}`);
      window.scrollTo(0, 0);
      setTimeout(() => {
        performScroll(sectionId);
      }, 50);
    } else {
      updateUrlPath(`/#${sectionId}`);
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
    updateUrlPath('/custom-package');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSection('home');
    updateUrlPath('/');
    window.scrollTo(0, 0);
  };

  const handleRequestAudit = () => {
    setCurrentView('free-audit');
    setActiveSection('audit');
    updateUrlPath('/free-audit');
    window.scrollTo(0, 0);
  };

  const handleSelectPackageForAudit = (pkgName: string) => {
    setCurrentView('free-audit');
    setActiveSection('audit');
    updateUrlPath('/free-audit');
    window.scrollTo(0, 0);
  };

  const handleSolutionToAudit = (solutionTitle: string) => {
    setCurrentView('free-audit');
    setActiveSection('audit');
    updateUrlPath('/free-audit');
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
            updateUrlPath(`/services/${id}`);
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
            updateUrlPath(`/industries/${id}`);
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
            />

            {/* Core Solutions (3 Pillars) - White Background */}
            <Solutions 
              onSelectSolution={(sol) => setSelectedSolution(sol)}
              onViewAllServices={() => scrollToSection('services')}
            />

            {/* Brand Logos (Moved below Core Solutions & Animated) */}
            <BrandLogos />

            {/* 5-Step Process */}
            <Process />

            {/* Dark Navy Growth Audit / Contact Section */}
            <AuditSection />

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
