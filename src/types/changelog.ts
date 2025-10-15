export type ChangelogEntryType = 
  | 'Added' 
  | 'Changed' 
  | 'Fixed' 
  | 'Performance' 
  | 'Security' 
  | 'Docs' 
  | 'Deprecated' 
  | 'Removed'
  | 'Improved'
  | 'Policy'
  | 'Schema'
  | 'Auth'
  | 'Maintenance';

export interface ChangelogEntry {
  type: ChangelogEntryType;
  summary: string;
  scope?: string;
  sha?: string;
  pr?: number;
  commitUrl?: string;
}

export interface ChangelogRelease {
  version: string;
  date: string; // ISO format YYYY-MM-DD
  title?: string; // Optional release title summarizing main changes
  entries: ChangelogEntry[];
}
