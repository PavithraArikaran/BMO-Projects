import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { REAL_FAQS } from '../data/landingData';
import questionsIllustration from '../assets/Questions-pana.png';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-200 scroll-mt-20 relative overflow-hidden">

      {/* Background Decorative Blobs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE: Questions-pana Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4">
            
            {/* Bright Radial Glow Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-gradient-to-tr from-orange-300/40 via-amber-200/50 to-orange-400/30 rounded-full blur-[80px] pointer-events-none animate-pulse" />

            {/* Illustration with Floating Motion (Always Visible) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[380px] sm:max-w-[440px] mx-auto z-10"
            >
              <img
                src={questionsIllustration}
                alt="Frequently Asked Questions Illustration"
                className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:drop-shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all duration-500"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xl text-xs font-extrabold text-slate-800 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-orange-500 fill-orange-100" />
                <span>Need Instant Help?</span>
              </motion.div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: FAQ Accordion Content */}
          <div className="lg:col-span-7">
            
            <div className="text-left mb-8">

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading"
              >
                Frequently Asked <span className="text-gradient-orange">Questions</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.15 }}
                className="text-slate-600 text-sm sm:text-base font-medium mt-2"
              >
                Everything you need to know about BMO Projects task dispatch, scoring algorithms, and team analytics.
              </motion.p>
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
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-orange-300 bg-orange-50/40 shadow-lg shadow-orange-500/5 ring-1 ring-orange-400/30'
                        : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-black text-slate-900 hover:text-orange-600 transition-colors text-base sm:text-lg font-heading cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-2.5 h-2.5 rounded-full transition-colors ${isOpen ? 'bg-orange-500 animate-pulse' : 'bg-slate-300'}`} />
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
                          <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-orange-200/60 pt-4 bg-white/90">
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

        </div>

      </div>
    </section>
  );
};

export default FaqSection;
