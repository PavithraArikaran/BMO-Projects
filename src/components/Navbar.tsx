import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, Sparkles, LayoutGrid, BarChart3, AppWindow, Star, HelpCircle } from 'lucide-react';
import bmoLogo from '../assets/bmo-logo.jpeg';

const APP_URL = "https://app.bmoprojects.in/";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('features');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);

    setTimeout(() => {
      let element = document.getElementById(id);
      if (!element && id === 'performance-analytics') {
        element = document.getElementById('analytics-preview');
      }
      if (!element && id === 'app-interface') {
        element = document.getElementById('task-issue');
      }

      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Clean Brand Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:border-orange-300 group-hover:scale-105 transition-all duration-300">
              <img
                src={bmoLogo}
                alt="BMO Projects Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center font-heading">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">BMO</span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-gradient-orange ml-1">PROJECTS</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-bold text-slate-700">
            <button
              onClick={() => scrollToSection('features')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeNav === 'features'
                  ? 'text-orange-600 bg-orange-50 font-black'
                  : 'hover:text-orange-600 hover:bg-slate-50'
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-orange-500" />
              <span>Features</span>
            </button>

            <button
              onClick={() => scrollToSection('performance-analytics')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeNav === 'performance-analytics'
                  ? 'text-orange-600 bg-orange-50 font-black'
                  : 'hover:text-orange-600 hover:bg-slate-50'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-amber-500" />
              <span>Analytics</span>
            </button>

           

            <button
              onClick={() => scrollToSection('reviews')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeNav === 'reviews'
                  ? 'text-orange-600 bg-orange-50 font-black'
                  : 'hover:text-orange-600 hover:bg-slate-50'
              }`}
            >
              <Star className="w-4 h-4 text-amber-500" />
              <span>Reviews</span>
            </button>

            <button
              onClick={() => scrollToSection('faq')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeNav === 'faq'
                  ? 'text-orange-600 bg-orange-50 font-black'
                  : 'hover:text-orange-600 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-purple-500" />
              <span>FAQ</span>
            </button>
          </nav>

          {/* Desktop Right Action CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5 group"
            >
              <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
              <span>Launch App</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-xs flex items-center gap-1"
            >
              <span>App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-orange-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl mt-3"
          >
            <div className="flex flex-col space-y-2.5 font-bold text-slate-800 text-sm">
              <button
                type="button"
                onClick={() => scrollToSection('features')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-2.5 cursor-pointer"
              >
                <LayoutGrid className="w-4 h-4 text-orange-500" />
                <span>Features</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('performance-analytics')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-2.5 cursor-pointer"
              >
                <BarChart3 className="w-4 h-4 text-amber-500" />
                <span>Performance Analytics</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('app-interface')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-2.5 cursor-pointer"
              >
                <AppWindow className="w-4 h-4 text-blue-500" />
                <span>App Interface</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('reviews')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-2.5 cursor-pointer"
              >
                <Star className="w-4 h-4 text-amber-500" />
                <span>Customer Reviews</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('faq')}
                className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-2.5 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-purple-500" />
                <span>Frequently Asked Questions</span>
              </button>
              
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-center font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Open BMO Projects Workspace</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
