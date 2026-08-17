import React from 'react';
import { AcesoLogo } from './AcesoLogo';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onRequestAudit: () => void;
  hideTopBanner?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#03132B] text-slate-400 text-sm border-t border-[#0d2244]">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Col (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <AcesoLogo variant="light" size="md" onClick={() => onNavigate('home')} />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Digital growth partner for small and medium businesses. We help businesses attract customers, reactivate existing ones, and build smarter marketing systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#0e213d] hover:bg-[#1a3866] text-slate-300 hover:text-white flex items-center justify-center transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#0e213d] hover:bg-[#1a3866] text-slate-300 hover:text-white flex items-center justify-center transition-colors" 
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#0e213d] hover:bg-[#1a3866] text-slate-300 hover:text-white flex items-center justify-center transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#0e213d] hover:bg-[#1a3866] text-slate-300 hover:text-white flex items-center justify-center transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links (lg: 2 cols) */}
          <div className="lg:col-span-2 lg:border-r lg:border-[#0d2244] lg:pr-6">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-6">
              COMPANY
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing')} 
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Plans & Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Links (lg: 3 cols) */}
          <div className="lg:col-span-3 lg:border-r lg:border-[#0d2244] lg:pr-6">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-6">
              SERVICES & PRICING
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('pricing-web')} 
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Web Design Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing-seo')} 
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  SEO Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing-social')} 
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Social Media Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing-ppc')} 
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  PPC Marketing Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Have Questions? (lg: 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-5">
              HAVE QUESTIONS?
            </h4>
            
            {/* WhatsApp Us Button */}
            <div className="mb-6">
              <a
                href="https://wa.me/254758544241?text=Hi%20Aceso%20Solutions,%20I'd%20like%20to%20inquire%20about%20your%20digital%20growth%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[200px] inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#00a859] hover:bg-[#00964f] active:bg-[#008546] text-white text-sm font-bold transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-slate-200">
                <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>+254 758 544 241</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <span>Mombasa, Kenya</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-[#0d2244] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span>© 2026 Aceso Solutions. All rights reserved.</span>
            <span className="text-slate-600">|</span>
            <span>Digital Growth Partner for SMEs.</span>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-200 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span className="text-slate-600">|</span>
            <button onClick={() => onNavigate('home')} className="hover:text-slate-200 transition-colors cursor-pointer">
              Terms of Use
            </button>
            <span className="text-slate-600">|</span>
            <button onClick={() => onNavigate('home')} className="hover:text-slate-200 transition-colors cursor-pointer">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};

