import React, { useState } from 'react';
import { 
  Check, 
  CheckCircle2
} from 'lucide-react';
import { PackageItem } from '../types';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenCustomBuilder: () => void;
}

export const packagesData: PackageItem[] = [
  {
    id: 'essential',
    name: 'Essential',
    subBadge: 'Best for getting started',
    iconType: 'essential',
    description: 'Build your presence and stay consistent online.',
    price: 'KSh 10,000',
    period: '/month',
    accentColor: 'blue',
    buttonText: 'View Details',
    buttonVariant: 'outline-blue',
    features: [
      '1 Social Platform',
      '8 Posts per month',
      'Basic graphics',
      'Caption writing & scheduling',
      'Monthly performance report',
      'Community management (Comments & DMs)'
    ],
    fullFeatures: [
      '1 Social Platform (Facebook or Instagram)',
      '8 Posts per month with custom branded visual assets',
      'Basic graphics & consistent color palette formatting',
      'Engaging caption writing & peak-time scheduling',
      'Monthly performance report & key metrics breakdown',
      'Community management (Comments & DMs response assistance)'
    ],
    idealFor: 'Small businesses and emerging service providers looking to build a consistent online presence.',
    timeline: 'Onboarding in 3 business days'
  },
  {
    id: 'growth',
    name: 'Growth',
    subBadge: 'Most popular',
    iconType: 'growth',
    description: 'Grow your audience and convert more customers.',
    price: 'KSh 20,000',
    period: '/month',
    isPopular: true,
    accentColor: 'green',
    buttonText: 'View Details',
    buttonVariant: 'outline-green',
    features: [
      '2 Social Platforms',
      '12–16 Posts per month',
      '4 Short-form videos',
      'Premium graphics',
      'Community management (Comments & DMs)',
      'Monthly strategy call',
      'Performance report'
    ],
    fullFeatures: [
      '2 Social Platforms (e.g. Meta & TikTok or LinkedIn)',
      '12–16 Posts per month tailored per platform',
      '4 High-retention short-form videos (Reels/TikToks)',
      'Premium graphics and custom brand templates',
      'Proactive community management (Comments & DMs)',
      'Monthly 1-on-1 strategy call with growth lead',
      'Detailed monthly performance report & recommendations'
    ],
    idealFor: 'Growing businesses ready to expand audience reach and turn followers into paying clients.',
    timeline: 'Onboarding in 3 business days'
  },
  {
    id: 'business',
    name: 'Business',
    subBadge: 'For serious growth',
    iconType: 'business',
    description: 'Advanced marketing to drive leads, sales and loyalty.',
    price: 'KSh 35,000',
    period: '/month',
    accentColor: 'purple',
    buttonText: 'View Details',
    buttonVariant: 'outline-purple',
    features: [
      'Up to 3 Social Platforms',
      '20 Posts per month',
      '8 Short-form videos',
      'Premium graphics & videos',
      'Community management (Comments, DMs & Reviews)',
      'Paid ads management (Meta or TikTok)',
      'Monthly strategy call & report'
    ],
    fullFeatures: [
      'Up to 3 Social Platforms',
      '20 High-impact posts per month',
      '8 Edited short-form videos with captions & audio trends',
      'Premium graphics, carousels & promotional assets',
      'Comprehensive community management (Comments, DMs & Reviews)',
      'Paid advertising management & budget optimization (Meta or TikTok)',
      'Monthly executive strategy call & deep-dive ROI report'
    ],
    idealFor: 'Established SMEs ready for rapid scaling, active lead generation, and paid customer acquisition.',
    timeline: 'Full system rollout in 5 business days'
  },
  {
    id: 'custom',
    name: 'Custom Package',
    subBadge: 'Tailored to your needs',
    iconType: 'custom',
    description: "Choose the exact services you need and we'll build the perfect plan for you.",
    price: 'Tailored to You',
    period: '',
    isPopular: false,
    isCustom: true,
    accentColor: 'slate',
    buttonText: 'Build My Package',
    buttonVariant: 'solid-dark',
    features: [
      'Choose your platforms',
      'Custom content volume',
      'Add paid advertising',
      'Automation & integrations',
      'Dedicated support',
      'Designed for your goals'
    ],
    fullFeatures: [
      'Interactive a la carte service selection',
      'Flexible platforms: Meta, TikTok, Google, LinkedIn & WhatsApp',
      'Custom content volume & dedicated video production sprints',
      'Targeted paid advertising & conversion tracking funnels',
      'Marketing automation, CRM sync & WhatsApp lead routing',
      'Dedicated account manager & transparent custom quote'
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

    return (
      <div
        key={pkg.id}
        className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-slate-200/60 border flex flex-col justify-between transition-all duration-300 relative group ${
          isCustom 
            ? 'border-slate-300 ring-1 ring-slate-200/80' 
            : 'border-slate-200/80 hover:border-slate-300'
        }`}
      >
        {/* Badge for Custom: MOST FLEXIBLE */}
        {isCustom && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full shadow-sm whitespace-nowrap z-10">
            MOST FLEXIBLE
          </div>
        )}

        <div>
          {/* Package Name */}
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1 sm:mb-2">
            {pkg.name}
          </h3>

          {/* Sub-badge pill below title */}
          {pkg.subBadge && (
            <div className="mb-2 sm:mb-3">
              <span className={`inline-block text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full ${
                pkg.iconType === 'essential' || pkg.iconType === 'starter'
                  ? 'bg-blue-50 text-blue-600'
                  : pkg.iconType === 'growth'
                  ? 'bg-emerald-50 text-emerald-600'
                  : pkg.iconType === 'business' || pkg.iconType === 'scale'
                  ? 'bg-purple-50 text-purple-600'
                  : 'bg-slate-100 text-slate-700'
              }`}>
                {pkg.subBadge}
              </span>
            </div>
          )}

          {/* Short Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6 sm:min-h-[44px]">
            {pkg.description}
          </p>

          {/* Price Display */}
          <div className="mb-3 sm:mb-6 pb-3 sm:pb-6 border-b border-slate-100 sm:min-h-[64px] flex flex-col justify-end">
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium block mb-0.5 sm:mb-1">From</span>
            {!isCustom ? (
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {pkg.price}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-normal">
                  {pkg.period}
                </span>
              </div>
            ) : (
              <span className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {pkg.price}
              </span>
            )}
          </div>

          {/* Features List with Blue Checkmarks */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
            {pkg.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-blue-600">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </div>
                <span className="text-slate-700 font-medium leading-normal">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-1 sm:pt-2">
          {isCustom ? (
            <button
              id="package-custom-builder-btn"
              onClick={onOpenCustomBuilder}
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer active:scale-[0.99] text-center"
            >
              {pkg.buttonText}
            </button>
          ) : (
            <button
              id={`package-${pkg.id}-details-btn`}
              onClick={() => onSelectPackage(pkg)}
              className={`w-full py-2.5 sm:py-3 px-4 rounded-xl border font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-[0.99] text-center ${
                pkg.buttonVariant === 'outline-blue'
                  ? 'border-blue-200 text-blue-600 hover:bg-blue-50/70 hover:border-blue-300'
                  : pkg.buttonVariant === 'outline-green'
                  ? 'border-emerald-200 text-emerald-600 hover:bg-emerald-50/70 hover:border-emerald-300'
                  : 'border-purple-200 text-purple-600 hover:bg-purple-50/70 hover:border-purple-300'
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
    <section id="packages" className="py-6 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-4 sm:mb-8 lg:mb-10">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 mb-1 sm:mb-2">
          OUR PACKAGES
        </p>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-1 sm:mb-2">
          Choose the package that fits your goals
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
          Flexible plans for every stage of your business growth.
        </p>
      </div>

      {/* Mobile Segmented Tab Selector (Screens < 768px) */}
      <div className="md:hidden mb-4">
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
          {packagesData.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActiveMobileTab(pkg.id)}
              className={`flex-1 py-1.5 px-1 text-center rounded-lg transition-all ${
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
      <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 text-xs sm:text-sm font-semibold text-slate-700">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>No long-term contracts</span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Cancel anytime</span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Scalable as you grow</span>
        </div>
      </div>

    </section>
  );
};
