import React from 'react';
import heroImage from '../assets/images/hero_real_team_professionals.jpg';

interface HeroProps {
  onRequestAudit?: () => void;
  onOpenLeadModal?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] border-b border-stone-200">
      {/* End-to-End Background Image with Authentic Young Professional Team (Ages 25-35) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
        <img
          src={heroImage}
          alt="Aceso Solutions diverse digital marketing and business growth team collaborating in Nairobi Kenya"
          className="w-full h-full object-cover object-[78%_center] sm:object-[82%_center] md:object-[85%_center] lg:object-[88%_center]"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Clean, high-legibility gradient overlay protecting typography across all screen widths */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 sm:via-[#FAF9F6]/85 md:via-[#FAF9F6]/70 lg:via-[#FAF9F6]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/95 via-[#FAF9F6]/50 to-transparent sm:hidden pointer-events-none" />

      {/* Main Container - Balanced vertical padding and min-height aligned with the rest of the homepage */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 min-h-[460px] sm:min-h-[520px] md:min-h-[560px] lg:min-h-[600px] xl:min-h-[640px] flex flex-col justify-center">
        
        {/* Left Column: Bold Copy in Front */}
        <div className="max-w-xl lg:max-w-2xl py-2">

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

      </div>
    </section>
  );
};
