import React from 'react';

const SocialProof = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h3 className="text-2xl font-semibold mb-4">
        Join over 10,000+ artists building their empires
      </h3>
      <p className="text-text-secondary mb-8">
        Success stories from artists just like you.
      </p>
      {/* Placeholder for success story cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-border-primary rounded-lg p-6">
          <p className="text-lg font-medium">"Universal AI saved me hundreds of hours. I can finally focus on my music."</p>
          <p className="text-sm text-text-tertiary mt-2">- Indie Artist</p>
        </div>
        <div className="border border-border-primary rounded-lg p-6">
          <p className="text-lg font-medium">"The sync licensing marketplace is a game-changer. I landed a major deal within a month."</p>
          <p className="text-sm text-text-tertiary mt-2">- Music Producer</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;