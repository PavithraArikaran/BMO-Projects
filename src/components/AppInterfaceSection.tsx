import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListTodo, CheckSquare, ExternalLink, Sparkles } from 'lucide-react';
import dashboardTasksImg from '../assets/dashboard_tasks.png';
import taskManagementImg from '../assets/task_management.png';

const APP_URL = "https://app.bmoprojects.in/";

export const AppInterfaceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'management'>('dashboard');

  return (
    <section id="task-issue" className="py-20 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 border border-orange-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>App Interface & Workflows</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3 font-heading">
            Task Management & <span className="text-gradient-orange">Issue Tracking</span>
          </h2>
          <p className="text-base text-slate-600">
            Real screenshot previews showing task execution, worked hours logging, and team task allocation.
          </p>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'dashboard'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ListTodo className="w-4 h-4" />
            <span>1. My Dashboard — Today's Task Updates</span>
          </button>

          <button
            onClick={() => setActiveTab('management')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'management'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>2. Task Management Table & Filters</span>
          </button>
        </div>

        {/* Real Screenshot Preview Display Container */}
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
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
                    app.bmoprojects.in/EmployeeDashboard — My Dashboard Tasks
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

              {/* REAL CROPPED SCREENSHOT 3 IMAGE */}
              <div className="bg-white overflow-hidden p-2">
                <img
                  src={dashboardTasksImg}
                  alt="BMO Projects My Dashboard Task Updates Screenshot"
                  className="w-full h-auto object-cover rounded-lg border border-slate-100 transition-transform duration-500 group-hover:scale-[1.005]"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'management' && (
            <motion.div
              key="management"
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
                    app.bmoprojects.in/Task — Task Management List
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

              {/* REAL CROPPED SCREENSHOT 4 IMAGE */}
              <div className="bg-white overflow-hidden p-2">
                <img
                  src={taskManagementImg}
                  alt="BMO Projects Task Management Table Screenshot"
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
