import React from 'react';

const code = `// MusicOS API
const client = new Client({ apiKey: process.env.API_KEY })

await client.projects.create({
  name: 'EP Launch',
  deadline: '2025-11-01',
})

await client.issues.assign('mixdown', 'alex')
`;

const CodeDemo = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="rounded-lg border border-border bg-secondary/30">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/60 text-xs text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-foreground/20" />
            <div className="w-2 h-2 rounded-full bg-foreground/20" />
            <div className="w-2 h-2 rounded-full bg-foreground/20" />
            <span className="ml-2">demo.ts</span>
          </div>
          <pre className="p-4 md:p-6 text-sm leading-6 font-mono text-foreground/90 overflow-auto">
{code}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
