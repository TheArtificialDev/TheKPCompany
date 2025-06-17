import React from 'react';
import StarRating from './StarRating';

interface TestimonialProps {
  author: string;
  role: string;
  text: string;
  rating: number;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  author, 
  role, 
  text, 
  rating = 5, 
  className = '' 
}) => {
  return (
    <div className={`testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm">{role}</p>
        </div>
      </div>
      <p className="mb-2">"{text}"</p>
      <StarRating rating={rating} className="italic" />
    </div>
  );
};

export default Testimonial;
