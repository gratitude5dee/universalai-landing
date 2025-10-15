import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import ChangelogHeader from '@/components/changelog/ChangelogHeader';
import ChangelogReleaseCard from '@/components/changelog/ChangelogReleaseCard';
import { changelogReleases } from '@/data/changelogData';
import { useChangelogFilters } from '@/hooks/useChangelogFilters';

const Changelog: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    filteredReleases
  } = useChangelogFilters(changelogReleases);

  useEffect(() => {
    document.title = 'Universal AI – Changelog';
  }, []);

  const lastUpdated = changelogReleases[0]?.date 
    ? new Date(changelogReleases[0].date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : 'Recent';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        <ChangelogHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          lastUpdated={lastUpdated}
        />

        <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
          {filteredReleases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No updates found matching your filters.
              </p>
            </div>
          ) : (
            filteredReleases.map((release, index) => (
              <ChangelogReleaseCard 
                key={release.version} 
                release={release} 
                index={index}
              />
            ))
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Changelog;
