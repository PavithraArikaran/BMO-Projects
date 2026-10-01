import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, TrendingUp, Award, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import heroScreenshotImg from '../assets/performance_analytics.png';

const APP_URL = "https://app.bmoprojects.in/";

export const Hero: React.FC = () => {
  const scrollToAnalytics = () => {
    const el = document.getElementById('analytics-preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-hero-glow overflow-hidden bg-white">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-bright-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
          
          {/* Left Column: Minimal Concise Text */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Smart Task & Performance Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6 font-heading"
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
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0 font-normal"
            >
              A clean project platform built to assign tasks, score performance, track daily average productivity, and evaluate employee standings.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8 max-w-lg mx-auto lg:mx-0 text-xs font-semibold text-slate-700"
            >
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2.5 shadow-sm hover:border-orange-300 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Assign Task</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2.5 shadow-sm hover:border-orange-300 transition-colors">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Calculate Points</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2.5 shadow-sm hover:border-orange-300 transition-colors">
                <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Daily Average</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg p-2.5 shadow-sm hover:border-orange-300 transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Issue Management</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg p-2.5 shadow-sm hover:border-orange-300 transition-colors">
                <Award className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Leaderboard</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg p-2.5 shadow-sm hover:border-orange-300 transition-colors">
                <Award className="w-4 h-4 text-purple-500 shrink-0" />
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
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 group"
              >
                <span>Go to App</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={scrollToAnalytics}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>View Analytics</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Real Cropped Screenshot Image Mockup */}
          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="screenshot-frame group"
            >
              {/* Window Header */}
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-xs font-mono text-slate-500 font-semibold hidden sm:inline">app.bmoprojects.in — Performance Overview</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-600 border border-orange-200 font-mono">
                  Live View
                </span>
              </div>

              {/* Real Cropped Performance Analytics Image */}
              <div className="relative overflow-hidden bg-white">
                <img
                  src={heroScreenshotImg}
                  alt="BMO Projects Performance Analytics Screenshot"
                  className="w-full h-auto object-cover rounded-b-xl transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Floating Badge Overlay 1 */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3 rounded-xl shadow-lg flex items-center gap-2.5 z-10"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    🏆
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">Total Score</div>
                    <div className="text-sm font-black text-blue-600 font-mono">+87.78 pts</div>
                  </div>
                </motion.div>

                {/* Floating Badge Overlay 2 */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3 rounded-xl shadow-lg flex items-center gap-2.5 z-10"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    ⭐
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">Standing</div>
                    <div className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Top Performer
                    </div>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
