import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, CheckCircle, Loader2 } from 'lucide-react';
import { TextAnimate, AnimatedGradientText, FlickeringGrid, ShineBorder, NumberTicker, ShimmerButton } from '@/components/magicui';

export const MagicCTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');

    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const benefits = [
    'Priority access to new features',
    'Exclusive creator community',
    'Early investor opportunities',
    'Direct line to founding team',
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(147, 51, 234)"
          maxOpacity={0.2}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255, 181, 71, 0.25), transparent)' }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          delay: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-amber-500 to-rose-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

              <ShineBorder
                borderWidth={1}
                duration={14}
                shineColor={['rgba(147, 51, 234, 0.6)', 'rgba(255, 181, 71, 0.6)', 'rgba(255, 107, 157, 0.6)']}
                className="relative"
              >
                <div className="relative p-12 md:p-16 rounded-3xl glass-liquid text-center">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-8"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="w-5 h-5 text-amber-400" />
                    </motion.div>
                    <AnimatedGradientText
                      speed={1.5}
                      colorFrom="#FFB547"
                      colorTo="#9c40ff"
                      className="text-sm font-semibold"
                    >
                      Limited Early Access
                    </AnimatedGradientText>
                  </motion.div>

                  {/* Headline */}
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    delay={0.2}
                    duration={0.5}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  >
                    Join the Creator Revolution
                  </TextAnimate>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-8 justify-center mb-12">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                        <NumberTicker value={12847} />
                      </div>
                      <div className="text-sm text-gray-400">Waitlist Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                        <NumberTicker value={847} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-400">Spots Remaining</div>
                    </div>
                  </div>

                  {/* Email Form or Success State */}
                  {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm"
                        />
                      </div>
                      <ShimmerButton
                        type="submit"
                        disabled={isSubmitting}
                        shimmerColor="rgba(255, 255, 255, 0.3)"
                        shimmerDuration="3s"
                        className="w-full mt-4"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Joining...
                          </span>
                        ) : (
                          'Join Waitlist'
                        )}
                      </ShimmerButton>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="max-w-md mx-auto mb-12 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
                    >
                      <div className="flex items-center justify-center gap-3 text-emerald-400 mb-2">
                        <CheckCircle className="w-6 h-6" />
                        <span className="text-lg font-semibold">You're on the list!</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        Check your email for confirmation and next steps.
                      </p>
                    </motion.div>
                  )}

                  {/* Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-left"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Trust Badges Placeholder */}
                  <div className="flex flex-wrap gap-6 justify-center opacity-40">
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Quantum-Safe Encrypted</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">GDPR Compliant</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">SOC 2 Certified</div>
                  </div>
                </div>
              </ShineBorder>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
