import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import WaitlistModal from './WaitlistModal';
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
  const location = useLocation();
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-waitlist', onOpen as EventListener);
    return () => window.removeEventListener('open-waitlist', onOpen as EventListener);
  }, []);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="font-extrabold tracking-tight text-lg text-white">Asset</Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => <Link key={item.to} to={item.to} className={`relative group text-sm text-white/70 hover:text-white transition-colors ${location.pathname === item.to ? 'text-white' : ''}`}>
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>)}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white border border-white/20 rounded-md hover:border-primary/50 transition-colors">
            EN <ChevronDown size={14} />
          </button>

          <button onClick={() => setOpen(true)} className="px-6 py-2 bg-gradient-to-r from-primary to-primary-glow text-white text-sm font-medium rounded-full hover:shadow-orange transition-all duration-300 hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </nav>
      <WaitlistModal open={open} onOpenChange={setOpen} />
    </header>;
};
export default Header;