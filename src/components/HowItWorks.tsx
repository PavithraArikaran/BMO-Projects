import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Clock, BarChart3, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Assign Tasks & Log Issues",
      description: "Create project tasks with estimated hours, assign team members, and log software defects.",
      icon: CheckSquare
    },
    {
      step: "02",
      title: "Log Worked Hours & Execute",
      description: "Team members execute tasks, log actual worked hours, and complete deliverables.",
      icon: Clock
    },
    {
      step: "03",
      title: "Track Daily Averages & Standings",
      description: "BMO Projects calculates total score points, color-coded daily averages, and updates the leaderboard.",
      icon: BarChart3
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 border border-orange-200 px-3.5 py-1.5 rounded-full">
            Simple Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-3 font-heading">
            How BMO Projects <span className="text-gradient-orange">Works</span>
          </h2>
          <p className="text-base text-slate-600">
            Three simple steps connecting task creation to performance analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-8 bg-white border border-slate-200 card-shadow hover:border-orange-300 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-slate-200 font-mono group-hover:text-orange-400 transition-colors">
                      {s.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold shadow-md shadow-orange-500/25 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {idx < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-orange-400">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
