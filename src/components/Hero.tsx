import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, TrendingUp, Award, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import heroScreenshotImg from '../assets/performance_analytics.png';
import { DeviceMockup } from './DeviceMockup';

const APP_URL = "https://app.bmoprojects.in/";

export const Hero: React.FC = () => {
  const scrollToAnalytics = () => {
    const el = document.getElementById('performance-analytics') || document.getElementById('analytics-preview');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };



  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-hero-glow overflow-hidden bg-white">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-bright-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-8xl mx-auto px-2 sm:px-6 lg:px-18">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

          {/* Left Column: Text & Features (45% width on large screens) */}
          <div className="w-full lg:w-[44%] text-center lg:text-left">

            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Smart Task & Performance Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6 font-heading"
            >
              Assign Tasks.{' '}
              <span className="text-gradient-orange">Calculate Points.</span>{' '}
              Elevate Performance.
            </motion.h1>

            {/* Concise Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0 font-normal"
            >
              A clean project platform built to assign tasks, score performance, track daily average productivity, and evaluate employee standings.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-lg mx-auto lg:mx-0 text-xs sm:text-sm font-bold text-slate-800"
            >
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm hover:border-orange-300 transition-colors">
                <CheckCircle2 className="w-4.5 h-4.5 text-orange-500 shrink-0" />
                <span>Assign Task</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm hover:border-orange-300 transition-colors">
                <Zap className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <span>Calculate Points</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm hover:border-orange-300 transition-colors">
                <TrendingUp className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>Daily Average</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm hover:border-orange-300 transition-colors">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                <span>Issue Management</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm hover:border-orange-300 transition-colors">
                <Award className="w-4.5 h-4.5 text-orange-500 shrink-0" />
                <span>Leaderboard</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm hover:border-orange-300 transition-colors">
                <Award className="w-4.5 h-4.5 text-purple-500 shrink-0" />
                <span>Performance Level</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base sm:text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 group"
              >
                <span>Go to App</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={scrollToAnalytics}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base sm:text-lg font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>View Analytics</span>
                <ArrowRight className="w-5 h-5 text-slate-500" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Clean Screenshot Display (56% width on large screens) */}
          <div className="w-full lg:w-[66%] relative">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <DeviceMockup
                imageSrc={heroScreenshotImg}
                altText="BMO Projects Performance Analytics Screenshot"
                maxHeight="max-h-[750px]"
                maxWidth="max-w-full"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
