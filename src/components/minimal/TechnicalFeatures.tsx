import React from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const TechnicalFeatures = () => {
  const features = [
    {
      icon: '📊',
      title: 'Precision-Driven Portfolio Growth',
      description: 'Every move guided by data and insights for smarter portfolio growth.',
      visualization: 'chart'
    },
    {
      icon: '💎',
      title: 'Diversified UniversalAI', 
      description: 'Tailor your portfolio to achieve optimal performance.',
      visualization: 'dots'
    },
    {
      icon: '🔄',
      title: 'Your Portfolio, Optimized in Real-Time',
      description: 'Adjusted instantly with market changes to enhance investment efficiency.',
      visualization: 'network'
    },
    {
      icon: '⚡',
      title: 'Maximize Returns, Minimize Effort',
      description: 'A fully automated investment system that saves you time and worry.',
      visualization: 'lightning'
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Invest with Confidence.<br />Backed by Intelligence.
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our innovative AI technology transforms UniversalAI management by analyzing vast data sets in real-time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassmorphicCard className="h-full hover:border-primary/30 transition-all duration-300 group p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                </div>
                
                {/* Visualization Components */}
                {feature.visualization === 'chart' && (
                  <div className="h-32 relative">
                    <svg width="100%" height="100%" viewBox="0 0 300 120" className="overflow-visible">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,100 Q50,90 100,70 T200,40 300,20"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                        className="drop-shadow-glow"
                      />
                      <path 
                        d="M0,100 Q50,90 100,70 T200,40 300,20 L300,120 L0,120 Z"
                        fill="url(#chartGradient)"
                      />
                      <circle cx="200" cy="40" r="4" fill="white" className="drop-shadow-lg" />
                      <line x1="200" y1="40" x2="200" y2="120" stroke="white" strokeWidth="1" opacity="0.3" />
                    </svg>
                  </div>
                )}
                
                {feature.visualization === 'dots' && (
                  <div className="grid grid-cols-8 gap-2 h-32 content-center">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          [0, 4, 8, 11, 15, 19, 22, 24, 28, 31].includes(i)
                            ? 'bg-gradient-to-br from-primary to-primary-glow shadow-glow'
                            : 'bg-white/10'
                        }`}
                        style={{ 
                          animationDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {feature.visualization === 'network' && (
                  <div className="relative h-32 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                      <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                      <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                      <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                    </svg>
                    <div className="absolute top-[10%] left-[10%] w-8 h-8 rounded-full glass flex items-center justify-center text-xs">📊</div>
                    <div className="absolute top-[10%] right-[10%] w-8 h-8 rounded-full glass flex items-center justify-center text-xs">💼</div>
                    <div className="absolute bottom-[10%] left-[10%] w-8 h-8 rounded-full glass flex items-center justify-center text-xs">📈</div>
                    <div className="absolute bottom-[10%] right-[10%] w-8 h-8 rounded-full glass flex items-center justify-center text-xs">💎</div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold">+</div>
                  </div>
                )}
                
                {feature.visualization === 'lightning' && (
                  <div className="flex justify-center items-center h-32">
                    <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-glow">
                      <defs>
                        <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M32 8 L16 40 L32 40 L24 72 L64 32 L40 32 L48 8 Z"
                        fill="url(#lightningGradient)"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatures;