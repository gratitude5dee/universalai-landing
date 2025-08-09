import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: 'hsl(var(--lp-divider))' }}>
      <nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6" style={{ backgroundColor: 'hsl(var(--lp-bg))', color: 'hsl(var(--lp-text))' }}>
        {/* Left: Brand */}
        <div className="flex items-center gap-8">
          <a href="/" className="font-semibold tracking-tight hover:opacity-90 transition-opacity" aria-label="MusicOS home">
            MusicOS
          </a>
        </div>

        {/* Center: Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-[hsl(var(--lp-muted))]">
          {['Platform', 'Manifesto', 'Company', 'Download', 'Blog'].map((item) => (
            <li key={item}>
              <a href="#" className="transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2" style={{
                boxShadow: 'none'
              }}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Right: Lang + CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden sm:inline-flex items-center rounded-md px-2 py-1 text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
            style={{ color: 'hsl(var(--lp-text))', borderColor: 'hsl(var(--lp-divider))' }}
            aria-label="Change language"
          >
            EN
          </button>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
            style={{
              backgroundColor: 'hsl(var(--lp-cta-bg))',
              color: 'white',
              boxShadow: 'none'
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(var(--lp-cta-hover))')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(var(--lp-cta-bg))')}
          >
            Contact us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
