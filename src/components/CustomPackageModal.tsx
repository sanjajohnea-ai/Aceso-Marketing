import React, { useState } from 'react';
import { X, Check, Calculator, Sparkles, Send, ArrowRight, MessageSquare } from 'lucide-react';
import { CustomServiceOption } from '../types';

interface CustomPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestWithCustomPlan: (customSummary: string) => void;
}

const availableServices: CustomServiceOption[] = [
  {
    id: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    category: 'Acquisition',
    basePrice: 20000,
    description: 'Ad campaign setup, targeted audiences, creatives, and weekly A/B testing.',
    icon: 'target'
  },
  {
    id: 'google-ads',
    name: 'Google Search & Maps Ads',
    category: 'Acquisition',
    basePrice: 25000,
    description: 'High-intent keyword bidding, negative keywords, local map pack visibility.',
    icon: 'search'
  },
  {
    id: 'landing-page',
    name: 'High-Converting Landing Page',
    category: 'Acquisition',
    basePrice: 20000,
    description: 'Custom mobile-first conversion design, copywriting, and WhatsApp integration.',
    icon: 'layout'
  },
  {
    id: 'whatsapp-bot',
    name: 'WhatsApp Business Automation Bot',
    category: 'Automation',
    basePrice: 18000,
    description: 'Automated 24/7 lead qualification, booking calendar, and instant replies.',
    icon: 'message'
  },
  {
    id: 'email-sms',
    name: 'Email & SMS Broadcast Sequences',
    category: 'Reactivation',
    basePrice: 15000,
    description: 'Targeted reactivation campaigns, abandoned quote follow-ups, deliverability setup.',
    icon: 'mail'
  },
  {
    id: 'crm-setup',
    name: 'CRM & Pipeline Integration',
    category: 'Automation',
    basePrice: 22000,
    description: 'HubSpot/Zoho/Pipedrive setup with Zapier and automated lead routing.',
    icon: 'settings'
  },
  {
    id: 'seo-content',
    name: 'Local SEO & Content Engine',
    category: 'Acquisition',
    basePrice: 18000,
    description: 'Google Business Profile ranking, on-page optimization, and 4 monthly articles.',
    icon: 'trending'
  },
  {
    id: 'reviews-engine',
    name: '5-Star Review & Reputation System',
    category: 'Reactivation',
    basePrice: 12000,
    description: 'Post-purchase review request loops to build trust on Google and Socials.',
    icon: 'star'
  }
];

export const CustomPackageModal: React.FC<CustomPackageModalProps> = ({
  isOpen,
  onClose,
  onRequestWithCustomPlan
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'meta-ads',
    'landing-page',
    'whatsapp-bot'
  ]);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateSubtotal = () => {
    return selectedServices.reduce((sum, id) => {
      const s = availableServices.find(item => item.id === id);
      return sum + (s ? s.basePrice : 0);
    }, 0);
  };

  const rawTotal = calculateSubtotal();
  const discountMultiplier = billingCycle === 'quarterly' ? 0.85 : 1; // 15% off for quarterly
  const finalPrice = Math.round(rawTotal * discountMultiplier);

  const handleProceed = () => {
    const serviceNames = selectedServices
      .map(id => availableServices.find(s => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    
    const summary = `Custom Plan (${selectedServices.length} services: ${serviceNames}) - Est: KSh ${finalPrice.toLocaleString()}/mo`;
    onRequestWithCustomPlan(summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 p-5 sm:p-6 flex items-center justify-between z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>CUSTOM PACKAGE CALCULATOR</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Build Your Custom Growth Package
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          <p className="text-sm text-slate-600">
            Pick the exact services your SME needs. Pay only for what moves the needle for your business goals.
          </p>

          {/* Billing Cycle Switch */}
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200/80">
            <span className="text-xs font-semibold text-slate-700">Billing Preference:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Monthly Plan
              </button>
              <button
                onClick={() => setBillingCycle('quarterly')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                  billingCycle === 'quarterly'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>Quarterly</span>
                <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.2 rounded font-black">Save 15%</span>
              </button>
            </div>
          </div>

          {/* Service Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {availableServices.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/40 shadow-xs ring-1 ring-blue-600'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        {service.category}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 leading-snug">
                        {service.name}
                      </h4>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                    <span className="text-slate-500 font-medium">Standard rate:</span>
                    <span className="font-extrabold text-slate-900">
                      KSh {service.basePrice.toLocaleString()} /mo
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer with dynamic calculation & CTA */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 block font-medium">
              Estimated Custom Investment ({selectedServices.length} services selected):
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                KSh {finalPrice.toLocaleString()}
              </span>
              <span className="text-xs font-semibold text-slate-500">/ month</span>
              {billingCycle === 'quarterly' && (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  15% off applied
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer w-1/2 sm:w-auto"
            >
              Cancel
            </button>
            <button
              onClick={handleProceed}
              disabled={selectedServices.length === 0}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer w-1/2 sm:w-auto disabled:opacity-50"
            >
              <span>Apply to Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
