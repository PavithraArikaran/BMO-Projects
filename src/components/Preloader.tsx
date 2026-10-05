import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bmoLogo from '../assets/bmo-logo.jpeg';

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return prev + 5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-4 selection:bg-none pointer-events-auto"
        >
          {/* Subtle Background Grid Glow */}
          <div className="absolute inset-0 bg-bright-grid opacity-50 pointer-events-none" />
          <div className="w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[100px] absolute pointer-events-none animate-pulse-glow" />

          {/* Logo Container */}
          <div className="relative mb-8 flex flex-col items-center">
            {/* Outer Glowing Pulse Ring */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-3 rounded-3xl bg-orange-500/20 blur-sm"
            />

            {/* Logo Box with bmo-logo.jpeg */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-slate-200 bg-white shadow-xl shadow-orange-500/25 flex items-center justify-center"
            >
              <img
                src={bmoLogo}
                alt="BMO Projects Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Title Branding */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-3xl font-black text-orange-500 font-heading tracking-tight">BMO</span>
            <span className="text-3xl font-black text-slate-900 font-heading tracking-tight">PROJECTS</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm font-bold text-slate-600 tracking-wider uppercase mb-8"
          >
            Assign Tasks • Calculate Points • Elevate Performance
          </motion.p>

          {/* Progress Bar & Percentage */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '240px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-mono font-bold text-orange-600">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
