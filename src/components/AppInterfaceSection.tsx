import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListTodo, CheckSquare, Sparkles } from 'lucide-react';
import dashboardTasksImg from '../assets/dashboard_tasks.png';
import taskManagementImg from '../assets/task_management.png';
import { DeviceMockup } from './DeviceMockup';

export const AppInterfaceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'management'>('dashboard');

  return (
    <section id="app-interface" className="py-20 bg-white border-t border-slate-200 scroll-mt-20">
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
            <span>App Interface & Workflows</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3 font-heading"
          >
            Task Management & <span className="text-gradient-orange">Issue Interface</span>
          </motion.h2>

        </div>

        {/* Tab Toggle Controls */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ListTodo className="w-4.5 h-4.5" />
            <span>1. My Dashboard — Today's Task Updates</span>
          </button>

          <button
            onClick={() => setActiveTab('management')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'management'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckSquare className="w-4.5 h-4.5" />
            <span>2. Task Management Table & Filters</span>
          </button>
        </div>

        {/* Screenshot Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard-tab"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
              >
                <DeviceMockup
                  imageSrc={dashboardTasksImg}
                  altText="BMO Projects My Dashboard Today's Task Updates Screenshot"
                  maxHeight="max-h-[640px]"
                />
              </motion.div>
            )}

            {activeTab === 'management' && (
              <motion.div
                key="management-tab"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
              >
                <DeviceMockup
                  imageSrc={taskManagementImg}
                  altText="BMO Projects Task Management Table & Filters Screenshot"
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
