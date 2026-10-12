import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play,
  Layers,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Bookmark
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

// Video project thumbnails
import workTheparkstayTour from '../assets/images/parkstay_wide_thumb_1791622011701.jpg';
import workAmazonAutoWorks from '../assets/images/amazon_autoworks_thumb_1791625541553.jpg';

// Ajenda Kenya Carousel Slides
import ajendaSlide1 from '../assets/images/ajenda_id_slide1_1791626041926.jpg';
import ajendaSlide2 from '../assets/images/ajenda_id_slide2_1791626062293.jpg';
import ajendaSlide3 from '../assets/images/ajenda_id_slide3_1791626088220.jpg';
import ajendaSlide4 from '../assets/images/ajenda_id_slide4_1791626111964.jpg';

interface PortfolioPageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
  onNavigate: (sectionId: string) => void;
  initialCaseStudyId?: string | null;
  onCaseStudyChange?: (caseStudyId: string | null) => void;
}

export interface SocialStats {
  platform: 'tiktok' | 'instagram';
  likes: string;
  comments: string;
  shares: string;
  bookmarks: string;
  views?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  contentType: string;
  duration: string;
  durationSeconds: number;
  image: string;
  description: string;
  filterCategories: string[];
  metrics: { label: string; value: string }[];
  deliverables: string[];
  vimeoEmbedUrl?: string;
  vimeoTitle?: string;
  vimeoPadding?: string;
  carouselImages?: string[];
  carouselCaptions?: string[];
  socialStats?: SocialStats;
  tiktokUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'the-parkstay-hospitality',
    title: 'The Parkstay – Apartment & Vacation Stay Tour',
    client: 'The Parkstay Luxury Stays',
    industry: 'Hospitality',
    contentType: 'Social Media Content',
    duration: '0:39',
    durationSeconds: 39,
    image: workTheparkstayTour,
    vimeoEmbedUrl: 'https://player.vimeo.com/video/1234604200?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1',
    vimeoTitle: 'IMG_0310',
    vimeoPadding: '177.78% 0 0 0',
    description: "We produced an engaging social media video tour showcasing the modern bedroom suite, ocean-view balcony, fitted kitchen, and guest swimming pool to drive direct bookings at Ksh 3,500/night.",
    filterCategories: ['All', 'Social Media Content'],
    metrics: [
      { label: 'Direct Bookings', value: '+142 nights booked' },
      { label: 'Avg Rate & Occupancy', value: 'KSh 3,500/night (89% occupancy)' },
      { label: 'TikTok & Reel Views', value: '185,000+ views' }
    ],
    deliverables: [
      'Full Apartment & Amenities Walkthrough Video',
      'TikTok & Instagram Reels with Viral Audio Sync',
      'Direct WhatsApp Booking Call-to-Action (0180335047)',
      'Balcony, Kitchen & Swimming Pool Feature Spotlights'
    ],
    testimonial: {
      quote: "The walkthrough video went viral on TikTok and Instagram. Our phone didn't stop ringing with inquiries, and our Ksh 3,500/night suites were fully booked for three consecutive weekends.",
      author: 'Amina H.',
      role: 'Property Manager, The Parkstay'
    }
  },
  {
    id: 'amazon-selection-bodywork',
    title: 'Amazon Selection -  Car Painting Process',
    client: 'Amazon Selection Auto Works',
    industry: 'Automotive',
    contentType: 'Social Media Content',
    duration: '1:03',
    durationSeconds: 63,
    image: workAmazonAutoWorks,
    vimeoEmbedUrl: 'https://player.vimeo.com/video/1234611911?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1',
    vimeoTitle: 'Car Painting Process',
    vimeoPadding: '56.25% 0 0 0',
    description: "We produced an in-depth video showing the vehicle repair and professional car painting process at Amazon Selection Auto Works, showcasing expert bodywork preparation and spray booth finish.",
    filterCategories: ['All', 'Social Media Content'],
    metrics: [
      { label: 'Video Completion Rate', value: '62% full watch' },
      { label: 'Collision Quotes', value: '+84 repair jobs' },
      { label: 'Average Repair Ticket', value: 'KSh 65,000+' }
    ],
    deliverables: [
      'Cinematic 4K Spray Booth Timelapse Videography',
      'Accident Restoration Transformation Split-Screens',
      'Customer Delivery Reaction Clips',
      'High-Intent Google & Meta Retargeting Campaign'
    ],
    testimonial: {
      quote: "People trust us with luxury cars because the videos prove our paint booth standards and precision craftsmanship. It's our best sales tool.",
      author: 'George M.',
      role: 'Operations Director, Amazon Selection'
    }
  },
  {
    id: 'ajenda-kenya-id-advocacy',
    title: 'Ajenda Kenya – #SiasaYaID Nonprofit Carousel',
    client: 'Ajenda Kenya',
    industry: 'Nonprofit',
    contentType: 'Social Media Content',
    duration: '4 Slides',
    durationSeconds: 0,
    image: ajendaSlide1,
    carouselImages: [
      ajendaSlide1,
      ajendaSlide2,
      ajendaSlide3,
      ajendaSlide4
    ],
    carouselCaptions: [
      'Slide 1: Entering the ID Application Center doorway (#siasayaid).',
      'Slide 2: Bureaucratic delay – "Oyaa kijana, bado haijatoka. Rudi wiki ijayo tu."',
      'Slide 3: Extortion demand exposed – "Mkona Elff tano nyinyi? Kama hamna msizubae apo!"',
      'Slide 4: Youth solidarity & frustration – "Next week tena? Si ni miezi mitatu sai bro?"'
    ],
    tiktokUrl: 'https://www.tiktok.com/@ajendakenya/photo/7494226891407101190?image_index=2&is_from_webapp=1',
    description: "Created for Ajenda Kenya, a nonprofit organization. This 4-part illustrated educational comic carousel enlightens young people on how to apply for an ID, navigating delays, and standing against extortion (#SiasaYaID).",
    filterCategories: ['All', 'Social Media Content'],
    socialStats: {
      platform: 'tiktok',
      likes: '5.3k',
      comments: '225',
      shares: '710',
      bookmarks: '177',
      views: '148k+'
    },
    metrics: [
      { label: 'Likes', value: '5.3k' },
      { label: 'Comments', value: '225' },
      { label: 'Shares', value: '710' },
      { label: 'Bookmarks', value: '177' }
    ],
    deliverables: [
      'Authentic Sheng Scriptwriting & Dialogue Creation',
      'Character & Storyboard Comic Illustration',
      'TikTok & Instagram Educational Photo Carousel',
      'Youth Civic Rights & Anti-Extortion Awareness'
    ],
    testimonial: {
      quote: "The comic carousel made a bureaucratic civic rights topic relatable and viral among youth on TikTok. Young people engaged deeply with the dialogue and shared their own experiences.",
      author: 'Advocacy Team',
      role: 'Ajenda Kenya'
    }
  }
];

const FILTER_TABS = [
  'All',
  'Social Media Content'
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onBackToHome,
  onRequestAudit,
  onNavigate,
  initialCaseStudyId,
  onCaseStudyChange
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(() => {
    if (initialCaseStudyId) {
      return PROJECTS.find(p => p.id === initialCaseStudyId) || null;
    }
    return null;
  });
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isAutoSliding, setIsAutoSliding] = useState<boolean>(true);
  const [cardSlideIndex, setCardSlideIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Sync modal when initialCaseStudyId changes from outer URL / navigation
  useEffect(() => {
    if (initialCaseStudyId) {
      const match = PROJECTS.find(p => p.id === initialCaseStudyId);
      if (match) {
        setActiveModalProject(match);
        setActiveSlideIndex(0);
      }
    } else {
      setActiveModalProject(null);
    }
  }, [initialCaseStudyId]);

  // Auto-slide modal carousel every 3.8s when enabled
  useEffect(() => {
    if (!activeModalProject?.carouselImages || !isAutoSliding) return;
    const interval = setInterval(() => {
      setActiveSlideIndex(prev => (prev < activeModalProject.carouselImages!.length - 1 ? prev + 1 : 0));
    }, 3800);
    return () => clearInterval(interval);
  }, [activeModalProject, isAutoSliding]);

  // Auto-slide card preview on the main portfolio page every 3.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCardSlideIndex(prev => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Filter projects according to selected category
  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.filterCategories.includes(activeTab));

  // Handle keyboard ESC to close modal, and Arrow Left/Right to navigate carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      } else if (activeModalProject?.carouselImages && activeModalProject.carouselImages.length > 0) {
        if (e.key === 'ArrowLeft') {
          setActiveSlideIndex(prev => (prev > 0 ? prev - 1 : activeModalProject.carouselImages!.length - 1));
        } else if (e.key === 'ArrowRight') {
          setActiveSlideIndex(prev => (prev < activeModalProject.carouselImages!.length - 1 ? prev + 1 : 0));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject]);

  const openProjectModal = (project: ProjectItem) => {
    setActiveModalProject(project);
    setActiveSlideIndex(0);
    setIsAutoSliding(true);
    if (onCaseStudyChange) {
      onCaseStudyChange(project.id);
    }
  };

  const closeProjectModal = () => {
    setActiveModalProject(null);
    if (onCaseStudyChange) {
      onCaseStudyChange(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Top Navigation */}
      <Navbar 
        activeSection="portfolio"
        onRequestAudit={onRequestAudit}
        onNavigate={onNavigate}
      />

      <main className="flex-1">
        {/* Header Section Matching Screenshot */}
        <section className="relative w-full overflow-hidden pt-10 sm:pt-14 pb-8 sm:pb-12 bg-[#FAFBFB]">
          
          {/* Subtle Organic Warm Brown & Dark Blue Ambient Blob in Top Right Corner */}
          <div 
            className="absolute top-0 right-0 w-80 sm:w-[480px] lg:w-[620px] h-72 sm:h-96 pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle at 85% 15%, rgba(133, 69, 25, 0.08) 0%, rgba(15, 41, 66, 0.06) 45%, rgba(250, 251, 251, 0) 70%)'
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 lg:gap-12">
              
              {/* Left Column: Heading and Tag */}
              <div className="max-w-2xl lg:max-w-3xl">
                {/* Kicker: Rich Warm Brown Uppercase */}
                <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#854519] mb-2 sm:mb-3">
                  OUR WORK
                </p>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1B2B] tracking-tight leading-[1.08] mb-4">
                  Real Campaigns.
                  <br />
                  Tangible Results.
                </h1>

                {/* Subtitle / Description */}
                <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal">
                  From engaging social media content to high-converting ad campaigns, we create digital experiences that help businesses get noticed, connect with their audience and grow.
                </p>
              </div>

              {/* Right Column: Hand-drawn Note and Curved Arrow */}
              <div className="hidden md:flex flex-col items-center md:items-end select-none shrink-0 pt-4 lg:pt-6">
                <div className="relative max-w-[240px] text-right pr-4">
                  <p 
                    className="text-[#1A385C] text-base lg:text-lg leading-snug font-normal"
                    style={{
                      fontFamily: 'Caveat, "Comic Sans MS", "Segoe Print", cursive, sans-serif',
                      letterSpacing: '0.01em',
                      transform: 'rotate(-2deg)'
                    }}
                  >
                    Scroll through our work
                    <br />
                    and see how we bring
                    <br />
                    brands to life.
                  </p>

                  {/* Playful curved hand-drawn arrow pointing down and left */}
                  <div className="flex justify-end mt-2 pr-6">
                    <svg 
                      className="w-16 h-14 text-[#1A385C]" 
                      viewBox="0 0 70 60" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      {/* Smooth curved bezier arrow path */}
                      <path d="M 52 4 C 50 24, 38 42, 16 48" />
                      {/* Arrowhead */}
                      <path d="M 24 38 L 14 48 L 22 56" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>

            {/* Filter Pills / Tabs Row */}
            <div className="mt-8 sm:mt-10 pt-2 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
              {FILTER_TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#0F2942] text-white shadow-sm border border-[#0F2942]'
                        : 'bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:text-[#0F2942] shadow-2xs'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Thumbnail with Video Play Overlay / Carousel Overlay & Duration Badge */}
                  <div 
                    onClick={() => openProjectModal(project)}
                    className="relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer select-none"
                  >
                    {project.carouselImages ? (
                      <div className="w-full h-full overflow-hidden relative bg-[#EAE3D2]">
                        <div 
                          className="flex w-full h-full transition-transform duration-700 ease-out will-change-transform"
                          style={{ transform: `translateX(-${cardSlideIndex * 100}%)` }}
                        >
                          {project.carouselImages.map((imgSrc, idx) => (
                            <div key={idx} className="w-full h-full shrink-0 flex items-center justify-center bg-[#EAE3D2]">
                              <img
                                src={imgSrc}
                                alt={`${project.title} slide ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>


                        {/* Clickable slide indicators on card */}
                        <div className="absolute bottom-2.5 left-2.5 z-20 flex items-center gap-1.5">
                          {project.carouselImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCardSlideIndex(idx);
                              }}
                              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                cardSlideIndex === idx ? 'w-4 bg-white shadow-xs' : 'w-1.5 bg-white/60 hover:bg-white'
                              }`}
                              aria-label={`Slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    )}

                    {/* Dark gradient for crisp overlay clarity */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none" />

                    {/* Circular Action Button in Center */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-xs border-2 border-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#0F2942] group-hover:border-[#F2DECE] transition-all duration-300">
                        {project.carouselImages ? (
                          <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        ) : (
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5 fill-white" />
                        )}
                      </div>
                    </div>

                    {/* Top Left Carousel Badge if applicable */}
                    {project.carouselImages && (
                      <div className="absolute left-2.5 top-2.5 px-2.5 py-0.5 rounded-md bg-[#0F2942]/90 backdrop-blur-xs text-white text-[11px] font-bold border border-white/20 flex items-center gap-1.5 shadow-sm">
                        <Layers className="w-3 h-3 text-amber-300" />
                        <span>Carousel</span>
                      </div>
                    )}

                    {/* Bottom Right Duration / Slides Badge */}
                    <div className="absolute right-2.5 bottom-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-white text-[11px] sm:text-xs font-semibold tracking-wider tabular-nums shadow-xs pointer-events-none">
                      {project.duration}
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    {/* Category Tags Row: Warm Brown Pill + Dark Blue Text */}
                    <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#FDF6F0] text-[#854519] text-xs font-semibold border border-[#F2DECE]">
                        {project.industry}
                      </span>
                      <span className="text-xs text-[#1A385C] font-semibold">
                        {project.contentType}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 
                      onClick={() => openProjectModal(project)}
                      className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#854519] transition-colors leading-snug mb-2 cursor-pointer line-clamp-2"
                    >
                      {project.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal flex-1">
                      {project.description}
                    </p>

                    {/* Performance Stats at the Bottom of Card */}
                    {project.socialStats && (
                      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700 bg-slate-50/80 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 px-4 sm:px-5 py-3 rounded-b-2xl">
                        <div className="flex items-center gap-1.5 font-bold text-slate-800" title="Likes">
                          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                          <span>{project.socialStats.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800" title="Comments">
                          <MessageCircle className="w-3.5 h-3.5 fill-sky-100 text-sky-600" />
                          <span>{project.socialStats.comments}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800" title="Shares">
                          <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{project.socialStats.shares}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-bold text-slate-800" title="Bookmarks">
                          <Bookmark className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>{project.socialStats.bookmarks}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Zero State Fallback */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                <p className="text-base text-slate-600 font-medium mb-3">
                  No projects found in this category yet.
                </p>
                <button
                  onClick={() => setActiveTab('All')}
                  className="px-4 py-2 rounded-lg bg-[#0F2942] hover:bg-[#0A1B2C] text-white text-xs font-semibold cursor-pointer"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Growth CTA Banner */}
        <section className="py-14 sm:py-16 bg-[#FAFBFB] border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1B2B] tracking-tight mb-4">
              Let&apos;s Create High-Impact Video &amp; Ad Campaigns for Your Brand.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-7">
              Whether you need mouth-watering food reels, patient education videos, or profitable Meta ad funnels, we build campaigns that convert in Kenya.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={onRequestAudit}
                className="px-6 py-3.5 rounded-xl bg-[#0F2942] hover:bg-[#091A2B] text-white font-bold text-sm transition-all shadow-md shadow-slate-900/15 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Get Free Growth Audit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Project Video & Details Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeProjectModal}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#FDF6F0] text-[#854519] text-xs font-semibold border border-[#F2DECE]">
                  {activeModalProject.industry}
                </span>
                <span className="text-xs text-[#1A385C] font-semibold">
                  {activeModalProject.contentType}
                </span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  • <strong className="text-slate-700">{activeModalProject.client}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={closeProjectModal}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-6">
              
              {/* Photo Carousel for Ajenda Kenya */}
              {activeModalProject.carouselImages && activeModalProject.carouselImages.length > 0 && (
                <div className="space-y-4">
                  {/* Carousel Main Stage with horizontal sliding track */}
                  <div 
                    className="relative aspect-square max-w-md sm:max-w-lg mx-auto rounded-2xl overflow-hidden bg-stone-900 shadow-xl border border-slate-300 group select-none cursor-grab active:cursor-grabbing"
                    onMouseEnter={() => setIsAutoSliding(false)}
                    onMouseLeave={() => setIsAutoSliding(true)}
                    onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                    onTouchEnd={(e) => {
                      if (touchStartX === null) return;
                      const diff = touchStartX - e.changedTouches[0].clientX;
                      const total = activeModalProject.carouselImages!.length;
                      if (diff > 45) {
                        setActiveSlideIndex(prev => (prev < total - 1 ? prev + 1 : 0));
                      } else if (diff < -45) {
                        setActiveSlideIndex(prev => (prev > 0 ? prev - 1 : total - 1));
                      }
                      setTouchStartX(null);
                    }}
                    onMouseDown={(e) => setTouchStartX(e.clientX)}
                    onMouseUp={(e) => {
                      if (touchStartX === null) return;
                      const diff = touchStartX - e.clientX;
                      const total = activeModalProject.carouselImages!.length;
                      if (diff > 45) {
                        setActiveSlideIndex(prev => (prev < total - 1 ? prev + 1 : 0));
                      } else if (diff < -45) {
                        setActiveSlideIndex(prev => (prev > 0 ? prev - 1 : total - 1));
                      }
                      setTouchStartX(null);
                    }}
                  >
                    {/* Horizontal Sliding Track */}
                    <div 
                      className="flex w-full h-full transition-transform duration-500 ease-out will-change-transform"
                      style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
                    >
                      {activeModalProject.carouselImages.map((imgSrc, idx) => (
                        <div key={idx} className="w-full h-full shrink-0 flex items-center justify-center bg-[#EAE3D2]">
                          <img 
                            src={imgSrc}
                            alt={`${activeModalProject.title} slide ${idx + 1}`}
                            className="w-full h-full object-contain pointer-events-none select-none"
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Top Right Live Post Link */}
                    {activeModalProject.tiktokUrl && (
                      <a 
                        href={activeModalProject.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg transition-all hover:scale-105 cursor-pointer"
                        title="View Live Post on TikTok"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Post</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/90" />
                      </a>
                    )}

                    {/* Bottom Dots Indicator */}
                    <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2 z-10 pointer-events-none">
                      {activeModalProject.carouselImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSlideIndex(idx);
                          }}
                          className={`pointer-events-auto h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            activeSlideIndex === idx 
                              ? 'w-7 bg-white shadow-sm' 
                              : 'w-2 bg-white/50 hover:bg-white/80'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-1">
                    {activeModalProject.carouselImages.map((imgSrc, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlideIndex(idx)}
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          activeSlideIndex === idx
                            ? 'border-[#0F2942] ring-2 ring-[#0F2942]/20 scale-105 shadow-md'
                            : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400'
                        }`}
                      >
                        <img 
                          src={imgSrc} 
                          alt={`Thumbnail ${idx + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] font-bold text-center py-0.5">
                          #{idx + 1}
                        </div>
                      </button>
                    ))}
                  </div>

                </div>
              )}

              {/* Embedded Vimeo Player matching user embed codes */}
              {activeModalProject.vimeoEmbedUrl && (
                <div className="space-y-3">
                  <div className={`relative w-full ${activeModalProject.vimeoPadding?.startsWith('177') ? 'max-w-sm sm:max-w-md mx-auto' : 'mx-auto'} rounded-2xl overflow-hidden bg-black shadow-xl border border-slate-800`}>
                    <div style={{ padding: activeModalProject.vimeoPadding || '56.25% 0 0 0', position: 'relative' }}>
                      <iframe 
                        src={activeModalProject.vimeoEmbedUrl}
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        title={activeModalProject.vimeoTitle || activeModalProject.title}
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Title & Description */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-2">
                  {activeModalProject.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer onNavigate={onNavigate} onRequestAudit={onRequestAudit} />
    </div>
  );
};
