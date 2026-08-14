import React, { useState } from 'react';
import { 
  ArrowRight, 
  Target, 
  BarChart3, 
  FileText, 
  FileCheck2, 
  ChevronDown, 
  TrendingUp, 
  ExternalLink,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  Building
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onRequestAudit: () => void;
  onViewPackages: () => void;
  onOpenLeadModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestAudit,
  onViewPackages,
  onOpenLeadModal,
}) => {
  const [timeframe, setTimeframe] = useState<'30d' | '3m' | '6m' | '1y'>('6m');
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(5); // Default Jun

  // Timeframe datasets
  const datasets = {
    '30d': {
      label: 'Last 30 Days',
      leads: '480',
      leadsChange: '+34%',
      conversions: '115',
      conversionsChange: '+24%',
      revenue: 'KSh 850K',
      revenueChange: '+28%',
      points: [
        { month: 'W1', value: 80, display: '80' },
        { month: 'W2', value: 160, display: '160' },
        { month: 'W3', value: 290, display: '290' },
        { month: 'W4', value: 480, display: '480' },
      ],
      peakVal: '480',
      peakMonth: 'W4'
    },
    '3m': {
      label: 'Last 3 Months',
      leads: '820',
      leadsChange: '+26%',
      conversions: '210',
      conversionsChange: '+19%',
      revenue: 'KSh 1.6M',
      revenueChange: '+20%',
      points: [
        { month: 'Apr', value: 340, display: '340' },
        { month: 'May', value: 580, display: '580' },
        { month: 'Jun', value: 820, display: '820' },
      ],
      peakVal: '820',
      peakMonth: 'Jun'
    },
    '6m': {
      label: 'Last 6 Months',
      leads: '1,250',
      leadsChange: '29%',
      conversions: '320',
      conversionsChange: '18%',
      revenue: 'KSh 2.4M',
      revenueChange: '22%',
      points: [
        { month: 'Jan', value: 280, display: '280' },
        { month: 'Feb', value: 420, display: '420' },
        { month: 'Mar', value: 610, display: '610' },
        { month: 'Apr', value: 590, display: '590' },
        { month: 'May', value: 890, display: '890' },
        { month: 'Jun', value: 1250, display: '1,250' },
      ],
      peakVal: '1,250',
      peakMonth: 'Jun'
    },
    '1y': {
      label: 'Last 12 Months',
      leads: '2,840',
      leadsChange: '+45%',
      conversions: '740',
      conversionsChange: '+32%',
      revenue: 'KSh 5.8M',
      revenueChange: '+38%',
      points: [
        { month: 'Q1', value: 450, display: '450' },
        { month: 'Q2', value: 890, display: '890' },
        { month: 'Q3', value: 1650, display: '1.65K' },
        { month: 'Q4', value: 2840, display: '2.84K' },
      ],
      peakVal: '2.84K',
      peakMonth: 'Q4'
    }
  };

  const currentData = datasets[timeframe];

  // SVG Chart path calculation for 6m
  const chartHeight = 140;
  const chartWidth = 380;
  const maxVal = 1500;

  const getCoordinates = (points: { month: string; value: number }[]) => {
    return points.map((p, idx) => {
      const x = (idx / (points.length - 1)) * (chartWidth - 40) + 20;
      const y = chartHeight - (p.value / maxVal) * (chartHeight - 30) - 15;
      return { x, y };
    });
  };

  const coords = getCoordinates(currentData.points);

  // Generate smooth SVG bezier curve
  const createSmoothPath = (pts: { x: number; y: number }[]) => {
    if (pts.length === 0) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? 0 : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  const linePath = createSmoothPath(coords);
  const areaPath = coords.length > 0
    ? `${linePath} L ${coords[coords.length - 1].x} ${chartHeight} L ${coords[0].x} ${chartHeight} Z`
    : '';

  return (
    <section className="relative pt-4 sm:pt-10 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle background decoration grid */}
      <div className="absolute top-10 right-0 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-gradient-to-bl from-blue-50/70 via-indigo-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Copy & Value Proposition */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.15] sm:leading-[1.12] tracking-tight mb-4 sm:mb-5">
            Digital solutions <br className="hidden sm:inline" />
            that drive <span className="text-blue-600">real growth</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-xl">
            We help small and medium-sized businesses attract more customers, reactivate existing ones, and automate their marketing for sustainable growth.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
            <button
              id="hero-request-audit-btn"
              onClick={onRequestAudit}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.99] cursor-pointer"
            >
              <span>Request Free Growth Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              id="hero-view-packages-btn"
              onClick={onViewPackages}
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-lg bg-white border border-blue-600 text-blue-600 hover:bg-blue-50/70 font-semibold text-sm sm:text-base transition-all shadow-xs active:scale-[0.99] cursor-pointer"
            >
              View Our Packages
            </button>
          </div>

          {/* 4 Trust & Guarantee Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-100 w-full text-slate-700 text-[11px] sm:text-xs font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="leading-tight">Strategy-first approach</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="leading-tight">Data-driven results</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="leading-tight">Transparent reporting</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <FileCheck2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="leading-tight">No long-term contracts</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Dashboard & Floating Lead Component */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
          
          {/* Subtle dot matrix background */}
          <div className="absolute -top-6 -right-6 w-36 sm:w-48 h-36 sm:h-48 opacity-30 bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:12px_12px] -z-10" />

          {/* Main Growth Overview Card */}
          <div className="w-full max-w-[490px] bg-white rounded-2xl p-4 sm:p-6 shadow-xl shadow-slate-200/60 border border-slate-100 relative">
            
            {/* Top Bar of Card */}
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h2 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900">
                Growth Overview
              </h2>

              {/* Timeframe Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowTimeframeDropdown(!showTimeframeDropdown)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{currentData.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {showTimeframeDropdown && (
                  <div className="absolute right-0 mt-1.5 w-36 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-30 text-xs">
                    {(['30d', '3m', '6m', '1y'] as const).map((tf) => (
                      <button
                        key={tf}
                        onClick={() => {
                          setTimeframe(tf);
                          setShowTimeframeDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 hover:bg-blue-50 transition-colors ${
                          timeframe === tf ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-slate-700'
                        }`}
                      >
                        {datasets[tf].label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 3 Metric Summary Boxes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {/* Total Leads */}
              <div className="bg-slate-50/90 rounded-xl p-2 sm:p-3 border border-slate-100">
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block mb-0.5 sm:mb-1">Total Leads</span>
                <span className="text-sm sm:text-lg font-extrabold text-slate-900 block leading-tight">
                  {currentData.leads}
                </span>
                <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold text-emerald-600 mt-0.5 sm:mt-1">
                  ↑ {currentData.leadsChange}
                </span>
              </div>

              {/* Conversions */}
              <div className="bg-slate-50/90 rounded-xl p-2 sm:p-3 border border-slate-100">
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block mb-0.5 sm:mb-1">Conversions</span>
                <span className="text-sm sm:text-lg font-extrabold text-slate-900 block leading-tight">
                  {currentData.conversions}
                </span>
                <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold text-emerald-600 mt-0.5 sm:mt-1">
                  ↑ {currentData.conversionsChange}
                </span>
              </div>

              {/* Revenue */}
              <div className="bg-slate-50/90 rounded-xl p-2 sm:p-3 border border-slate-100">
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block mb-0.5 sm:mb-1">Revenue</span>
                <span className="text-sm sm:text-lg font-extrabold text-slate-900 block leading-tight">
                  {currentData.revenue}
                </span>
                <span className="inline-flex items-center text-[10px] sm:text-[11px] font-bold text-emerald-600 mt-0.5 sm:mt-1">
                  ↑ {currentData.revenueChange}
                </span>
              </div>
            </div>

            {/* Interactive SVG Chart */}
            <div className="relative pt-2 pb-1">
              
              {/* Peak Value Badge */}
              <div 
                className="absolute top-0 right-4 bg-blue-600 text-white font-bold text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-md flex items-center gap-1 z-10 animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                <span>{currentData.peakVal}</span>
              </div>

              {/* SVG Area and Line */}
              <div className="relative h-[130px] sm:h-[150px] w-full">
                {/* Y Axis Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-[9px] sm:text-[10px] text-slate-400 font-medium pointer-events-none select-none">
                  <div className="flex items-center w-full">
                    <span className="w-6 sm:w-7">1.5K</span>
                    <div className="flex-1 border-b border-dashed border-slate-100 ml-1" />
                  </div>
                  <div className="flex items-center w-full">
                    <span className="w-6 sm:w-7">1K</span>
                    <div className="flex-1 border-b border-dashed border-slate-100 ml-1" />
                  </div>
                  <div className="flex items-center w-full">
                    <span className="w-6 sm:w-7">500</span>
                    <div className="flex-1 border-b border-dashed border-slate-100 ml-1" />
                  </div>
                  <div className="flex items-center w-full">
                    <span className="w-6 sm:w-7">0</span>
                    <div className="flex-1 border-b border-slate-100 ml-1" />
                  </div>
                </div>

                {/* SVG Curve */}
                <svg className="w-full h-full overflow-visible pl-6 sm:pl-8" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="growthAreaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Shaded Area */}
                  <path d={areaPath} fill="url(#growthAreaGradient)" />

                  {/* Main Line */}
                  <path
                    d={linePath}
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Interactive points */}
                  {coords.map((pt, i) => (
                    <g key={i}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={i === coords.length - 1 ? 5 : 3.5}
                        className="fill-white stroke-blue-600 stroke-[2.5] hover:r-6 transition-all cursor-pointer"
                        onMouseEnter={() => setHoveredPoint(i)}
                      />
                      {i === coords.length - 1 && (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={10}
                          className="fill-blue-400 opacity-30 animate-ping"
                        />
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              {/* X Axis Labels */}
              <div className="flex justify-between pl-6 sm:pl-8 pr-2 mt-1 text-[10px] sm:text-[11px] text-slate-500 font-medium select-none">
                {currentData.points.map((p, idx) => (
                  <span 
                    key={idx} 
                    className={`cursor-pointer transition-colors ${
                      hoveredPoint === idx ? 'text-blue-600 font-bold' : 'hover:text-slate-800'
                    }`}
                    onClick={() => setHoveredPoint(idx)}
                  >
                    {p.month}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Floating Card: "New Lead - Sarah Wanjiku" (Positioned cleanly on bottom right) */}
          <div 
            onClick={onOpenLeadModal}
            className="absolute -bottom-5 sm:-bottom-8 right-2 sm:right-2 w-[185px] sm:w-[230px] bg-white rounded-xl p-2.5 sm:p-4 shadow-xl shadow-blue-900/15 border border-slate-100 z-20 hover:scale-[1.03] transition-transform duration-200 cursor-pointer group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">New Lead</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Lead Name & Info */}
            <div className="mb-1.5 sm:mb-2">
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-blue-600 transition-colors">
                Sarah Wanjiku
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                Consultation Enquiry
              </p>
            </div>

            {/* WhatsApp Badge */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md bg-[#25D366]/10 text-[#128C7E] font-semibold text-[10px] sm:text-[11px] mb-2 sm:mb-3">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-current" />
              </div>
              <span>WhatsApp</span>
            </div>

            {/* Details row */}
            <div className="hidden sm:flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-100 pt-2 mb-3">
              <div>
                <span className="text-slate-400 block">Lead Status</span>
                <span className="font-bold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">New</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block">Source</span>
                <span className="font-bold text-slate-800">Website</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              id="hero-view-lead-btn"
              onClick={(e) => {
                e.stopPropagation();
                onOpenLeadModal();
              }}
              className="w-full py-1 sm:py-1.5 px-2.5 sm:px-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[11px] sm:text-xs rounded-lg transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
            >
              <span>View Lead</span>
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
