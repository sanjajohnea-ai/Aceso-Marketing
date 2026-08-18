import React from 'react';

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export const processStepsData: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: "We analyse your current marketing setup, competitors, and growth opportunities — then build a clear picture of what's working and what isn't.",
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description: 'A bespoke marketing plan aligned to your business goals, with prioritised actions and realistic targets for the first 90 days.',
  },
  {
    number: '03',
    title: 'Build & Launch',
    description: 'We set up campaigns, automations, and tracking infrastructure — then launch with precision and monitor performance from day one.',
  },
  {
    number: '04',
    title: 'Optimise & Scale',
    description: 'Continuous testing, reporting, and iteration. We refine what works and scale it — keeping you informed every step of the way.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Section Header */}
      <div className="text-left mb-6 sm:mb-8 w-full">
        {/* Eyebrow */}
        <div className="text-xs font-bold uppercase tracking-wider text-[#3b82f6] mb-2 sm:mb-3">
          HOW WE WORK
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 tracking-tight leading-[1.18] mb-3 sm:mb-4">
          A clear process. No<br className="hidden sm:inline" /> guesswork.
        </h2>

        {/* Subheading */}
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg w-full leading-relaxed">
          From first call to ongoing partnership — here's how we build and scale your marketing engine.
        </p>
      </div>

      {/* 2x2 Grid of 4 Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
        {processStepsData.map((step) => (
          <div
            key={step.number}
            className="bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 sm:p-8 flex items-start gap-5 sm:gap-7 transition-all duration-200 shadow-xs hover:shadow-md"
          >
            {/* Faded Serif Number */}
            <span className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#c7d5e6] select-none shrink-0 leading-none pt-0.5">
              {step.number}
            </span>

            {/* Content */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
