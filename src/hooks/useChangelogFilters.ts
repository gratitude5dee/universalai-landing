import { useState, useMemo } from 'react';
import { ChangelogRelease, ChangelogEntryType } from '@/types/changelog';

export const useChangelogFilters = (releases: ChangelogRelease[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ChangelogEntryType | 'all'>('all');

  const filteredReleases = useMemo(() => {
    return releases.filter(release => {
      const matchesSearch = searchQuery === '' || 
        release.version.toLowerCase().includes(searchQuery.toLowerCase()) ||
        release.entries.some(entry => 
          entry.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          entry.scope?.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesType = selectedType === 'all' || 
        release.entries.some(entry => entry.type === selectedType);

      return matchesSearch && matchesType;
    }).map(release => {
      if (selectedType === 'all') return release;

      return {
        ...release,
        entries: release.entries.filter(entry => entry.type === selectedType)
      };
    });
  }, [releases, searchQuery, selectedType]);

  return {
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    filteredReleases
  };
};
