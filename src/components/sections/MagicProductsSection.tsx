import React, { Suspense, lazy, useState, Component, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Mic, Shield, Wallet, Bot } from 'lucide-react';
import { TextAnimate, AnimatedGradientText, FlickeringGrid, ShineBorder, NumberTicker, ShimmerButton } from '@/components/magicui';

// Lazy load Spline for performance
const Spline = lazy(() => import('@splinetool/react-spline'));

// Error boundary for Spline components
class SplineErrorBoundary extends Component<{ children: ReactNode; fallback?: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('Spline failed to load:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-purple-700/10" />
      );
    }
    return this.props.children;
  }
}

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  glowColor: string;
  status: 'live' | 'beta' | 'coming';
  link?: string;
  stats?: { label: string; value: number; suffix?: string };
  size: 'large' | 'medium' | 'small';
  splineUrl?: string;
}

const products: Product[] = [
  {
    id: 'wzrd',
    name: 'WZRD',
    description: 'AI-powered creation platform with quantum-safe security and decentralized IP protection.',
    icon: Wand2,
    gradient: 'from-purple-500/20 to-purple-700/20',
    glowColor: 'rgba(147, 51, 234, 0.4)',
    status: 'live',
    link: 'https://wzrd.ai',
    stats: { label: 'Active Users', value: 50000 },
    size: 'large',
    splineUrl: 'https://prod.spline.design/VFXxhN-xWr-4pLN0/scene.splinecode',
  },
  {
    id: 'voice-vault',
    name: 'Voice Vault',
    description: 'Secure voice cloning and authentication with military-grade encryption.',
    icon: Mic,
    gradient: 'from-blue-500/20 to-blue-700/20',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    status: 'beta',
    stats: { label: 'Voice Models', value: 10000 },
    size: 'medium',
  },
  {
    id: 'ip-shield',
    name: 'IP Shield',
    description: 'Blockchain-based intellectual property protection and verification.',
    icon: Shield,
    gradient: 'from-amber-500/20 to-amber-700/20',
    glowColor: 'rgba(255, 181, 71, 0.4)',
    status: 'beta',
    stats: { label: 'Assets Protected', value: 1200000 },
    size: 'medium',
  },
  {
    id: 'creator-wallet',
    name: 'Creator Wallet',
    description: 'Self-sovereign wallet for managing digital assets and earnings.',
    icon: Wallet,
    gradient: 'from-emerald-500/20 to-emerald-700/20',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    status: 'coming',
    size: 'small',
  },
  {
    id: 'agent-studio',
    name: 'Agent Studio',
    description: 'Build and deploy autonomous AI agents for your creative workflow.',
    icon: Bot,
    gradient: 'from-rose-500/20 to-rose-700/20',
    glowColor: 'rgba(255, 107, 157, 0.4)',
    status: 'coming',
    size: 'small',
  },
];

const StatusBadge: React.FC<{ status: Product['status'] }> = ({ status }) => {
  const config = {
    live: { label: 'Live', color: 'emerald' },
    beta: { label: 'Beta', color: 'amber' },
    coming: { label: 'Coming Soon', color: 'gray' },
  }[status];

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-${config.color}-500/10 border border-${config.color}-500/30`}>
      <div className={`w-1.5 h-1.5 rounded-full bg-${config.color}-400 animate-pulse`} />
      <span className={`text-xs font-medium text-${config.color}-300`}>{config.label}</span>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-2',
    small: 'md:col-span-1 md:row-span-1',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${sizeClasses[product.size]}`}
    >
      <ShineBorder
        borderWidth={1}
        duration={16}
        shineColor={product.glowColor}
        className="h-full"
      >
        <div
          className={`relative h-full min-h-[300px] p-8 rounded-2xl bg-gradient-to-br ${product.gradient} backdrop-blur-sm overflow-hidden group transition-all duration-500`}
          style={{
            boxShadow: isHovered ? `0 0 50px ${product.glowColor}` : 'none',
          }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <FlickeringGrid
              squareSize={4}
              gridGap={6}
              flickerChance={0.3}
              color={product.glowColor}
              maxOpacity={isHovered ? 0.3 : 0.15}
              className="transition-opacity duration-500"
            />
          </div>

          {/* 3D Spline Preview for Large Cards */}
          {product.size === 'large' && product.splineUrl && (
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <SplineErrorBoundary fallback={<div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-purple-700/10" />}>
                <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-purple-700/10 animate-pulse" />}>
                  <Spline scene={product.splineUrl} />
                </Suspense>
              </SplineErrorBoundary>
            </div>
          )}

          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient.replace('/20', '/30')} transform-gpu transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>
              <StatusBadge status={product.status} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{product.name}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{product.description}</p>

              {/* Stats */}
              {product.stats && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <span className="text-2xl font-bold text-white">
                    <NumberTicker value={product.stats.value} suffix={product.stats.suffix} />
                  </span>
                  <span className="text-sm text-gray-400">{product.stats.label}</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              {product.status === 'live' && product.link ? (
                <ShimmerButton
                  onClick={() => window.open(product.link, '_blank')}
                  shimmerColor="rgba(255, 255, 255, 0.2)"
                  shimmerDuration="3s"
                  className="w-full md:w-auto"
                >
                  Open App
                </ShimmerButton>
              ) : product.status === 'beta' ? (
                <button className="px-6 py-3 rounded-xl font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 w-full md:w-auto">
                  Request Access
                </button>
              ) : (
                <button className="px-6 py-3 rounded-xl font-medium text-gray-400 bg-white/5 border border-white/10 cursor-not-allowed w-full md:w-auto">
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </ShineBorder>
    </motion.div>
  );
};

export const MagicProductsSection: React.FC = () => {
  return (
    <section id="products" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Floating Gradient Orb */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)' }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <AnimatedGradientText
              speed={1.5}
              colorFrom="#FFB547"
              colorTo="#9c40ff"
              className="text-xs font-mono uppercase tracking-wider font-semibold"
            >
              Our Products
            </AnimatedGradientText>
          </motion.div>

          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.2}
            duration={0.5}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Built for Creators, By Creators
          </TextAnimate>

          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.6}
            duration={0.4}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive ecosystem of tools designed to empower your creative journey
          </TextAnimate>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(300px,auto)] gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">Want to stay updated on new releases?</p>
          <button className="px-8 py-3 rounded-xl font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300">
            Subscribe to Newsletter
          </button>
        </motion.div>
      </div>
    </section>
  );
};
