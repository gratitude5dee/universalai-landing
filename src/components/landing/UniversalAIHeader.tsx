import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CrystallineSymbol from '@/components/ui/CrystallineSymbol';

const navItems = [
  { label: 'Docs', to: '/docs' },
  { label: 'For Creators', to: '/creators' },
  { label: 'For Builders', to: '/builders' },
  { label: 'Blog', to: '/blog' },
  { label: 'Community', to: '/community' },
  { label: '$UNAI', to: '/token' },
];

const UniversalAIHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity: headerOpacity }}
          className={`relative rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'glass-strong border-primary/30 shadow-elegant'
              : 'glass border-primary/20'
          }`}
        >
          <nav className="flex items-center justify-between px-6 py-3">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <CrystallineSymbol size={32} />
              </motion.div>
              <span className="text-lg font-semibold tracking-tight hidden sm:block group-hover:text-primary transition-colors">
                universal-ai
              </span>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-foreground bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full border border-primary/30"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Contact Button - Right */}
            <div className="flex items-center gap-3">
              <Button
                variant="default"
                size="sm"
                className="hidden sm:flex bg-gradient-to-r from-background to-background-secondary hover:from-background-secondary hover:to-background border border-primary/30 hover:border-primary/50"
              >
                Contact
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full glass-strong border border-primary/30 hover:border-primary/50 transition-all"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </motion.div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 rounded-2xl glass-strong border border-primary/30 p-6 shadow-elegant"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-foreground bg-primary/10 border border-primary/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button
                variant="default"
                className="mt-4 w-full bg-gradient-to-r from-primary to-accent-rose hover:opacity-90"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default UniversalAIHeader;
