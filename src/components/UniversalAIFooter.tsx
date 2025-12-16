import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CrystallineSymbol from '@/components/ui/CrystallineSymbol';

const footerColumns = {
  creators: {
    title: 'Creators',
    links: [
      { label: 'Universal ID', href: '#' },
      { label: 'Passport', href: '#' },
      { label: 'Creator Staking', href: '#' },
      { label: 'Wallet', href: '#' },
    ],
  },
  devs: {
    title: 'Devs',
    links: [
      { label: 'ID Docs', href: '#' },
      { label: 'Passport Docs', href: '#' },
      { label: 'Passport APIs', href: '#' },
      { label: 'Wallet Developer Portal', href: '#' },
      { label: 'Network Docs', href: '#' },
    ],
  },
  token: {
    title: '$UNAI',
    links: [
      { label: 'Points Program', href: '#' },
      { label: 'Key Dashboard', href: '#' },
      { label: 'Manifest', href: '#' },
      { label: 'Whitepapers', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'Brand & Press Kit', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Audits', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
};

const socialLinks = [
  { 
    icon: 'twitter', 
    href: '#', 
    label: 'X (Twitter)' 
  },
  { icon: 'linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'youtube', href: '#', label: 'YouTube' },
  { icon: 'discord', href: '#', label: 'Discord' },
  { icon: 'telegram', href: '#', label: 'Telegram' },
];

const UniversalAIFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Rounded top corners container */}
      <div className="relative bg-background rounded-t-[3rem] border-t border-accent-amber/10">
        {/* Ambient glow at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-accent-amber/5 to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Top section - Logo + Email subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-20 pb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-accent-amber/10"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <CrystallineSymbol size={48} />
              <span className="text-2xl font-bold">universal-ai</span>
            </div>

            {/* Email subscription */}
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="lg:w-80 glass-dark border-accent-amber/15 focus:border-accent-amber/30 bg-background/50 rounded-2xl"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-accent-amber to-accent-rose hover:opacity-90 group text-background font-semibold rounded-2xl"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Four Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
            {Object.entries(footerColumns).map(([key, column], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-foreground">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-accent-amber transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="border-t border-accent-amber/10 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-accent-amber transition-colors">
                  Privacy Policy
                </a>
                <span className="text-accent-amber/30">|</span>
                <a href="#" className="hover:text-accent-amber transition-colors">
                  Terms of Use
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = 
                    social.icon === 'twitter' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    ) : social.icon === 'linkedin' ? (
                      <Linkedin className="w-5 h-5" />
                    ) : social.icon === 'youtube' ? (
                      <Youtube className="w-5 h-5" />
                    ) : social.icon === 'discord' ? (
                      <MessageCircle className="w-5 h-5" />
                    ) : (
                      <Send className="w-5 h-5" />
                    );

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-2xl glass-dark border border-accent-amber/15 hover:border-accent-amber/30 flex items-center justify-center text-muted-foreground hover:text-accent-amber transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      {IconComponent}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-sm text-muted-foreground mt-8"
            >
              © {new Date().getFullYear()} UniversalAI. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniversalAIFooter;