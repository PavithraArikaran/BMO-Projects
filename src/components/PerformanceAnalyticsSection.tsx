import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Clock, ExternalLink, Sparkles } from 'lucide-react';
import perfAnalyticsImg from '../assets/performance_analytics.png';
import employeeReportImg from '../assets/employee_report.png';

const APP_URL = "https://app.bmoprojects.in/";

export const PerformanceAnalyticsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'report'>('overview');

  return (
    <section id="performance-analytics" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 border border-orange-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Performance Analytics</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3 font-heading">
            Real-Time Analytics & <span className="text-gradient-orange">Team Leaderboard</span>
          </h2>
          <p className="text-base text-slate-600">
            Real screenshot previews from BMO Projects showing live score calculations, daily averages, and 30-day employee reports.
          </p>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>1. Performance Overview & Leaderboard</span>
          </button>

          <button
            onClick={() => setActiveTab('report')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'report'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>2. Past 30 Days Employee Report</span>
          </button>
        </div>

        {/* Real Screenshot Preview Display Container */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="screenshot-frame group max-w-5xl mx-auto"
            >
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-xs font-mono text-slate-500 font-semibold hidden sm:inline">
                    app.bmoprojects.in/Performance — Overview & Leaderboard
                  </span>
                </div>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-orange-600 hover:underline flex items-center gap-1"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* REAL CROPPED SCREENSHOT 1 IMAGE */}
              <div className="bg-white overflow-hidden p-2">
                <img
                  src={perfAnalyticsImg}
                  alt="BMO Projects Performance Overview & Leaderboard Screenshot"
                  className="w-full h-auto object-cover rounded-lg border border-slate-100 transition-transform duration-500 group-hover:scale-[1.005]"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="screenshot-frame group max-w-5xl mx-auto"
            >
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-xs font-mono text-slate-500 font-semibold hidden sm:inline">
                    app.bmoprojects.in/EmployeeDashboard — 30-Day Hours Report
                  </span>
                </div>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-orange-600 hover:underline flex items-center gap-1"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* REAL CROPPED SCREENSHOT 2 IMAGE */}
              <div className="bg-white overflow-hidden p-2">
                <img
                  src={employeeReportImg}
                  alt="BMO Projects Employee Past 30 Days Hours Report Screenshot"
                  className="w-full h-auto object-cover rounded-lg border border-slate-100 transition-transform duration-500 group-hover:scale-[1.005]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
