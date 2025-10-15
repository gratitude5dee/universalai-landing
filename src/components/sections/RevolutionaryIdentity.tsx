import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, X, Check } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const RevolutionaryIdentity = () => {
  const worldcoinProblems = [
    "Iris scanning with privacy risks",
    "Centralized orb infrastructure", 
    "Vulnerable to regulatory shutdown",
    "Exploitation of economically vulnerable communities"
  ];

  const fiveDeeSolution = [
    "Gamified Cognitive Analysis: Brief interactions reveal your unique mental flow patterns",
    "Zero-Knowledge Proofs: Verify humanity without exposing personal data",
    "Personality DNA Extraction: Capture the essence of your consciousness and creativity",
    "Digital Twin Generation: Create authentic avatars that think and create like you"
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[700px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[300px] bg-secondary/15 rounded-full blur-2xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Your{' '}
            <span className="gradient-text">"Unseen Identity"</span>
            <br />
            Beyond Biometric Surveillance
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We prove you're human by understanding how you're uniquely human, not by scanning your eyeball
          </p>
        </motion.div>

        {/* Comparison Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Worldcoin Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassmorphicCard className="bg-red-500/5 border-red-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-200">The Problem with Worldcoin</h3>
              </div>
              <p className="text-muted-foreground mb-6">Traditional "Proof of Humanity" requires:</p>
              <div className="space-y-4">
                {worldcoinProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>

          {/* 5DEE Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassmorphicCard className="bg-primary/5 border-primary/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">The 5DEE Solution</h3>
              </div>
              <p className="text-foreground mb-6 font-medium">Sensor-free, question-free consciousness mapping:</p>
              <div className="space-y-6">
                {fiveDeeSolution.map((solution, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium text-primary">
                          {solution.split(':')[0]}:
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {solution.split(':').slice(1).join(':')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GlassmorphicCard className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">How Your Unseen Identity Works</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Interact Naturally",
                  description: "Brief, gamified interactions reveal your cognitive patterns"
                },
                {
                  step: "02", 
                  title: "Extract DNA",
                  description: "AI captures the essence of your consciousness and creativity"
                },
                {
                  step: "03",
                  title: "Prove Humanity",
                  description: "Zero-knowledge proofs verify you're human without data exposure"
                },
                {
                  step: "04",
                  title: "Create Twin",
                  description: "Generate authentic avatars that think and create like you"
                }
              ].map((process, index) => (
                <motion.div 
                  key={index} 
                  className="text-center relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto relative"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {process.step}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-lg opacity-0"
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <h4 className="text-lg font-bold mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                  
                  {/* Animated Connection Line */}
                  {index < 3 && (
                    <motion.div 
                      className="hidden md:block absolute top-8 left-full w-6 h-0.5 bg-gradient-to-r from-primary to-secondary" 
                      style={{ transform: 'translateX(-50%)' }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="text-center mt-12 pt-8 border-t border-white/10">
              <blockquote className="text-xl italic text-primary">
                "We prove you're human by understanding how you're uniquely human, not by scanning your eyeball."
              </blockquote>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryIdentity;