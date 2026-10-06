import { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* 0. Initial Project Preloader Animation */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Light Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className={isLoaded ? 'opacity-100 transition-opacity duration-700' : 'opacity-90'}>
        {/* 1. Bright Hero Section */}
        <Hero />

        {/* 2. True 6 Core Features Grid (id="features") */}
        <FeaturesSection />

        {/* 3. Unified Performance Analytics & App Interface Showcase Section (id="performance-analytics" & id="app-interface") */}
        <PerformanceAnalyticsSection />

        {/* 4. Reviews, Testimonials & Trustable Clients Section (id="reviews") */}
        <ReviewsSection />


        {/* 7. FAQ (id="faq") */}
        <FaqSection />

        {/* 8. Simple CTA Banner */}
        {/* <CtaBanner /> */}
      </main>

      {/* Footer with "Crafted with ❤️ by BMO SOFTWARE" */}
      <Footer />
    </div>
  );
}

export default App;
