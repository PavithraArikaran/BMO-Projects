import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ExternalLink,
  Sparkles,
  Home,
  LayoutGrid,
  BarChart3,
  Star,
  HelpCircle,
} from 'lucide-react';
import bmoLogo from '../assets/bmo-logo.jpeg';

const APP_URL = 'https://app.bmoprojects.in/';

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
}

// 5 Main Nav Items (No separate Contact in top menu bar)
const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', path: '/Home', icon: <Home className="w-4 h-4" /> },
  { id: 'features', label: 'Features', path: '/Features', icon: <LayoutGrid className="w-4 h-4" /> },
  { id: 'performance-analytics', label: 'Analytics', path: '/Analytics', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'reviews', label: 'Reviews', path: '/Reviews', icon: <Star className="w-4 h-4" /> },
  { id: 'faq', label: 'FAQ', path: '/FAQ', icon: <HelpCircle className="w-4 h-4" /> },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');
  const isManualClickRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getPathForId = (id: string) => {
    const item = NAV_ITEMS.find((n) => n.id === id);
    return item ? item.path : '/Home';
  };

  const getIdForPath = (pathname: string) => {
    const cleanPath = pathname.toLowerCase().replace(/\/$/, '');
    if (!cleanPath || cleanPath === '' || cleanPath === '/home') return 'hero';
    if (cleanPath === '/features') return 'features';
    if (cleanPath === '/analytics') return 'performance-analytics';
    if (cleanPath === '/reviews') return 'reviews';
    if (cleanPath === '/faq') return 'faq';
    return 'hero';
  };

  const performScroll = (id: string) => {
    const lenis = (window as any).lenis;

    if (id === 'hero') {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    let element = document.getElementById(id);
    if (!element && id === 'performance-analytics') {
      element = document.getElementById('analytics-preview');
    }

    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -90, duration: 1.2 });
      } else {
        const yOffset = 90;
        const targetY = Math.max(0, element.getBoundingClientRect().top + window.scrollY - yOffset);
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (id: string, updateUrl = true) => {
    setActiveNav(id);
    setMobileMenuOpen(false);

    if (updateUrl) {
      const targetPath = getPathForId(id);
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ id }, '', targetPath);
      }
    }

    // Lock scroll spy for 1500ms to allow smooth scroll animation to finish completely without jumping
    isManualClickRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isManualClickRef.current = false;
    }, 1500);

    performScroll(id);
  };

  // Scroll spy listener with exact section bounding calculations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Do NOT interrupt activeNav/URL while smooth scroll is animating to a clicked section
      if (isManualClickRef.current) return;

      const scrollY = window.scrollY;

      // Top of page -> Home
      if (scrollY < 120) {
        if (activeNav !== 'hero') {
          setActiveNav('hero');
          if (window.location.pathname !== '/Home' && window.location.pathname !== '/') {
            window.history.replaceState({ id: 'hero' }, '', '/Home');
          }
        }
        return;
      }

      // Check section positions from bottom up (FAQ, Reviews, Analytics, Features, Hero)
      const sectionOrder = ['faq', 'reviews', 'performance-analytics', 'features', 'hero'];
      const triggerY = scrollY + 220;

      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const absoluteTop = rect.top + scrollY;
          if (triggerY >= absoluteTop - 50) {
            if (activeNav !== id) {
              setActiveNav(id);
              const targetPath = getPathForId(id);
              if (window.location.pathname !== targetPath) {
                window.history.replaceState({ id }, '', targetPath);
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeNav]);

  // Initial URL check & browser back/forward listener
  useEffect(() => {
    const syncFromUrl = () => {
      const initialId = getIdForPath(window.location.pathname);
      setActiveNav(initialId);
      if (initialId !== 'hero') {
        setTimeout(() => {
          performScroll(initialId);
        }, 400);
      }
    };

    syncFromUrl();

    const handlePopState = () => {
      const id = getIdForPath(window.location.pathname);
      setActiveNav(id);
      performScroll(id);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md shadow-slate-900/5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Clean Brand Logo */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
            onClick={() => scrollToSection('hero', true)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:border-orange-400 group-hover:scale-105 transition-all duration-300">
              <img
                src={bmoLogo}
                alt="BMO Projects Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center font-heading">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900">BMO</span>
              <span className="text-lg sm:text-2xl font-black tracking-tight text-gradient-orange ml-1">PROJECTS</span>
            </div>
          </div>

          {/* Desktop Nav Links with Active Hover / Scroll Spy Pill */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 text-sm font-bold text-slate-700 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, true)}
                  className={`relative px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 text-sm ${
                    isActive
                      ? 'text-orange-600 font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-bold'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHighlight"
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-orange-200/80 z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className={isActive ? 'text-orange-500' : 'text-slate-400'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
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
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xs flex items-center gap-1"
            >
              <span>App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl mt-2 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 font-bold text-slate-800 text-sm">
              {NAV_ITEMS.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id, true)}
                    className={`w-full text-left py-3 px-4 rounded-xl transition-all flex items-center gap-3 cursor-pointer ${
                      isActive
                        ? 'bg-orange-50 text-orange-600 font-extrabold border border-orange-200'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className={isActive ? 'text-orange-500' : 'text-slate-400'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              <div className="pt-3 border-t border-slate-100 mt-2">
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
