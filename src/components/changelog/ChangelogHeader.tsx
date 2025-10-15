import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
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
    <div className="sticky top-0 z-50 glass-strong border-b border-border/50 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Changelog
            </h1>
            <Badge variant="outline" className="font-mono text-xs hidden md:inline-flex">
              Last updated: {lastUpdated}
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search updates..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <Select value={selectedType} onValueChange={(value) => onTypeChange(value as ChangelogEntryType | 'all')}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
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
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogHeader;
