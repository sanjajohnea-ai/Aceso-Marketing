import React from 'react';
import { 
  Search, 
  ThumbsUp, 
  MousePointerClick, 
  Pencil, 
  UserCheck,
  ArrowRight
} from 'lucide-react';

interface AuditSectionProps {
  onRequestAudit?: () => void;
}

export const AuditSection: React.FC<AuditSectionProps> = ({ onRequestAudit }) => {
  return (
    <section id="audit" className="bg-[#0b1320] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white relative scroll-mt-20 overflow-hidden">
      {/* Anchor for contact links */}
      <div id="contact" className="absolute -top-24 left-0 pointer-events-none" />
      <div id="why-choose-us" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 lg:space-y-14 w-full">
        
        {/* ========================================================= */}
        {/* TOP ROW: Hero Copy (Left) + African Specialist Team (Right) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Subheading (Matching OUR CORE SOLUTIONS Typography) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
            
            {/* Eyebrow */}
            <div className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-1.5 sm:mb-2">
              WHY CHOOSE ACESO SOLUTIONS
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-bold text-white tracking-tight leading-[1.2] mb-2 sm:mb-3">
              You don’t get one marketer. <br className="hidden sm:inline" />
              You get a <span className="text-[#38bdf8]">team of specialists.</span>
            </h2>

            {/* Subheading */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-normal">
              Growing your business online takes more than one person trying to do everything. At Aceso Solutions, you get a team of specialists, each an expert in their field, working together to deliver strategies that drive real growth.
            </p>

          </div>

          {/* Right Column: Visual with African Specialists & Floating Analytics Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-3 pb-2 sm:py-0">
            
            {/* Ambient Back Glow & Blue Backdrop */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-tr from-blue-600/25 via-sky-500/10 to-transparent border border-blue-500/25 shadow-2xl">
              
              {/* Team Photo Container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] w-full bg-[#162235]">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                  alt="Aceso Solutions Kenyan digital marketing specialist and growth team collaborating"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle soft dark gradient overlay at bottom for badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Website Traffic (Top Left) */}
              <div className="absolute -top-3 left-2 sm:-top-4 sm:-left-3 bg-[#162235]/95 backdrop-blur-md border border-[#1e2e46] px-2.5 py-1.5 sm:p-2.5 rounded-xl shadow-xl flex flex-col gap-0.5 sm:gap-1 z-10 select-none scale-90 sm:scale-100 origin-top-left">
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                  Website Traffic
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-sm font-bold text-emerald-400">
                    + 125%
                  </span>
                  {/* Sparkline */}
                  <svg className="w-10 sm:w-12 h-3.5 sm:h-4 text-emerald-400 stroke-current" fill="none" viewBox="0 0 50 16">
                    <path d="M2 14 L 14 9 L 26 11 L 38 4 L 48 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Floating Badge 2: Leads Generated (Top Right) */}
              <div className="absolute -top-3 right-2 sm:-top-4 sm:-right-3 bg-[#162235]/95 backdrop-blur-md border border-[#1e2e46] px-2.5 py-1.5 sm:p-2.5 rounded-xl shadow-xl flex flex-col gap-0.5 sm:gap-1 z-10 select-none scale-90 sm:scale-100 origin-top-right">
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                  Leads Generated
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xs sm:text-sm font-bold text-emerald-400">
                    + 250%
                  </span>
                  {/* Sparkline */}
                  <svg className="w-10 sm:w-12 h-3.5 sm:h-4 text-emerald-400 stroke-current" fill="none" viewBox="0 0 50 16">
                    <path d="M2 14 L 12 12 L 24 6 L 36 8 L 48 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Floating Badge 3: ROAS 450% (Bottom Right) */}
              <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:-right-3 bg-[#162235]/95 backdrop-blur-md border border-[#1e2e46] px-3 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 sm:gap-3 z-10 select-none scale-90 sm:scale-100 origin-bottom-right">
                <div>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium block">
                    ROAS
                  </span>
                  <span className="text-xs sm:text-base font-extrabold text-blue-400">
                    450%
                  </span>
                </div>
                {/* Donut Chart Ring */}
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-700 stroke-current"
                      strokeWidth="4"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue-500 stroke-current"
                      strokeDasharray="80, 100"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* MIDDLE ROW: 5 Specialty Cards Connected with Subtle Arrows */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4 relative">
          
          {/* Card 1: SEO Specialists */}
          <div className="relative bg-[#162235] border border-[#1e2e46] hover:bg-[#1f2e45] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-5 shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Circular Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                SEO Specialists
              </h3>

              {/* Green Line Indicator */}
              <div className="w-7 h-1 bg-emerald-400 rounded-full mb-2.5" />

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                Improve your visibility on search engines and drive sustainable, long-term growth.
              </p>
            </div>

            {/* Desktop connecting arrow to next card */}
            <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-500/60 pointer-events-none">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Social Media Specialists */}
          <div className="relative bg-[#162235] border border-[#1e2e46] hover:bg-[#1f2e45] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-5 shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Circular Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                Social Media Specialists
              </h3>

              {/* Blue Line Indicator */}
              <div className="w-7 h-1 bg-blue-400 rounded-full mb-2.5" />

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                Build your brand, engage your audience, and turn followers into loyal customers.
              </p>
            </div>

            {/* Desktop connecting arrow to next card */}
            <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-500/60 pointer-events-none">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: PPC Specialists */}
          <div className="relative bg-[#162235] border border-[#1e2e46] hover:bg-[#1f2e45] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-5 shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Circular Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                <MousePointerClick className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                PPC Specialists
              </h3>

              {/* Purple Line Indicator */}
              <div className="w-7 h-1 bg-purple-400 rounded-full mb-2.5" />

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                Create and optimize targeted ad campaigns that generate quality leads and maximize ROI.
              </p>
            </div>

            {/* Desktop connecting arrow to next card */}
            <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-500/60 pointer-events-none">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4: Content & Creative Specialists */}
          <div className="relative bg-[#162235] border border-[#1e2e46] hover:bg-[#1f2e45] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-5 shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Circular Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                <Pencil className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                Content & Creative Specialists
              </h3>

              {/* Amber Line Indicator */}
              <div className="w-7 h-1 bg-amber-400 rounded-full mb-2.5" />

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                Craft compelling content and high-converting designs that capture attention and drive action.
              </p>
            </div>

            {/* Desktop connecting arrow to next card */}
            <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-500/60 pointer-events-none">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 5: Account Managers */}
          <div className="relative bg-[#162235] border border-[#1e2e46] hover:bg-[#1f2e45] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-5 shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Circular Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                Account Managers
              </h3>

              {/* Sky Line Indicator */}
              <div className="w-7 h-1 bg-sky-400 rounded-full mb-2.5" />

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                Your dedicated strategic partner ensuring seamless communication, campaign alignment, and smooth project execution.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
