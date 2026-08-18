import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
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
    answer: 'Digital marketing requires more than posting on social media or running an occasional advert. It takes the right strategy, consistent execution, ongoing testing, and the ability to understand what the data is telling you. At Aceso Solutions, we bring social media marketing, SEO, and PPC advertising together to help you attract the right customers and turn your digital presence into a growth channel. Instead of spending your time trying to figure out what to post or which keywords to target, you have a dedicated team focused on making your marketing work harder for your business.'
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
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
    'faq-3': false,
    'faq-4': false,
    'faq-5': false,
    'faq-6': false
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Clear answers to common questions about our pricing, timelines, and commitments.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all duration-200"
              >
                {/* Question Header */}
                <div className={isOpen ? 'p-2 sm:p-2.5 pb-0' : ''}>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 ${
                      isOpen
                        ? 'border border-[#003B95] rounded-xl sm:rounded-2xl bg-white'
                        : 'hover:bg-slate-50/60'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {item.question}
                    </h3>

                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'text-[#003B95] rotate-180' : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Accordion Answer Body */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pt-4 pb-6 sm:pb-7">
                    <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
                      {item.answer}
                    </p>
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

