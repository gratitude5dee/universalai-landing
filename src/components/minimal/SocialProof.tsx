import React from 'react';

const SocialProof = () => {
  const signups = 24;
  const goal = 100;
  const progress = (signups / goal) * 100;

  return (
    <div className="max-w-md mx-auto mt-8 text-center">
      <div className="bg-bg-secondary border border-border-primary rounded-lg p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">{signups} signups</span>
          <span className="text-text-tertiary">{goal - signups} more for exclusive early access</span>
        </div>
        <div className="w-full bg-border-secondary rounded-full h-1.5 mt-2">
          <div
            className="bg-accent-primary h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-text-tertiary mt-3 text-left">
          Recent: J***, L***, L***
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
