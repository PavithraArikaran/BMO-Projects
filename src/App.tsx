import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { PerformanceAnalyticsSection } from './components/PerformanceAnalyticsSection';
import { AppInterfaceSection } from './components/AppInterfaceSection';
import { HowItWorks } from './components/HowItWorks';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Light Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Bright Hero Section */}
        <Hero />

        {/* 2. True 6 Core Features Grid (id="features") */}
        <FeaturesSection />

        {/* 3. Performance Analytics & Leaderboard Section (id="analytics-preview") */}
        <PerformanceAnalyticsSection />

        {/* 4. Task Management & Issue Interface Section (id="app-interface") */}
        <AppInterfaceSection />

        {/* 5. Simple 3-Step Process (id="how-it-works") */}
        <HowItWorks />

        {/* 6. FAQ (id="faq") */}
        <FaqSection />

        {/* 7. Simple CTA Banner */}
        <CtaBanner />
      </main>

      {/* Footer with "Crafted with ❤️ by BMO SOFTWARE" */}
      <Footer />
    </div>
  );
}

export default App;
