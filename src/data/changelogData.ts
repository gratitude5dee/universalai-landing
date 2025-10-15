import { ChangelogRelease } from '@/types/changelog';

export const changelogReleases: ChangelogRelease[] = [
  {
    version: '0.4.0',
    date: '2025-10-15',
    title: 'Agent Blueprint & Security Hardening',
    entries: [
      { type: 'Added', summary: 'UniversalAI agent blueprint + MCP server implementation', scope: 'Integration', sha: '68d4b13', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/68d4b13' },
      { type: 'Security', summary: 'Harden backend surfaces for canvas, research, and invoices', scope: 'Backend', sha: '1872f19', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/1872f19' },
      { type: 'Security', summary: 'Harden Supabase backend security and workflows', scope: 'Backend', sha: '6dd8d2f', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/6dd8d2f' },
      { type: 'Security', summary: 'Harden Supabase integrations for canvas, podcasts, research, and secrets', scope: 'Backend', sha: 'ba0bae2', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/ba0bae2' },
      { type: 'Security', summary: 'Declare allowed methods in edge CORS headers', scope: 'Backend', sha: '2fab09d', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/2fab09d' },
      { type: 'Improved', summary: 'Refined podcast generation workflow', scope: 'Features', sha: 'df12857', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/df12857' },
      { type: 'Improved', summary: 'Updated Supabase podcast-generator edge function', scope: 'Backend', sha: 'c8a500c', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/c8a500c' },
      { type: 'Improved', summary: 'Updated useContentManager hook', scope: 'Core', sha: '60085c8', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/60085c8' },
      { type: 'Docs', summary: 'Merged PR #24: create-agents.md + MCP package', scope: 'Documentation', pr: 24 },
      { type: 'Maintenance', summary: 'Consolidated multiple backend design/analysis branches', scope: 'Infrastructure', pr: 19 }
    ]
  },
  {
    version: '0.3.5',
    date: '2025-10-14',
    title: 'Database Schema Updates & Authentication',
    entries: [
      { type: 'Schema', summary: 'Loader to fetch boards', scope: 'Database', pr: 16 },
      { type: 'Schema', summary: 'Schema changes and refactor edge functions', scope: 'Database', pr: 15 },
      { type: 'Schema', summary: 'Provider column to ai_runs', scope: 'Database', pr: 13 },
      { type: 'Schema', summary: 'Migration for boards & projects', scope: 'Database', pr: 12 },
      { type: 'Policy', summary: 'Extend board_shares and modify policies', scope: 'Security', pr: 9 },
      { type: 'Added', summary: 'Email column to profiles + backfill', scope: 'Database', pr: 8 },
      { type: 'Added', summary: 'File upload in TrainingDataStep', scope: 'Features', pr: 3 },
      { type: 'Added', summary: 'Profile field for display name', scope: 'Features', pr: 2 },
      { type: 'Added', summary: 'Podcasts table and updated functionality', scope: 'Features', pr: 4 },
      { type: 'Improved', summary: 'Update GenerativePodcastsInterface.tsx', scope: 'UI', sha: 'e9b19cf', commitUrl: 'https://github.com/gratitude5dee/Universal-AI/commit/e9b19cf' },
      { type: 'Auth', summary: 'Require authenticated session for voice management', scope: 'Security', pr: 5 }
    ]
  },
  {
    version: '0.3.0',
    date: '2025-09-27',
    title: 'ManusAI Integration & UI Transformation',
    entries: [
      { type: 'Added', summary: 'ManusAI integration with comprehensive 5DEE ecosystem', scope: 'Integration' },
      { type: 'Changed', summary: 'Complete transformation of Docs and Features pages', scope: 'UI' },
      { type: 'Added', summary: 'Added 9 core sections: ParadigmShift, EcosystemPillars, AgentMarketplace, RevolutionaryIdentity, SuccessStories, TechnicalArchitecture, PricingSection, AgenticAdvantage, EnhancedCTA', scope: 'UI' },
      { type: 'Added', summary: 'Advanced animations and glassmorphism design system', scope: 'Design' },
      { type: 'Added', summary: 'Technical architecture visualization and interactive components', scope: 'UI' }
    ]
  },
  {
    version: '0.2.9',
    date: '2025-09-20',
    title: 'Performance & Mobile Enhancements',
    entries: [
      { type: 'Improved', summary: 'Enhanced WebGL background animations', scope: 'Performance' },
      { type: 'Improved', summary: 'Improved mobile responsiveness for all sections', scope: 'UI' },
      { type: 'Added', summary: 'Added interactive chart components', scope: 'UI' },
      { type: 'Performance', summary: 'Performance optimizations for large datasets', scope: 'Core' }
    ]
  },
  {
    version: '0.2.8',
    date: '2025-09-15',
    title: '3D Components & Lightning Visualizations',
    entries: [
      { type: 'Added', summary: 'New 3D card components with depth effects', scope: 'UI' },
      { type: 'Added', summary: 'Lightning visualization system', scope: 'UI' },
      { type: 'Added', summary: 'Ambient UI components for better UX', scope: 'UI' },
      { type: 'Improved', summary: 'Code demo syntax highlighting improvements', scope: 'Docs' }
    ]
  },
  {
    version: '0.2.7',
    date: '2025-09-10',
    title: 'Agent Marketplace & Success Stories',
    entries: [
      { type: 'Added', summary: 'Agent marketplace filtering and search', scope: 'Features' },
      { type: 'Added', summary: 'Success stories carousel with smooth transitions', scope: 'UI' },
      { type: 'Changed', summary: 'Technical architecture diagram updates', scope: 'Docs' },
      { type: 'Improved', summary: 'Pricing tier comparison enhancements', scope: 'UI' }
    ]
  },
  {
    version: '0.2.6',
    date: '2025-09-05',
    title: 'Revolutionary Identity & Agentic Advantage',
    entries: [
      { type: 'Added', summary: 'Revolutionary identity system implementation', scope: 'Core' },
      { type: 'Added', summary: 'Agentic advantage showcase components', scope: 'UI' },
      { type: 'Improved', summary: 'Enhanced CTA with conversion tracking', scope: 'Features' },
      { type: 'Improved', summary: 'Mobile-optimized phone mockups', scope: 'UI' }
    ]
  },
  {
    version: '0.2.5',
    date: '2025-08-28',
    title: 'Paradigm Shift & Ecosystem Pillars',
    entries: [
      { type: 'Added', summary: 'Paradigm shift section with interactive elements', scope: 'UI' },
      { type: 'Added', summary: 'Ecosystem pillars visualization', scope: 'UI' },
      { type: 'Added', summary: 'Network visualization components', scope: 'UI' },
      { type: 'Added', summary: 'Glassmorphic card design system', scope: 'Design' }
    ]
  },
  {
    version: '0.2.4',
    date: '2025-08-22',
    title: 'Professional CTA & Social Proof',
    entries: [
      { type: 'Added', summary: 'Professional CTA components', scope: 'UI' },
      { type: 'Added', summary: 'Social proof integration', scope: 'Features' },
      { type: 'Changed', summary: 'Value propositions section redesign', scope: 'UI' },
      { type: 'Added', summary: 'Metrics section with real-time updates', scope: 'Features' }
    ]
  },
  {
    version: '0.2.3',
    date: '2025-08-18',
    title: 'Live Waitlist & Success Experience',
    entries: [
      { type: 'Added', summary: 'Live waitlist counter functionality', scope: 'Features' },
      { type: 'Added', summary: 'Success experience components', scope: 'UI' },
      { type: 'Improved', summary: 'Waitlist modal improvements', scope: 'UI' },
      { type: 'Improved', summary: 'Form validation enhancements', scope: 'Features' }
    ]
  },
  {
    version: '0.2.2',
    date: '2025-08-15',
    title: 'Phone Mockups & Video Integration',
    entries: [
      { type: 'Improved', summary: 'Phone mockup component refinements', scope: 'UI' },
      { type: 'Added', summary: 'Video player mockup integration', scope: 'UI' },
      { type: 'Added', summary: 'Dynamic dot grid backgrounds', scope: 'UI' },
      { type: 'Improved', summary: 'Improved loading states', scope: 'UI' }
    ]
  },
  {
    version: '0.2.1',
    date: '2025-08-12',
    title: 'Navigation & Footer Improvements',
    entries: [
      { type: 'Improved', summary: 'Header navigation improvements', scope: 'UI' },
      { type: 'Improved', summary: 'Footer social links and branding', scope: 'UI' },
      { type: 'Changed', summary: 'Partnership section layout', scope: 'UI' },
      { type: 'Added', summary: 'Contact form integration', scope: 'Features' }
    ]
  },
  {
    version: '0.2.0',
    date: '2025-08-08',
    title: 'New Landing Pages & Waitlist Integration',
    entries: [
      { type: 'Added', summary: 'New landing header & hero styling', scope: 'UI' },
      { type: 'Added', summary: 'Waitlist modal with Supabase integration', scope: 'Features' },
      { type: 'Added', summary: 'Added Features, Docs, Pricing, Changelog pages', scope: 'Pages' }
    ]
  }
];
