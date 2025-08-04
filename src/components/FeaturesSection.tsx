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
    <section className={`py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center ${
      reverse ? 'lg:grid-flow-col-dense' : ''
    }`}>
      {/* Text Content */}
      <div className={`space-y-6 px-4 sm:px-6 lg:px-0 ${reverse ? 'lg:col-start-2' : ''}`}>
        <h2 className="text-mobile-lg md:text-4xl lg:text-5xl font-semibold leading-tight text-gradient-primary">
          {title}
        </h2>
        <p className="text-mobile-base md:text-lg lg:text-xl leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
          {children}
        </p>
      </div>

      {/* Mockup */}
      <div className={`${reverse ? 'lg:col-start-1' : ''} flex justify-center px-4 sm:px-6 lg:px-0`}>
        <PhoneMockup 
          screenContentSrc={mockupSrc} 
          alt={mockupAlt}
          className="animate-mobile-slide-up max-w-xs sm:max-w-sm md:max-w-md mx-auto" 
        />
      </div>
    </section>
  );
};

export const FeaturesSection = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Features */}
      <Section 
        title="From Idea to IP: Structure Your Creativity." 
        mockupSrc={featureIdeasToProjects}
        mockupAlt="Converting music ideas into full projects"
      >
        Universal transforms your raw ideas into actionable projects. Instantly convert conversations into film treatments, lyrics into album roadmaps, and sketches into business plans.
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