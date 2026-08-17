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
    bgColor: 'bg-blue-50',
    iconType: 'audit',
  },
  {
    step: '02',
    title: 'We Analyze',
    description: 'We audit your current marketing and identify growth opportunities.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    iconType: 'analyze',
  },
  {
    step: '03',
    title: 'Get Recommendations',
    description: 'We share a clear, tailored plan to help you grow.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    iconType: 'recommend',
  },
  {
    step: '04',
    title: 'We Implement',
    description: 'Our team executes the plan and sets everything up.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    iconType: 'implement',
  },
  {
    step: '05',
    title: 'You Grow',
    description: 'We monitor, optimize, and help you scale.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    iconType: 'grow',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="py-6 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-5 sm:mb-8 lg:mb-10">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
          OUR PROCESS
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mt-1.5 sm:mt-2 leading-relaxed">
          From first audit to systematic execution, here is how we partner with your business to unlock predictable revenue growth.
        </p>
      </div>

      {/* 5-Step Process Stepper - Optimized for minimal mobile scroll with a clean responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-4 relative">
        {processSteps.map((step, idx) => {
          const isLastOnMobile = idx === processSteps.length - 1;
          return (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-100/90 shadow-xs hover:shadow-md transition-all group ${
                isLastOnMobile ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              
              {/* Icon Container (Numbers removed, leaving refined branded icons) */}
              <div className="relative mb-2.5 sm:mb-4 flex items-center justify-center">
                <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl ${step.bgColor} border border-slate-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                  {step.iconType === 'audit' && <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />}
                  {step.iconType === 'analyze' && <Search className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />}
                  {step.iconType === 'recommend' && <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />}
                  {step.iconType === 'implement' && <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />}
                  {step.iconType === 'grow' && <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />}
                </div>

                {/* Dotted connector arrow between steps on desktop */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 w-8 xl:w-12 z-0">
                    <div className="w-full border-t-2 border-dotted border-slate-300" />
                    <div className="w-1.5 h-1.5 border-t-2 border-r-2 border-slate-400 rotate-45 -ml-1" />
                  </div>
                )}
              </div>

              {/* Step Copy */}
              <div>
                {/* Step Title */}
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm lg:text-base mb-1 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-[200px]">
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
