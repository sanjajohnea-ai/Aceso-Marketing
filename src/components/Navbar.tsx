import React, { useState, useEffect } from 'react';
import { AcesoLogo } from './AcesoLogo';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Packages', id: 'packages' },
    { name: 'How It Works', id: 'how-it-works' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100' 
          : 'bg-white/80 backdrop-blur-xs border-b border-transparent'
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg cursor-pointer ${
                    isActive 
                      ? 'text-blue-600 font-bold' 
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50/80'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-request-audit-btn"
              onClick={onRequestAudit}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-xs hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] cursor-pointer flex items-center gap-2"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
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
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                onRequestAudit();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Request Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
