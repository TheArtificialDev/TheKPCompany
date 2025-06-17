'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

interface SignupFormProps {
  className?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' });
      return;
    }    
    setIsSubmitting(true);
    setMessage(null);
      
    try {
      // Send the email to our API route
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Clear the form and show success message
      setEmail('');
      setMessage({ text: data.message || 'Thank you for signing up!', type: 'success' });    } catch (error) {
      setMessage({ 
        text: error instanceof Error ? error.message : 'Something went wrong. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <input 
          type="email" 
          placeholder="Your email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="flex-grow py-3 px-4 comic-border bg-[#f8f7f3] focus:outline-none focus:ring-2 focus:ring-black transition-all"
          required
        />
        <Button 
          type="submit" 
          className="whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </div>
      
      {message && (
        <div 
          className={`mt-4 p-3 comic-border ${
            message.type === 'success' ? 'bg-green-50' : 'bg-red-50'
          }`}
        >
          <p className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
            {message.text}
          </p>
        </div>
      )}
    </form>
  );
};

export default SignupForm;
