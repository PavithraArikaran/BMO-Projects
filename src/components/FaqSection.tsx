import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { REAL_FAQS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-200 scroll-mt-20 relative overflow-hidden">

      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-xs"
          >
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span>Project FAQ</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-3 font-heading"
          >
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {REAL_FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                  ? 'border-orange-300 bg-orange-50/30 shadow-lg shadow-orange-500/5 ring-1 ring-orange-400/30'
                  : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-slate-50'
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-black text-slate-900 hover:text-orange-600 transition-colors text-base sm:text-lg font-heading cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full transition-colors ${isOpen ? 'bg-orange-500 animate-pulse' : 'bg-slate-300'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-orange-200/60 pt-4 bg-white/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
};

export default FaqSection;
