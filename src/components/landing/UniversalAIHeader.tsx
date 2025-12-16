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

  const headerOpacity = useTransform(scrollY, [0, 100], [0.85, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], [12, 20]);

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
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity: headerOpacity }}
          className={`relative rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'glass-dark border-accent-amber/15 shadow-amber'
              : 'glass-dark border-accent-amber/10'
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
              <span className="text-lg font-semibold tracking-tight hidden sm:block group-hover:text-accent-amber transition-colors">
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
                        ? 'text-foreground bg-accent-amber/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent-amber/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full border border-accent-amber/30"
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
                className="hidden sm:flex glass-dark border border-accent-amber/20 hover:border-accent-amber/40 text-foreground rounded-full px-6"
              >
                Contact
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full glass-dark border border-accent-amber/20 hover:border-accent-amber/40 transition-all"
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
            className="lg:hidden mt-4 rounded-3xl glass-dark border border-accent-amber/15 p-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${
                      isActive
                        ? 'text-foreground bg-accent-amber/10 border border-accent-amber/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent-amber/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button
                variant="default"
                className="mt-4 w-full bg-gradient-to-r from-accent-amber to-accent-rose hover:opacity-90 text-background font-semibold rounded-2xl"
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