import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const filters = ['Latest posts', 'General', 'Creators', 'Attribution', 'Network', 'Tools'];

const blogPosts = [
  {
    title: 'The Future of Creative Attribution in AI',
    excerpt:
      'How decentralized protocols are reshaping ownership and value distribution in the age of generative AI',
    date: '2024-03-15',
    category: 'Attribution',
    image: 'abstract-1',
    gradient: 'from-primary/20 to-accent-rose/20',
  },
  {
    title: 'Building the Creator Economy of Tomorrow',
    excerpt: 'Empowering artists and creators with tools for sovereignty, monetization, and sustainable growth',
    date: '2024-03-12',
    category: 'Creators',
    image: 'abstract-2',
    gradient: 'from-accent-amber/20 to-secondary/20',
  },
  {
    title: 'Zero-Knowledge Proofs for Creative Work',
    excerpt: 'Technical deep-dive into how zk-proofs enable privacy-preserving attribution and verification',
    date: '2024-03-08',
    category: 'Tools',
    image: 'abstract-3',
    gradient: 'from-secondary/20 to-primary/20',
  },
];

const BlogSection = () => {
  const [activeFilter, setActiveFilter] = useState('Latest posts');

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold tracking-tight mb-8">
            Latest from our{' '}
            <span className="bg-gradient-to-r from-accent-amber via-accent-rose to-primary bg-clip-text text-transparent">
              blog
            </span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground'
                    : 'glass border border-primary/20 text-muted-foreground hover:border-primary/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Cards */}
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full rounded-2xl overflow-hidden glass border border-primary/20">
                {/* Featured image with gradient */}
                <div className={`relative h-56 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3), transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-strong border border-primary/30 text-xs font-medium text-primary">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </div>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.1), transparent 60%)',
                  }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary/50 group">
            View all posts
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
