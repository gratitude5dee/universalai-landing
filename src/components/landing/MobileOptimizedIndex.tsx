import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';

const MobileOptimizedIndex = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden">
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

export default MobileOptimizedIndex;