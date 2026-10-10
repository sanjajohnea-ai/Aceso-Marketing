import React from 'react';
import { TrendingUp } from 'lucide-react';
import heroImage from '../assets/images/hero_team_people_1791617197408.jpg';

interface HeroProps {
  onRequestAudit?: () => void;
  onOpenLeadModal?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] border-b border-stone-200">
      {/* End-to-End Background Image with Large Team / Many People */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
        <img
          src={heroImage}
          alt="Aceso Solutions diverse digital marketing and business growth team collaborating in Nairobi Kenya"
          className="w-full h-full object-cover object-[75%_center] sm:object-[78%_center] lg:object-[82%_center]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Clean, high-legibility gradient overlay protecting typography across all screen widths */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 sm:via-[#FAF9F6]/90 md:via-[#FAF9F6]/80 lg:via-[#FAF9F6]/60 to-[#FAF9F6]/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/90 via-transparent to-transparent sm:hidden pointer-events-none" />

      {/* Main Container - Full-bleed width with tight, optimized padding */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14 min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex flex-col justify-center">
        
        {/* Left Column: Bold Copy in Front */}
        <div className="max-w-xl lg:max-w-2xl">

          {/* Dark Font Style Headline - Punchy & Proportionate */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.02] font-black tracking-[-0.03em] text-slate-950 mb-3 sm:mb-4">
            Get more
            <br />
            customers.
            <br />
            Sell more.
          </h1>

          {/* Dark Font Style Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed max-w-lg font-medium">
            We help small and medium businesses across Kenya reach more customers, get more enquiries and grow sales with practical digital marketing.
          </p>

        </div>

        {/* Floating Performance Badge (Compact & neatly aligned) */}
        <div className="hidden xl:flex absolute right-8 bottom-6 items-center gap-3 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md shadow-stone-900/5 max-w-xs pointer-events-auto">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-700">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-900">+4.8x Avg ROAS</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">Verified</span>
            </div>
            <p className="text-[11px] text-slate-600 font-medium leading-tight">
              Across Meta, TikTok, Instagram & Google campaigns
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
