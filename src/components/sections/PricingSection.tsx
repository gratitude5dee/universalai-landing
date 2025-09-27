import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const PricingSection = () => {
  const plans = [
    {
      name: "Explorer",
      price: "Free",
      subtitle: "Discover the agentic economy",
      features: [
        "Basic identity verification (zkProofs)",
        "3 fundamental AI agents included",
        "Access to agent marketplace",
        "Community studio booking (limited)",
        "1GB on-chain storage"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Creator", 
      price: "$97",
      period: "/month",
      subtitle: "For independent creators scaling up",
      features: [
        "Advanced \"Unseen Identity\" profiling",
        "15 specialized AI agents of choice",
        "Priority studio booking access",
        "Multi-chain treasury management",
        "100GB on-chain asset storage",
        "Automated royalty distribution"
      ],
      cta: "Launch Creator Journey",
      popular: true,
      gradient: "from-primary to-secondary"
    },
    {
      name: "Empire",
      price: "$297", 
      period: "/month",
      subtitle: "For creative entrepreneurs building kingdoms",
      features: [
        "Unlimited AI agent deployment",
        "Custom agent development tools",
        "Premium studio network access",
        "Advanced DeFi trading strategies",
        "1TB blockchain storage",
        "White-label agent marketplace"
      ],
      cta: "Build Empire",
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Studio Network",
      price: "$997",
      period: "/month", 
      subtitle: "For agencies and production companies",
      features: [
        "Physical studio ownership/partnership opportunities",
        "Multi-tenant agent orchestration",
        "Enterprise-grade identity verification",
        "Custom blockchain infrastructure",
        "Revenue sharing from studio network",
        "Dedicated technical support team"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-primary/8 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-2xl opacity-40" />
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
            Choose Your{' '}
            <span className="gradient-text">Agentic Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From exploration to empire building, find the perfect plan to scale your creative sovereignty
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-bold">Most Popular</span>
                  </div>
                </div>
              )}

              <GlassmorphicCard className={`h-full relative ${plan.popular ? 'border-primary/50 scale-105 lg:scale-110' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center`}>
                    <div className="text-2xl font-bold text-white">{plan.name[0]}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80' : ''}`}
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

                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg -z-10" />
                )}
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
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
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Zero-knowledge privacy protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Multi-chain asset support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>24/7 agent operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Automated IP protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Community support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Cancel anytime policy</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-primary font-medium">
                ✅ Start free, scale when ready • ✅ Your data stays private forever • ✅ Own your agents and IP permanently
              </p>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;