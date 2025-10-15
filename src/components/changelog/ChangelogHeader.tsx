import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Clock } from 'lucide-react';
import { ChangelogEntryType } from '@/types/changelog';

interface ChangelogHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedType: ChangelogEntryType | 'all';
  onTypeChange: (value: ChangelogEntryType | 'all') => void;
  lastUpdated: string;
}

const ChangelogHeader: React.FC<ChangelogHeaderProps> = ({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  lastUpdated
}) => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative">
      <div className="text-center mb-12">
        <h1 className="changelog-version gradient-text mb-4">
          Changelog
        </h1>
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clock className="h-4 w-4 text-primary animate-pulse" />
          <p className="text-muted-foreground text-lg">
            Last updated <Badge variant="outline" className="ml-2 bg-primary/10 border-primary/30">{lastUpdated}</Badge>
          </p>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive record of all improvements, security updates, and new features added to Universal AI
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search updates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 glass border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all"
          />
        </div>

        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="w-full md:w-48 glass border-white/10 focus:border-primary/50 focus:ring-primary/20">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent className="glass-strong">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Added">Added</SelectItem>
            <SelectItem value="Changed">Changed</SelectItem>
            <SelectItem value="Fixed">Fixed</SelectItem>
            <SelectItem value="Improved">Improved</SelectItem>
            <SelectItem value="Performance">Performance</SelectItem>
            <SelectItem value="Security">Security</SelectItem>
            <SelectItem value="Docs">Docs</SelectItem>
            <SelectItem value="Schema">Schema</SelectItem>
            <SelectItem value="Policy">Policy</SelectItem>
            <SelectItem value="Auth">Auth</SelectItem>
            <SelectItem value="Maintenance">Maintenance</SelectItem>
            <SelectItem value="Deprecated">Deprecated</SelectItem>
            <SelectItem value="Removed">Removed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default ChangelogHeader;
