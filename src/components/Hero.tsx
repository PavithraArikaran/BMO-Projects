import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  TrendingUp,
} from 'lucide-react';

const APP_URL = 'https://app.bmoprojects.in/';

export const Hero: React.FC = () => {
  const scrollToAnalytics = () => {
    const el =
      document.getElementById('performance-analytics') ||
      document.getElementById('analytics-preview');

    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 md:pt-36 md:pb-28 text-slate-900">
      
      {/* Background Ambient Grid & Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-bright-grid opacity-[0.25]" />
        <div className="absolute left-1/2 top-10 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-orange-400/20 via-amber-300/20 to-orange-500/10 blur-[140px]" />
      </div>

      {/* Main Centered Container */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-orange-600 shadow-xs"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <Sparkles className="h-4 w-4 text-orange-500" />
          <span>Smart Task & Performance Platform</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto"
        >
          Assign Tasks.{' '}
          <span className="text-gradient-orange">Calculate Points.</span>{' '}
          Elevate Performance.
        </motion.h1>

        {/* Description Subtext
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Empower your organization with real-time task dispatch, automated performance point calculations, SLA issue resolution tracking, and live team leaderboards.
        </motion.p> */}

        {/* 6 Feature Pills Matrix Grid (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3 mb-10 max-w-4xl mx-auto text-xs sm:text-sm font-extrabold text-slate-800"
        >
          <FeaturePill
            icon={<CheckCircle2 />}
            iconClass="text-orange-500"
            text="Assign Task"
          />

          <FeaturePill
            icon={<Zap />}
            iconClass="text-amber-500"
            text="Calculate Points"
          />

          <FeaturePill
            icon={<TrendingUp />}
            iconClass="text-emerald-500"
            text="Daily Average"
          />

          <FeaturePill
            icon={<ShieldCheck />}
            iconClass="text-blue-500"
            text="Issue SLA"
          />

          <FeaturePill
            icon={<Award />}
            iconClass="text-orange-500"
            text="Leaderboard"
          />

          <FeaturePill
            icon={<Award />}
            iconClass="text-purple-500"
            text="Level Evaluator"
          />
        </motion.div>

        {/* Action CTAs (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 inline-flex items-center justify-center gap-2.5 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5 group"
          >
            <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>Go to App</span>
            <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            onClick={scrollToAnalytics}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl text-base sm:text-lg font-black text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-md transform hover:-translate-y-0.5 group"
          >
            <span>View Analytics</span>
            <ArrowRight className="h-5 w-5 text-slate-600 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

/* =========================================================
   FEATURE PILL HELPER COMPONENT
========================================================= */

interface FeaturePillProps {
  icon: React.ReactNode;
  iconClass: string;
  text: string;
}

const FeaturePill: React.FC<FeaturePillProps> = ({
  icon,
  iconClass,
  text,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200/90 bg-white p-3 text-xs sm:text-sm font-extrabold text-slate-800 shadow-xs hover:border-orange-400 hover:shadow-md transition-all"
    >
      <span className={`h-4 w-4 shrink-0 ${iconClass}`}>
        {React.cloneElement(
          icon as React.ReactElement<{ className?: string }>,
          {
            className: 'h-4 w-4',
          }
        )}
      </span>
      <span>{text}</span>
    </motion.div>
  );
};

export default Hero;