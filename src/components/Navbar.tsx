import React, { useState, useRef, useEffect } from 'react';
import { AcesoLogo } from './AcesoLogo';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  Home,
  Layers,
  Sparkles,
  Building2,
  Tag,
  Mail,
  Phone,
  MessageCircle,
  MapPin
} from 'lucide-react';

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

export const industriesNavItems = [
  {
    name: 'Hotels & Resorts',
    id: 'hospitality',
    navTarget: 'industry-hospitality'
  },
  {
    name: 'Tours & Travel',
    id: 'tours-travel',
    navTarget: 'industry-tours-travel'
  },
  {
    name: 'Dental Clinics',
    id: 'dental-clinics',
    navTarget: 'industry-dental-clinics'
  },
  {
    name: 'Vet Clinics',
    id: 'vet-clinics',
    navTarget: 'industry-vet-clinics'
  },
  {
    name: 'Professional & Legal Services',
    id: 'professional-services',
    navTarget: 'industry-professional-services'
  },
  {
    name: 'Education & Training',
    id: 'education',
    navTarget: 'industry-education'
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
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileIndustriesExpanded, setMobileIndustriesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);

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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock background body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key or desktop viewport resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const handleServiceSubClick = (navTarget: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(navTarget);
  };

  const handleIndustrySubClick = (navTarget: string) => {
    setMobileMenuOpen(false);
    onNavigate(navTarget);
  };

  const isServiceActive = activeSection === 'services' || activeSection.startsWith('service-');
  const isIndustryActive = activeSection === 'industries' || activeSection.startsWith('industry-');
  const isPricingActive = activeSection === 'pricing' || activeSection.startsWith('pricing-');

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

            {/* Our Work */}
            <button
              onClick={() => onNavigate('portfolio')}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                activeSection === 'portfolio' || activeSection === 'our-work'
                  ? 'text-[#C25E00] font-bold'
                  : 'text-slate-700 hover:text-[#DE8E53] hover:bg-amber-50/50'
              }`}
            >
              Our Work
              {(activeSection === 'portfolio' || activeSection === 'our-work') && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#E29457] to-[#C25E00] rounded-full" />
              )}
            </button>

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
            className="md:hidden relative z-50 bg-[#FAF9F6] border-b border-slate-200 px-4 pt-3 pb-6 space-y-3.5 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col space-y-1">
              {/* Home */}
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3.5 py-3 min-h-[46px] text-sm font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  activeSection === 'home'
                    ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Home className={`w-4 h-4 ${activeSection === 'home' ? 'text-[#C25E00]' : 'text-slate-500'}`} />
                  <span>Home</span>
                </div>
              </button>

              {/* Our Work */}
              <button
                onClick={() => {
                  onNavigate('portfolio');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3.5 py-3 min-h-[46px] text-sm font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  activeSection === 'portfolio' || activeSection === 'our-work'
                    ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Layers className={`w-4 h-4 ${(activeSection === 'portfolio' || activeSection === 'our-work') ? 'text-[#C25E00]' : 'text-slate-500'}`} />
                  <span>Our Work</span>
                </div>
              </button>

              {/* Services Expandable Section */}
              <div className="rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 min-h-[46px] text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                    isServiceActive
                      ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                      : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                  }`}
                  aria-expanded={mobileServicesExpanded}
                >
                  <span className="flex items-center gap-3">
                    <Sparkles className={`w-4 h-4 ${isServiceActive ? 'text-[#C25E00]' : 'text-slate-500'}`} />
                    <span>Services</span>
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
                          className={`w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm font-medium rounded-lg transition-colors cursor-pointer block ${
                            isCurrent 
                              ? 'bg-amber-50 text-[#C25E00] font-bold'
                              : 'text-slate-700 hover:text-[#C25E00] hover:bg-slate-50 active:bg-slate-100'
                          }`}
                        >
                          {srv.name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Industries Expandable Section */}
              <div className="rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileIndustriesExpanded(!mobileIndustriesExpanded)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 min-h-[46px] text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                    isIndustryActive
                      ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                      : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                  }`}
                  aria-expanded={mobileIndustriesExpanded}
                >
                  <span className="flex items-center gap-3">
                    <Building2 className={`w-4 h-4 ${isIndustryActive ? 'text-[#C25E00]' : 'text-slate-500'}`} />
                    <span>Industries</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${mobileIndustriesExpanded ? 'rotate-180 text-[#C25E00]' : ''}`} />
                </button>

                {mobileIndustriesExpanded && (
                  <div className="mt-1 pl-2 pr-1 py-1 space-y-1 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                    {industriesNavItems.map((ind) => {
                      const isCurrent = activeSection === ind.navTarget;
                      return (
                        <button
                          key={ind.id}
                          onClick={() => handleIndustrySubClick(ind.navTarget)}
                          className={`w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm font-medium rounded-lg transition-colors cursor-pointer block ${
                            isCurrent 
                              ? 'bg-amber-50 text-[#C25E00] font-bold'
                              : 'text-slate-700 hover:text-[#C25E00] hover:bg-slate-50 active:bg-slate-100'
                          }`}
                        >
                          {ind.name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Pricing & Plans */}
              <button
                onClick={() => {
                  onNavigate('pricing');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3.5 py-3 min-h-[46px] text-sm font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  isPricingActive
                    ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Tag className={`w-4 h-4 ${isPricingActive ? 'text-[#C25E00]' : 'text-slate-500'}`} />
                  <span>Pricing &amp; Plans</span>
                </div>
              </button>

              {/* Contact Us */}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3.5 py-3 min-h-[46px] text-sm font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                  activeSection === 'contact'
                    ? 'bg-amber-500/15 text-[#C25E00] font-bold'
                    : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Mail className={`w-4 h-4 ${activeSection === 'contact' ? 'text-[#C25E00]' : 'text-slate-500'}`} />
                  <span>Contact Us</span>
                </div>
              </button>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
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

            {/* Quick Contact & Direct Action Strip in Mobile Menu */}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <a
                  href="tel:+254758544241"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C25E00]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/254758544241?text=Hi%20Aceso%20Solutions,%20I'd%20like%20to%20inquire%20about%20your%20digital%20growth%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#00a859] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>Nairobi, Kenya • Mon – Fri 8am – 6pm EAT</span>
              </div>
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
