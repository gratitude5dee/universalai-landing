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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-bg-primary/80 backdrop-blur-md border-b border-border-primary">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-slate-950">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="font-extrabold tracking-tight text-lg">MusicOS</Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => <Link key={item.to} to={item.to} className={`relative group text-sm text-text-secondary hover:text-white transition-colors ${location.pathname === item.to ? 'text-white' : ''}`}>
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </Link>)}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm text-text-secondary hover:text-white border border-border-primary rounded-md">
            EN <ChevronDown size={14} />
          </button>

          <button onClick={() => setOpen(true)} className="group relative overflow-hidden px-4 py-2 bg-black text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 transition-colors bg-purple-950" />
          </button>
        </div>
      </nav>
      <WaitlistModal open={open} onOpenChange={setOpen} />
    </header>;
};
export default Header;