import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckSquare,
  Calculator,
  AlertCircle,
  BarChart3,
  TrendingUp,
  Award,
  Sparkles,
  Check
} from 'lucide-react';

interface FeatureCard {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  highlights: string[];
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'task-management',
    stepNumber: '01',
    title: 'Task Management & Assignment',
    subtitle: 'Create, Assign & Track Project Deliverables',
    badge: 'Task Module',
    icon: CheckSquare,
    color: '#9E9FCF', // Soft Lavender
    highlights: [
      'Task creation with estimated vs worked hours',
      'Status tracking: In Progress, Completed, Not Started'
    ]
  },
  {
    id: 'point-calculation',
    stepNumber: '02',
    title: 'Point Calculation Engine',
    subtitle: 'Automatic Total Score & Rating Engine',
    badge: 'Scoring Engine',
    icon: Calculator,
    color: '#76CEB8', // Mint/Teal
    highlights: [
      'Live total score calculation engine (+16.67 pts)',
      'Transparent individual & team score tallies'
    ]
  },
  {
    id: 'issue-management',
    stepNumber: '03',
    title: 'Issue & Defect Management',
    subtitle: 'Centralized Defect Tracking & Priority SLA',
    badge: 'Issue Module',
    icon: AlertCircle,
    color: '#ECA0B2', // Soft Pink
    highlights: [
      'Structured bug reporting with unique Issue IDs',
      'Filter by assignee, project, status & date range'
    ]
  },
  {
    id: 'performance-analytics',
    stepNumber: '04',
    title: 'Performance Analytics',
    subtitle: 'Real-Time Employee Standings & Leaderboard',
    badge: 'Analytics Hub',
    icon: BarChart3,
    color: '#E6C687', // Gold/Yellow
    highlights: [
      'Real-time rankings: Top Performer, High Achiever',
      'Overview cards: Total Score, Tasks & Defects'
    ]
  },
  {
    id: 'daily-average',
    stepNumber: '05',
    title: 'Daily Average Point Tracking',
    subtitle: '30-Day Velocity & Hours Report',
    badge: 'Daily Velocity',
    icon: TrendingUp,
    color: '#F4A683', // Peach/Orange
    highlights: [
      'Automatic Daily Average score calculation',
      'Daily breakdown of tasks worked vs issues worked'
    ]
  },
  {
    id: 'performance-level',
    stepNumber: '06',
    title: 'Performance Level Analysis',
    subtitle: 'Overall Standing & Rating Evaluator',
    badge: 'Level Evaluator',
    icon: Award,
    color: '#B39DDB', // Soft Purple
    highlights: [
      'Automated standing evaluation based on output',
      'Detailed employee work activity history'
    ]
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#FAF7F2] text-slate-900 border-y border-stone-200/80 scroll-mt-20 relative overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-2 font-heading"
          >
            Key Features & <span className="text-gradient-orange">Capabilities</span>
          </motion.h2>
        </div>

        {/* 6-Card Responsive Equal Grid Layout - Zero Empty Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {FEATURE_CARDS.map((card, idx) => {
            const IconComponent = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-lg shadow-stone-200/40 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Corner Gradient Glow Accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity"
                />

                <div>
                  {/* Top Bar: Icon Badge & Module Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: card.color }}
                    >
                      <IconComponent className="w-7 h-7 text-slate-900" />
                    </div>

                    {/* <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-stone-100 text-slate-700 border border-stone-200">
                        {card.badge}
                      </span>
                      <span className="text-xs font-black font-mono text-orange-600 bg-orange-50 px-2 py-1 rounded-md border border-orange-200">
                        {card.stepNumber}
                      </span>
                    </div> */}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading mb-1.5 group-hover:text-orange-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold text-orange-600 mb-5">
                    {card.subtitle}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-stone-100">
                  {card.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
