import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
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
    description: 'Digital solutions that drive real growth for small and medium-sized businesses. Essential, Growth & Business packages with social media, paid ads, and automation.'
  },
  'custom-package': {
    title: 'Custom Package Builder | Aceso Solutions',
    description: 'Build your custom digital marketing package with Aceso Solutions. Select social media management, Meta & TikTok ads, web design, SEO, and WhatsApp automation.'
  },
  'free-audit': {
    title: 'Free Digital Growth Audit | Aceso Solutions',
    description: 'Request a free digital marketing and customer acquisition audit for your business. Uncover quick wins, fix funnel leaks, and accelerate revenue.'
  },
  services: {
    title: 'Digital Marketing & Growth Services | Aceso Solutions',
    description: 'Comprehensive digital solutions for SMEs: Customer Acquisition, Retention & Reactivation, and Revenue Automation systems.'
  },
  industries: {
    title: 'Industries We Work With | Aceso Solutions',
    description: 'Purpose-built digital customer acquisition and revenue automation systems for Real Estate, Healthcare, Law, E-commerce, Hospitality, Trades, Tech & Education.'
  },
  pricing: {
    title: 'Transparent Pricing & Plans | Aceso Solutions',
    description: 'Transparent pricing for Web Design, Social Media Marketing, SEO, and PPC Advertising designed for small and growing enterprises.'
  },
  contact: {
    title: 'Contact Us | Aceso Solutions',
    description: 'Get in touch with Aceso Solutions. Discuss your digital marketing, SEO, paid ads, web design, and automation goals with our growth strategy team.'
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

    // Update meta description tag
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }

    // Update OpenGraph Title & Description
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', meta.title);
    }
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', meta.description);
    }
  }, [currentView]);

  // Smooth scroll & view navigation handler
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'custom-package' || sectionId === 'pricing-custom') {
      setCurrentView('custom-package');
      setActiveSection('pricing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'services') {
      setCurrentView('services');
      setActiveSection('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'industries') {
      setCurrentView('industries');
      setActiveSection('industries');
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'contact') {
      setCurrentView('contact');
      setActiveSection('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        performScroll(sectionId);
      }, 100);
    } else {
      performScroll(sectionId);
    }
  };

  const performScroll = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestAudit = () => {
    setCurrentView('free-audit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackageForAudit = (pkgName: string) => {
    setCurrentView('free-audit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSolutionToAudit = (solutionTitle: string) => {
    setCurrentView('free-audit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <Analytics />
    </>
  );
}
