import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import WaitlistModal from './WaitlistModal';
import universalAILogo from '@/assets/universal-ai-logo.png';
import { useScrollDirection } from '@/hooks/useScrollDirection';
const navItems = [{
  label: 'Features',
  to: '/features'
}, {
  label: 'Docs',
  to: '/docs'
}, {
  label: 'Pricing',
  to: '/pricing'
}, {
  label: 'Changelog',
  to: '/changelog'
}];
const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-waitlist', onOpen as EventListener);
    return () => window.removeEventListener('open-waitlist', onOpen as EventListener);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const shouldHide = scrollDirection === 'down' && window.scrollY > 100;
  
  return <motion.header 
      initial={{ y: 0 }}
      animate={{ y: shouldHide ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-[9px] ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-2xl border-b border-primary/30' 
          : 'bg-background/90 backdrop-blur-xl border-b border-white/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="font-extrabold tracking-tight text-lg text-white flex items-center gap-3">
            <motion.img 
              src={universalAILogo} 
              alt="UniversalAI Logo" 
              className="w-8 h-8 rounded-lg shadow-lg shadow-primary/25"
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ scale: isScrolled ? 0.95 : 1 }}
              transition={{ duration: 0.3 }}
            >
              UniversalAI
            </motion.span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => <Link key={item.to} to={item.to} className={`relative group text-sm transition-all duration-300 px-3 py-2 rounded-lg ${location.pathname === item.to ? 'text-white bg-primary/10 border border-primary/30' : 'text-white/70 hover:text-white hover:bg-primary/5'}`}>
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2" />
              </Link>)}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white border border-white/20 rounded-md hover:border-primary/50 transition-all duration-300">
            EN <ChevronDown size={14} />
          </button>

          <a href="https://app.universal-ai.xyz/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-primary-glow text-white text-sm font-medium rounded-full hover:shadow-purple transition-all duration-300 hover:-translate-y-0.5 border border-primary/30 hover:border-primary/50">
            Get Started
          </a>
        </div>
      </nav>
      <WaitlistModal open={open} onOpenChange={setOpen} />
    </motion.header>;
};
export default Header;