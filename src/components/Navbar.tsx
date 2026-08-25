import React, { useState, useRef, useEffect } from 'react';
import { AcesoLogo } from './AcesoLogo';
import { Menu, X, ArrowRight, ChevronDown, Share2, Search, TrendingUp } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
  ctaLabel?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onRequestAudit,
  onNavigate,
  ctaLabel = 'Get Free Growth Audit',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [mobilePricingExpanded, setMobilePricingExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const pricingSubmenuItems = [
    {
      name: 'Social Media Marketing Pricing',
      id: 'pricing-social',
      category: 'social',
      icon: Share2,
      desc: 'Content calendars, Reels, and community growth packages',
    },
    {
      name: 'SEO Pricing',
      id: 'pricing-seo',
      category: 'seo',
      icon: Search,
      desc: 'Google Maps 3-Pack, ranking audits, and authority building',
    },
    {
      name: 'PPC Marketing Pricing',
      id: 'pricing-ppc',
      category: 'ppc',
      icon: TrendingUp,
      desc: 'Google Search Ads & Meta Ads lead generation funnels',
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPricingDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePricingSubClick = (subId: string) => {
    setPricingDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(subId);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-900/8' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/60 shadow-none'
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
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50/80'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>

            {/* Services */}
            <button
              onClick={() => onNavigate('services')}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                activeSection === 'services'
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50/80'
              }`}
            >
              Services
              {activeSection === 'services' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>

            {/* Industries */}
            <button
              onClick={() => onNavigate('industries')}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                activeSection === 'industries'
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50/80'
              }`}
            >
              Industries
              {activeSection === 'industries' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>

              {/* Pricing with Popover / Dropdown (Matching Screenshot Style) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setPricingDropdownOpen(!pricingDropdownOpen)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer inline-flex items-center gap-1.5 ${
                  activeSection.startsWith('pricing')
                    ? 'text-blue-600 font-bold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50/80'
                }`}
                aria-expanded={pricingDropdownOpen}
              >
                <span>Pricing</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${pricingDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                {activeSection.startsWith('pricing') && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>

              {/* Pricing Dropdown Menu - Clean Solid Screenshot Style */}
              {pricingDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 shadow-2xl z-[100] animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden bg-[#003580] rounded-lg">
                  {/* Body Items List */}
                  <div className="divide-y divide-white/10">
                    <button
                      type="button"
                      onClick={() => handlePricingSubClick('pricing-seo')}
                      className="w-full text-left px-6 py-3.5 text-sm font-medium text-white hover:bg-[#002766] transition-colors cursor-pointer block"
                    >
                      SEO Pricing
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePricingSubClick('pricing-social')}
                      className="w-full text-left px-6 py-3.5 text-sm font-medium text-white hover:bg-[#002766] transition-colors cursor-pointer block"
                    >
                      Social Media Pricing
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePricingSubClick('pricing-ppc')}
                      className="w-full text-left px-6 py-3.5 text-sm font-medium text-white hover:bg-[#002766] transition-colors cursor-pointer block"
                    >
                      Google Ads & PPC Pricing
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePricingSubClick('pricing-custom')}
                      className="w-full text-left px-6 py-3.5 text-sm font-medium text-white hover:bg-[#002766] transition-colors cursor-pointer block"
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
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50/80'
              }`}
            >
              Contact Us
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-request-audit-btn"
              onClick={onRequestAudit}
              className="bg-[#162235] hover:bg-[#1f2e45] text-white border border-[#1e2e46] text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-xs hover:shadow-md active:scale-[0.98] cursor-pointer flex items-center gap-2"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {/* Home */}
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeSection === 'home'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Services */}
            <button
              onClick={() => {
                onNavigate('services');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeSection === 'services'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Services
            </button>

            {/* Industries */}
            <button
              onClick={() => {
                onNavigate('industries');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeSection === 'industries'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Industries
            </button>

            {/* Pricing Expandable Section */}
            <div className="rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setMobilePricingExpanded(!mobilePricingExpanded)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeSection.startsWith('pricing')
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Pricing</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobilePricingExpanded ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {mobilePricingExpanded && (
                <div className="mt-1 pl-3 pr-1 py-1 space-y-1 bg-slate-50/80 rounded-lg border border-slate-100">
                  <button
                    onClick={() => handlePricingSubClick('pricing-seo')}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded-md transition-colors cursor-pointer block"
                  >
                    SEO Pricing
                  </button>
                  <button
                    onClick={() => handlePricingSubClick('pricing-social')}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded-md transition-colors cursor-pointer block"
                  >
                    Social Media Pricing
                  </button>
                  <button
                    onClick={() => handlePricingSubClick('pricing-ppc')}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded-md transition-colors cursor-pointer block"
                  >
                    Google Ads & PPC Pricing
                  </button>
                  <button
                    onClick={() => handlePricingSubClick('pricing-custom')}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded-md transition-colors cursor-pointer block"
                  >
                    Custom Package Pricing
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
              className={`text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeSection === 'contact'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                onRequestAudit();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#162235] hover:bg-[#1f2e45] text-white border border-[#1e2e46] font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Request Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      </header>
      {/* Structural layout spacer preserving exact document flow under fixed header */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />
    </>
  );
};
