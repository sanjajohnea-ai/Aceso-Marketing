import React from 'react';
import { 
  ClipboardCheck, 
  Search, 
  Lightbulb, 
  Settings, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Request Free Audit',
    description: 'Tell us about your business and your goals.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-600',
    iconType: 'audit',
  },
  {
    step: '02',
    title: 'We Analyze',
    description: 'We audit your current marketing and identify growth opportunities.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500',
    iconType: 'analyze',
  },
  {
    step: '03',
    title: 'Get Recommendations',
    description: 'We share a clear, tailored plan to help you grow.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-600',
    iconType: 'recommend',
  },
  {
    step: '04',
    title: 'We Implement',
    description: 'Our team executes the plan and sets everything up.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-500',
    iconType: 'implement',
  },
  {
    step: '05',
    title: 'You Grow',
    description: 'We monitor, optimize, and help you scale.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-600',
    iconType: 'grow',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
          OUR PROCESS
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          A simple process. Real results.
        </h2>
      </div>

      {/* 5-Step Process Stepper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 relative">
        {processSteps.map((step, idx) => {
          return (
            <div 
              key={idx} 
              className="flex sm:flex-col items-center sm:items-center text-left sm:text-center p-3.5 sm:p-0 bg-white sm:bg-transparent rounded-xl sm:rounded-none border sm:border-0 border-slate-100 shadow-2xs sm:shadow-none gap-4 sm:gap-0 relative group"
            >
              
              {/* Top Numbered Pill + Icon Circle Container */}
              <div className="relative sm:mb-5 flex items-center justify-center shrink-0">
                
                {/* Number Badge */}
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${step.bgColor} text-white font-extrabold text-[11px] sm:text-xs flex items-center justify-center shadow-md ring-4 ring-white z-10`}>
                  {step.step}
                </div>

                {/* Subdued Icon Circle behind or underneath */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 ml-1.5 sm:ml-2 group-hover:scale-105 transition-transform">
                  {step.iconType === 'audit' && <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />}
                  {step.iconType === 'analyze' && <Search className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />}
                  {step.iconType === 'recommend' && <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />}
                  {step.iconType === 'implement' && <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />}
                  {step.iconType === 'grow' && <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />}
                </div>

                {/* Dotted connector arrow between steps (hidden on mobile and last item) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 w-12 z-0">
                    <div className="w-full border-t-2 border-dotted border-slate-300" />
                    <div className="w-1.5 h-1.5 border-t-2 border-r-2 border-slate-400 rotate-45 -ml-1" />
                  </div>
                )}
              </div>

              {/* Step Copy */}
              <div className="flex-1 sm:flex-none">
                {/* Step Title */}
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-0.5 sm:mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
