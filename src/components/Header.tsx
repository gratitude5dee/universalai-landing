import React, { useState } from 'react';
import WaitlistModal from '@/components/landing/WaitlistModal';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-bg-primary/80 backdrop-blur" style={{ borderColor: 'var(--border-primary)' }}>
        <nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-6">
            {/* Brand */}
            <a href="/" className="font-semibold tracking-tight text-white hover:opacity-90 transition-opacity" aria-label="MusicOS by UniversalAI home">
              MusicOS <span className="sr-only">by UniversalAI</span>
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="/docs" className="text-sm text-white/80 hover:text-white transition-colors">Docs</a>
              <a href="/changelog" className="text-sm text-white/80 hover:text-white transition-colors">Changelog</a>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* CTA - visible on all screens, but text will be changed later */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 transition-colors"
              style={{ backgroundColor: 'hsl(var(--lp-blue))', color: 'white' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'hsl(var(--lp-blue-hover))')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'hsl(var(--lp-blue))')}
            >
              Get started
            </button>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 active:bg-white/20">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] border-l-border-primary bg-bg-primary text-white p-6">
                  <nav className="flex flex-col gap-6 mt-6">
                    <a href="/docs" className="text-base font-medium text-white/90 hover:text-white transition-colors">Docs</a>
                    <a href="/changelog" className="text-base font-medium text-white/90 hover:text-white transition-colors">Changelog</a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal */}
      <WaitlistModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default Header;
