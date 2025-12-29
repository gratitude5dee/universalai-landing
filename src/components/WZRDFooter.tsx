import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, ArrowUpRight, Mail } from 'lucide-react';
import wzrdLogo from '@/assets/wzrd-logo.png';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { LightRays } from '@/components/ui/light-rays';

const productLinks = [
  { label: 'WZRD Studio', href: 'https://studio.universal-ai.xyz' },
  { label: 'Eartone', href: 'https://eartone.lovable.app/' },
  { label: 'Project Pleiades', href: '#' },
];

const resourceLinks = [
  { label: 'Documentation', href: '/docs' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Manifesto', href: '#manifesto' },
];

const legalLinks = [
  { label: 'Terms of Service', href: 'https://5dee.studio/terms' },
  { label: 'Privacy Policy', href: 'https://5dee.studio/privacy' },
];

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/wzrdtech', icon: Twitter },
  { label: 'Discord', href: 'https://discord.gg/wzrdtech', icon: MessageCircle },
];

const WZRDFooter: React.FC = () => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative py-16 sm:py-20 border-t border-border/10 overflow-hidden">
      {/* Light Rays Background */}
      <LightRays
        count={5}
        color="rgba(147, 51, 234, 0.1)"
        blur={40}
        speed={20}
        length="50vh"
        className="opacity-50"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={wzrdLogo} alt="WZRD.tech" className="h-10 sm:h-12 w-auto" />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-xs">
              Building the infrastructure for autonomous creator economies.{' '}
              <AnimatedGradientText
                speed={2}
                colorFrom="#9333ea"
                colorTo="#f97316"
                className="text-xs sm:text-sm font-medium"
              >
                Privacy. Identity. IP. Self-Sovereign.
              </AnimatedGradientText>
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3 rounded-xl glass-liquid border border-border/20 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="mailto:hello@5dee.studio"
                className="p-3 sm:p-3 rounded-xl glass-liquid border border-border/20 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 min-h-[44px] sm:min-h-0 touch-manipulation"
                  >
                    {link.label}
                    {link.href.startsWith('http') && <ArrowUpRight className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] sm:min-h-0 touch-manipulation"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors inline-block min-h-[44px] sm:min-h-0 touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors inline-block min-h-[44px] sm:min-h-0 touch-manipulation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <AnimatedGradientText
              speed={3}
              colorFrom="#9333ea"
              colorTo="#7c3aed"
              className="text-xs sm:text-sm"
            >
              5-Dee Studios
            </AnimatedGradientText>
            . All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
            Built with 💜 for the creator economy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WZRDFooter;
