import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckSquare,
  Calculator,
  AlertCircle,
  BarChart3,
  TrendingUp,
  Award,
  Sparkles,
  Check,
  Zap
} from 'lucide-react';

import featuresIllustration from '../assets/Features Overview-pana.png';

interface FeatureCard {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  borderColor: string;
  highlights: string[];
}

const LEFT_FEATURES: FeatureCard[] = [
  {
    id: 'task-management',
    title: 'Task Management & Assignment',
    icon: CheckSquare,
    color: '#9E9FCF', // Soft Lavender
    borderColor: 'hover:border-indigo-400',
    highlights: [
      'Task creation with estimated vs worked hours',
      'Status tracking: In Progress, Completed, Not Started'
    ]
  },
  {
    id: 'point-calculation',
    title: 'Point Calculation Engine',
    icon: Calculator,
    color: '#76CEB8', // Mint/Teal
    borderColor: 'hover:border-teal-400',
    highlights: [
      'Live total score calculation engine (+97.67 pts)',
      'Transparent individual & team score tallies'
    ]
  },
  {
    id: 'issue-management',
    title: 'Issue & Defect Management',
    icon: AlertCircle,
    color: '#FFB088', // Warm Coral / Orange
    borderColor: 'hover:border-orange-400',
    highlights: [
      'Structured bug reporting with unique Issue IDs',
      'Filter by assignee, project, status & date range'
    ]
  }
];

const RIGHT_FEATURES: FeatureCard[] = [
  {
    id: 'performance-analytics',
    title: 'Performance Analytics',
    icon: BarChart3,
    color: '#E6C687', // Gold/Yellow
    borderColor: 'hover:border-amber-400',
    highlights: [
      'Real-time rankings: Top Performer, High Achiever',
      'Overview cards: Total Score, Tasks & Defects'
    ]
  },
  {
    id: 'daily-average',
    title: 'Daily Average Point Tracking',
    icon: TrendingUp,
    color: '#F4A683', // Peach/Orange
    borderColor: 'hover:border-orange-400',
    highlights: [
      'Automatic Daily Average score calculation',
      'Daily breakdown of tasks worked vs issues worked'
    ]
  },
  {
    id: 'performance-level',
    title: 'Performance Level Analysis',
    icon: Award,
    color: '#B39DDB', // Soft Purple
    borderColor: 'hover:border-purple-400',
    highlights: [
      'Automated standing evaluation based on output',
      'Detailed employee work activity history'
    ]
  }
];

export const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section id="features" className="py-14 md:py-18 bg-[#FAF7F2] text-slate-900 border-y border-stone-200/80 scroll-mt-20 relative overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-700 bg-orange-100/80 border border-orange-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>BMO Projects Core Capabilities</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-3 font-heading"
          >
            Key Features & <span className="text-gradient-orange">Capabilities</span>
          </motion.h2>

        
        </div>

        {/* 3-Column Interactive Layout: Left Features | Center Illustration Hub | Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: 3 Feature Cards */}
          <div className="lg:col-span-4 space-y-6">
            {LEFT_FEATURES.map((card, idx) => {
              const IconComponent = card.icon;
              const isActive = activeFeature === card.id;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  onMouseEnter={() => setActiveFeature(card.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`bg-white/95 backdrop-blur-md rounded-3xl p-6 border transition-all duration-300 shadow-md hover:shadow-xl group relative overflow-hidden cursor-pointer ${card.borderColor} ${
                    isActive ? 'ring-2 ring-orange-400 shadow-orange-500/10' : 'border-stone-200/90'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Feature Icon Badge */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{ backgroundColor: card.color }}
                    >
                      <IconComponent className="w-6 h-6 text-slate-900" />
                    </motion.div>

                    <div className="flex-1">
                      

                      <h3 className="text-lg font-black text-slate-900 font-heading group-hover:text-orange-600 transition-colors">
                        {card.title}
                      </h3>

                     
                      {/* Animated Point List */}
                      <div className="space-y-2 pt-3 border-t border-stone-100">
                        {card.highlights.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: idx * 0.1 + i * 0.08 }}
                            className="flex items-start gap-2 text-xs font-semibold text-slate-700"
                          >
                            <div className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span>{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER COLUMN: Interactive Bright Glowing Illustration Hub */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-6 my-4 lg:my-0">
            
            {/* Bright Radial Glow Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-gradient-to-tr from-orange-300/50 via-amber-200/60 to-orange-400/40 rounded-full blur-[80px] pointer-events-none animate-pulse" />

            {/* Illustration Container with Floating Animation (Always Visible) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[360px] sm:max-w-[420px] mx-auto p-4 z-10 flex items-center justify-center"
            >
              {/* Image with Bright Glowing Light Outline */}
              <img
                src={featuresIllustration}
                alt="BMO Projects Features Overview"
                className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:drop-shadow-[0_0_40px_rgba(249,115,22,0.55)] transition-all duration-500"
              />

              {/* Floating Orbiting Feature Badges */}
              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 left-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xl text-[11px] font-extrabold text-slate-800 flex items-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
                <span>Real-Time Scoring</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -4, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 right-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xl text-[11px] font-extrabold text-slate-800 flex items-center gap-1.5"
              >
                <BarChart3 className="w-3.5 h-3.5 text-orange-500" />
                <span>30-Day Velocity</span>
              </motion.div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3 Feature Cards */}
          <div className="lg:col-span-4 space-y-6">
            {RIGHT_FEATURES.map((card, idx) => {
              const IconComponent = card.icon;
              const isActive = activeFeature === card.id;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: -4 }}
                  onMouseEnter={() => setActiveFeature(card.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`bg-white/95 backdrop-blur-md rounded-3xl p-6 border transition-all duration-300 shadow-md hover:shadow-xl group relative overflow-hidden cursor-pointer ${card.borderColor} ${
                    isActive ? 'ring-2 ring-orange-400 shadow-orange-500/10' : 'border-stone-200/90'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Feature Icon Badge */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{ backgroundColor: card.color }}
                    >
                      <IconComponent className="w-6 h-6 text-slate-900" />
                    </motion.div>

                    <div className="flex-1">
                      

                      <h3 className="text-lg font-black text-slate-900 font-heading group-hover:text-orange-600 transition-colors">
                        {card.title}
                      </h3>


                      {/* Animated Point List */}
                      <div className="space-y-2 pt-3 border-t border-stone-100">
                        {card.highlights.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: idx * 0.1 + i * 0.08 }}
                            className="flex items-start gap-2 text-xs font-semibold text-slate-700"
                          >
                            <div className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span>{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
