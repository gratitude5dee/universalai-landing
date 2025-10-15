import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import { Button } from '@/components/ui/button';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import SectionDivider from '@/components/ui/SectionDivider';
import { Check, Star, Sparkles, Crown, Building2, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Explorer',
    price: 'Free',
    subtitle: 'Discover the agentic economy',
    gradient: 'from-gray-500 to-gray-600',
    icon: Sparkles,
    features: [
      'Basic identity verification (zkProofs)',
      '3 fundamental AI agents included',
      'Access to agent marketplace',
      'Community studio booking (limited)',
      '1GB on-chain storage'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Creator',
    price: '$97',
    subtitle: 'For independent creators scaling up',
    gradient: 'from-primary to-secondary',
    icon: Rocket,
    features: [
      'Advanced "Unseen Identity" profiling',
      '15 specialized AI agents of choice',
      'Priority studio booking access',
      'Multi-chain treasury management',
      '100GB on-chain asset storage',
      'Automated royalty distribution'
    ],
    cta: 'Launch Creator Journey',
    popular: true
  },
  {
    name: 'Empire',
    price: '$297',
    subtitle: 'For creative entrepreneurs building kingdoms',
    gradient: 'from-purple-500 to-pink-500',
    icon: Crown,
    features: [
      'Unlimited AI agent deployment',
      'Custom agent development tools',
      'Premium studio network access',
      'Advanced DeFi trading strategies',
      '1TB blockchain storage',
      'White-label agent marketplace'
    ],
    cta: 'Build Empire',
    popular: false
  },
  {
    name: 'Studio Network',
    price: '$997',
    subtitle: 'For agencies and production companies',
    gradient: 'from-amber-500 to-orange-500',
    icon: Building2,
    features: [
      'Physical studio ownership/partnership opportunities',
      'Multi-tenant agent orchestration',
      'Enterprise-grade identity verification',
      'Custom blockchain infrastructure',
      'Revenue sharing from studio network',
      'Dedicated technical support team'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const allPlansInclude = [
  'Zero-knowledge privacy protection',
  'Cross-chain interoperability',
  'Community forum access',
  'Regular feature updates',
  'Decentralized governance participation',
  'Open-source transparency'
];

const Pricing: React.FC = () => {
  useEffect(() => {
    document.title = 'UniversalAI – Pricing | Choose Your Agentic Journey';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'From exploration to empire building, find the perfect plan to scale your creative sovereignty with UniversalAI. Start free, scale when ready.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-primary/8 rounded-full blur-3xl opacity-50"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-2xl opacity-40"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <main className="pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Choose Your{' '}
            <span className="gradient-text">Agentic Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From exploration to empire building, find the perfect plan to scale your creative sovereignty
          </p>
        </motion.div>

        <SectionDivider className="mb-16" />

        {/* Pricing Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full flex items-center gap-2 shadow-lg"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Star className="w-4 h-4 text-white fill-white" />
                        <span className="text-white text-sm font-bold">Most Popular</span>
                      </motion.div>
                    </div>
                  )}

                  <GlassmorphicCard 
                    variant="default"
                    hover={true}
                    className={`h-full relative group cursor-pointer ${
                      plan.popular ? 'border-primary/50 scale-105 lg:scale-110' : ''
                    }`}
                  >
                    {/* Plan Icon */}
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center relative`}
                      whileHover={{ 
                        rotate: [0, -15, 15, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white relative z-10" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                    </motion.div>

                    {/* Plan Header */}
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                      <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                      <motion.div 
                        className="text-4xl font-bold text-primary"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {plan.price}
                        {plan.price !== 'Free' && plan.price !== 'Contact' && (
                          <span className="text-lg text-muted-foreground">/month</span>
                        )}
                      </motion.div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <p className="text-sm text-foreground">{feature}</p>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none' 
                            : ''
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                        onClick={() => {
                          if (plan.cta === "Start Free" || plan.cta === "Launch Creator Journey") {
                            window.dispatchEvent(new CustomEvent('open-waitlist'));
                          }
                        }}
                      >
                        {plan.cta}
                      </Button>
                    </motion.div>

                    {/* Background Glow for Popular Plan */}
                    {plan.popular && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg -z-10 opacity-75" />
                    )}
                  </GlassmorphicCard>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Signals Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <GlassmorphicCard className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">All Plans Include</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                {allPlansInclude.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-left">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-primary font-medium">
                  ✅ Start free, scale when ready • ✅ Your data stays private forever • ✅ Own your agents and IP permanently
                </p>
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>

        <SectionDivider className="mt-20" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
