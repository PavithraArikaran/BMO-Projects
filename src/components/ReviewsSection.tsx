import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// Real Brand Client Logos with Original Warm Brand Palette
const CLIENT_LOGOS = [
  {
    name: 'Adobe',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 100 24" fill="currentColor">
        <path d="M7 2h7.8L21 22h-4.2l-2.4-6.4H9.6L7.2 22H3L7 2zm6.2 10.2L11.1 6.5h-.2L8.8 12.2h4.4z" fill="#FF0000" />
        <text x="26" y="17" fill="#111827" fontSize="15" fontWeight="800" fontFamily="sans-serif">Adobe</text>
      </svg>
    )
  },
  {
    name: 'Loom',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 100 24" fill="currentColor">
        <circle cx="10" cy="12" r="8" fill="#625DF5" opacity="0.9" />
        <path d="M10 6v12M6 10h8M7 7l6 10M13 7L7 17" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <text x="24" y="17" fill="#111827" fontSize="16" fontWeight="800" fontFamily="sans-serif">loom</text>
      </svg>
    )
  },
  {
    name: 'Google Analytics',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 160 24" fill="currentColor">
        <rect x="2" y="12" width="4" height="10" rx="2" fill="#F9AB00" />
        <rect x="8" y="7" width="4" height="15" rx="2" fill="#E37400" />
        <rect x="14" y="2" width="4" height="20" rx="2" fill="#E37400" />
        <text x="24" y="17" fill="#4B5563" fontSize="14" fontWeight="700" fontFamily="sans-serif">Google Analytics</text>
      </svg>
    )
  },
  {
    name: 'Spotify',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 100 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#1DB954" />
        <path d="M7 9.5c3.5-1 7.5-.5 10 1M7.5 12.5c3-1 6.5-.5 8.5 1M8 15.2c2.5-.8 5-.4 6.8.8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <text x="26" y="17" fill="#111827" fontSize="15" fontWeight="800" fontFamily="sans-serif">Spotify</text>
      </svg>
    )
  },
  {
    name: 'Dropbox',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 110 24" fill="currentColor">
        <path d="M6 4l5 3.3L6 10.7 1 7.3zM16 4l5 3.3-5 3.4-5-3.4zM1 14.1l5 3.3 5-3.3-5-3.4zM21 14.1l-5 3.3-5-3.3 5-3.4zM6 18.2l5 3.3 5-3.3-5-3.3z" fill="#0061FF" />
        <text x="26" y="17" fill="#0061FF" fontSize="15" fontWeight="800" fontFamily="sans-serif">Dropbox</text>
      </svg>
    )
  },
  {
    name: 'Apex Systems',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 140 24" fill="currentColor">
        <path d="M2 20L10 4l8 16h-4l-4-8-4 8H2z" fill="#EA580C" />
        <text x="22" y="17" fill="#1E293B" fontSize="14" fontWeight="800" fontFamily="sans-serif">Apex Systems</text>
      </svg>
    )
  }
];

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Engineering Lead',
    company: 'TechFlow Global',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    content: 'I knew I was going to get great service, but BMO Projects went above and beyond expectations. Our daily task output increased dramatically within two weeks.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Asa Walter',
    role: 'Operations Director',
    company: 'Apex Systems',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    content: 'This is the best thing that happened to my small business. They re-branded, re-organized and re-vamped my company workflow in no time.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Zahid Miles',
    role: 'VP of Technology',
    company: 'Horizon Cloud Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    content: 'They are great. They did exactly what I needed. The friendly chaps are real problem solvers. Loved working with them.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Casper Leigh',
    role: 'Product Manager',
    company: 'Pulse Media Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    content: 'Awesome services. I am really happy to be here because of their services. I will continue to use their scoring and issue tracking in the future.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Cian Roberts',
    role: 'CTO & Co-Founder',
    company: 'Nexus Software',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    content: 'By far the best system! This is the most efficient platform they have put together. Everyone is so knowledgeable and helpful.',
    rating: 5,
  }
];

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Responsive window resize tracking for 100% tablet & desktop precision (including 760px & 1076px viewports)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (e.target as HTMLElement)?.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag)) return;

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth 3.5s auto-rotate carousel
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  // Precision responsive horizontal offset for 760px, 1076px & all tablet/desktop viewports
  const getXOffset = (offset: number) => {
    if (windowWidth < 640) {
      // Mobile (< 640px): center card only
      return 0;
    } else if (windowWidth < 850) {
      // Tablet Viewport (640px - 850px, e.g. 760px x 918px): 175px step
      return offset * 175;
    } else if (windowWidth < 1100) {
      // Small Laptop / Large Tablet Viewport (850px - 1100px, e.g. 1076px x 950px): 235px step
      return offset * 235;
    } else {
      // Large Desktop (> 1100px): 300px step
      return offset * 300;
    }
  };

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-[#FAF7F2] text-slate-900 border-t border-slate-200 scroll-mt-20 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            1. TRUSTED BY INDUSTRY LEADERS MARQUEE (CLEAN LIGHT WEBSITE THEME)
        ==================================================== */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="relative bg-gradient-to-r from-orange-50/70 via-white to-amber-50/70 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border border-orange-200/90 shadow-xl shadow-orange-500/5 overflow-hidden group">

            {/* Ambient Warm Inner Glows */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-orange-400/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Trusted By Industry Leaders</span>
            </div>

            {/* Continuous Infinite Marquee Track with Smooth Edge Fades */}
            <div className="relative w-full overflow-hidden flex items-center py-2">
              <motion.div
                className="flex items-center gap-3 sm:gap-4 shrink-0"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 22,
                    ease: 'linear'
                  }
                }}
              >
                {MARQUEE_LOGOS.map((client, idx) => (
                  <div
                    key={idx}
                    className="w-36 sm:w-44 h-14 sm:h-16 shrink-0 bg-white/95 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-orange-400 hover:scale-105 transition-all duration-300 flex items-center justify-center p-3 cursor-pointer group/logo"
                  >
                    <div className="transition-transform duration-300 group-hover/logo:scale-110">
                      {client.svg}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ===================================================
            2. WHAT OUR CLIENTS SAY (100% RESPONSIVE CAROUSEL FOR 760px & 1076px VIEWS)
        ==================================================== */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-[36px] p-4 sm:p-8 lg:p-14 border border-slate-200/80 shadow-2xl shadow-slate-200/70 overflow-hidden">

          {/* Faint Watermark Quote */}
          <div className="absolute top-4 left-6 text-slate-100 font-serif text-[140px] sm:text-[180px] leading-none select-none pointer-events-none opacity-80">
            “
          </div>

          <div className="text-center relative z-10 max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading mb-3">
              What our Clients <span className="text-gradient-orange-animated">say!</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold">
              Real feedback from software teams and operations leaders using BMO Projects daily.
            </p>
          </div>

          {/* NAV ARROWS (POSITIONED RESPONSIVELY FOR TABLETS 760px & DESKTOPS 1076px) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute left-1 sm:left-3 md:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-400 shadow-xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute right-1 sm:right-3 md:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-400 shadow-xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D CAROUSEL STAGE CONTAINMENT */}
          <div className="relative z-10 min-h-[380px] flex items-center justify-center perspective-container overflow-hidden py-2">
            <div className="relative w-full max-w-5xl h-[360px] flex items-center justify-center">
              {TESTIMONIALS.map((item, idx) => {
                let offset = idx - currentIndex;
                const total = TESTIMONIALS.length;
                if (offset > Math.floor(total / 2)) offset -= total;
                if (offset < -Math.floor(total / 2)) offset += total;

                const isCenter = offset === 0;
                const isSide = Math.abs(offset) === 1;

                // Hide cards beyond +/- 1 on mobile & portrait tablets to guarantee zero overflow
                if (windowWidth < 640 && !isCenter) return null;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    animate={{
                      x: getXOffset(offset),
                      scale: isCenter ? 1.04 : isSide ? (windowWidth < 850 ? 0.82 : 0.86) : 0.7,
                      rotateY: isCenter ? 0 : offset < 0 ? 10 : -10,
                      opacity: isCenter ? 1 : isSide ? (windowWidth < 850 ? 0.45 : 0.6) : 0,
                      zIndex: isCenter ? 30 : isSide ? 20 : 10,
                      filter: isCenter ? 'blur(0px)' : 'blur(1px)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 26,
                      mass: 0.9,
                    }}
                    className={`absolute w-[260px] sm:w-[290px] md:w-[320px] bg-white rounded-3xl p-5 sm:p-7 border cursor-pointer select-none shadow-2xl flex flex-col justify-between transition-colors duration-300 ${isCenter
                        ? 'border-orange-400 ring-4 ring-orange-400/20 bg-gradient-to-b from-white via-orange-50/25 to-white shadow-orange-500/20'
                        : 'border-slate-200/90 bg-white/95 shadow-slate-200/50'
                      }`}
                  >
                    <div>
                      {/* Avatar Image */}
                      <div className="flex justify-center mb-3 relative">
                        <motion.div
                          animate={isCenter ? { scale: [1, 1.06, 1] } : {}}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          className="relative"
                        >
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 shadow-md transition-all duration-300 ${isCenter ? 'border-orange-500 ring-4 ring-orange-200' : 'border-slate-200'
                              }`}
                          />
                        </motion.div>
                      </div>

                      {/* Author Info */}
                      <h3 className="text-center text-base sm:text-lg font-black text-slate-900 font-heading mb-0.5">
                        {item.name}
                      </h3>

                      <p className="text-center text-[11px] sm:text-xs font-semibold text-slate-500 mb-2.5">
                        {item.role} • <span className="text-orange-600 font-extrabold">{item.company}</span>
                      </p>

                      {/* Rating Stars */}
                      <div className="flex justify-center gap-1 mb-3 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={isCenter ? { scale: [1, 1.18, 1] } : {}}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                          >
                            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 stroke-amber-400" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-center text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                        "{item.content}"
                      </p>
                    </div>

                    {/* Watermark Quote Icon */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-bold text-orange-500 uppercase tracking-wider">
                        Verified Client Review
                      </span>
                      <Quote className="w-4 h-4 text-orange-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* DOT INDICATORS */}
          <div className="flex items-center justify-center gap-2 mt-6 relative z-20">
            {TESTIMONIALS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === dotIdx
                    ? 'w-9 bg-gradient-to-r from-orange-500 to-amber-500 shadow-xs'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
