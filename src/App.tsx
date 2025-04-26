import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import LanguagesSection from './components/LanguagesSection';
import FeaturesSection from './components/FeaturesSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div className="min-h-screen bg-gray-900">
            <Header />
            <main>
              <HeroSection />
              <AboutSection />
              <CoursesSection />
              <LanguagesSection />
              <FeaturesSection />
              <CtaSection />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;