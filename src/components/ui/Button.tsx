import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClasses = `btn btn-${variant} comic-border comic-shadow font-heading font-medium ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;
  
  const buttonContent = (
    <span className="relative z-10 flex items-center justify-center">
      {children}
    </span>
  );
    if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={baseClasses}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
