import React, { useState, useRef, useEffect } from 'react';
import { AcesoLogo } from './AcesoLogo';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { industriesData } from './IndustriesPage';

interface NavbarProps {
  activeSection: string;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
  ctaLabel?: string;
}

export const servicesNavItems = [
  {
    name: 'Social Media Marketing',
    id: 'social',
    navTarget: 'service-social'
  },
  {
    name: 'Google & Meta Ads (PPC)',
    id: 'ppc',
    navTarget: 'service-ppc'
  },
  {
    name: 'Web Design & Development',
    id: 'webdesign',
    navTarget: 'service-webdesign'
  },
  {
    name: 'Search Engine Optimization (SEO)',
    id: 'seo',
    navTarget: 'service-seo'
  },
  {
    name: 'WhatsApp Marketing & Automations',
    id: 'whatsapp',
    navTarget: 'service-whatsapp'
  }
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onRequestAudit,
  onNavigate,
  ctaLabel = 'Get Free Growth Audit',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobilePricingExpanded, setMobilePricingExpanded] = useState(false);
  const [mobileIndustriesExpanded, setMobileIndustriesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const pricingDropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll position for dynamic navbar box-shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (pricingDropdownRef.current && !pricingDropdownRef.current.contains(event.target as Node)) {
        setPricingDropdownOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target as Node)) {
        setIndustriesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceSubClick = (navTarget: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(navTarget);
  };

  const handlePricingSubClick = (subId: string) => {
    setPricingDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(subId);
  };

  const handleIndustrySubClick = (industryId: string) => {
    setIndustriesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(`industry-${industryId}`);
  };

  const isServiceActive = activeSection === 'services' || activeSection.startsWith('service-');
  const isIndustryActive = activeSection === 'industries' || activeSection.startsWith('industry-');

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-900/6' 
            : 'bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-slate-200/60 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <AcesoLogo onClick={() => onNavigate('home')} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Home */}
            <button
              onClick={() => onNavigate('home')}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                activeSection === 'home'
                  ? 'text-[#C25E00] font-bold'
                  : 'text-slate-700 hover:text-[#DE8E53] hover:bg-amber-50/50'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#E29457] to-[#C25E00] rounded-full" />
              )}
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setIndustriesDropdownOpen(false);
                  setPricingDropdownOpen(false);
                }}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer inline-flex items-center gap-1.5 ${
                  isServiceActive
                    ? 'text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:text-[#DE8E53] hover:bg-amber-50/50'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#C25E00]' : 'text-slate-400'}`} />
                {isServiceActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#E29457] to-[#C25E00] rounded-full" />
                )}
              </button>

              {/* Services Dropdown Menu - D-EDGE Midnight Obsidian Navy */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-72 shadow-2xl z-[100] animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden bg-[#0B132B] border border-[#1C2C54] rounded-xl">
                  <div className="divide-y divide-slate-800/80">
                    {servicesNavItems.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => handleServiceSubClick(srv.navTarget)}
                        className="w-full text-left px-5 py-3 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-[#121E3E] transition-colors cursor-pointer block"
                      >
                        <span className="truncate">{srv.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" ref={industriesDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setIndustriesDropdownOpen(!industriesDropdownOpen);
                  setServicesDropdownOpen(false);
                  setPricingDropdownOpen(false);
                }}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer inline-flex items-center gap-1.5 ${
                  isIndustryActive
                    ? 'text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:text-[#DE8E53] hover:bg-amber-50/50'
                }`}
                aria-expanded={industriesDropdownOpen}
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesDropdownOpen ? 'rotate-180 text-[#C25E00]' : 'text-slate-400'}`} />
                {isIndustryActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#E29457] to-[#C25E00] rounded-full" />
                )}
              </button>

              {/* Industries Dropdown Menu */}
              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-72 shadow-2xl z-[100] animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden bg-[#0B132B] border border-[#1C2C54] rounded-xl">
                  <div className="divide-y divide-slate-800/80">
                    {industriesData.map((ind) => (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => handleIndustrySubClick(ind.id)}
                        className="w-full text-left px-5 py-3 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-[#121E3E] transition-colors cursor-pointer block"
                      >
                        <span className="truncate">{ind.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing with Dropdown */}
            <div className="relative" ref={pricingDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setPricingDropdownOpen(!pricingDropdownOpen);
                  setServicesDropdownOpen(false);
                  setIndustriesDropdownOpen(false);
                }}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer inline-flex items-center gap-1.5 ${
                  activeSection.startsWith('pricing')
                    ? 'text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:text-[#DE8E53] hover:bg-amber-50/50'
                }`}
                aria-expanded={pricingDropdownOpen}
              >
                <span>Pricing</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${pricingDropdownOpen ? 'rotate-180 text-[#C25E00]' : 'text-slate-400'}`} />
                {activeSection.startsWith('pricing') && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#E29457] to-[#C25E00] rounded-full" />
                )}
              </button>

              {/* Pricing Dropdown Menu */}
              {pricingDropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-64 shadow-2xl z-[100] animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden bg-[#0B132B] border border-[#1C2C54] rounded-xl">
                  <div className="divide-y divide-slate-800/80">
                    <button
                      type="button"
                      onClick={() => handlePricingSubClick('pricing-seo')}
                      className="w-full text-left px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-[#121E3E] transition-colors cursor-pointer block"
                    >
                      SEO Pricing
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePricingSubClick('pricing-social')}
                      className="w-full text-left px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-[#121E3E] transition-colors cursor-pointer block"
                    >
                      Social Media Pricing
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePricingSubClick('pricing-ppc')}
                      className="w-full text-left px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-[#121E3E] transition-colors cursor-pointer block"
                    >
                      Google Ads &amp; PPC Pricing
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePricingSubClick('pricing-custom')}
                      className="w-full text-left px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-[#121E3E] transition-colors cursor-pointer block"
                    >
                      Custom Package Pricing
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <button
              onClick={() => onNavigate('contact')}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                activeSection === 'contact'
                  ? 'text-[#C25E00] font-bold'
                  : 'text-slate-700 hover:text-[#DE8E53] hover:bg-amber-50/50'
              }`}
            >
              Contact Us
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#E29457] to-[#C25E00] rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-request-audit-btn"
              onClick={onRequestAudit}
              className="bg-gradient-to-r from-[#0B132B] to-[#16223D] hover:from-[#121E3E] hover:to-[#223354] text-white border border-[#DE8E53]/40 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-amber-500/10 active:scale-[0.98] cursor-pointer flex items-center gap-2"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="w-4 h-4 text-[#DE8E53]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 min-w-[44px] min-h-[44px] p-2.5 rounded-xl hover:bg-slate-100/80 active:bg-slate-200/70 transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Touch Backdrop */}
          <div 
            className="md:hidden fixed inset-0 top-20 bg-slate-950/40 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Content */}
          <div 
            className="md:hidden relative z-50 bg-[#FAF9F6] border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col space-y-1">
              {/* Home */}
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 min-h-[44px] text-sm font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  activeSection === 'home'
                    ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                }`}
              >
                <span>Home</span>
                {activeSection === 'home' && (
                  <span className="w-2 h-2 rounded-full bg-[#C25E00]" />
                )}
              </button>

              {/* Services Expandable Section */}
              <div className="rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className={`w-full flex items-center justify-between px-4 py-3 min-h-[44px] text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                    isServiceActive
                      ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                      : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>Services</span>
                    {isServiceActive && (
                      <span className="text-[10px] bg-[#C25E00] text-white font-bold px-1.5 py-0.5 rounded">Active</span>
                    )}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${mobileServicesExpanded ? 'rotate-180 text-[#C25E00]' : ''}`} />
                </button>

                {mobileServicesExpanded && (
                  <div className="mt-1 pl-2 pr-1 py-1 space-y-1 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                    {servicesNavItems.map((srv) => {
                      const isCurrent = activeSection === srv.navTarget;
                      return (
                        <button
                          key={srv.id}
                          onClick={() => handleServiceSubClick(srv.navTarget)}
                          className={`w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                            isCurrent 
                              ? 'bg-amber-50 text-[#C25E00] font-bold'
                              : 'text-slate-700 hover:text-[#C25E00] hover:bg-slate-50 active:bg-slate-100'
                          }`}
                        >
                          <span>{srv.name}</span>
                          {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#C25E00]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Industries Accordion Dropdown Section */}
              <div className="rounded-xl overflow-hidden border border-slate-200/60 bg-white/60">
                <button
                  type="button"
                  id="mobile-industries-button"
                  aria-expanded={mobileIndustriesExpanded}
                  aria-controls="mobile-industries-menu"
                  onClick={() => setMobileIndustriesExpanded(!mobileIndustriesExpanded)}
                  className={`w-full flex items-center justify-between px-4 py-3 min-h-[44px] text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                    isIndustryActive
                      ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                      : 'text-slate-800 hover:bg-slate-100 active:bg-slate-200/60'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">🏢</span>
                    <span>Industries</span>
                    {isIndustryActive && (
                      <span className="text-[10px] bg-[#C25E00] text-white font-bold px-1.5 py-0.5 rounded shadow-2xs">
                        Active
                      </span>
                    )}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <span>{industriesData.length} sectors</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileIndustriesExpanded ? 'rotate-180 text-[#C25E00]' : ''}`} />
                  </div>
                </button>

                {mobileIndustriesExpanded && (
                  <div 
                    id="mobile-industries-menu"
                    role="region"
                    aria-labelledby="mobile-industries-button"
                    className="p-2 space-y-1 bg-slate-50/90 rounded-b-xl border-t border-slate-200/80 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    {/* All Industries Overview option */}
                    <button
                      onClick={() => {
                        onNavigate('industries');
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 min-h-[42px] text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-between border ${
                        activeSection === 'industries'
                          ? 'bg-amber-100/70 border-amber-300 text-[#C25E00]'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-amber-50 hover:text-[#C25E00]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>✨</span>
                        <span>View All Industries Overview</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>

                    {/* Individual Industry Sub-pages */}
                    <div className="pt-1 space-y-1">
                      {industriesData.map((ind) => {
                        const isCurrent = activeSection === `industry-${ind.id}`;
                        return (
                          <button
                            key={ind.id}
                            onClick={() => handleIndustrySubClick(ind.id)}
                            className={`w-full text-left px-3 py-2.5 min-h-[44px] text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                              isCurrent
                                ? 'bg-amber-500/15 text-[#C25E00] font-bold border border-[#DE8E53]/40'
                                : 'text-slate-700 hover:text-[#C25E00] hover:bg-white active:bg-slate-100'
                            }`}
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="text-base shrink-0">{ind.iconEmoji}</span>
                              <span className="truncate">{ind.name}</span>
                            </span>
                            {isCurrent ? (
                              <span className="w-2 h-2 rounded-full bg-[#C25E00] shrink-0" />
                            ) : (
                              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider shrink-0">
                                {ind.category}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Expandable Section */}
              <div className="rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobilePricingExpanded(!mobilePricingExpanded)}
                  className={`w-full flex items-center justify-between px-4 py-3 min-h-[44px] text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                    activeSection.startsWith('pricing')
                      ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                      : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>Pricing</span>
                    {activeSection.startsWith('pricing') && (
                      <span className="text-[10px] bg-[#C25E00] text-white font-bold px-1.5 py-0.5 rounded">Active</span>
                    )}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${mobilePricingExpanded ? 'rotate-180 text-[#C25E00]' : ''}`} />
                </button>

                {mobilePricingExpanded && (
                  <div className="mt-1 pl-2 pr-1 py-1 space-y-1 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                    <button
                      onClick={() => handlePricingSubClick('pricing-seo')}
                      className="w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm font-medium text-slate-700 hover:text-[#C25E00] hover:bg-slate-50 active:bg-slate-100 rounded-lg transition-colors cursor-pointer block"
                    >
                      SEO Pricing
                    </button>
                    <button
                      onClick={() => handlePricingSubClick('pricing-social')}
                      className="w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm font-medium text-slate-700 hover:text-[#C25E00] hover:bg-slate-50 active:bg-slate-100 rounded-lg transition-colors cursor-pointer block"
                    >
                      Social Media Pricing
                    </button>
                    <button
                      onClick={() => handlePricingSubClick('pricing-ppc')}
                      className="w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm font-medium text-slate-700 hover:text-[#C25E00] hover:bg-slate-50 active:bg-slate-100 rounded-lg transition-colors cursor-pointer block"
                    >
                      Google Ads &amp; PPC Pricing
                    </button>
                    <button
                      onClick={() => handlePricingSubClick('pricing-web')}
                      className="w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm font-medium text-slate-700 hover:text-[#C25E00] hover:bg-slate-50 active:bg-slate-100 rounded-lg transition-colors cursor-pointer block"
                    >
                      Web Design Pricing
                    </button>
                    <button
                      onClick={() => handlePricingSubClick('pricing-custom')}
                      className="w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm font-medium text-slate-700 hover:text-[#C25E00] hover:bg-slate-50 active:bg-slate-100 rounded-lg transition-colors cursor-pointer block"
                    >
                      Custom Package Builder
                    </button>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 min-h-[44px] text-sm font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  activeSection === 'contact'
                    ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                }`}
              >
                <span>Contact Us</span>
                {activeSection === 'contact' && (
                  <span className="w-2 h-2 rounded-full bg-[#C25E00]" />
                )}
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <button
                onClick={() => {
                  onRequestAudit();
                  setMobileMenuOpen(false);
                }}
                className="w-full min-h-[48px] py-3.5 bg-[#0B132B] hover:bg-[#16223D] active:bg-[#070D1E] text-white border border-[#DE8E53]/40 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-[0.99]"
              >
                <span>Request Free Growth Audit</span>
                <ArrowRight className="w-4 h-4 text-[#DE8E53]" />
              </button>
            </div>
          </div>
        </>
      )}
      </header>
      {/* Structural layout spacer preserving exact document flow under fixed header */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />
    </>
  );
};
