import React from 'react';
import { AcesoLogo } from './AcesoLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ArrowUp, 
  ShieldCheck, 
  Heart,
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

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand Col */}
        <div className="lg:col-span-2 space-y-4">
          <AcesoLogo variant="light" />
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
            Digital growth partner dedicated to small and medium enterprises. We deploy high-converting acquisition funnels, reactivation engines, and marketing automations.
          </p>
          <div className="flex items-center gap-3 pt-2 text-slate-400">
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-400 hover:text-white flex items-center justify-center transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                Our Services
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('packages')} className="hover:text-white transition-colors cursor-pointer">
                Packages & Pricing
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors cursor-pointer">
                How It Works
              </button>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
            Solutions
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                Customer Acquisition
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                Customer Reactivation
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                Marketing Automation
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                Meta & Google Ads
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                WhatsApp Business Bots
              </button>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm">
            <li className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>hello@acesosolutions.com</span>
            </li>
            <li className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>+254 (0) 700 000 000</span>
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Westlands, Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal & Back to Top */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Aceso Solutions. All rights reserved.</span>
            <span>•</span>
            <span>Digital Growth Partner for SMEs.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-slate-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
