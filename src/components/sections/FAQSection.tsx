import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import PillLabel from '@/components/ui/PillLabel';

const faqs = [
  {
    question: 'What is UniversalAI?',
    answer:
      'UniversalAI is a decentralized protocol that empowers creators with ownership, attribution, and monetization in the AI economy. We provide the infrastructure for creators to maintain sovereignty over their creative work while participating in AI-powered ecosystems.',
  },
  {
    question: "How does UniversalAI's technology work?",
    answer:
      'Our technology leverages zero-knowledge proofs, decentralized identity systems, and blockchain infrastructure to create verifiable, privacy-preserving attribution for creative work. This allows creators to prove ownership and earn revenue when AI systems use their content, all while maintaining control over their data.',
  },
  {
    question: 'What chains or ecosystems does UniversalAI support?',
    answer:
      'UniversalAI is built to be chain-agnostic, supporting multiple blockchain ecosystems including Ethereum, Polygon, Solana, and emerging L2 solutions. Our protocol integrates with major AI platforms and creative tools to ensure maximum interoperability.',
  },
  {
    question: 'What is the $UNAI token?',
    answer:
      'The $UNAI token powers the UniversalAI ecosystem, serving as the medium for creator compensation, governance participation, and access to premium features. Token holders can stake, earn rewards, and participate in protocol governance decisions.',
  },
  {
    question: 'How does UniversalAI solve creator attribution?',
    answer:
      'We use cryptographic proofs and decentralized registries to create immutable, verifiable records of creative work. When AI systems use attributed content, our protocol automatically tracks usage and facilitates compensation, ensuring creators maintain rights and receive fair value.',
  },
  {
    question: 'How does UniversalAI help creators without technical knowledge?',
    answer:
      'UniversalAI provides intuitive, user-friendly interfaces that abstract away blockchain complexity. Creators can register work, track attribution, and receive payments without needing to understand the underlying technology. Our tools are designed for artists first, technologists second.',
  },
  {
    question: 'How does UniversalAI keep my data private and secure?',
    answer:
      'We employ zero-knowledge proofs and encrypted storage to ensure that your creative data remains private while still enabling verification and attribution. You control what data is shared and with whom, and all sensitive information is encrypted end-to-end.',
  },
  {
    question: 'Do I need a Universal Wallet to use UniversalAI tools?',
    answer:
      'While a Universal Wallet provides the best experience and full feature access, many UniversalAI tools can be used with standard Web3 wallets. The Universal Wallet offers enhanced security, simplified key management, and seamless integration across the ecosystem.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PillLabel className="mb-6">FAQ</PillLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold tracking-tight">
            Questions,{' '}
            <span className="bg-gradient-to-r from-accent-amber via-accent-rose to-primary bg-clip-text text-transparent">
              Answered by Humans
            </span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="rounded-xl glass border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-300">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-all duration-300"
                >
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full glass-strong border border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
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

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
