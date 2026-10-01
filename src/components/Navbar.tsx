import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, ArrowRight } from 'lucide-react';

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
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-orange-500/30">
              B
            </div>
            <div className="flex items-center">
              <span className="text-xl font-extrabold tracking-tight text-orange-500 font-heading">BMO</span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-heading ml-1">PROJECTS</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-orange-500 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('analytics-preview')}
              className="hover:text-orange-500 transition-colors"
            >
              Performance Analytics
            </button>
            <button
              onClick={() => scrollToSection('app-interface')}
              className="hover:text-orange-500 transition-colors"
            >
              App Interface
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-orange-500 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Launch App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-orange-500"
            >
              App
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg"
          >
            <div className="flex flex-col space-y-3 font-semibold text-slate-700">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left py-2 hover:text-orange-500"
              >
                Features Overview
              </button>
              <button
                onClick={() => scrollToSection('analytics-preview')}
                className="text-left py-2 hover:text-orange-500"
              >
                Performance Analytics & Leaderboard
              </button>
              <button
                onClick={() => scrollToSection('app-interface')}
                className="text-left py-2 hover:text-orange-500"
              >
                Task & Issue Interface
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left py-2 hover:text-orange-500"
              >
                Frequently Asked Questions
              </button>
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-center font-bold text-white bg-orange-500 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Open BMO Projects (app.bmoprojects.in)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
