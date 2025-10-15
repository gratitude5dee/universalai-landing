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
      {/* Sophisticated Background Effects */}
      <div className="absolute inset-0">
        {/* Radial gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--secondary)/0.15)_0%,transparent_50%)]" />
        
        {/* Animated orbs with improved aesthetics */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)/0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--secondary)/0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Subtle grid pattern for depth */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Accent glow spots */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-secondary/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-sm font-semibold text-primary">Transparent Pricing</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Choose Your{' '}
            <span className="gradient-text inline-block">Agentic Journey</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From exploration to empire building, find the perfect plan to scale your creative sovereignty
          </p>
          
          {/* Decorative element */}
          <motion.div 
            className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
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

              <GlassmorphicCard className={`h-full relative group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${plan.popular ? 'border-primary/50 scale-105 lg:scale-110 shadow-xl shadow-primary/20' : 'hover:scale-[1.02]'}`}>
                {/* Premium hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-secondary/5 rounded-2xl transition-all duration-500 pointer-events-none" />
                
                {/* Plan Header */}
                <div className="text-center mb-6 relative">
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${plan.gradient} rounded-3xl flex items-center justify-center relative shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -5, 5, 0],
                      scale: 1.1,
                      y: -5
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="text-3xl font-bold text-white relative z-10">{plan.name[0]}</div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                    
                    {/* Sparkle effect on hover */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">{plan.subtitle}</p>
                  
                  <motion.div 
                    className="mb-8 py-6 px-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground text-lg">{plan.period}</span>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Features List */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-start gap-3 group/feature"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                      whileHover={{ x: 6 }}
                    >
                      <motion.div
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover/feature:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <Check className="w-3 h-3 text-primary" />
                      </motion.div>
                      <p className="text-sm text-foreground/90 group-hover/feature:text-foreground leading-relaxed transition-colors">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Premium CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative"
                >
                  <Button 
                    className={`w-full relative overflow-hidden group/btn ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg shadow-primary/25' 
                        : 'hover:border-primary/50'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => {
                      if (plan.cta === "Start Free" || plan.cta === "Launch Creator Journey") {
                        window.dispatchEvent(new CustomEvent('open-waitlist'));
                      }
                    }}
                  >
                    <span className="relative z-10 font-semibold">{plan.cta}</span>
                    
                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>

                {/* Enhanced Glow Effect for Popular */}
                {plan.popular && (
                  <>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl blur-xl -z-10 animate-pulse" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur-2xl -z-20" />
                  </>
                )}
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <GlassmorphicCard className="max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                All Plans Include
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm mb-8">
                {[
                  "Zero-knowledge privacy protection",
                  "Multi-chain asset support",
                  "24/7 agent operations",
                  "Automated IP protection",
                  "Community support",
                  "Cancel anytime policy"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 group/item"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-left group-hover/item:text-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-gradient-to-r from-transparent via-primary/20 to-transparent">
                <motion.div 
                  className="inline-flex flex-wrap items-center justify-center gap-4 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="flex items-center gap-2 text-primary font-medium px-4 py-2 rounded-full bg-primary/10">
                    <Check className="w-4 h-4" />
                    Start free, scale when ready
                  </span>
                  <span className="flex items-center gap-2 text-primary font-medium px-4 py-2 rounded-full bg-primary/10">
                    <Check className="w-4 h-4" />
                    Your data stays private forever
                  </span>
                  <span className="flex items-center gap-2 text-primary font-medium px-4 py-2 rounded-full bg-primary/10">
                    <Check className="w-4 h-4" />
                    Own your agents and IP permanently
                  </span>
                </motion.div>
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;