import React from 'react';
import { Home, Layers, Sparkles, MessageCircle, Award } from 'lucide-react';

interface MobileBottomBarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onRequestAudit: () => void;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activeSection = 'home',
  onNavigate,
  onRequestAudit,
  whatsappNumber = '254758544241',
  whatsappMessage = "Hi Aceso Solutions, I'd like to inquire about your digital growth services"
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const isHome = activeSection === 'home' || !activeSection;
  const isWork = activeSection === 'portfolio' || activeSection === 'our-work';
  const isServices = activeSection === 'services' || activeSection.startsWith('service-');

  const handleNav = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
    }
  };

  return (
    <aside 
      aria-label="Quick Mobile Navigation" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.07)] px-2 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] select-none"
    >
      <nav className="max-w-md mx-auto grid grid-cols-5 gap-1 items-center">
        {/* Home */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className={`flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-xl transition-all cursor-pointer ${
            isHome 
              ? 'text-[#C25E00] font-bold bg-amber-500/10' 
              : 'text-slate-600 hover:text-slate-900 active:bg-slate-100'
          }`}
          aria-label="Navigate to Home"
        >
          <Home className={`w-5 h-5 transition-transform ${isHome ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">Home</span>
        </button>

        {/* Our Work */}
        <button
          type="button"
          onClick={() => handleNav('portfolio')}
          className={`flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-xl transition-all cursor-pointer ${
            isWork 
              ? 'text-[#C25E00] font-bold bg-amber-500/10' 
              : 'text-slate-600 hover:text-slate-900 active:bg-slate-100'
          }`}
          aria-label="Navigate to Our Work"
        >
          <Layers className={`w-5 h-5 transition-transform ${isWork ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">Our Work</span>
        </button>

        {/* Services */}
        <button
          type="button"
          onClick={() => handleNav('services')}
          className={`flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-xl transition-all cursor-pointer ${
            isServices 
              ? 'text-[#C25E00] font-bold bg-amber-500/10' 
              : 'text-slate-600 hover:text-slate-900 active:bg-slate-100'
          }`}
          aria-label="Navigate to Services"
        >
          <Sparkles className={`w-5 h-5 transition-transform ${isServices ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
          <span className="text-[10px] mt-0.5 tracking-tight font-medium">Services</span>
        </button>

        {/* WhatsApp Us */}
        <a
          id="mobile-bottom-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-xl text-[#00a859] hover:text-[#008f4c] active:bg-emerald-50 transition-all cursor-pointer"
          aria-label="Chat with Aceso Solutions on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-[#00a859]/20 stroke-[2.2]" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00a859] animate-pulse" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-semibold text-[#00a859]">WhatsApp</span>
        </a>

        {/* Free Audit Button */}
        <button
          id="mobile-bottom-audit-btn"
          type="button"
          onClick={onRequestAudit}
          className="flex flex-col items-center justify-center min-h-[46px] py-1 px-0.5 rounded-xl bg-gradient-to-r from-[#DE8E53] to-[#C25E00] hover:from-[#e59b64] hover:to-[#a85000] active:scale-[0.97] text-white shadow-xs transition-all cursor-pointer"
          aria-label="Request Free Growth Audit"
        >
          <Award className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] mt-0.5 tracking-tight font-bold">Free Audit</span>
        </button>
      </nav>
    </aside>
  );
};
