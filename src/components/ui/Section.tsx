import React from 'react';

interface SectionProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Section = ({ 
  id,
  title, 
  subtitle, 
  children, 
  className = '',
  fullHeight = false
}: SectionProps) => {
  return (
    <section id={id} className={`page-section ${fullHeight ? 'min-h-screen' : ''} ${className}`}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {title}
              </h2>            )}
            {subtitle && (
              <p className="text-xl max-w-3xl mx-auto font-body font-normal">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
