import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import WZRDWaitlistModal from './WZRDWaitlistModal';
import wzrdLogo from '@/assets/wzrd-logo.png';

const navItems = [
  { label: 'Products', to: '#products' },
  { label: 'Manifesto', to: '#manifesto' },
  { label: '$5DEE', to: '#token' },
  { label: 'Docs', to: '/docs' },
  { label: 'Changelog', to: '/changelog' },
];

const WZRDHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to: string) => {
    setMobileMenuOpen(false);
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-[95%] max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled 
            ? 'border-border/30 bg-card-dark/90 shadow-2xl shadow-black/20' 
            : 'border-border/10 bg-card-dark/60'
        }`}
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img 
              src={wzrdLogo} 
              alt="WZRD.tech" 
              className="h-10 sm:h-12 md:h-14 w-auto drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </Link>

          {/* Desktop Navigation - Enhanced typography */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to || location.hash === item.to;
              return item.to.startsWith('#') ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.to)}
                  className={`px-5 py-2.5 text-sm font-semibold tracking-wide rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-foreground bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`px-5 py-2.5 text-sm font-semibold tracking-wide rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-foreground bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: Product Hunt + Sign Up */}
          <div className="hidden md:flex items-center gap-4">
            {/* Product Hunt Badge */}
            <a
              href="https://www.producthunt.com/posts/wzrd-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=wzrd-tech&theme=dark" 
                alt="WZRD.tech on Product Hunt" 
                className="h-8"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </a>

            {/* Join Waitlist Button - ShimmerButton */}
            <ShimmerButton
              onClick={() => setWaitlistOpen(true)}
              shimmerColor="#ffffff"
              shimmerDuration="2.5s"
              background="linear-gradient(135deg, hsl(271, 81%, 56%), hsl(271, 81%, 45%))"
              className="px-6 py-2.5 text-sm font-semibold"
            >
              Join Waitlist
            </ShimmerButton>
          </div>

          {/* Mobile Menu Toggle - Larger touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 text-foreground/70 hover:text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Enhanced touch targets */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-border/20 px-4 py-3 space-y-1 overscroll-contain"
          >
            {navItems.map((item) => (
              item.to.startsWith('#') ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.to)}
                  className="block w-full text-left px-4 py-4 text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors min-h-[48px] touch-manipulation"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-4 text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors min-h-[48px] touch-manipulation"
                >
                  {item.label}
                </Link>
              )
            ))}
            {/* Mobile Join Waitlist - Full width with proper touch target */}
            <ShimmerButton
              onClick={() => {
                setMobileMenuOpen(false);
                setWaitlistOpen(true);
              }}
              shimmerColor="#ffffff"
              shimmerDuration="2.5s"
              background="linear-gradient(135deg, hsl(271, 81%, 56%), hsl(271, 81%, 45%))"
              className="w-full mt-3 min-h-[52px] py-4 text-base font-medium"
            >
              Join Waitlist
            </ShimmerButton>
          </motion.div>
        )}
      </motion.header>

      <WZRDWaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
};

export default WZRDHeader;
