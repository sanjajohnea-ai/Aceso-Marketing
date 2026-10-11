import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface MobileBottomBarProps {
  onRequestAudit: () => void;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onRequestAudit,
  whatsappNumber = '254758544241',
  whatsappMessage = "Hi Aceso Solutions, I'd like to inquire about your digital growth services"
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside 
      aria-label="Quick Mobile Actions" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2 sm:px-4 sm:py-2.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* WhatsApp Us Button */}
        <a
          id="mobile-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 sm:gap-2 h-11 px-3 rounded-xl bg-[#00a859] hover:bg-[#00964f] active:bg-[#008546] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs active:scale-[0.98] transition-all cursor-pointer select-none"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">WhatsApp Us</span>
        </a>

        {/* Get an Audit Button */}
        <button
          id="mobile-get-audit-btn"
          type="button"
          onClick={onRequestAudit}
          className="flex items-center justify-center gap-1.5 sm:gap-2 h-11 px-3 rounded-xl bg-gradient-to-r from-[#DE8E53] to-[#C25E00] hover:from-[#e59b64] hover:to-[#a85000] active:from-[#944700] active:to-[#803d00] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs active:scale-[0.98] transition-all cursor-pointer select-none"
        >
          <Sparkles className="w-4 h-4 shrink-0 text-white" />
          <span className="truncate">Get an Audit</span>
        </button>
      </div>
    </aside>
  );
};
