import React from 'react';
import Button from './Button';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  className = '',
}: HeroSectionProps) => {
  return (
    <div className="hero-section comic-border comic-shadow">
      <div className={`text-center max-w-6xl p-10 w-full ${className}`}>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl font-body font-normal mb-10">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryCTA && (
            <Button variant="primary" href={primaryCTA.href}>
              {primaryCTA.text}
            </Button>
          )}
          
          {secondaryCTA && (
            <Button variant="secondary" href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
