import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  lead: string;
  paragraphs: React.ReactNode[];
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is hiring a digital marketing agency worth it?',
    lead: 'It can be one of the smartest investments you make when you want to grow.',
    paragraphs: [
      <>
        Digital marketing requires more than posting on social media or running an occasional advert. It takes the right strategy, consistent execution, ongoing testing, and the ability to understand what the data is telling you.
      </>,
      <>
        At Aceso, we bring <strong className="text-slate-900 font-semibold">social media marketing, SEO, and PPC advertising</strong> together to help you attract the right customers and turn your digital presence into a growth channel. Instead of spending your time trying to figure out what to post, which keywords to target, or how to optimize your campaigns, you have a team focused on making your marketing work harder for your business.
      </>,
      <>
        The real question isn't <em className="text-slate-800">"Can I afford a marketing agency?"</em> It's <strong className="text-[#003B95] font-bold">"How much business could I be missing by trying to do it all myself?"</strong>
      </>
    ]
  },
  {
    id: 'faq-2',
    question: 'How will I know if my marketing is actually working?',
    lead: "You shouldn't have to guess.",
    paragraphs: [
      <>
        We measure your marketing against the business outcomes that matter. Depending on your goals, we track things like <strong className="text-slate-900 font-semibold">website traffic, search visibility, social engagement, enquiries, leads, conversions, and advertising performance</strong>.
      </>,
      <>
        You'll receive clear performance reports showing what we've done, what happened as a result, and where we're seeing opportunities to improve. We don't believe in hiding behind impressive-looking numbers. <strong className="text-slate-900 font-semibold">The purpose of marketing is to create business value, and your reporting should make that clear.</strong>
      </>
    ]
  },
  {
    id: 'faq-3',
    question: 'What kind of ROI can I expect?',
    lead: 'There is no honest one-size-fits-all ROI promise.',
    paragraphs: [
      <>
        Your return depends on your industry, competition, offer, pricing, audience, website, sales process, and marketing investment. A campaign that delivers exceptional returns for one business may perform very differently for another.
      </>,
      <>
        What we can do is establish <strong className="text-slate-900 font-semibold">clear targets from the beginning and continuously measure your performance against them</strong>. We use the data to identify what's generating the strongest opportunities and shift our focus toward what is producing results.
      </>,
      <>
        Whether we're growing your organic visibility through SEO, building your audience through social media, or generating immediate demand through PPC, <strong className="text-[#003B95] font-semibold">our objective is to make your marketing investment increasingly productive over time.</strong>
      </>
    ]
  },
  {
    id: 'faq-4',
    question: 'How quickly should I expect to see results?',
    lead: 'Some results come quickly. Sustainable growth takes consistency.',
    paragraphs: [
      <>
        PPC can start generating clicks, enquiries, and valuable performance data relatively quickly. Social media marketing can build awareness and engagement as your content gains traction, while SEO typically requires more time to establish authority and improve search visibility.
      </>,
      <>
        We don't ask you to simply wait and hope for results. We monitor progress throughout the engagement, looking at early signals such as <strong className="text-slate-900 font-semibold">traffic, engagement, clicks, enquiries, and leads</strong>, while building toward longer-term outcomes such as stronger search rankings, consistent customer acquisition, and revenue growth.
      </>
    ]
  },
  {
    id: 'faq-5',
    question: "What happens if my marketing isn't performing?",
    lead: "We don't keep doing something simply because it's on the plan.",
    paragraphs: [
      <>
        Marketing is a process of testing, learning, and improving. If something isn't delivering the expected results, we investigate why. That could mean changing the audience, messaging, creative, keywords, campaign strategy, website experience, or conversion process.
      </>,
      <>
        We then make the necessary adjustments, measure the impact, and continue refining the strategy.
      </>,
      <>
        <strong className="text-[#003B95] font-bold">Your marketing should evolve with the data. That's how we turn a marketing budget into a growth investment.</strong>
      </>
    ]
  }
];

export const HomeFAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
    'faq-3': false,
    'faq-4': false,
    'faq-5': false
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-slate-600 text-xs sm:text-base max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our approach, return on investment, timeline, and how we measure real business value.
          </p>
        </div>

        {/* Accordion FAQ List without numbering & with extended line widths */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div
                key={item.id}
                className={`rounded-xl sm:rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-slate-50/70 border-blue-200/80 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/40'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug">
                    {item.question}
                  </h3>

                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? 'bg-blue-100 text-[#003B95] rotate-180' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 border-t border-slate-200/60">
                    <p className="text-xs sm:text-sm md:text-base font-bold text-slate-900 mb-2.5 sm:mb-3 pt-2.5 sm:pt-3">
                      {item.lead}
                    </p>
                    <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed">
                      {item.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
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
