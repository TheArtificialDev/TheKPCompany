import React from 'react';
import { RiStarFill } from 'react-icons/ri';

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 5, className = '' }) => {
  return (
    <div className={`flex justify-end text-yellow-500 ${className}`}>
      {[...Array(rating)].map((_, i) => (
        <RiStarFill key={i} className="inline-block" />
      ))}
    </div>
  );
};

export default StarRating;
