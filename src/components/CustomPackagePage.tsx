import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  ArrowRight, 
  Check, 
  X, 
  Info, 
  Sparkles, 
  HelpCircle, 
  PhoneCall, 
  ChevronRight,
  Send,
  Layers,
  Globe,
  FileText,
  Filter,
  TrendingUp,
  Mail,
  MessageSquare,
  MessageCircle,
  RotateCw,
  Users,
  Settings,
  Bot,
  BarChart3,
  GitFork,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toast, ToastMessage } from './Toast';
import { saveLocalAuditLead, submitLeadToGoogleWebApp, AuditSubmissionRecord } from '../lib/googleSheets';

interface CustomPackagePageProps {
  onBackToHome: () => void;
  onRequestAudit: () => void;
}

interface ServiceItem {
  id: string;
  name: string;
  category: 'digital-marketing' | 'advertising' | 'website' | 'engagement' | 'automation';
  price: number;
  setupFee: number;
  icon?: string;
  brandBadges?: ('facebook' | 'instagram' | 'tiktok' | 'google' | 'meta' | 'linkedin')[];
  description?: string;
  recommendedFor?: string;
}

const allServicesList: ServiceItem[] = [
  // Digital Marketing
  {
    id: 'social-media',
    name: 'Social Media Management',
    category: 'digital-marketing',
    price: 20000,
    setupFee: 10000,
    brandBadges: ['facebook', 'instagram', 'tiktok'],
    description: '12 tailored graphic & video posts/mo, community moderation, and growth hashtags.'
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    category: 'digital-marketing',
    price: 15000,
    setupFee: 5000,
    description: 'High-converting ad copy, visual assets, banners, and reels editing.'
  },
  {
    id: 'seo',
    name: 'SEO',
    category: 'digital-marketing',
    price: 25000,
    setupFee: 15000,
    description: 'Local keyword ranking, on-page optimization, and technical site audit.'
  },
  {
    id: 'google-business-profile',
    name: 'Google Business Profile',
    category: 'digital-marketing',
    price: 10000,
    setupFee: 5000,
    description: 'Map pack optimization, citation building, and review management.'
  },

  // Advertising
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'advertising',
    price: 25000,
    setupFee: 10000,
    brandBadges: ['google'],
    description: 'Search intent keyword ads, negative keyword pruning, and conversion tracking.'
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    category: 'advertising',
    price: 20000,
    setupFee: 10000,
    brandBadges: ['meta'],
    description: 'Facebook & Instagram lead generation, retargeting funnels, and CAPI setup.'
  },
  {
    id: 'tiktok-ads',
    name: 'TikTok Ads',
    category: 'advertising',
    price: 20000,
    setupFee: 10000,
    brandBadges: ['tiktok'],
    description: 'Engaging Spark Ads, influencer amplification, and vertical video funnels.'
  },
  {
    id: 'linkedin-ads',
    name: 'LinkedIn Ads',
    category: 'advertising',
    price: 30000,
    setupFee: 15000,
    brandBadges: ['linkedin'],
    description: 'B2B executive targeting, account-based marketing, and lead forms.'
  },

  // Website & Conversion
  {
    id: 'business-website',
    name: 'Business Website',
    category: 'website',
    price: 40000,
    setupFee: 20000,
    icon: 'desktop',
    description: 'Fast, modern, mobile-responsive website tailored to your brand identity.'
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    category: 'website',
    price: 12000,
    setupFee: 8000,
    icon: 'page',
    description: 'High-converting landing pages increase lead generation by up to 55%.'
  },
  {
    id: 'lead-generation-funnel',
    name: 'Lead Generation Funnel',
    category: 'website',
    price: 22000,
    setupFee: 10000,
    icon: 'funnel',
    description: 'Multi-step lead capture quizzes, calculators, and automated booking.'
  },
  {
    id: 'conversion-optimisation',
    name: 'Conversion Optimisation',
    category: 'website',
    price: 18000,
    setupFee: 8000,
    icon: 'target',
    description: 'Heatmaps, user recording analysis, and A/B split-testing.'
  },

  // Customer Engagement
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    category: 'engagement',
    price: 10000,
    setupFee: 5000,
    icon: 'mail',
    description: 'Targeted nurture sequences, weekly newsletters, and list hygiene.'
  },
  {
    id: 'sms-campaigns',
    name: 'SMS Campaigns',
    category: 'engagement',
    price: 12000,
    setupFee: 5000,
    icon: 'message',
    description: 'Direct high-open promotional broadcasts and instant booking confirmations.'
  },
  {
    id: 'whatsapp-marketing',
    name: 'WhatsApp Marketing',
    category: 'engagement',
    price: 18000,
    setupFee: 8000,
    icon: 'whatsapp',
    description: 'WhatsApp Business API verified broadcasting and click-to-chat automation.'
  },
  {
    id: 'customer-reactivation',
    name: 'Customer Reactivation',
    category: 'engagement',
    price: 15000,
    setupFee: 6000,
    icon: 'reactivation',
    description: 'Dormant database re-engagement campaigns that generate immediate cashflow.'
  },

  // AI & Automation
  {
    id: 'crm-setup',
    name: 'CRM Setup',
    category: 'automation',
    price: 20000,
    setupFee: 12000,
    icon: 'users',
    description: 'HubSpot, Zoho, or Pipedrive integration with sales pipeline stages.'
  },
  {
    id: 'marketing-automation',
    name: 'Marketing Automation',
    category: 'automation',
    price: 18000,
    setupFee: 10000,
    icon: 'gear',
    description: 'Zapier & Make automations that sync leads across email, CRM, and WhatsApp.'
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    category: 'automation',
    price: 22000,
    setupFee: 15000,
    icon: 'bot',
    description: '24/7 intelligent conversational bot trained on your products and pricing.'
  },
  {
    id: 'reporting-dashboard',
    name: 'Reporting Dashboard',
    category: 'automation',
    price: 15000,
    setupFee: 8000,
    icon: 'dashboard',
    description: 'Live Looker Studio executive dashboard tracking ROI, CAC, and leads.'
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    category: 'automation',
    price: 16000,
    setupFee: 8000,
    icon: 'workflow',
    description: 'Automated invoice generation, calendar bookings, and staff notifications.'
  }
];

export const CustomPackagePage: React.FC<CustomPackagePageProps> = ({
  onBackToHome,
  onRequestAudit
}) => {
  // Step state (1: Business Info, 2: Services, 3: Add-ons, 4: Summary, 5: Review & Submit)
  const [currentStep, setCurrentStep] = useState<number>(2);

  // Business info fields
  const [businessInfo, setBusinessInfo] = useState({
    businessName: 'Acme Interiors Ltd',
    industry: 'Home & Living',
    employeeCount: '11 – 50',
    website: '',
    primaryGoal: 'Generate more leads',
    contactName: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Selected services (Initialized with the 5 default services from design image)
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'social-media',
    'google-ads',
    'meta-ads',
    'business-website',
    'email-marketing'
  ]);

  // Selected add-ons
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Toggle single service
  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      setSelectedServiceIds(selectedServiceIds.filter(item => item !== id));
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  // Toggle all services
  const areAllServicesSelected = selectedServiceIds.length === allServicesList.length;
  const toggleSelectAll = () => {
    if (areAllServicesSelected) {
      setSelectedServiceIds([]);
    } else {
      setSelectedServiceIds(allServicesList.map(s => s.id));
    }
  };

  // Selected service objects
  const selectedServices = useMemo(() => {
    return allServicesList.filter(s => selectedServiceIds.includes(s.id));
  }, [selectedServiceIds]);

  // Monthly investment sum
  const monthlyTotal = useMemo(() => {
    return selectedServices.reduce((sum, s) => sum + s.price, 0);
  }, [selectedServices]);

  // One-time setup fee
  const setupFeeTotal = useMemo(() => {
    // Proportional capped discount setup fee as in the mockup (e.g. 45,000)
    if (selectedServices.length === 0) return 0;
    const rawSetup = selectedServices.reduce((sum, s) => sum + s.setupFee, 0);
    return Math.min(rawSetup, 45000 + (selectedServices.length > 5 ? (selectedServices.length - 5) * 5000 : 0));
  }, [selectedServices]);

  // Handle final submission
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const leadRecord: AuditSubmissionRecord = {
      timestamp: new Date().toISOString(),
      fullName: businessInfo.contactName.trim() || 'Custom Package Lead',
      businessName: businessInfo.businessName.trim() || 'Custom Package SME',
      email: businessInfo.email.trim(),
      phoneCode: '+254',
      phone: businessInfo.phone.trim(),
      website: '',
      industry: businessInfo.industry || 'Other SME',
      primaryGoal: `Custom Package: ${selectedServices.map(s => s.name).join(', ')}`,
      challenges: selectedServices.map(s => s.name),
      marketingBudget: `KSh ${monthlyTotal.toLocaleString()} / mo (Setup: KSh ${setupFeeTotal.toLocaleString()})`,
      referralSource: 'Custom Package Builder',
      additionalNotes: businessInfo.notes?.trim() || `Selected ${selectedServices.length} services: ${selectedServices.map(s => s.name).join(', ')}`,
      status: 'Pending Audit'
    };

    const saved = saveLocalAuditLead(leadRecord);
    submitLeadToGoogleWebApp(saved).catch(console.error);

    // Trigger immediate toast notification
    setToast({
      type: 'success',
      title: 'Quote Request Submitted!',
      message: `Thank you! Your custom proposal for ${businessInfo.businessName || 'your business'} (KSh ${monthlyTotal.toLocaleString()}/mo) has been sent to our growth strategy team.`,
      duration: 6000
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      
      {/* Top Navigation */}
      <Navbar 
        activeSection="packages"
        onRequestAudit={onRequestAudit}
        onNavigate={(sectionId) => {
          if (sectionId === 'packages' || sectionId === 'services' || sectionId === 'home' || sectionId === 'how-it-works' || sectionId === 'about-us') {
            onBackToHome();
          }
        }}
      />

      {/* Hero Header for Custom Package Builder (Dark Navy matching design) */}
      <section className="bg-[#0B132B] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
        
        {/* Glowing backdrop elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
              Build Your Custom Package
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Select only the services your business needs. We'll instantly estimate your monthly investment and provide a tailored proposal.
            </p>
          </div>

          {/* Right Column: Isometric Connected Nodes Graphic */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center relative">
            <div className="relative w-64 h-48">
              {/* Central glow point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_25px_#3b82f6] animate-pulse" />
              
              {/* Dotted connection paths */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 200" fill="none">
                <path d="M60 40 L130 100 L200 40" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                <path d="M60 160 L130 100 L200 160" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                <path d="M60 40 L60 160" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
                <path d="M200 40 L200 160" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
              </svg>

              {/* Node 1: Top Left - Megaphone */}
              <div className="absolute top-2 left-6 bg-white rounded-xl p-3 shadow-lg shadow-blue-500/20 transform -rotate-3 hover:scale-110 transition-transform">
                <Send className="w-5 h-5 text-blue-600" />
              </div>

              {/* Node 2: Top Right - Analytics Chart */}
              <div className="absolute top-2 right-6 bg-white rounded-xl p-3 shadow-lg shadow-blue-500/20 transform rotate-6 hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>

              {/* Node 3: Bottom Left - User Avatar */}
              <div className="absolute bottom-2 left-6 bg-white rounded-xl p-3 shadow-lg shadow-blue-500/20 transform rotate-3 hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-blue-600" />
              </div>

              {/* Node 4: Bottom Right - Gear */}
              <div className="absolute bottom-2 right-6 bg-white rounded-xl p-3 shadow-lg shadow-blue-500/20 transform -rotate-6 hover:scale-110 transition-transform">
                <Settings className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content: Two Columns Layout (Left Options + Right Sticky Summary) */}
      <main className="flex-1 max-w-6xl w-full mx-auto py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Cards & Service Selector */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Card 1: Tell us about your business */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200/90">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                    Tell us about your business
                  </h2>
                  <p className="text-xs text-slate-500">
                    This helps us calibrate team sizing and ROI expectations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Business Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={businessInfo.businessName}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, businessName: e.target.value })}
                    placeholder="e.g. Acme Interiors Ltd"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Industry
                  </label>
                  <select
                    value={businessInfo.industry}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                  >
                    <option value="Home & Living">Home & Living</option>
                    <option value="Healthcare & Wellness">Healthcare & Wellness</option>
                    <option value="Real Estate & Property">Real Estate & Property</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="E-commerce & Retail">E-commerce & Retail</option>
                    <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                    <option value="Manufacturing & Logistics">Manufacturing & Logistics</option>
                    <option value="Technology / Software">Technology / Software</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Website (optional) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Website <span className="text-slate-600 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={businessInfo.website}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, website: e.target.value })}
                    placeholder="www.yourwebsite.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Primary Goal */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Primary Goal
                  </label>
                  <select
                    value={businessInfo.primaryGoal}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, primaryGoal: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                  >
                    <option value="Generate more leads">Generate more leads</option>
                    <option value="Increase online conversions">Increase online conversions</option>
                    <option value="Automate sales & CRM followups">Automate sales & CRM followups</option>
                    <option value="Reactivate dormant clients">Reactivate dormant clients</option>
                    <option value="Full brand repositioning">Full brand repositioning</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Card 2: Choose your services */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200/90">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                    2
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                      Choose your services
                    </h2>
                    <p className="text-xs text-slate-500">
                      Select the services you need. You can add or remove anytime.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={toggleSelectAll}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {areAllServicesSelected ? 'Deselect All' : 'Select All'}
                </button>
              </div>

              {/* 5 Categorized Service Columns / Grid */}
              <div className="space-y-6">
                
                {/* Top Row: 3 Categories (Digital Marketing, Advertising, Website & Conversion) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Category 1: Digital Marketing */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/70 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-3">
                        Digital Marketing
                      </h3>
                      <div className="space-y-2.5">
                        {allServicesList.filter(s => s.category === 'digital-marketing').map((srv) => {
                          const isChecked = selectedServiceIds.includes(srv.id);
                          return (
                            <label
                              key={srv.id}
                              className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                                isChecked ? 'bg-blue-50/80' : 'hover:bg-slate-100/70'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleService(srv.id)}
                                className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                              />
                              <div className="text-xs">
                                <span className={`font-semibold block ${isChecked ? 'text-blue-950 font-bold' : 'text-slate-800'}`}>
                                  {srv.name}
                                </span>
                                {srv.brandBadges && (
                                  <div className="flex items-center gap-1.5 mt-1 text-slate-500">
                                    <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold">f</span>
                                    <span className="w-3.5 h-3.5 rounded-full bg-pink-600 text-white flex items-center justify-center text-[8px] font-bold">ig</span>
                                    <span className="w-3.5 h-3.5 rounded-full bg-black text-white flex items-center justify-center text-[8px] font-bold">tk</span>
                                  </div>
                                )}
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Advertising */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/70 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-3">
                        Advertising
                      </h3>
                      <div className="space-y-2.5">
                        {allServicesList.filter(s => s.category === 'advertising').map((srv) => {
                          const isChecked = selectedServiceIds.includes(srv.id);
                          return (
                            <label
                              key={srv.id}
                              className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                                isChecked ? 'bg-blue-50/80' : 'hover:bg-slate-100/70'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleService(srv.id)}
                                className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                              />
                              <div className="text-xs flex items-center gap-2">
                                {srv.id === 'google-ads' && (
                                  <span className="w-4 h-4 flex items-center justify-center font-black text-blue-500">G</span>
                                )}
                                {srv.id === 'meta-ads' && (
                                  <span className="w-4 h-4 flex items-center justify-center font-bold text-[#0081FB]">∞</span >
                                )}
                                {srv.id === 'tiktok-ads' && (
                                  <span className="w-4 h-4 flex items-center justify-center font-bold text-slate-900">♪</span>
                                )}
                                {srv.id === 'linkedin-ads' && (
                                  <span className="w-4 h-4 flex items-center justify-center font-bold text-[#0A66C2]">in</span>
                                )}
                                <span className={`font-semibold ${isChecked ? 'text-blue-950 font-bold' : 'text-slate-800'}`}>
                                  {srv.name}
                                </span>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Category 3: Website & Conversion */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/70 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-3">
                        Website & Conversion
                      </h3>
                      <div className="space-y-2.5">
                        {allServicesList.filter(s => s.category === 'website').map((srv) => {
                          const isChecked = selectedServiceIds.includes(srv.id);
                          return (
                            <label
                              key={srv.id}
                              className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                                isChecked ? 'bg-blue-50/80' : 'hover:bg-slate-100/70'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleService(srv.id)}
                                className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                              />
                              <div className="text-xs flex items-center gap-2">
                                {srv.id === 'business-website' && <Globe className="w-4 h-4 text-blue-600" />}
                                {srv.id === 'landing-page' && <FileText className="w-4 h-4 text-blue-600" />}
                                {srv.id === 'lead-generation-funnel' && <Filter className="w-4 h-4 text-slate-500" />}
                                {srv.id === 'conversion-optimisation' && <TrendingUp className="w-4 h-4 text-slate-500" />}
                                <span className={`font-semibold ${isChecked ? 'text-blue-950 font-bold' : 'text-slate-800'}`}>
                                  {srv.name}
                                </span>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Row: 2 Categories (Customer Engagement, AI & Automation) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Category 4: Customer Engagement */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/70">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 mb-3">
                      Customer Engagement
                    </h3>
                    <div className="space-y-2.5">
                      {allServicesList.filter(s => s.category === 'engagement').map((srv) => {
                        const isChecked = selectedServiceIds.includes(srv.id);
                        return (
                          <label
                            key={srv.id}
                            className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                              isChecked ? 'bg-emerald-50/80' : 'hover:bg-slate-100/70'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleService(srv.id)}
                              className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
                            />
                            <div className="text-xs flex items-center gap-2">
                              {srv.id === 'email-marketing' && <Mail className="w-4 h-4 text-emerald-600" />}
                              {srv.id === 'sms-campaigns' && <MessageSquare className="w-4 h-4 text-emerald-600" />}
                              {srv.id === 'whatsapp-marketing' && <MessageCircle className="w-4 h-4 text-emerald-600" />}
                              {srv.id === 'customer-reactivation' && <RotateCw className="w-4 h-4 text-slate-500" />}
                              <span className={`font-semibold ${isChecked ? 'text-emerald-950 font-bold' : 'text-slate-800'}`}>
                                {srv.name}
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Category 5: AI & Automation */}
                  <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/70">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-purple-600 mb-3">
                      AI & Automation
                    </h3>
                    <div className="space-y-2.5">
                      {allServicesList.filter(s => s.category === 'automation').map((srv) => {
                        const isChecked = selectedServiceIds.includes(srv.id);
                        return (
                          <label
                            key={srv.id}
                            className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                              isChecked ? 'bg-purple-50/80' : 'hover:bg-slate-100/70'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleService(srv.id)}
                              className="mt-0.5 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-slate-300 cursor-pointer"
                            />
                            <div className="text-xs flex items-center gap-2">
                              {srv.id === 'crm-setup' && <Users className="w-4 h-4 text-purple-600" />}
                              {srv.id === 'marketing-automation' && <Settings className="w-4 h-4 text-slate-500" />}
                              {srv.id === 'ai-chatbot' && <Bot className="w-4 h-4 text-slate-500" />}
                              {srv.id === 'reporting-dashboard' && <BarChart3 className="w-4 h-4 text-slate-500" />}
                              {srv.id === 'workflow-automation' && <GitFork className="w-4 h-4 text-slate-500" />}
                              <span className={`font-semibold ${isChecked ? 'text-purple-950 font-bold' : 'text-slate-800'}`}>
                                {srv.name}
                              </span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>

              {/* Get A Quote Button */}
              <div className="flex justify-end mt-8 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(4);
                    setTimeout(() => {
                      const quoteForm = document.getElementById('quote-form-section');
                      if (quoteForm) {
                        quoteForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Get A Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Additional Step 3: Add-ons & Extra Scaling Modules */}
            {currentStep >= 3 && (
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200/90 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                      Recommended Growth Add-ons
                    </h2>
                    <p className="text-xs text-slate-500">
                      Supercharge your package with specialized execution modules.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div 
                    onClick={() => {
                      if (selectedAddons.includes('speed-audit')) {
                        setSelectedAddons(selectedAddons.filter(a => a !== 'speed-audit'));
                      } else {
                        setSelectedAddons([...selectedAddons, 'speed-audit']);
                      }
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedAddons.includes('speed-audit')
                        ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-sm text-slate-900">48-Hour Rapid Setup Sprint</h4>
                      <span className="text-xs font-bold text-blue-600">+ KSh 15,000</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Priority onboarding team bypasses the queue to launch all campaigns within 48 hours.
                    </p>
                  </div>

                  <div 
                    onClick={() => {
                      if (selectedAddons.includes('crm-migration')) {
                        setSelectedAddons(selectedAddons.filter(a => a !== 'crm-migration'));
                      } else {
                        setSelectedAddons([...selectedAddons, 'crm-migration']);
                      }
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedAddons.includes('crm-migration')
                        ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-sm text-slate-900">Legacy Contact Cleanse</h4>
                      <span className="text-xs font-bold text-blue-600">+ KSh 8,000</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Cleanse, deduplicate, and verify deliverability for up to 10,000 past email & phone records.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <span>Proceed to Proposal Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4 & 5: Submission & Review Details */}
            {currentStep >= 4 && (
              <div id="quote-form-section" className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200/90 animate-in fade-in duration-300">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                      Review & Submit Custom Proposal
                    </h2>
                    <p className="text-xs text-slate-500">
                      Where should our senior growth partner send the full breakdown & agreement?
                    </p>
                  </div>
                </div>

                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Kamau"
                        value={businessInfo.contactName}
                        onChange={(e) => setBusinessInfo({ ...businessInfo, contactName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@acmeinteriors.com"
                        value={businessInfo.email}
                        onChange={(e) => setBusinessInfo({ ...businessInfo, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone / WhatsApp <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+254 700 000 000"
                        value={businessInfo.phone}
                        onChange={(e) => setBusinessInfo({ ...businessInfo, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Specific requirements or current bottlenecks
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. We want to scale our Instagram and Google Search ads while setting up WhatsApp automations for our 3 showrooms."
                      value={businessInfo.notes}
                      onChange={(e) => setBusinessInfo({ ...businessInfo, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || selectedServices.length === 0}
                      className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Generating custom proposal...</span>
                      ) : (
                        <>
                          <span>Submit Custom Proposal Request (KSh {monthlyTotal.toLocaleString()}/mo)</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Need Help Choosing Callout Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Need help choosing the right services?
                  </h4>
                  <p className="text-xs text-slate-500">
                    Book a free consultation with our growth experts.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/254700000000?text=Hi%20Aceso%20Solutions,%20I%20need%20help%20building%20my%20custom%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                Book a Call
              </a>
            </div>

          </div>

          {/* Right Column: Static / Sticky Summary Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start space-y-6 z-20">
            
            {/* Card 1: Your Package Summary */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/90 max-h-[calc(100vh-7.5rem)] flex flex-col">
              
              <div className="flex items-center justify-between mb-4 shrink-0">
                <h3 className="text-lg font-black text-slate-900">
                  Your Package
                </h3>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  {selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'} selected
                </span>
              </div>

              {/* Selected Services Itemized List (Scrolls cleanly if long) */}
              <div className="space-y-2.5 mb-5 overflow-y-auto pr-1 flex-1 min-h-[100px] max-h-[220px]">
                {selectedServices.length === 0 ? (
                  <div className="text-center py-6 text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl px-4">
                    No services selected yet. Pick services from the left to calculate your plan.
                  </div>
                ) : (
                  selectedServices.map((srv) => (
                    <div key={srv.id} className="flex items-center justify-between text-xs sm:text-sm group bg-slate-50/60 p-2 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span className="text-slate-800 font-semibold truncate text-xs">
                          {srv.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-bold text-slate-900 text-xs">
                          KSh {srv.price.toLocaleString()}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleService(srv.id)}
                          className="text-slate-400 hover:text-red-500 p-0.5 rounded transition-colors cursor-pointer"
                          title="Remove service"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Totals Section */}
              <div className="pt-4 border-t border-slate-100 space-y-3.5 shrink-0">
                
                {/* Estimated Monthly Investment */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                    <span>Estimated Monthly Investment</span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
                    KSh {monthlyTotal.toLocaleString()}
                    <span className="text-xs font-bold text-slate-400 ml-1">/mo</span>
                  </div>
                </div>

                {/* One-time Setup Fee */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                    <span>One-time Setup Fee</span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900">
                    KSh {setupFeeTotal.toLocaleString()}
                  </div>
                </div>

                {/* Included Standard Perks (Light Green Box matching design) */}
                <div className="bg-emerald-50/60 rounded-xl p-3.5 border border-emerald-100 space-y-1.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                    <span>Strategy & campaign planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                    <span>Monthly performance reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                    <span>Ongoing optimization</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Mobile Sticky Floating Summary Bar (Visible only on < lg screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
              <span>Your Package</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-blue-600 font-bold">{selectedServices.length} selected</span>
            </div>
            <div className="text-base font-black text-slate-900 leading-tight">
              KSh {monthlyTotal.toLocaleString()}
              <span className="text-[11px] font-normal text-slate-500 ml-1">/mo</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setCurrentStep(4);
              setTimeout(() => {
                const quoteForm = document.getElementById('quote-form-section');
                if (quoteForm) {
                  quoteForm.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <span>Get A Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Footer without the top accelerate CTA banner */}
      <Footer 
        onNavigate={onBackToHome}
        onRequestAudit={onRequestAudit}
        hideTopBanner={true}
      />

      {/* Immediate Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Submission Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 text-center shadow-2xl border border-slate-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">
              Custom Proposal Generated!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Thank you! Our growth lead has received your custom configuration for <strong>{businessInfo.businessName}</strong> ({selectedServices.length} services totaling <strong>KSh {monthlyTotal.toLocaleString()}/mo</strong>).
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onBackToHome();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
