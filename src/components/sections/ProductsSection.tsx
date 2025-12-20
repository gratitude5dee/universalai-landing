import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, User, Cpu, Coins, Music, Shirt } from 'lucide-react';
import SplineLoadingSkeleton from '@/components/ui/SplineLoadingSkeleton';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  splineScene?: string;
}

const products: Product[] = [
  {
    id: 'fifth-spaces',
    name: 'Fifth Spaces',
    tagline: 'Creator Spaces',
    description: 'Creator Spaces utilizing the complete application layer',
    icon: Layers,
    gradient: 'from-blue-600/30 via-blue-500/20 to-cyan-500/30',
  },
  {
    id: 'universalai',
    name: 'UniversalAI',
    tagline: 'Client Interface',
    description: 'Universal Interface for Creators - an alternative to realID & WorldCoin',
    icon: User,
    gradient: 'from-purple-600/30 via-purple-500/20 to-pink-500/30',
  },
  {
    id: 'wzrd-tech',
    name: 'WZRD.tech',
    tagline: 'Agent Architecture',
    description: 'Domain Specific Agent Architecture - Vertical Agents built on x402 and ERC-8004',
    icon: Cpu,
    gradient: 'from-primary/30 via-primary/20 to-accent/30',
    splineScene: 'https://prod.spline.design/7t4TC5KZHbW7nHWM/scene.splinecode',
  },
  {
    id: '5dee',
    name: '$5DEE',
    tagline: 'Financial Rails',
    description: 'The Digital Penny for the Creator-Agent Economy',
    icon: Coins,
    gradient: 'from-amber-500/30 via-amber-400/20 to-orange-500/30',
  },
  {
    id: 'eartone',
    name: 'EARTONE',
    tagline: 'Distribution',
    description: 'Distribution for Original/Agentic IP as a Public Good',
    icon: Music,
    gradient: 'from-emerald-500/30 via-emerald-400/20 to-teal-500/30',
    splineScene: 'https://prod.spline.design/JKbazm5fEzQWHl4g/scene.splinecode',
  },
  {
    id: 'pleiades',
    name: 'Project Pleiades',
    tagline: 'Hardware & DePin',
    description: 'Interoperable Open-Architecture Hardware for Fashion Industry; DePin & Creator Spaces',
    icon: Shirt,
    gradient: 'from-rose-500/30 via-rose-400/20 to-pink-500/30',
    splineScene: 'https://prod.spline.design/MUYEdQvRLyvqwCCc/scene.splinecode',
  },
];

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />
      
      <div className="relative h-full rounded-3xl bg-card-dark border border-border/20 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300">
        {/* Spline Background or Gradient */}
        {product.splineScene ? (
          <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity">
            <Suspense fallback={<div className={`w-full h-full bg-gradient-to-br ${product.gradient}`} />}>
              <Spline 
                scene={product.splineScene}
                className="w-full h-full"
              />
            </Suspense>
          </div>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-30 group-hover:opacity-50 transition-opacity`} />
        )}

        {/* Content */}
        <div className="relative p-8 h-full flex flex-col">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          {/* Tagline */}
          <span className="text-xs font-mono uppercase tracking-wider text-primary/80 mb-2">
            {product.tagline}
          </span>

          {/* Name */}
          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed flex-grow">
            {product.description}
          </p>

          {/* Learn more link */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="text-sm font-medium text-primary">Product Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Building the
            </span>{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Creator Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A complete ecosystem for autonomous creator economies
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
