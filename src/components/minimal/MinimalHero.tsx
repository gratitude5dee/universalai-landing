import React, { useState, useEffect } from 'react';
import Spinner from '@/components/ui/spinner';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const MinimalHero = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  }, [email]);

  // Mock API function
  const mockSubmit = async (email: string): Promise<void> => {
    console.log('Submitting email:', email);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    if (Math.random() > 0.3) { // 70% chance of success
      return Promise.resolve();
    } else {
      return Promise.reject(new Error('This email is already on the waitlist.'));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus('loading');
    setError('');

    try {
      await mockSubmit(email);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError((err as Error).message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Small technical badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary mb-8">
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
          <span className="text-xs text-text-secondary">v0.1.0-alpha</span>
        </div>

        {/* Main headline - massive and bold */}
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
          The Operating System<br/>
          <span className="text-text-secondary">for Music Creation</span>
        </h1>

        {/* Subheadline - technical and precise */}
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12 font-medium">
          A developer-grade workspace for music production. Plan, collaborate, and ship with precision.
        </p>

        {/* Waitlist Form / Success State */}
        <div className="mt-8 max-w-md mx-auto">
          {status === 'success' ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent-primary">You're on the list! 🎉</h3>
              <p className="text-text-secondary mt-2">Your position in the queue is #25.</p>
              <div className="mt-4 p-4 bg-bg-secondary border border-border-primary rounded-md">
                <p className="text-sm text-text-secondary">Share your referral link to move up:</p>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://musicos.ai/join?ref=ABC123"
                    className="w-full px-3 py-2 bg-bg-tertiary border border-border-secondary rounded-md text-sm text-text-primary"
                  />
                  <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md">Copy</button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border-primary rounded-md text-text-primary placeholder:text-text-tertiary focus:ring-2 focus:ring-accent-primary focus:outline-none transition-shadow disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!isValid || status === 'loading'}
                  className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-accent-primary transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                >
                  {status === 'loading' ? <Spinner /> : 'Join Waitlist'}
                </button>
              </div>
              {status === 'error' && <p className="text-xs text-red-500 mt-2 text-left">{error}</p>}
              {status !== 'error' && (
                <p className="text-xs text-text-tertiary mt-4">
                  No spam. Cancel anytime. By joining, you agree to our Terms & Privacy.
                </p>
              )}
            </form>
          )}
        </div>

        {/* Live metrics bar */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-text-tertiary">Latency</span>
            <span className="text-accent-primary font-mono">12ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-tertiary">Uptime</span>
            <span className="text-accent-primary font-mono">99.99%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-tertiary">Active Sessions</span>
            <span className="text-accent-primary font-mono">2,847</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalHero;
