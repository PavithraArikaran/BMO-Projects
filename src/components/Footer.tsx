import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';


const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-950 text-white pt-1 pb-12 overflow-hidden border-t border-slate-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          
          {/* Crafted Tagline */}
          <div className="flex items-center gap-1.5 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>by</span>
            <strong className="text-orange-400 font-black tracking-wide">BMO SOFTWARE</strong>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-center">
            © {CURRENT_YEAR} BMO Projects. All rights reserved.
          </div>

          {/* Back to Top Interactive Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white border border-slate-800 hover:border-orange-400 transition-all cursor-pointer shadow-md"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
