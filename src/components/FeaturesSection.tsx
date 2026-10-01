import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckSquare,
  Calculator,
  BarChart3,
  AlertCircle,
  TrendingUp,
  Award,
  Check,
  Sparkles
} from 'lucide-react';
import { REAL_FEATURES, type FeatureItem } from '../data/landingData';

const iconMap: Record<string, any> = {
  CheckSquare,
  Calculator,
  BarChart3,
  AlertCircle,
  TrendingUp,
  Award
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-20 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 border border-orange-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Features</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-3 font-heading">
            Everything You Need to Manage <span className="text-gradient-orange">Tasks & Performance</span>
          </h2>
          <p className="text-base text-slate-600">
            A clean, high-efficiency platform for task allocation, score calculation, defect SLA tracking, and employee productivity evaluation.
          </p>
        </div>

        {/* 6 Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REAL_FEATURES.map((feat: FeatureItem) => {
            const Icon = iconMap[feat.iconName] || CheckSquare;
            return (
              <motion.div
                key={feat.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-7 bg-white border border-slate-200 card-shadow card-shadow-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 font-mono">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-1 group-hover:text-orange-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-600 mb-3">
                    {feat.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {feat.description}
                  </p>

                  <div className="space-y-2.5 mb-2">
                    {feat.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
