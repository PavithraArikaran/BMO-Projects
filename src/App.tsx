import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { PerformanceAnalyticsSection } from './components/PerformanceAnalyticsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* 0. Initial Project Preloader Animation */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Light Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className={isLoaded ? 'opacity-100 transition-opacity duration-700' : 'opacity-90'}>
        {/* 1. Bright Hero Section */}
        <Hero />

        {/* 2. Core Features Grid (id="features") */}
        <FeaturesSection />

        {/* 3. Performance Analytics Showcase Section (id="performance-analytics") */}
        <PerformanceAnalyticsSection />

        {/* 4. Reviews & Testimonials Section (id="reviews") */}
        <ReviewsSection />

        {/* 5. FAQ (id="faq") */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
