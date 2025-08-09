import React, { useState } from 'react';
import WaitlistModal from '@/components/landing/WaitlistModal';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-bg-primary/80 backdrop-blur" style={{ borderColor: 'var(--border-primary)' }}>
      <nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6">
        {/* Brand */}
        <a href="/" className="font-semibold tracking-tight text-white hover:opacity-90 transition-opacity" aria-label="MusicOS home">
          MusicOS
        </a>

        {/* Right: Join Waitlist */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 transition-colors"
            style={{ backgroundColor: 'hsl(var(--lp-blue))', color: 'white' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'hsl(var(--lp-blue-hover))')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'hsl(var(--lp-blue))')}
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Modal */}
      <WaitlistModal open={open} onOpenChange={setOpen} />
    </header>
  );
};

export default Header;
