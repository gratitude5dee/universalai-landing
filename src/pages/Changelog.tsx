import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';

const entries = [
  { version: '0.3.0', date: '2025-09-27', notes: ['ManusAI integration with comprehensive 5DEE ecosystem', 'Complete transformation of Docs and Features pages', 'Added 9 core sections: ParadigmShift, EcosystemPillars, AgentMarketplace, RevolutionaryIdentity, SuccessStories, TechnicalArchitecture, PricingSection, AgenticAdvantage, EnhancedCTA', 'Advanced animations and glassmorphism design system', 'Technical architecture visualization and interactive components'] },
  { version: '0.2.9', date: '2025-09-20', notes: ['Enhanced WebGL background animations', 'Improved mobile responsiveness for all sections', 'Added interactive chart components', 'Performance optimizations for large datasets'] },
  { version: '0.2.8', date: '2025-09-15', notes: ['New 3D card components with depth effects', 'Lightning visualization system', 'Ambient UI components for better UX', 'Code demo syntax highlighting improvements'] },
  { version: '0.2.7', date: '2025-09-10', notes: ['Agent marketplace filtering and search', 'Success stories carousel with smooth transitions', 'Technical architecture diagram updates', 'Pricing tier comparison enhancements'] },
  { version: '0.2.6', date: '2025-09-05', notes: ['Revolutionary identity system implementation', 'Agentic advantage showcase components', 'Enhanced CTA with conversion tracking', 'Mobile-optimized phone mockups'] },
  { version: '0.2.5', date: '2025-08-28', notes: ['Paradigm shift section with interactive elements', 'Ecosystem pillars visualization', 'Network visualization components', 'Glassmorphic card design system'] },
  { version: '0.2.4', date: '2025-08-22', notes: ['Professional CTA components', 'Social proof integration', 'Value propositions section redesign', 'Metrics section with real-time updates'] },
  { version: '0.2.3', date: '2025-08-18', notes: ['Live waitlist counter functionality', 'Success experience components', 'Waitlist modal improvements', 'Form validation enhancements'] },
  { version: '0.2.2', date: '2025-08-15', notes: ['Phone mockup component refinements', 'Video player mockup integration', 'Dynamic dot grid backgrounds', 'Improved loading states'] },
  { version: '0.2.1', date: '2025-08-12', notes: ['Header navigation improvements', 'Footer social links and branding', 'Partnership section layout', 'Contact form integration'] },
  { version: '0.2.0', date: '2025-08-08', notes: ['New landing header & hero styling', 'Waitlist modal with Supabase integration', 'Added Features, Docs, Pricing, Changelog pages'] },
  { version: '0.1.9', date: '2025-08-03', notes: ['Authentication context implementation', 'User session management', 'Protected route handling', 'Login/logout functionality'] },
  { version: '0.1.8', date: '2025-07-29', notes: ['Advanced animation system with Framer Motion', 'Loading overlay components', 'Matrix loader effects', 'Futuristic loader animations'] },
  { version: '0.1.7', date: '2025-07-25', notes: ['Security monitoring hooks', 'App loading state management', 'Toast notification system', 'Error boundary implementation'] },
  { version: '0.1.6', date: '2025-07-22', notes: ['Mobile responsive design overhaul', 'Touch-friendly navigation', 'Optimized font loading', 'Cross-browser compatibility fixes'] },
  { version: '0.1.5', date: '2025-07-18', notes: ['Supabase client configuration', 'Database connection setup', 'Real-time subscriptions', 'Row Level Security policies'] },
  { version: '0.1.4', date: '2025-07-15', notes: ['UI component library expansion', 'Accordion, Alert Dialog, Aspect Ratio components', 'Avatar and Badge implementations', 'Breadcrumb navigation system'] },
  { version: '0.1.3', date: '2025-07-12', notes: ['Button component variants and styles', 'Calendar date picker integration', 'Card component design system', 'Carousel for content display'] },
  { version: '0.1.2', date: '2025-07-08', notes: ['Chart components with Recharts', 'Checkbox and form controls', 'Command palette functionality', 'Context menu implementations'] },
  { version: '0.1.1', date: '2025-07-05', notes: ['Dialog and modal systems', 'Drawer slide-out panels', 'Dropdown menu components', 'Form validation with react-hook-form'] },
  { version: '0.1.0', date: '2025-07-01', notes: ['Initial public preview', 'Core components and layout', 'React Router setup', 'TypeScript configuration'] },
  { version: '0.0.9', date: '2025-06-28', notes: ['Hover card interactions', 'Input OTP verification', 'Label and form field bindings', 'Menubar navigation structure'] },
  { version: '0.0.8', date: '2025-06-25', notes: ['Navigation menu responsive design', 'Pagination component logic', 'Popover positioning system', 'Progress bar animations'] },
  { version: '0.0.7', date: '2025-06-22', notes: ['Radio group form controls', 'Resizable panel layouts', 'Scroll area custom styling', 'Select dropdown enhancements'] },
  { version: '0.0.6', date: '2025-06-19', notes: ['Separator line components', 'Sheet modal implementations', 'Sidebar navigation structure', 'Skeleton loading placeholders'] },
  { version: '0.0.5', date: '2025-06-16', notes: ['Slider range input controls', 'Spinner loading animations', 'Switch toggle components', 'Table data display formatting'] },
  { version: '0.0.4', date: '2025-06-13', notes: ['Tabs navigation system', 'Textarea input handling', 'Toast notification positioning', 'Toggle button states'] },
  { version: '0.0.3', date: '2025-06-10', notes: ['Toggle group radio alternatives', 'Tooltip hover information', 'Utility functions library', 'Custom React hooks setup'] },
  { version: '0.0.2', date: '2025-06-07', notes: ['Tailwind CSS configuration', 'Design system color tokens', 'Typography scale definitions', 'Responsive breakpoint setup'] },
  { version: '0.0.1', date: '2025-06-04', notes: ['Project initialization', 'Vite build system setup', 'ESLint configuration', 'Git repository creation'] }
];

const Changelog: React.FC = () => {
  useEffect(() => {
    document.title = 'MusicOS – Changelog';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <header className="py-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Changelog</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">All notable changes to MusicOS.</p>
        </header>

        <section className="max-w-3xl mx-auto px-6 pb-20 space-y-10">
          {entries.map((e) => (
            <article key={e.version} className="border border-border rounded-2xl p-6 bg-card/50">
              <header className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">v{e.version}</h2>
                <span className="text-sm text-muted-foreground">{e.date}</span>
              </header>
              <ul className="mt-4 list-disc pl-6 text-sm text-muted-foreground space-y-1">
                {e.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
