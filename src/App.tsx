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
    description: 'Purpose-built digital customer acquisition and revenue automation systems for Real Estate, Healthcare, Law, E-commerce, Hospitality, Trades, Tech & Education.',
    keywords: 'hospitality marketing Kenya, hotel direct bookings Nairobi, medical clinic marketing Kenya, healthcare patient acquisition Nairobi, law firm marketing Kenya, legal SEO Nairobi, real estate digital marketing Kenya, property lead generation Nairobi, ecommerce marketing Kenya, Shopify ads Nairobi, home services marketing, contractor lead generation, B2B tech SaaS marketing Kenya, school enrollment marketing Nairobi, industry specific digital marketing, SME vertical growth agency Kenya'
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
  }
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'custom-package' | 'free-audit' | 'services' | 'industries' | 'pricing' | 'contact'>('home');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [pricingCategory, setPricingCategory] = useState<'all' | 'web' | 'social' | 'seo' | 'ppc'>('all');
  
  // Modal states
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

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

  // Smooth scroll & view navigation handler
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'custom-package' || sectionId === 'pricing-custom') {
      setCurrentView('custom-package');
      setActiveSection('pricing');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'services') {
      setCurrentView('services');
      setActiveSection('services');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'industries') {
      setCurrentView('industries');
      setActiveSection('industries');
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
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'contact') {
      setCurrentView('contact');
      setActiveSection('contact');
      window.scrollTo(0, 0);
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      window.scrollTo(0, 0);
      setTimeout(() => {
        performScroll(sectionId);
      }, 50);
    } else {
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
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSection('home');
    window.scrollTo(0, 0);
  };

  const handleRequestAudit = () => {
    setCurrentView('free-audit');
    window.scrollTo(0, 0);
  };

  const handleSelectPackageForAudit = (pkgName: string) => {
    setCurrentView('free-audit');
    window.scrollTo(0, 0);
  };

  const handleSolutionToAudit = (solutionTitle: string) => {
    setCurrentView('free-audit');
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
          onBackToHome={handleBackToHome}
          onRequestAudit={handleRequestAudit}
          onOpenCustomBuilder={handleOpenCustomPackagePage}
          onNavigate={(sectionId) => {
            if (sectionId === 'services') {
              window.scrollTo(0, 0);
            } else {
              scrollToSection(sectionId);
            }
          }}
        />
      )}

      {currentView === 'industries' && (
        <IndustriesPage 
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

      {currentView === 'home' && (
        <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-blue-600 selection:text-white">
          
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
    </>
  );
}
