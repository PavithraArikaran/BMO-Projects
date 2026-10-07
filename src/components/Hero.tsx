// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   ExternalLink,
//   Sparkles,
//   CheckCircle2,
//   ArrowRight,
//   ShieldCheck,
//   Zap,
//   Award,
//   TrendingUp,
// } from 'lucide-react';

// const APP_URL = 'https://app.bmoprojects.in/';

// export const Hero: React.FC = () => {
//   const scrollToAnalytics = () => {
//     const el =
//       document.getElementById('performance-analytics') ||
//       document.getElementById('analytics-preview');

//     if (el) {
//       const offset = 90;
//       const bodyRect = document.body.getBoundingClientRect().top;
//       const elementRect = el.getBoundingClientRect().top;
//       const offsetPosition = elementRect - bodyRect - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <section className="relative overflow-hidden bg-white pt-28 pb-20 md:pt-36 md:pb-28 text-slate-900">

//       {/* Background Ambient Grid & Glows */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute inset-0 bg-bright-grid opacity-[0.25]" />
//         <div className="absolute left-1/2 top-10 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-orange-400/20 via-amber-300/20 to-orange-500/10 blur-[140px]" />
//       </div>

//       {/* Main Centered Container */}
//       <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">

//         {/* Top Status Pill Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: -15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-orange-600 shadow-xs"
//         >
//           <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
//           <Sparkles className="h-4 w-4 text-orange-500" />
//           <span>Smart Task & Performance Platform</span>
//         </motion.div>

//         {/* Main Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto"
//         >
//           Assign Tasks.{' '}
//           <span className="text-gradient-orange">Calculate Points.</span>{' '}
//           Elevate Performance.
//         </motion.h1>

//         {/* Description Subtext
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-slate-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto"
//         >
//           Empower your organization with real-time task dispatch, automated performance point calculations, SLA issue resolution tracking, and live team leaderboards.
//         </motion.p> */}

//         {/* 6 Feature Pills Matrix Grid (Centered) */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3 mb-10 max-w-4xl mx-auto text-xs sm:text-sm font-extrabold text-slate-800"
//         >
//           <FeaturePill
//             icon={<CheckCircle2 />}
//             iconClass="text-orange-500"
//             text="Assign Task"
//           />

//           <FeaturePill
//             icon={<Zap />}
//             iconClass="text-amber-500"
//             text="Calculate Points"
//           />

//           <FeaturePill
//             icon={<TrendingUp />}
//             iconClass="text-emerald-500"
//             text="Daily Average"
//           />

//           <FeaturePill
//             icon={<ShieldCheck />}
//             iconClass="text-blue-500"
//             text="Issue SLA"
//           />

//           <FeaturePill
//             icon={<Award />}
//             iconClass="text-orange-500"
//             text="Leaderboard"
//           />

//           <FeaturePill
//             icon={<Award />}
//             iconClass="text-purple-500"
//             text="Level Evaluator"
//           />
//         </motion.div>

//         {/* Action CTAs (Centered) */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
//         >
//           <a
//             href={APP_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full sm:w-auto px-8 py-4 inline-flex items-center justify-center gap-2.5 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5 group"
//           >
//             <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
//             <span>Go to App</span>
//             <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//           </a>

//           <button
//             onClick={scrollToAnalytics}
//             className="w-full sm:w-auto px-6 py-4 rounded-2xl text-base sm:text-lg font-black text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-md transform hover:-translate-y-0.5 group"
//           >
//             <span>View Analytics</span>
//             <ArrowRight className="h-5 w-5 text-slate-600 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// /* =========================================================
//    FEATURE PILL HELPER COMPONENT
// ========================================================= */

// interface FeaturePillProps {
//   icon: React.ReactNode;
//   iconClass: string;
//   text: string;
// }

// const FeaturePill: React.FC<FeaturePillProps> = ({
//   icon,
//   iconClass,
//   text,
// }) => {
//   return (
//     <motion.div
//       whileHover={{
//         y: -3,
//         scale: 1.03,
//       }}
//       className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200/90 bg-white p-3 text-xs sm:text-sm font-extrabold text-slate-800 shadow-xs hover:border-orange-400 hover:shadow-md transition-all"
//     >
//       <span className={`h-4 w-4 shrink-0 ${iconClass}`}>
//         {React.cloneElement(
//           icon as React.ReactElement<{ className?: string }>,
//           {
//             className: 'h-4 w-4',
//           }
//         )}
//       </span>
//       <span>{text}</span>
//     </motion.div>
//   );
// };

// export default Hero;



import React from 'react';
import { motion, type Variants } from 'framer-motion';
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

/* =========================================================
   FRAMER MOTION VARIANTS
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   HERO COMPONENT
========================================================= */

export const Hero: React.FC = () => {
  const scrollToAnalytics = () => {
    const el =
      document.getElementById('performance-analytics') ||
      document.getElementById('analytics-preview');

    if (!el) return;

    const offset = 90;

    const elementTop =
      el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: elementTop,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-white pt-24 pb-20 text-slate-900 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28 lg:pt-36">
      
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-bright-grid opacity-[0.22]" />

        {/* Main Ambient Glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease: 'easeOut',
          }}
          className="absolute left-1/2 top-[-120px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-orange-400/20 via-amber-300/15 to-orange-500/5 blur-[130px]"
        />

        {/* Left Floating Glow */}
        <motion.div
          animate={{
            x: [0, 18, 0],
            y: [0, -12, 0],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[8%] top-[28%] h-32 w-32 rounded-full bg-orange-400/10 blur-3xl"
        />

        {/* Right Floating Glow */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 14, 0],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[8%] top-[38%] h-40 w-40 rounded-full bg-amber-400/10 blur-3xl"
        />

        {/* Small Decorative Glow */}
        <div className="absolute left-1/2 top-[40%] h-40 w-72 -translate-x-1/2 rounded-full bg-orange-300/5 blur-3xl" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
      >

        {/* ===================================================
            STATUS BADGE
        ==================================================== */}

        <motion.div variants={fadeUpVariants}>
          <motion.div
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 20,
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-orange-600 shadow-sm backdrop-blur-sm sm:text-xs"
          >
            {/* Pulsing Status Dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <Sparkles className="h-4 w-4 text-orange-500" />

            <span>Smart Task &amp; Performance Platform</span>
          </motion.div>
        </motion.div>

        {/* ===================================================
            HEADLINE
        ==================================================== */}

        <motion.div
          variants={fadeUpVariants}
          className="relative max-w-5xl"
        >
          {/* Headline Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-3xl" />

          <h1 className="font-heading text-4xl font-black leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Assign Tasks.
            <br className="sm:hidden" />{' '}

            <span className="relative inline-block text-gradient-orange">
              Calculate Points.
            </span>{' '}

            <br className="hidden sm:block" />

            Elevate Performance.
          </h1>
        </motion.div>

        {/* ===================================================
            FEATURE PILLS
        ==================================================== */}

        <motion.div
          variants={fadeUpVariants}
          className="mt-9 grid w-full max-w-5xl grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6"
        >
          <FeaturePill
            icon={<CheckCircle2 />}
            iconClass="text-orange-500"
            text="Assign Task"
            delay={0}
          />

          <FeaturePill
            icon={<Zap />}
            iconClass="text-amber-500"
            text="Calculate Points"
            delay={0.05}
          />

          <FeaturePill
            icon={<TrendingUp />}
            iconClass="text-emerald-500"
            text="Daily Average"
            delay={0.1}
          />

          <FeaturePill
            icon={<ShieldCheck />}
            iconClass="text-blue-500"
            text="Issue SLA"
            delay={0.15}
          />

          <FeaturePill
            icon={<Award />}
            iconClass="text-orange-500"
            text="Leaderboard"
            delay={0.2}
          />

          <FeaturePill
            icon={<Award />}
            iconClass="text-purple-500"
            text="Level Evaluator"
            delay={0.25}
          />
        </motion.div>

        {/* ===================================================
            CTA BUTTONS
        ==================================================== */}

        <motion.div
          variants={fadeUpVariants}
          className="mt-9 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row"
        >

          {/* Primary CTA */}
          <motion.a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -3,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 22,
            }}
            className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/30 sm:w-auto sm:text-lg"
          >
            {/* Button Shine */}
            <motion.span
              initial={{
                x: '-120%',
              }}
              whileHover={{
                x: '120%',
              }}
              transition={{
                duration: 0.65,
                ease: 'easeInOut',
              }}
              className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-white/20 blur-sm"
            />

            <Sparkles className="relative h-5 w-5 text-amber-100 transition-transform duration-300 group-hover:rotate-12" />

            <span className="relative">
              Go to App
            </span>

            <ExternalLink className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.button
            type="button"
            onClick={scrollToAnalytics}
            whileHover={{
              y: -3,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 22,
            }}
            className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md sm:w-auto sm:text-lg"
          >
            <span>
              View Analytics
            </span>

            <ArrowRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-orange-500" />
          </motion.button>
        </motion.div>

        {/* ===================================================
            TRUST LINE
        ==================================================== */}

        <motion.div
          variants={fadeUpVariants}
          className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm"
        >
          <ShieldCheck className="h-4 w-4 text-emerald-500" />

          <span>
            Built for measurable team performance
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* =========================================================
   FEATURE PILL COMPONENT
========================================================= */

interface FeaturePillProps {
  icon: React.ReactNode;
  iconClass: string;
  text: string;
  delay?: number;
}

const FeaturePill: React.FC<FeaturePillProps> = ({
  icon,
  iconClass,
  text,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.025,
      }}
      className="group flex min-h-[58px] items-center justify-center gap-2 rounded-2xl border border-slate-200/90 bg-white/90 px-2.5 py-3 text-center text-[11px] font-extrabold leading-tight text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-orange-300 hover:shadow-md sm:min-h-[62px] sm:px-3 sm:text-xs lg:px-2"
    >
      {/* Icon Container */}
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-50 transition-all duration-300 group-hover:bg-orange-50 ${iconClass}`}
      >
        {React.cloneElement(
          icon as React.ReactElement<{
            className?: string;
          }>,
          {
            className: 'h-4 w-4',
          }
        )}
      </span>

      {/* Label */}
      <span>
        {text}
      </span>
    </motion.div>
  );
};

export default Hero;


