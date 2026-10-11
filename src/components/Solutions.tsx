import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Video, 
  Target, 
  Globe, 
  Search, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string;
  detailedPoints: string[];
}

export const servicesData: ServiceCardItem[] = [
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'High-converting short-form video Reels, TikToks, branded graphics, and community engagement to grow your audience.',
    icon: Video,
    tags: 'REELS · TIKTOKS · BRAND GRAPHICS',
    detailedPoints: [
      'High-converting short-form video Reels & TikTok production',
      'Custom branded graphics and visual social identity',
      'Content calendar and active daily community DM management'
    ]
  },
  {
    id: 'google-meta-ads',
    title: 'Google & Meta Ads (PPC)',
    description: 'High-intent Google Search campaigns and Facebook & Instagram lead ads to capture customers ready to buy right now.',
    icon: Target,
    tags: 'GOOGLE SEARCH · META ADS · HIGH ROAS',
    detailedPoints: [
      'High-intent Google Search campaigns for active buyers',
      'Targeted Facebook & Instagram lead generation ads',
      'Click-to-WhatsApp direct ads with conversion tracking'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Design & Development',
    description: 'Fast, mobile-optimized business websites and dedicated landing pages with 1-tap WhatsApp and call triggers.',
    icon: Globe,
    tags: 'SUB-2S SPEED · MOBILE-FIRST · WHATSAPP',
    detailedPoints: [
      'Sub-2-second load times on Kenyan mobile networks',
      'Prominent 1-tap WhatsApp triggers and direct call actions',
      'Conversion-optimized landing pages and sales funnels'
    ]
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Top 3 Google Maps ranking, local citations, and on-page optimization to drive qualified organic local traffic.',
    icon: Search,
    tags: 'GOOGLE MAPS · LOCAL SEO · TOP 3',
    detailedPoints: [
      'Google Business Profile top-3 Maps pack optimization',
      'High-intent local keywords and commercial search terms',
      'On-page technical fixes and localized reputation signals'
    ]
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Marketing & Automation',
    description: '24/7 automated instant chatbot replies, menu flows, appointment confirmations, and CRM lead capture.',
    icon: MessageSquare,
    tags: '24/7 CHATBOT · APPOINTMENTS · CRM',
    detailedPoints: [
      '24/7 automated WhatsApp greetings and interactive menu flows',
      'Automated appointment bookings and reminder sequences',
      'Lead capture instantly synced to your phone and team'
    ]
  }
];

interface SolutionsProps {
  onSelectService?: (serviceId: string) => void;
  onSelectSolution?: (solution: any) => void;
  onRequestAudit?: () => void;
  onOpenLeadModal?: () => void;
  onViewAllServices?: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({
  onSelectService,
  onRequestAudit,
  onOpenLeadModal
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<ServiceCardItem | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = servicesData.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }
  }, [isHovered, handleNext]);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
      resetTimer();
    }
  };

  const handleCardClick = (index: number, item: ServiceCardItem) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      resetTimer();
    } else {
      onSelectService?.(item.id);
      setActiveModalItem(item);
    }
  };

  const handleLearnMore = (e: React.MouseEvent, item: ServiceCardItem) => {
    e.stopPropagation();
    onSelectService?.(item.id);
    setActiveModalItem(item);
  };

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#0B132B] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 scroll-mt-20 select-none text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Decorative Grids and Radial Glows */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(222, 142, 83, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(222, 142, 83, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px'
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_25%,#0B132B_85%)]" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] pointer-events-none rounded-full blur-[100px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(222, 142, 83, 0.45) 0%, rgba(194, 94, 0, 0.25) 45%, transparent 75%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
          <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#DE8E53] mb-1 sm:mb-1.5">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.2] mb-1.5 sm:mb-2">
            Comprehensive digital solutions <br className="hidden sm:inline" />
            tailored to your{' '}
            <span className="bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] bg-clip-text text-transparent">
              business needs
            </span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-2xl mx-auto font-normal">
            From targeted customer acquisition to seamless conversions, our specialized marketing services deliver measurable growth for Kenyan businesses.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div className="relative w-full min-h-[390px] sm:min-h-[420px] lg:min-h-[430px] flex items-center justify-center">
          {/* Prev Nav Button */}
          <button
            type="button"
            onClick={() => {
              handlePrev();
              resetTimer();
            }}
            aria-label="Previous service"
            className="flex absolute left-2 sm:left-4 lg:left-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DE8E53]/70 bg-[#0E1738]/90 backdrop-blur-md items-center justify-center text-[#DE8E53] hover:text-white hover:border-[#DE8E53] hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(222,142,83,0.35)] group cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 -translate-x-0.5 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Next Nav Button */}
          <button
            type="button"
            onClick={() => {
              handleNext();
              resetTimer();
            }}
            aria-label="Next service"
            className="absolute right-2 sm:right-4 lg:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DE8E53]/80 bg-[#0E1738]/90 backdrop-blur-md flex items-center justify-center text-[#DE8E53] hover:text-white hover:border-[#DE8E53] hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(222,142,83,0.4)] group cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 translate-x-0.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Cards Container with 3D Perspective */}
          <div className="relative w-full max-w-5xl h-[370px] sm:h-[400px] flex items-center justify-center perspective-[1200px]">
            {servicesData.map((item, index) => {
              let offset = (index - currentIndex) % total;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              let xPos = 0;
              if (offset === -1) xPos = -220;
              else if (offset === 1) xPos = 220;
              else if (offset === -2) xPos = -420;
              else if (offset === 2) xPos = 420;

              let zIndex = 10;
              if (isActive) zIndex = 30;
              else if (isLeft || isRight) zIndex = 20;

              let scale = 0.78;
              let opacity = 0.45;
              if (isActive) {
                scale = 1.08;
                opacity = 1;
              } else if (isLeft || isRight) {
                scale = 0.9;
                opacity = 0.75;
              }

              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => handleCardClick(index, item)}
                  animate={{ x: xPos, scale, opacity, zIndex }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.9 }}
                  className={`absolute w-[280px] sm:w-[320px] md:w-[340px] h-[350px] sm:h-[380px] rounded-2xl cursor-pointer p-5 sm:p-6 flex flex-col items-center text-center justify-between transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-b from-[#1C2546]/95 via-[#111A3A]/95 to-[#0A1026]/98 border-2 border-[#DE8E53] shadow-[0_0_50px_10px_rgba(222,142,83,0.38)]'
                      : isLeft || isRight
                      ? 'bg-gradient-to-b from-[#141E3B]/80 to-[#0A1129]/85 border border-[#DE8E53]/35 backdrop-blur-md hover:border-[#DE8E53]/60'
                      : 'bg-[#0E1630]/65 border border-slate-700/40 backdrop-blur-xs'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Top Icon Badge */}
                  <div className="w-full flex justify-center pt-0.5">
                    <div
                      className={`w-13 h-13 sm:w-15 sm:h-15 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'border-2 border-[#DE8E53]/70 bg-gradient-to-br from-[#DE8E53]/15 to-transparent shadow-[0_0_20px_rgba(222,142,83,0.3)]'
                          : 'border border-[#DE8E53]/30 bg-white/[0.03]'
                      }`}
                    >
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="my-auto py-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-300/90 leading-relaxed font-normal max-w-[260px] mx-auto line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Learn More Action */}
                  <div className="w-full pt-0.5">
                    <button
                      type="button"
                      onClick={(e) => handleLearnMore(e, item)}
                      className={`inline-flex items-center text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors duration-200 cursor-pointer ${
                        isActive ? 'text-[#DE8E53] hover:text-[#E5A958]' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>Learn More</span>
                    </button>
                  </div>

                  {/* Subtle top glow bar on active card */}
                  {isActive && (
                    <div className="absolute inset-x-0 top-0 h-20 rounded-t-2xl bg-gradient-to-b from-[#DE8E53]/15 to-transparent pointer-events-none" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2.5">
          {servicesData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setCurrentIndex(index);
                resetTimer();
              }}
              aria-label={`Switch to ${item.title}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? 'w-7 sm:w-8 bg-[#DE8E53] shadow-[0_0_10px_#DE8E53]'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>


      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg rounded-2xl bg-[#0F172E] border border-[#DE8E53]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(222,142,83,0.3)] text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl border border-[#DE8E53]/50 bg-white/5 flex items-center justify-center">
                    <activeModalItem.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{activeModalItem.title}</h4>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#DE8E53]">
                      {activeModalItem.tags}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {activeModalItem.description}
              </p>

              {/* What is Included */}
              {activeModalItem.detailedPoints && (
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">What is included:</p>
                  {activeModalItem.detailedPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DE8E53] shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalItem(null);
                    if (onRequestAudit) {
                      onRequestAudit();
                    } else if (onOpenLeadModal) {
                      onOpenLeadModal();
                    } else {
                      (document.getElementById('contact') || document.getElementById('audit'))?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#DE8E53] via-[#E5A958] to-[#C25E00] text-white font-bold text-sm shadow-[0_0_20px_rgba(222,142,83,0.4)] hover:brightness-110 transition-all text-center cursor-pointer"
                >
                  Get Started with this Service
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="py-3 px-5 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
