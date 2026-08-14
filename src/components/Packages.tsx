import React, { useState } from 'react';
import { 
  Send, 
  BarChart2, 
  Crown, 
  SlidersHorizontal, 
  Check, 
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PackageItem } from '../types';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenCustomBuilder: () => void;
}

export const packagesData: PackageItem[] = [
  {
    id: 'starter',
    name: 'Starter',
    iconType: 'starter',
    description: 'Perfect for businesses getting started with digital growth.',
    price: 'KSh 25,000',
    period: '/month',
    accentColor: 'blue',
    buttonText: 'View Details',
    buttonVariant: 'outline-blue',
    features: [
      'Social media management',
      'Content creation',
      'Basic strategy',
      'Monthly performance report'
    ],
    fullFeatures: [
      '2 Social Media Platforms (Facebook & Instagram)',
      '12 Custom High-Quality Graphic Posts/month',
      'Curated Industry Hashtags & Captions',
      'Target Audience & Competitor Analysis',
      'Monthly Zoom Performance Review & KPI Deck',
      'Dedicated Social Media Manager'
    ],
    idealFor: 'Small businesses and emerging service providers looking to build a consistent online presence.',
    timeline: 'Onboarding in 3 business days'
  },
  {
    id: 'growth',
    name: 'Growth',
    iconType: 'growth',
    description: 'Ideal for businesses ready to generate more leads & sales.',
    price: 'KSh 50,000',
    period: '/month',
    accentColor: 'green',
    buttonText: 'View Details',
    buttonVariant: 'outline-green',
    features: [
      'Everything in Starter',
      'Paid advertising',
      'Landing pages',
      'WhatsApp integration',
      'Performance reporting'
    ],
    fullFeatures: [
      'Everything in Starter Package',
      'Meta & Google Search Ads Management (Up to KSh 200K ad spend)',
      '1 High-Converting Landing Page with A/B testing',
      'WhatsApp Business Automation & Click-to-Chat Funnels',
      'Bi-Weekly Strategy & Optimization Sprints',
      'Conversion Rate Tracking & Pixel Setup'
    ],
    idealFor: 'Growing businesses ready to generate predictable inbound customer inquiries.',
    timeline: 'Onboarding & Funnel Live in 7 business days'
  },
  {
    id: 'scale',
    name: 'Scale',
    iconType: 'scale',
    description: 'For businesses ready to automate, retain & scale with confidence.',
    price: 'KSh 100,000',
    period: '/month',
    accentColor: 'purple',
    buttonText: 'View Details',
    buttonVariant: 'outline-purple',
    features: [
      'Everything in Growth',
      'Marketing automation',
      'Email & SMS campaigns',
      'Customer reactivation',
      'Advanced analytics'
    ],
    fullFeatures: [
      'Everything in Growth Package',
      'Full CRM & Workflow Integration (HubSpot/Zoho/Zapier)',
      'Monthly Multi-Channel Email & SMS Broadcasts',
      'Automated Lead Nurturing & Abandoned Inquiry Recovery',
      'Past-Customer Database Reactivation Playbook',
      'Live Executive Analytics Dashboard with ROI tracking',
      'Priority 24/7 Slack / WhatsApp Support Line'
    ],
    idealFor: 'Established SMEs seeking hands-off, end-to-end customer acquisition and automation systems.',
    timeline: 'Full System Rollout in 10 business days'
  },
  {
    id: 'custom',
    name: 'Custom Package',
    iconType: 'custom',
    description: 'Select the individual services you need and get a custom price.',
    price: 'Custom',
    period: '',
    isPopular: false,
    isCustom: true,
    accentColor: 'slate',
    buttonText: 'Build My Package',
    buttonVariant: 'solid-dark',
    features: [
      'Choose your services',
      'Get a custom quote',
      'Pay for what you need'
    ],
    fullFeatures: [
      'A la carte service selection',
      'Enterprise and multi-location custom terms',
      'Dedicated growth team assigned to your brand',
      'Custom API & ERP Integrations',
      'Volume pricing on ad spend & message broadcasts'
    ],
    idealFor: 'Businesses with specialized technical workflows or multi-channel expansion needs.',
    timeline: 'Custom proposal delivered in 24 hours'
  }
];

export const Packages: React.FC<PackagesProps> = ({ 
  onSelectPackage, 
  onOpenCustomBuilder 
}) => {
  const [activeMobileTab, setActiveMobileTab] = useState<string>('growth');

  const renderPackageCard = (pkg: PackageItem) => {
    const isCustom = pkg.isCustom;

    return (
      <div
        key={pkg.id}
        className={`bg-white rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 border flex flex-col justify-between transition-all duration-200 relative ${
          isCustom 
            ? 'border-slate-300 ring-1 ring-slate-200' 
            : 'border-slate-100'
        }`}
      >
        {/* Badge for Custom */}
        {isCustom && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
            MOST FLEXIBLE
          </div>
        )}

        <div>
          {/* Header Icon */}
          <div className="mb-4">
            {pkg.iconType === 'starter' && (
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Send className="w-5 h-5" />
              </div>
            )}
            {pkg.iconType === 'growth' && (
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
            )}
            {pkg.iconType === 'scale' && (
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Crown className="w-5 h-5" />
              </div>
            )}
            {pkg.iconType === 'custom' && (
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
            )}
          </div>

          {/* Package Name */}
          <h3 className="text-xl font-extrabold text-slate-900 mb-1.5">
            {pkg.name}
          </h3>

          {/* Short Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 min-h-[38px]">
            {pkg.description}
          </p>

          {/* Price Display */}
          {!isCustom ? (
            <div className="mb-5 pb-4 border-b border-slate-100">
              <span className="text-[11px] text-slate-500 font-medium block">From</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {pkg.price}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {pkg.period}
                </span>
              </div>
            </div>
          ) : (
            <div className="mb-5 pb-4 border-b border-slate-100 min-h-[50px] flex flex-col justify-end">
              <span className="text-[11px] text-slate-500 font-medium block">Custom pricing</span>
              <span className="text-xl font-bold text-slate-900">
                Tailored to You
              </span>
            </div>
          )}

          {/* Features List */}
          <div className="space-y-2 mb-6">
            {pkg.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-blue-600">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-slate-700 font-medium leading-tight">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          {isCustom ? (
            <button
              id="package-custom-builder-btn"
              onClick={onOpenCustomBuilder}
              className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer active:scale-[0.99]"
            >
              {pkg.buttonText}
            </button>
          ) : (
            <button
              id={`package-${pkg.id}-details-btn`}
              onClick={() => onSelectPackage(pkg)}
              className={`w-full py-2.5 px-4 rounded-lg border font-semibold text-xs sm:text-sm transition-all cursor-pointer active:scale-[0.99] ${
                pkg.buttonVariant === 'outline-blue'
                  ? 'border-blue-200 text-blue-600 hover:bg-blue-50/70 hover:border-blue-300'
                  : pkg.buttonVariant === 'outline-green'
                  ? 'border-emerald-200 text-emerald-700 hover:bg-emerald-50/70 hover:border-emerald-300'
                  : 'border-purple-200 text-purple-700 hover:bg-purple-50/70 hover:border-purple-300'
              }`}
            >
              {pkg.buttonText}
            </button>
          )}
        </div>

      </div>
    );
  };

  return (
    <section id="packages" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
          OUR PACKAGES
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Choose the package that fits your goals
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-xl mx-auto mt-2 sm:mt-3">
          Transparent, ROI-focused plans with zero hidden fees and no long-term lock-ins.
        </p>
      </div>

      {/* Mobile Segmented Tab Selector (Screens < 768px) */}
      <div className="md:hidden mb-6">
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
          {packagesData.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActiveMobileTab(pkg.id)}
              className={`flex-1 py-2 px-1 text-center rounded-lg transition-all ${
                activeMobileTab === pkg.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Card View (< md) */}
      <div className="md:hidden">
        {packagesData
          .filter((pkg) => pkg.id === activeMobileTab)
          .map((pkg) => renderPackageCard(pkg))}
      </div>

      {/* Desktop/Tablet 4-Column Grid (>= md) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {packagesData.map((pkg) => renderPackageCard(pkg))}
      </div>

      {/* Trust & Policy Micro-Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-700">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-blue-50" />
          </div>
          <span>No long-term contracts</span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-blue-50" />
          </div>
          <span>Cancel anytime</span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-blue-50" />
          </div>
          <span>Scalable as you grow</span>
        </div>
      </div>

    </section>
  );
};
