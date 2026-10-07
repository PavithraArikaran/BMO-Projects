import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Real Brand Client Logos
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
    content: 'They are great. They did exactly what I needed. The friendly chaps are a real problem solvers. Loved working with them.',
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
  const [currentIndex, setCurrentIndex] = useState<number>(2); // Center on Zahid Miles by default
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Keyboard navigation (ArrowLeft & ArrowRight keys)
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

  // Smooth automatic rotation timer (2.2s speed)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [isHovered]);

  // Quadruple logos list for infinite seamless marquee ribbon
  const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section 
      id="reviews" 
      className="py-24 md:py-32 bg-[#FAF7F2] text-slate-900 border-t border-slate-200 scroll-mt-20 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= 1. OUR CLIENTS LOGO BAR (Continuous Single Row Infinite Marquee) ================= */}
        <div className="mb-20 text-center">
          
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
            
            {/* Subtle Inner Glows */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header Badge Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Trusted By Industry Leaders</span>
            </div>

            {/* Continuous Non-Stop Single Row Marquee Track */}
            <div className="relative w-full overflow-hidden flex items-center py-2 mask-gradient">
              {/* Fade Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
                    className="w-36 sm:w-44 h-14 sm:h-16 shrink-0 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-orange-400 hover:scale-105 transition-all duration-300 flex items-center justify-center p-3 cursor-pointer group"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {client.svg}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>

        {/* ================= 2. TESTIMONIALS CAROUSEL CONTAINER ================= */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-[36px] p-6 sm:p-10 lg:p-16 border border-slate-200/80 shadow-2xl shadow-slate-200/70 overflow-hidden">
          
          {/* Faint Giant Quote Watermark Top Left */}
          <div className="absolute top-4 left-6 text-slate-100 font-serif text-[180px] leading-none select-none pointer-events-none opacity-80">
            “
          </div>

          {/* Section Header */}
          <div className="text-center relative z-10 max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading mb-3">
              What our Clients <span className="text-gradient-orange">say!</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-semibold">
              Real feedback from software teams and operations leaders using BMO Projects daily.
            </p>
          </div>

          {/* LEFT CORNER NAVIGATION ARROW BUTTON */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-300 shadow-xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT CORNER NAVIGATION ARROW BUTTON */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-300 shadow-xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Stage Container */}
          <div className="relative z-10 my-4">
            <div className="flex items-center justify-center gap-4 sm:gap-6 min-h-[360px] py-6">
              
              {TESTIMONIALS.map((item, idx) => {
                const isCenter = idx === currentIndex;
                const isLeft = idx === (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
                const isRight = idx === (currentIndex + 1) % TESTIMONIALS.length;

                const isVisible = isCenter || isLeft || isRight;
                if (!isVisible) return null;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    layout
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.7,
                      scale: isCenter ? 1.08 : 0.88,
                      y: isCenter ? -18 : 10,
                      zIndex: isCenter ? 30 : 10
                    }}
                    transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                    className={`w-[270px] sm:w-[320px] shrink-0 bg-white rounded-3xl p-7 border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                      isCenter
                        ? 'border-orange-400 shadow-2xl shadow-orange-500/20 ring-4 ring-orange-400/20 bg-gradient-to-b from-white via-orange-50/20 to-white'
                        : 'border-slate-100 shadow-md hover:opacity-90'
                    }`}
                  >
                    <div>
                      {/* Avatar Image with Pulsing Ring */}
                      <div className="flex justify-center mb-4 relative">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className={`w-16 h-16 rounded-full object-cover border-2 shadow-md transition-all duration-300 ${
                            isCenter ? 'border-orange-500 scale-110 ring-4 ring-orange-200' : 'border-slate-200'
                          }`}
                        />
                      </div>

                      {/* Author Name */}
                      <h3 className="text-center text-lg font-black text-slate-900 font-heading mb-1">
                        {item.name}
                      </h3>

                      <p className="text-center text-xs font-semibold text-slate-500 mb-3">
                        {item.role} • <span className="text-orange-600 font-extrabold">{item.company}</span>
                      </p>

                      {/* Rating Stars with Pop Animation */}
                      <div className="flex justify-center gap-1 mb-4 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={isCenter ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                          >
                            <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Review Content */}
                      <p className="text-center text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                        "{item.content}"
                      </p>
                    </div>

                    {/* Watermark Quote */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
                      <span className="text-slate-200 font-serif text-3xl font-bold select-none leading-none">
                        ”
                      </span>
                    </div>
                  </motion.div>
                );
              })}

            </div>

            {/* Bottom Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === dotIdx ? 'w-8 bg-orange-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
