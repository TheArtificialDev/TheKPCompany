import React from 'react';

interface CardProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <div className={`bg-[#f8f7f3] p-6 comic-border comic-shadow ${className}`}>{title && <h3 className="text-xl font-heading font-bold mb-4">{title}</h3>}
      <div className="font-body font-normal">
        {children}
      </div>
    </div>
  );
};

export default Card;
