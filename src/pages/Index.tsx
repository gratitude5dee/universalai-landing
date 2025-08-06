import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/landing/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Footer } from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import FestivalAnimations from '@/components/animations/FestivalAnimations';


const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Festival Background Animations */}
      <FestivalAnimations />
      
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;