import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, ArrowUpRight, Mail } from 'lucide-react';
import wzrdLogo from '@/assets/wzrd-logo.png';

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
    <footer className="relative py-20 border-t border-border/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={wzrdLogo} alt="WZRD.tech" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Building the infrastructure for autonomous creator economies. Privacy. Identity. IP. Self-Sovereign.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-liquid border border-border/20 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="mailto:hello@5dee.studio"
                className="p-3 rounded-xl glass-liquid border border-border/20 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 5-Dee Studios. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with 💜 for the creator economy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WZRDFooter;
