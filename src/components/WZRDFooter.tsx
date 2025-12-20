import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';
import wzrdLogo from '@/assets/wzrd-logo.png';

const footerLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: '$5DEE', href: '#token' },
  { label: 'Docs', href: '/docs' },
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={wzrdLogo} alt="WZRD.tech" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Building the infrastructure for autonomous creator economies.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {footerLinks.map((link) => (
              link.href.startsWith('#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card-dark border border-border/20 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all group"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 WZRD.tech. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.producthunt.com/posts/wzrd-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Product Hunt
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-muted-foreground/40">|</span>
            <a 
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WZRDFooter;
