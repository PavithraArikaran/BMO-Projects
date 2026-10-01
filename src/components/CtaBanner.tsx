import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';

const APP_URL = "https://app.bmoprojects.in/";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-white via-orange-50/50 to-amber-50/60 border border-orange-200 card-shadow text-center relative overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Platform</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 font-heading max-w-2xl mx-auto">
              Elevate Team Output with <span className="text-gradient-orange">BMO Projects</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
              Access your team workspace at app.bmoprojects.in to assign tasks, calculate score points, track daily point velocity, and view live standings.
            </p>

            <div className="flex justify-center mb-8">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-1"
              >
                <span>Launch BMO Projects</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" /> Task Management
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" /> Score Engine
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" /> Daily Avg Tracking
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" /> Performance Standings
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
