import React from 'react';
import { PhoneMockup } from '@/components/PhoneMockup';
import featureIdeasToProjects from '@/assets/feature-ai-chat-mobile.jpg';
import featureCollaboration from '@/assets/feature-collaboration-mobile.jpg';
import featureProjects from '@/assets/feature-projects-mobile.jpg';
import featureCalendar from '@/assets/feature-calendar-mobile.jpg';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  mockupSrc: string;
  mockupAlt: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  children, 
  mockupSrc, 
  mockupAlt, 
  reverse = false 
}) => {
  return (
    <section className={`section-spacing grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center ${
      reverse ? 'lg:grid-flow-col-dense' : ''
    }`}>
      {/* Text Content */}
      <div className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}>
        <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-gradient-primary">
          {title}
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
          {children}
        </p>
      </div>

      {/* Mockup */}
      <div className={`${reverse ? 'lg:col-start-1' : ''} flex justify-center`}>
        <PhoneMockup 
          screenContentSrc={mockupSrc} 
          alt={mockupAlt}
          className="animate-scale-in" 
        />
      </div>
    </section>
  );
};

export const FeaturesSection = () => {
  return (
    <main className="container-main">
      {/* Features */}
      <Section 
        title="Turn ideas into projects" 
        mockupSrc={featureIdeasToProjects}
        mockupAlt="Converting music ideas into full projects"
      >
        MusicOS takes your creative ideas to the next level by turning them into structured Projects. Transform voice memos into full arrangements, rough sketches into complete compositions, and creative sparks into professional releases.
      </Section>
      
      <Section 
        title="Stay in the loop" 
        mockupSrc={featureCollaboration}
        mockupAlt="Team collaboration and chat summarization"
        reverse={true}
      >
        Add MusicOS to your team chats to automatically summarize conversations, track important decisions, and schedule follow-ups. Never lose track of creative feedback or important project updates again.
      </Section>
      
      <Section 
        title="Build and present" 
        mockupSrc={featureProjects}
        mockupAlt="Beautiful project gallery and presentation view"
      >
        Organize your music projects into stunning visual spaces. Store audio files, manage creative assets, collaborate with team members, and present your work in a completely new way that impresses clients and collaborators.
      </Section>

      <Section 
        title="Never miss a deadline" 
        mockupSrc={featureCalendar}
        mockupAlt="Integrated calendar for music project deadlines"
        reverse={true}
      >
        Keep track of recording sessions, release deadlines, and collaboration meetings with an integrated calendar. Schedule studio time, client calls, and creative sessions directly from your workspace.
      </Section>
    </main>
  );
};