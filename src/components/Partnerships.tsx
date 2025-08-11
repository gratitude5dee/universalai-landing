import React from 'react';

const partners = [
  { name: 'OutsideLands', abbr: 'OL' },
  { name: 'E3 Entertainment', abbr: 'E3' },
  { name: '5-Dee Studios', abbr: '5D' },
  { name: 'Create Music', abbr: 'CM' },
  { name: 'Human.Tech', abbr: 'HT' },
];

const Partnerships: React.FC = () => {
  return (
    <section aria-label="Partner logos" className="relative">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="mt-2 sm:mt-4 rounded-3xl border border-border-primary/60 bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto p-4 sm:p-6">
            {partners.map((b) => (
              <div key={b.name} className="shrink-0">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-xs sm:text-sm text-white/80">
                  {b.abbr}
                </div>
                <span className="sr-only">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
