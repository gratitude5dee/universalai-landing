import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import ChangelogHeader from '@/components/changelog/ChangelogHeader';
import ChangelogReleaseCard from '@/components/changelog/ChangelogReleaseCard';
import { changelogReleases } from '@/data/changelogData';
import { useChangelogFilters } from '@/hooks/useChangelogFilters';
import ScrollProgress from '@/components/ui/ScrollProgress';

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
    
    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Track all Universal AI updates, security patches, new features, and improvements. Complete changelog with commit history.');
    }
  }, []);

  const lastUpdated = changelogReleases[0]?.date 
    ? new Date(changelogReleases[0].date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : 'Recent';

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ScrollProgress />
      
      {/* Animated background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10">
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
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground text-lg">
                  No updates found matching your filters.
                </p>
              </motion.div>
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
    </div>
  );
}

export default Changelog;
