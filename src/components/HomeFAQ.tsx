import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string | string[];
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are there any long-term contracts or cancellation fees?',
    answer: 'No. All our monthly management packages operate on a flexible month-to-month retainer. You can upgrade, pause, or cancel at any time with a simple 14-day notice.'
  },
  {
    id: 'faq-2',
    question: 'Is hiring a digital marketing agency worth it?',
    answer: [
      'Digital marketing requires more than posting on social media or running an occasional advert. It takes the right strategy, consistent execution, ongoing testing, and the ability to understand what the data is telling you. At Aceso Solutions, we bring social media marketing, SEO, and PPC advertising together to help you attract the right customers and turn your digital presence into a growth channel.',
      'Instead of spending your time trying to figure out what to post or which keywords to target, you have a dedicated team focused on making your marketing work harder for your business.',
      'With Aceso Solutions, you gain access to an entire team of specialists working together, each an expert in their field, which is usually more cost-effective than hiring and manage in-house.'
    ]
  },
  {
    id: 'faq-3',
    question: 'How will I know if my marketing is actually working?',
    answer: 'We measure your marketing against the business outcomes that matter. Depending on your goals, we track website traffic, search visibility, social engagement, enquiries, leads, conversions, and advertising performance. You receive clear performance reports showing what we have done, what happened as a result, and where we see opportunities to improve.'
  },
  {
    id: 'faq-4',
    question: 'What kind of ROI can I expect?',
    answer: 'Your return depends on your industry, competition, offer, pricing, audience, website, sales process, and marketing investment. We establish clear targets from the beginning and continuously measure your performance against them, using data to shift our focus toward what is producing the strongest results over time.'
  },
  {
    id: 'faq-5',
    question: 'How quickly should I expect to see results?',
    answer: 'PPC can start generating clicks, enquiries, and valuable performance data relatively quickly. Social media marketing builds awareness and engagement as content gains traction, while SEO typically requires more time to establish authority and improve search visibility. We monitor early signals throughout the engagement while building toward sustainable customer acquisition.'
  },
  {
    id: 'faq-6',
    question: "What happens if my marketing isn't performing?",
    answer: 'Marketing is a continuous process of testing, learning, and improving. If something is not delivering expected results, we investigate why and adjust the audience, messaging, creative, keywords, or conversion process to keep optimizing your growth.'
  }
];

export const HomeFAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <div className="w-full">
        
        {/* Section Header (Centered) */}
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#C25E00] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE8E53]" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-3 sm:mb-4">
            Frequently asked questions.
          </h2>

          {/* Subheading */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Clear answers to common questions about our pricing, timelines, and commitments.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3 sm:space-y-4 w-full">
          {faqData.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-200 ${
                  isOpen 
                    ? 'border-amber-400/60 shadow-md shadow-amber-500/5 ring-1 ring-amber-400/30' 
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                {/* Question Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer transition-colors duration-200 hover:bg-amber-50/20 focus:outline-none select-none rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.question}
                  </h3>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-amber-500/15 text-[#C25E00]' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Answer Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pt-0 pb-5 sm:pb-6 border-t border-slate-100">
                    {Array.isArray(item.answer) ? (
                      <div className="space-y-3 pt-3.5">
                        {item.answer.map((para, idx) => (
                          <p key={idx} className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
                            {para}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal pt-3.5">
                        {item.answer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
