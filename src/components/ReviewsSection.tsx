import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react';

// Real Brand Client Logos matching pin_clients.jpg + BMO Enterprise Clients
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
  helpfulCount: number;
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
    helpfulCount: 42
  },
  {
    id: '2',
    name: 'Asa Walter',
    role: 'Operations Director',
    company: 'Apex Systems',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    content: 'This is the best thing that happened to my small business. They re-branded, re-organized and re-vamped my company workflow in no time.',
    rating: 5,
    helpfulCount: 38
  },
  {
    id: '3',
    name: 'Zahid Miles',
    role: 'VP of Technology',
    company: 'Horizon Cloud Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    content: 'They are great. They did exactly what I needed. The friendly chaps are a real problem solvers. Loved working with them.',
    rating: 5,
    helpfulCount: 56
  },
  {
    id: '4',
    name: 'Casper Leigh',
    role: 'Product Manager',
    company: 'Pulse Media Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    content: 'Awesome services. I am really happy to be here because of their services. I will continue to use their scoring and issue tracking in the future.',
    rating: 5,
    helpfulCount: 31
  },
  {
    id: '5',
    name: 'Cian Roberts',
    role: 'CTO & Co-Founder',
    company: 'Nexus Software',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    content: 'By far the best system! This is the most efficient platform they have put together. Everyone is so knowledgeable and helpful.',
    rating: 5,
    helpfulCount: 47
  }
];

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2); // Center on Zahid Miles by default
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleVote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setHelpfulVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#F6F8FD] text-slate-900 border-t border-slate-200 scroll-mt-20 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= 1. OUR CLIENTS LOGO BAR (Matching pin_clients.jpg) ================= */}
        <div className="mb-24 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
            Our clients
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-90">
            {CLIENT_LOGOS.map((client, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 bg-white/60 hover:bg-white rounded-xl border border-slate-200/50 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                {client.svg}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= 2. TESTIMONIALS SECTION (Matching pin_testimonials.jpg) ================= */}
        <div className="relative bg-white/90 backdrop-blur-md rounded-[36px] p-8 sm:p-12 lg:p-16 border border-slate-100 shadow-2xl shadow-slate-200/70 overflow-hidden">
          
          {/* Faint Giant Quote Watermark Top Left (Matching Pin) */}
          <div className="absolute top-4 left-6 text-slate-100 font-serif text-[180px] leading-none select-none pointer-events-none opacity-80">
            “
          </div>

          {/* Section Header */}
          <div className="text-center relative z-10 max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading mb-4">
              What our Clients say!
            </h2>
            
            {/* Styled Pink/Red underline bar with dot (Exact match from pin_testimonials.jpg) */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="h-1 w-24 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-pink-500 rounded-full" />
            </div>
          </div>

          {/* Elevated Carousel Row Container (Exact match from pin_testimonials.jpg) */}
          <div className="relative z-10 my-8">
            <div className="flex items-center justify-center gap-4 sm:gap-6 min-h-[360px] py-6">
              
              {TESTIMONIALS.map((item, idx) => {
                // Calculate distance from active index
                const isCenter = idx === currentIndex;
                const isLeft = idx === (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
                const isRight = idx === (currentIndex + 1) % TESTIMONIALS.length;

                // Render only center and adjacent cards on smaller screens, 5 on desktop
                const isVisible = isCenter || isLeft || isRight;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.75,
                      scale: isCenter ? 1.05 : 0.9,
                      y: isCenter ? -28 : 12, // Elevates the center card upwards matching pin_testimonials.jpg
                      zIndex: isCenter ? 30 : 10
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`w-[270px] sm:w-[310px] shrink-0 bg-white rounded-3xl p-7 border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                      isCenter
                        ? 'border-slate-200 shadow-2xl shadow-pink-500/10 ring-2 ring-pink-500/20'
                        : 'border-slate-100 shadow-md hover:opacity-90'
                    }`}
                  >
                    <div>
                      {/* Avatar Image centered at top */}
                      <div className="flex justify-center mb-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className={`w-16 h-16 rounded-full object-cover border-2 shadow-sm ${
                            isCenter ? 'border-pink-500/80 ring-4 ring-pink-100' : 'border-slate-200'
                          }`}
                        />
                      </div>

                      {/* Author Name */}
                      <h3 className="text-center text-lg font-black text-slate-900 font-heading mb-1">
                        {item.name}
                      </h3>

                      <p className="text-center text-xs font-semibold text-slate-400 mb-4">
                        {item.role} • <span className="text-slate-600">{item.company}</span>
                      </p>

                      {/* Review Content */}
                      <p className="text-center text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        "{item.content}"
                      </p>
                    </div>

                    {/* Bottom row: Helpful button & faint watermark quote mark "} " */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={(e) => handleVote(item.id, e)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-pink-600 bg-slate-50 hover:bg-pink-50 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{item.helpfulCount + (helpfulVotes[item.id] || 0)}</span>
                      </button>

                      {/* Faint Quote Watermark at bottom right of card */}
                      <span className="text-slate-200 font-serif text-3xl font-bold select-none leading-none">
                        ”
                      </span>
                    </div>
                  </motion.div>
                );
              })}

            </div>

            {/* Navigation Controls (Arrows + Dots) */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 shadow-md flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === dotIdx ? 'w-8 bg-pink-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 shadow-md flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
