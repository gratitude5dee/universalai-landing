import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import universalLogo from '@/assets/universal-logo.png';

const ParadigmShift = () => {
  const oldModel = [
    "Centralized record labels and studios extract 80%+ of value",
    "Biometric surveillance (Worldcoin) compromises privacy",
    "Fragmented tools require constant human intervention",
    "IP ownership controlled by corporate intermediaries",
    "Scale limited by human capacity and working hours"
  ];

  const newModel = [
    "On-chain studios + physical spaces you control",
    "Privacy-preserving identity via zero-knowledge proofs",
    "Autonomous agents that operate 24/7 on your behalf",
    "Programmable IP with blockchain-verified ownership",
    "Infinite scale through agent orchestration"
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ willChange: 'transform' }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Logo at the top */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.1, 0.25, 1],
            scale: { duration: 1.5, ease: "easeOut" }
          }}
          className="flex justify-center mb-12"
        >
          <motion.img 
            src={universalLogo} 
            alt="Universal AI Logo"
            className="w-64 h-auto md:w-80 lg:w-96"
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              filter: "drop-shadow(0 0 30px rgba(var(--primary-rgb), 0.5))",
            }}
          />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Beyond Tools. Beyond Platforms.{' '}
            <span className="gradient-text">Beyond Human Limitations.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The transition from extractive creative industries to the agentic economy where creators control their destiny
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Old Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassmorphicCard className="bg-red-500/5 border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center"
                  whileInView={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <X className="w-5 h-5 text-red-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-red-200">Traditional Creative Industry</h3>
              </div>
              <div className="space-y-4">
                {oldModel.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>

          {/* New Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassmorphicCard className="bg-primary/5 border-primary/30">
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Check className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary">The 5DEE Ecosystem</h3>
              </div>
              <div className="space-y-4">
                {newModel.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <GlassmorphicCard className="max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl italic text-primary leading-relaxed">
              "We're not just building better creative tools. We're reconstructing the entire creative economy infrastructure from the ground up—decentralized, human-centric, and powered by autonomous intelligence."
            </blockquote>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ParadigmShift;