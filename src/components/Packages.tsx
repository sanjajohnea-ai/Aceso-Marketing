import React, { useState } from 'react';
import { 
  CheckCircle2
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
    subBadge: 'Best for getting started',
    iconType: 'starter',
    description: 'Build your presence.',
    price: 'From KSh 10,000',
    period: '/month',
    accentColor: 'blue',
    buttonText: 'GET STARTED',
    buttonVariant: 'outline-blue',
    features: [
      '1 Social Platform (Instagram or Facebook, or TikTok)',
      '8 Custom Branded Posts per month (upto 6 reels)',
      'Monthly Content Calendar',
      'Social Media Strategy',
      'Short-Form Video Content - Basic editing of client-provided videos',
      'Strategic Caption & Hashtag Writing',
      'Optimal Peak-Time Scheduling & Publishing',
      'Community Comment & DM Monitoring Assistance',
      'Monthly Performance Report'
    ],
    fullFeatures: [
      '1 Social Platform (Instagram or Facebook, or TikTok)',
      '8 Custom Branded Posts per month (upto 6 reels)',
      'Monthly Content Calendar',
      'Social Media Strategy',
      'Short-Form Video Content - Basic editing of client-provided videos',
      'Strategic Caption & Hashtag Writing',
      'Optimal Peak-Time Scheduling & Publishing',
      'Community Comment & DM Monitoring Assistance',
      'Monthly Performance Report'
    ],
    idealFor: 'Small businesses and emerging service providers looking to build a consistent online presence.',
    timeline: 'Onboarding in 3 business days'
  },
  {
    id: 'growth',
    name: 'Growth',
    subBadge: 'Most popular',
    iconType: 'growth',
    description: 'Grow your reach and engagement.',
    price: 'From KSh 20,000',
    period: '/month',
    isPopular: true,
    accentColor: 'green',
    buttonText: 'GET STARTED',
    buttonVariant: 'outline-green',
    features: [
      'Everything in Starter',
      '12-16 Custom Branded Posts per month',
      '2 Social Platforms (Meta, TikTok or LinkedIn)',
      'Professional Photography & Videography',
      'Includes upto 3 on-location shoots',
      'Deeper + ongoing optimization strategy',
      'Paid Ads A/B Testing + Paid Advertising Management',
      'Weekly Performance Updates + Monthly Report'
    ],
    fullFeatures: [
      'Everything in Starter',
      '12-16 Custom Branded Posts per month',
      '2 Social Platforms (Meta, TikTok or LinkedIn)',
      'Professional Photography & Videography',
      'Includes upto 3 on-location shoots',
      'Deeper + ongoing optimization strategy',
      'Paid Ads A/B Testing + Paid Advertising Management',
      'Weekly Performance Updates + Monthly Report'
    ],
    idealFor: 'Growing businesses ready to expand audience reach and turn followers into paying clients.',
    timeline: 'Onboarding in 3 business days'
  },
  {
    id: 'custom',
    name: 'Custom',
    subBadge: 'Tailored to your needs',
    iconType: 'custom',
    description: 'Built around your goals.',
    price: 'Custom Pricing',
    period: '',
    isPopular: false,
    isCustom: true,
    accentColor: 'slate',
    buttonText: 'GET STARTED',
    buttonVariant: 'solid-dark',
    features: [
      'Custom Social Media Strategy',
      'Custom Platform Selection',
      'Custom Content Production',
      'Photography & Videography',
      'Paid Advertising',
      'Influencer Campaigns',
      'SEO',
      'Community Management',
      'Campaign Management',
      'Custom Reporting'
    ],
    fullFeatures: [
      'Custom Social Media Strategy',
      'Custom Platform Selection',
      'Custom Content Production',
      'Photography & Videography',
      'Paid Advertising',
      'Influencer Campaigns',
      'SEO',
      'Community Management',
      'Campaign Management',
      'Custom Reporting'
    ],
    idealFor: 'Businesses with specialized workflows, multi-channel goals, or unique service combinations.',
    timeline: 'Instant custom plan generation online'
  }
];

export const Packages: React.FC<PackagesProps> = ({ 
  onSelectPackage, 
  onOpenCustomBuilder 
}) => {
  const [activeMobileTab, setActiveMobileTab] = useState<string>('growth');

  const renderPackageCard = (pkg: PackageItem) => {
    const isCustom = pkg.isCustom;
    const isPopular = pkg.isPopular;

    return (
      <div
        key={pkg.id}
        className={`bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border flex flex-col justify-between relative group ${
          isPopular
            ? 'border-2 border-[#003B95] shadow-lg ring-4 ring-[#003B95]/5'
            : isCustom
            ? 'border border-slate-300 shadow-sm'
            : 'border border-slate-200 hover:border-slate-300'
        }`}
      >
        {/* Top Badges */}
        {isPopular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#003B95] text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm whitespace-nowrap z-10">
            MOST POPULAR
          </div>
        )}
        {isCustom && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm whitespace-nowrap z-10">
            MOST FLEXIBLE
          </div>
        )}

        <div className="flex flex-col flex-1">
          {/* Header section: Title, Sub-badge, and Description */}
          <div className="min-h-[96px] flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {pkg.name}
              </h3>
              {pkg.subBadge && (
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  isPopular
                    ? 'bg-blue-50 text-[#003B95]'
                    : isCustom
                    ? 'bg-slate-100 text-slate-700'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {pkg.subBadge}
                </span>
              )}
            </div>

            {/* 1-Line Description */}
            <p className="text-slate-600 text-sm font-medium leading-relaxed pt-1">
              {pkg.description}
            </p>
          </div>

          {/* Price Callout */}
          <div className="my-4 py-3.5 border-y border-slate-100 min-h-[64px] flex items-center">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#003B95] tracking-tight">
                {pkg.price}
              </span>
              {pkg.period && (
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  {pkg.period}
                </span>
              )}
            </div>
          </div>

          {/* Features Checklist */}
          <div className="space-y-2.5 mb-6 flex-1">
            {pkg.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#003B95] shrink-0 mt-0.5" />
                <span className="leading-snug font-medium text-slate-700">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Pinned to bottom */}
        <div className="mt-auto pt-2">
          {isCustom ? (
            <button
              id="package-custom-builder-btn"
              onClick={onOpenCustomBuilder}
              className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-[0.99] text-center"
            >
              {pkg.buttonText}
            </button>
          ) : isPopular ? (
            <button
              id={`package-${pkg.id}-details-btn`}
              onClick={() => onSelectPackage(pkg)}
              className="w-full py-3.5 px-6 rounded-xl bg-[#003B95] hover:bg-[#002D72] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-[0.99] text-center"
            >
              {pkg.buttonText}
            </button>
          ) : (
            <button
              id={`package-${pkg.id}-details-btn`}
              onClick={() => onSelectPackage(pkg)}
              className="w-full py-3.5 px-6 rounded-xl border-2 border-[#003B95] text-[#003B95] hover:bg-[#003B95] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer active:scale-[0.99] text-center bg-transparent"
            >
              {pkg.buttonText}
            </button>
          )}
        </div>

      </div>
    );
  };

  return (
    <section id="packages" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#003B95] mb-2">
          OUR SOCIAL MEDIA PACKAGES
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
          Choose the package that fits your goals
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
          Flexible plans for every stage of your business growth.
        </p>
      </div>

      {/* Mobile Segmented Tab Selector (Screens < 768px) */}
      <div className="md:hidden mb-5">
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

      {/* Desktop/Tablet 3-Column Grid (>= md) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
        {packagesData.map((pkg) => renderPackageCard(pkg))}
      </div>

      {/* Trust & Policy Micro-Badges */}
      <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 text-xs sm:text-sm font-semibold text-slate-700">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#003B95] shrink-0" />
          <span>No long-term contracts</span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#003B95] shrink-0" />
          <span>Cancel anytime</span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#003B95] shrink-0" />
          <span>Scalable as you grow</span>
        </div>
      </div>

    </section>
  );
};
