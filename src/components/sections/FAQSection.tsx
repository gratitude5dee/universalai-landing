import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import PillLabel from '@/components/ui/PillLabel';
import { TextAnimate } from '@/components/ui/text-animate';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { ShineBorder } from '@/components/ui/shine-border';

const faqs = [
  {
    question: 'What is WZRD.tech?',
    answer: 'WZRD.tech is the creator-agent operating system that enables autonomous creative workflows. It\'s infrastructure for creators to deploy AI agents that handle distribution, monetization, and rights management.',
  },
  {
    question: 'How does $5DEE work?',
    answer: '5DEE is a "GENIUS ACT" compliant stablecoin built in partnership with Bridge, Tempo, Thirdweb, and Coinbase. It powers autonomous transactions, creator royalties, and public goods funding within the ecosystem.',
  },
  {
    question: 'What is self-sovereign identity?',
    answer: 'Self-sovereign identity means you own and control your creative identity completely. Your credentials, reputation, and work history are verifiable and portable across every platform—no single entity controls your digital presence.',
  },
  {
    question: 'How do AI agents work in the ecosystem?',
    answer: 'Our AI agents are built on ERC-8004 and x402 protocols. They can autonomously negotiate licenses, distribute content, collect royalties, and interact with other agents on your behalf—24/7.',
  },
  {
    question: 'Is my data and content secure?',
    answer: 'Absolutely. We use end-to-end encryption and decentralized storage. You control what data is shared and with whom. Your creative work and personal information remain yours.',
  },
  {
    question: 'How do I get started?',
    answer: 'Join the waitlist and schedule an onboarding call. We\'ll walk you through setting up your creator identity, deploying your first agent, and connecting to the $5DEE economy.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FlickeringGrid
          color="hsl(var(--primary))"
          maxOpacity={0.03}
          flickerChance={0.08}
          squareSize={3}
          gridGap={6}
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <PillLabel className="mb-4 sm:mb-6">FAQ</PillLabel>
          
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="inline"
            >
              Questions,
            </TextAnimate>{' '}
            <AnimatedGradientText
              speed={1.5}
              colorFrom="#9333ea"
              colorTo="#ec4899"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Answered
            </AnimatedGradientText>
          </div>
          
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.3}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Everything you need to know about WZRD.tech and the 5DEE ecosystem.
          </TextAnimate>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative rounded-xl glass-liquid border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300">
                {openIndex === index && (
                  <ShineBorder
                    shineColor={['#9333ea', '#ec4899', '#a855f7']}
                    borderWidth={1}
                    duration={6}
                  />
                )}
                
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-all duration-300 min-h-[64px] touch-manipulation"
                >
                  <span className="text-base sm:text-lg font-semibold pr-6 sm:pr-8">{faq.question}</span>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-8 sm:h-8 rounded-full glass-liquid border border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                    <AnimatePresence mode="wait">
                      {openIndex === index ? (
                        <motion.div
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Minus className="w-4 h-4 text-primary" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-4 h-4 text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
