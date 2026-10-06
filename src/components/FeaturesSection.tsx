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
  ArrowRight,
  Check
} from 'lucide-react';

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badgeBg: string;
  textColor: string;
  borderColor: string;
  highlights: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'task-management',
    stepNumber: '01',
    title: 'Task Management & Assignment',
    subtitle: 'Create, Assign & Track Project Deliverables',
    icon: CheckSquare,
    color: '#9E9FCF', // Soft Lavender/Purple
    badgeBg: 'bg-[#9E9FCF]/15',
    textColor: 'text-[#5B5D9E]',
    borderColor: 'border-[#9E9FCF]/40',
    highlights: ['Task creation with estimated vs worked hours', 'Status tracking: In Progress, Completed, Not Started']
  },
  {
    id: 'point-calculation',
    stepNumber: '02',
    title: 'Point Calculation Engine',
    subtitle: 'Automatic Total Score & Rating Engine',
    icon: Calculator,
    color: '#76CEB8', // Mint/Teal
    badgeBg: 'bg-[#76CEB8]/15',
    textColor: 'text-[#2D8A74]',
    borderColor: 'border-[#76CEB8]/40',
    highlights: ['Live total score calculation engine (+16.67 pts)', 'Transparent individual & team score tallies']
  },
  {
    id: 'issue-management',
    stepNumber: '03',
    title: 'Issue & Defect Management',
    subtitle: 'Centralized Defect Tracking & Priority SLA',
    icon: AlertCircle,
    color: '#ECA0B2', // Soft Pink
    badgeBg: 'bg-[#ECA0B2]/15',
    textColor: 'text-[#B84860]',
    borderColor: 'border-[#ECA0B2]/40',
    highlights: ['Structured bug reporting with unique Issue IDs', 'Filter by assignee, project, status & date range']
  },
  {
    id: 'performance-analytics',
    stepNumber: '04',
    title: 'Performance Analytics',
    subtitle: 'Real-Time Employee Standings & Leaderboard',
    icon: BarChart3,
    color: '#E6C687', // Gold/Yellow
    badgeBg: 'bg-[#E6C687]/15',
    textColor: 'text-[#9A7228]',
    borderColor: 'border-[#E6C687]/40',
    highlights: ['Overview cards: Total Score, Daily Average, Tasks, Defects', 'Filter by personnel, all-time, or specific teams']
  },
  {
    id: 'daily-average',
    stepNumber: '05',
    title: 'Daily Average Point Tracking',
    subtitle: '30-Day Velocity & Hours Report',
    icon: TrendingUp,
    color: '#F4A683', // Peach/Orange
    badgeBg: 'bg-[#F4A683]/15',
    textColor: 'text-[#C45727]',
    borderColor: 'border-[#F4A683]/40',
    highlights: ['Automatic Daily Average score calculation', 'Daily breakdown of tasks worked vs issues worked']
  },
  {
    id: 'performance-level',
    stepNumber: '06',
    title: 'Employee Performance Level Analysis',
    subtitle: 'Overall Standing & Rating Evaluator',
    icon: Award,
    color: '#B39DDB', // Soft Lavender
    badgeBg: 'bg-[#B39DDB]/15',
    textColor: 'text-[#5E35B1]',
    borderColor: 'border-[#B39DDB]/40',
    highlights: ['Automated standing evaluation based on output', 'Detailed employee work activity history']
  }
];

export const FeaturesSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="features" className="py-24 md:py-32 bg-[#FAF7F2] text-slate-900 border-y border-stone-200/80 scroll-mt-20 relative overflow-hidden">

      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header - Matching aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-15 ">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-3 font-heading"
          >
            Key Features & <span className="text-gradient-orange">Capabilities</span>
          </motion.h2>

        </div>

        {/* Process Flow - Inspired directly by pin_features.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Big Title & Active Step Focus (Desktop) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-stone-200 shadow-xl shadow-stone-200/50">

              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading mb-2">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-base font-bold text-orange-600 mb-4">
                {PROCESS_STEPS[activeStep].subtitle}
              </p>


              <div className="space-y-3 pt-4 border-t border-stone-100">
                {PROCESS_STEPS[activeStep].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Timeline Curve Layout (Exact layout matching pin_features.jpg) */}
          <div className="lg:col-span-7 relative min-h-[560px] flex flex-col justify-between py-4">

            {/* Curved Connecting Dashed SVG Arc Line */}
            <svg
              className="absolute left-8 sm:left-14 top-8 bottom-8 w-24 sm:w-36 h-[90%] pointer-events-none stroke-stone-300"
              viewBox="0 0 100 500"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 20 Q -20 250 50 480"
                stroke="#E2D9CC"
                strokeWidth="4"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />
            </svg>

            {/* Steps Nodes List */}
            <div className="space-y-8 sm:space-y-10 relative z-10 pl-2">
              {PROCESS_STEPS.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveStep(index)}
                    className={`group cursor-pointer flex items-center gap-5 sm:gap-8 transition-all duration-300 p-2 sm:p-3 rounded-2xl ${isActive ? 'bg-white/90 shadow-md shadow-stone-200/60 border border-stone-200/80 -translate-x-1' : 'hover:translate-x-1'
                      }`}
                  >
                    {/* Circle Badge (Matching colors & aesthetic of pin_features.jpg) */}
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 relative ${isActive ? 'ring-4 ring-orange-400/30 scale-105' : ''
                        }`}
                      style={{ backgroundColor: step.color }}
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-slate-800 stroke-[2.2]" />
                    </div>

                    {/* Step Title and Subtitle */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-heading group-hover:text-orange-600 transition-colors">
                          {step.title}
                        </h4>
                        {isActive && (
                          <span className="text-[10px] uppercase tracking-wider font-extrabold bg-orange-500 text-white px-2.5 py-0.5 rounded-full shadow-xs">
                            Active
                          </span>
                        )}
                      </div>

                    </div>

                    <ArrowRight className={`w-5 h-5 shrink-0 transition-all ${isActive ? 'text-orange-600 opacity-100 translate-x-1' : 'text-stone-300 opacity-0 group-hover:opacity-100'
                      }`} />
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
