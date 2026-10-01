import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { REAL_FAQS } from '../data/landingData';

const APP_URL = "https://app.bmoprojects.in/";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 border border-orange-200 px-3.5 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-4 font-heading">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {REAL_FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-orange-600 transition-colors text-sm font-heading"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Link Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 font-heading">Ready to access your workspace?</h4>
            <p className="text-xs text-slate-600">Open the app directly at app.bmoprojects.in</p>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/25 flex items-center gap-1.5 shrink-0"
          >
            <span>Go to App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
