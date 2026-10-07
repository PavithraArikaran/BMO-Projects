import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Clock, ListTodo, CheckSquare, Lock, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

import dashboard from '../assets/dashboard_tasks.png';
import performance from '../assets/performance_analytics.png';
import task from '../assets/task_management.png';
import loginImg from '../assets/loginimg.png';
import employee_rep from '../assets/employee_report.png';

const APP_URL = "https://app.bmoprojects.in/";

interface ScreenshotItem {
  id: string;
  category: 'analytics' | 'interface' | 'tasks';
  title: string;
  imgSrc: string;
  badgeColor: string;
  icon: React.ReactNode;
}

const SHOWCASE_ITEMS: ScreenshotItem[] = [
  {
    id: 'analytics-leaderboard',
    category: 'analytics',
    title: 'Performance Overview & Standings',
    imgSrc: performance,
    badgeColor: 'bg-orange-500 text-white',
    icon: <BarChart3 className="w-4 h-4" />
  },
  {
    id: 'employee-report',
    category: 'analytics',
    title: 'Employee Report (Past 30 Days)',
    imgSrc: employee_rep,
    badgeColor: 'bg-indigo-600 text-white',
    icon: <Clock className="w-4 h-4" />
  },
  {
    id: 'dashboard-overview',
    category: 'interface',
    title: 'My Dashboard Updates & Timeline',
    imgSrc: dashboard,
    badgeColor: 'bg-amber-500 text-white',
    icon: <ListTodo className="w-4 h-4" />
  },
  {
    id: 'assigned-tasks',
    category: 'tasks',
    title: 'Task Management & Filters',
    imgSrc: task,
    badgeColor: 'bg-rose-500 text-white',
    icon: <CheckSquare className="w-4 h-4" />
  },
  {
    id: 'signin-portal',
    category: 'interface',
    title: 'Enterprise Sign-In Portal',
    imgSrc: loginImg,
    badgeColor: 'bg-blue-600 text-white',
    icon: <Lock className="w-4 h-4" />
  }
];

export const PerformanceAnalyticsSection: React.FC = () => {
  const [selectedModalItem, setSelectedModalItem] = useState<ScreenshotItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.children[0] as HTMLElement;
      const cardWidth = firstCard ? firstCard.offsetWidth : 440;
      const gap = 24;
      scrollRef.current.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % SHOWCASE_ITEMS.length;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length;
    setCurrentIndex(prevIdx);
    scrollToCard(prevIdx);
  };

  // Fast & smooth automatic scrolling effect (1.9s speed, keeps active screenshot centered)
  React.useEffect(() => {
    if (isHovered || selectedModalItem !== null) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % SHOWCASE_ITEMS.length;
        if (scrollRef.current) {
          const firstCard = scrollRef.current.children[0] as HTMLElement;
          const cardWidth = firstCard ? firstCard.offsetWidth : 440;
          const gap = 24;
          scrollRef.current.scrollTo({ left: next * (cardWidth + gap), behavior: 'smooth' });
        }
        return next;
      });
    }, 1900);

    return () => clearInterval(timer);
  }, [isHovered, selectedModalItem]);

  return (
    <section
      id="performance-analytics"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 scroll-mt-20 overflow-hidden"
    >
      {/* Anchor for App Interface section link */}
      <div id="app-interface" className="scroll-mt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading mb-4 max-w-4xl mx-auto"
        >
          Analytics & App Interface <span className="text-gradient-orange">Showcase</span>
        </motion.h2>

      </div>

      {/* ================= CENTER-FOCUSED AUTO-SCROLL SHOWCASE STAGE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative max-w-[100vw] py-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Navigation Manual Arrow Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Scroll left"
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-800 hover:text-orange-600 hover:bg-white hover:scale-110 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Scroll right"
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-800 hover:text-orange-600 hover:bg-white hover:scale-110 transition-all cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Center Padding Scroll Container */}
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth px-[calc(50vw-160px)] sm:px-[calc(50vw-210px)] md:px-[calc(50vw-240px)] py-8"
        >
          {SHOWCASE_ITEMS.map((item, idx) => {
            const isCenter = idx === currentIndex;
            return (
              <motion.div
                key={item.id}
                animate={{
                  scale: isCenter ? 1.06 : 0.92,
                  opacity: isCenter ? 1 : 0.65,
                }}
                transition={{ type: 'spring', stiffness: 360, damping: 24, mass: 0.7 }}
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollToCard(idx);
                  setSelectedModalItem(item);
                }}
                className={`w-[320px] sm:w-[420px] md:w-[480px] shrink-0 bg-white rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col justify-between ${
                  isCenter
                    ? 'border-orange-400 shadow-2xl shadow-orange-500/20 ring-4 ring-orange-400/20'
                    : 'border-slate-200/90 shadow-md hover:opacity-90'
                }`}
              >
                {/* Browser Titlebar Header */}
                <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <span className="text-[11px] font-mono text-slate-600 font-bold bg-white px-2.5 py-0.5 rounded border border-slate-200 truncate max-w-[200px]">
                    app.bmoprojects.in/{item.id}
                  </span>

                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${item.badgeColor}`}>
                    {item.icon}
                  </span>
                </div>

                {/* Screenshot Image Frame */}
                <div className="relative overflow-hidden bg-slate-100 aspect-[16/10]">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Footer Text */}
                <div className="p-5 border-t border-slate-100 bg-white">
                  <h3 className="text-base font-black text-slate-900 font-heading mb-1 text-left">
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Navigation Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {SHOWCASE_ITEMS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setCurrentIndex(dotIdx);
                scrollToCard(dotIdx);
              }}
              aria-label={`Go to screenshot ${dotIdx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === dotIdx ? 'w-8 bg-orange-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </motion.div>

      {/* ================= HIGH RES LIGHTBOX ZOOM MODAL ================= */}
      <AnimatePresence>
        {selectedModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModalItem(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-5xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-xl text-white ${selectedModalItem.badgeColor}`}>
                    {selectedModalItem.icon}
                  </span>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-white">
                      {selectedModalItem.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors"
                  >
                    <span>Go to App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedModalItem(null)}
                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Fullscreen High-Res Screenshot View */}
              <div className="overflow-y-auto p-4 bg-slate-100 flex-1 flex items-center justify-center">
                <img
                  src={selectedModalItem.imgSrc}
                  alt={selectedModalItem.title}
                  className="w-full h-auto rounded-2xl shadow-xl border border-slate-200 max-h-[72vh] object-contain"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PerformanceAnalyticsSection;
