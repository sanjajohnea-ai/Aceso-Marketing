import React from 'react';
import { AcesoLogo } from './AcesoLogo';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Mail
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  onRequestAudit?: () => void;
  hideTopBanner?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
    }
  };

  return (
    <footer className="bg-[#070D1E] text-slate-400 border-t border-slate-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Brand Col (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-5">
            <AcesoLogo variant="light" size="md" onClick={() => handleNav('home')} />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Digital growth partner for hospitality, clinics, and ambitious businesses. We help you attract high-intent customers and build automated marketing systems.
            </p>

            {/* Social Media Links */}
            <div className="pt-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/profile.php?id=61594992046587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1877F2] text-slate-300 hover:text-white hover:bg-[#1877F2] flex items-center justify-center transition-all duration-200 group shadow-2xs"
                  aria-label="Follow Aceso Solutions on Facebook"
                  title="Facebook: @acesosolutions"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/aceso_marketing/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#E4405F] text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] flex items-center justify-center transition-all duration-200 group shadow-2xs"
                  aria-label="Follow Aceso Solutions on Instagram"
                  title="Instagram: @aceso_marketing"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@acesomarketingsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-black flex items-center justify-center transition-all duration-200 group shadow-2xs"
                  aria-label="Follow Aceso Solutions on TikTok"
                  title="TikTok: @acesomarketingsolutions"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.88-4.47V8.58a8.28 8.28 0 0 0 4.84 1.56V6.69z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Industries Links (lg: 3 cols) */}
          <div className="lg:col-span-3 lg:border-r lg:border-slate-800 lg:pr-6">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 sm:mb-5">
              INDUSTRIES
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => handleNav('industry-hospitality')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Hotels &amp; Resorts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('industry-tours-travel')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Tours &amp; Travel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('industry-dental-clinics')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Dental Clinics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('industry-vet-clinics')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Vet Clinics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('industry-professional-services')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Professional &amp; Legal Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('industry-education')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Education &amp; Training
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Solutions (lg: 3 cols) */}
          <div className="lg:col-span-3 lg:border-r lg:border-slate-800 lg:pr-6">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 sm:mb-5">
              OUR SERVICES
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => handleNav('service-social')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('service-ppc')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Google &amp; Meta Ads (PPC)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('service-webdesign')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Web Design &amp; Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('service-seo')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  Search Engine Optimization (SEO)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('service-whatsapp')} 
                  className="text-slate-300 hover:text-[#DE8E53] transition-colors cursor-pointer text-left"
                >
                  WhatsApp Marketing &amp; Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Have Questions? (lg: 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 sm:mb-5">
              HAVE QUESTIONS?
            </h4>
            
            {/* WhatsApp Us Button */}
            <div className="mb-5 sm:mb-6">
              <a
                href="https://wa.me/254758544241?text=Hi%20Aceso%20Solutions,%20I'd%20like%20to%20inquire%20about%20your%20digital%20growth%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[200px] inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-[#00a859] hover:bg-[#00964f] active:bg-[#008546] text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-center gap-3 text-slate-200">
                <Mail className="w-4 h-4 text-[#DE8E53] shrink-0" />
                <a 
                  href="mailto:support@acesosolutions.co.ke" 
                  className="hover:text-white transition-colors break-all"
                >
                  support@acesosolutions.co.ke
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <Phone className="w-4 h-4 text-[#DE8E53] shrink-0" />
                <span>+254 758 544 241</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <MapPin className="w-4 h-4 text-[#DE8E53] shrink-0" />
                <span>Mombasa, Kenya</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-slate-800 py-5 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-400 text-center md:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span>© 2026 Aceso Solutions. All rights reserved.</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span>Digital Growth Partner for SMEs.</span>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-end">
            <button 
              id="footer-privacy-link"
              onClick={() => handleNav('privacy-policy')}
              className="text-slate-400 hover:text-[#DE8E53] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">·</span>
            <button 
              id="footer-terms-link"
              onClick={() => handleNav('terms-of-use')}
              className="text-slate-400 hover:text-[#DE8E53] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
