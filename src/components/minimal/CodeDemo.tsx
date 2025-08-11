import React from 'react';
import { useInView } from '@/hooks/use-in-view';
const CodeDemo = () => {
  const {
    ref,
    inView
  } = useInView();
  const codeExample = `// Initialize MusicOS Client
import { MusicOS } from '@musicos/sdk';

const client = new MusicOS({
  apiKey: process.env.MUSICOS_API_KEY,
  workspace: 'studio-alpha'
});

// Create a new project
const project = await client.projects.create({
  name: 'Summer EP',
  template: 'ep-release',
  deadline: new Date('2025-08-01'),
  collaborators: ['alex@studio.com', 'maria@label.com']
});

// Track progress
await client.tasks.create({
  projectId: project.id,
  title: 'Master final mix',
  assignee: 'alex@studio.com',
  priority: 'high',
  due: '2025-07-15'
});

// Real-time updates
client.on('task:completed', (task) => {
  console.log(\`✓ \${task.title} completed by \${task.assignee}\`);
});`;
  return <section ref={ref} className={`py-32 transition-opacity duration-1000 ${inView ? 'opacity-100 fade-up' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - description */}
          <div>
            <p className="text-sm text-text-tertiary mb-2 font-mono">DEVELOPER EXPERIENCE</p>
            <h2 className="text-5xl font-bold mb-6">Create production-grade IP with our OS.</h2>
            <p className="text-lg text-text-secondary mb-8">
              Integrate MusicOS into your workflow with our TypeScript SDK.
              Full type safety, real-time subscriptions, and 99.99% uptime guaranteed.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-black font-medium hover:bg-accent-primary transition-colors">
                View Docs
              </button>
              <button className="px-6 py-3 border border-border-primary text-text-secondary hover:text-white hover:border-white transition-colors">
                API Reference
              </button>
            </div>
          </div>

          {/* Right side - code */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/10 to-transparent blur-3xl" />
            <div className="relative bg-bg-secondary border border-border-primary rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-primary">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <span className="text-xs text-text-tertiary ml-2 font-mono">index.ts</span>
              </div>

              {/* Code content */}
              <pre className="p-6 text-sm font-mono text-text-secondary overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CodeDemo;