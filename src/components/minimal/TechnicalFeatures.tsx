import React from 'react';
import { useInView } from 'react-intersection-observer';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import InteractiveChart from '@/components/ui/InteractiveChart';
import DynamicDotGrid from '@/components/ui/DynamicDotGrid';
import NetworkVisualization from '@/components/ui/NetworkVisualization';
import LightningVisualization from '@/components/ui/LightningVisualization';
import { motion } from 'framer-motion';

const TechnicalFeatures = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const features = [
    {
      label: "Precision-Driven",
      title: "Portfolio Growth",
      description: "Every move guided by data and insights for smarter portfolio growth.",
      component: <InteractiveChart />,
      gradient: "from-primary to-primary-glow"
    },
    {
      label: "Diversified",
      title: "Asset Management",
      description: "Tailor your portfolio to achieve optimal performance across multiple asset classes.",
      component: <DynamicDotGrid />,
      gradient: "from-secondary to-primary"
    },
    {
      label: "Real-Time",
      title: "Portfolio Optimization",
      description: "Adjusted instantly with market changes to enhance investment efficiency.",
      component: <NetworkVisualization />,
      gradient: "from-primary-glow to-secondary"
    },
    {
      label: "Automated",
      title: "Maximum Returns, Minimum Effort",
      description: "A fully automated investment system that saves you time and worry.",
      component: <LightningVisualization />,
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section ref={ref} className="py-32 px-4 md:px-8 lg:px-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            Invest with Confidence.
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Backed by Intelligence.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our AI-powered platform combines cutting-edge technology with proven investment strategies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <GlassmorphicCard className="h-full group">
                <div className="mb-6">
                  <span className={`text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r ${feature.gradient} text-white/90`}>
                    {feature.label}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Interactive Component */}
                <div className="relative">
                  {feature.component}
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnicalFeatures;