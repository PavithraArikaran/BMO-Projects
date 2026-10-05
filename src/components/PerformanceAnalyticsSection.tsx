import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Clock, Sparkles } from 'lucide-react';
import perfAnalyticsImg from '../assets/performance_analytics.png';
import employeeReportImg from '../assets/employee_report.png';
import { DeviceMockup } from './DeviceMockup';

export const PerformanceAnalyticsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'report'>('overview');

  return (
    <section id="performance-analytics" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Performance Analytics</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3 font-heading"
          >
            Real-Time Analytics & <span className="text-gradient-orange">Team Leaderboard</span>
          </motion.h2>

        </div>

        {/* Tab Toggle Controls */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-4.5 h-4.5" />
            <span>1. Performance Overview & Leaderboard</span>
          </button>

          <button
            onClick={() => setActiveTab('report')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'report'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-4.5 h-4.5" />
            <span>2. Past 30 Days Employee Report</span>
          </button>
        </div>

        {/* Screenshot Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview-tab"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
              >
                <DeviceMockup
                  imageSrc={perfAnalyticsImg}
                  altText="BMO Projects Performance Overview & Leaderboard Screenshot"
                  maxHeight="max-h-[640px]"
                />
              </motion.div>
            )}

            {activeTab === 'report' && (
              <motion.div
                key="report-tab"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
              >
                <DeviceMockup
                  imageSrc={employeeReportImg}
                  altText="BMO Projects Past 30 Days Employee Hours & Score Report Screenshot"
                  maxHeight="max-h-[640px]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
