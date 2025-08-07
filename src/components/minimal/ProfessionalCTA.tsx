import React from 'react';
import { Button } from '@/components/ui/button';

interface ProfessionalCTAProps {
  onClick?: () => void;
  label?: string;
}

const ProfessionalCTA: React.FC<ProfessionalCTAProps> = ({ onClick, label = 'Join Waitlist' }) => {
  return (
    <Button onClick={onClick} className="h-10 px-6">
      {label}
    </Button>
  );
};

export default ProfessionalCTA;
