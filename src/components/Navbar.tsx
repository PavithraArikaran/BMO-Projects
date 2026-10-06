import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import bmoLogo from '../assets/bmo-logo.jpeg';

const APP_URL = "https://app.bmoprojects.in/";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    setTimeout(() => {
      let element = document.getElementById(id);
      if (!element && id === 'performance-analytics') {
        element = document.getElementById('analytics-preview');
      }
      if (!element && id === 'app-interface') {
        element = document.getElementById('task-issue');
      }
      if (!element && id === 'analytics-preview') {
        element = document.getElementById('performance-analytics');
      }
      if (!element && id === 'task-issue') {
        element = document.getElementById('app-interface');
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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2 sm:py-2.5 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm py-2.5 sm:py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Responsive Logo & Brand Name */}
          <div
            className="flex items-center space-x-1.5 sm:space-x-2.5 md:space-x-3 cursor-pointer group shrink-0"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl overflow-hidden bg-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
              <img
                src={bmoLogo}
                alt="BMO Projects Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center font-heading">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight text-orange-500">BMO</span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight text-slate-900 ml-1 sm:ml-1.5">PROJECTS</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-xs md:text-sm lg:text-base font-bold text-slate-700">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-orange-500 transition-colors cursor-pointer py-1"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('performance-analytics')}
              className="hover:text-orange-500 transition-colors cursor-pointer py-1"
            >
              Performance Analytics
            </button>
            <button
              onClick={() => scrollToSection('app-interface')}
              className="hover:text-orange-500 transition-colors cursor-pointer py-1"
            >
              App Interface
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="hover:text-orange-500 transition-colors cursor-pointer py-1"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-orange-500 transition-colors cursor-pointer py-1"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Right Action Button */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl text-xs md:text-sm lg:text-base font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Launch App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center space-x-1.5 sm:space-x-2 shrink-0">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-xs transition-colors"
            >
              App
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3 font-bold text-slate-800 text-base">
              <button
                type="button"
                onClick={() => scrollToSection('features')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
              >
                Features Overview
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('performance-analytics')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
              >
                Performance Analytics
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('app-interface')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
              >
                App Interface
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('reviews')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
              >
                Customer Reviews
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('faq')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
              >
                Frequently Asked Questions
              </button>
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-center font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Open BMO Projects</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
