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
