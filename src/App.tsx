import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandLogos } from './components/BrandLogos';
import { Solutions } from './components/Solutions';
import { Packages } from './components/Packages';
import { Process } from './components/Process';
import { AuditSection } from './components/AuditSection';
import { Footer } from './components/Footer';
import { CustomPackagePage } from './components/CustomPackagePage';
import { FreeAuditPage } from './components/FreeAuditPage';
import { ServicesPage } from './components/ServicesPage';
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
  }
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'custom-package' | 'free-audit' | 'services'>('home');
  const [activeSection, setActiveSection] = useState<string>('home');
  
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

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'services') {
      setCurrentView('services');
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
    const element = document.getElementById(sectionId);
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

  // Scroll spy to update active navbar item
  useEffect(() => {
    if (currentView !== 'home') return;

    const handleScroll = () => {
      const sections = ['services', 'packages', 'how-it-works', 'audit'];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleOpenCustomPackagePage = () => {
    setCurrentView('custom-package');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
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

  if (currentView === 'custom-package') {
    return (
      <CustomPackagePage 
        onBackToHome={handleBackToHome}
        onRequestAudit={handleRequestAudit}
        onNavigate={scrollToSection}
      />
    );
  }

  if (currentView === 'free-audit') {
    return (
      <FreeAuditPage 
        onBackToHome={handleBackToHome}
        onNavigateToPackages={() => {
          setCurrentView('home');
          setTimeout(() => performScroll('packages'), 100);
        }}
      />
    );
  }

  if (currentView === 'services') {
    return (
      <ServicesPage 
        onBackToHome={handleBackToHome}
        onRequestAudit={handleRequestAudit}
        onNavigate={(sectionId) => {
          if (sectionId === 'services') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (sectionId === 'home') {
            handleBackToHome();
          } else {
            setCurrentView('home');
            setTimeout(() => performScroll(sectionId), 100);
          }
        }}
      />
    );
  }

  return (
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
          onViewPackages={() => scrollToSection('packages')}
          onOpenLeadModal={() => setIsLeadModalOpen(true)}
        />

        {/* Brand Logos */}
        <BrandLogos />

        {/* Core Solutions (3 Pillars) */}
        <Solutions 
          onSelectSolution={(sol) => setSelectedSolution(sol)}
        />

        {/* Packages & Pricing */}
        <Packages 
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onOpenCustomBuilder={handleOpenCustomPackagePage}
        />

        {/* 5-Step Process */}
        <Process />

        {/* Dark Navy Growth Audit Section */}
        <AuditSection />
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
  );
}
