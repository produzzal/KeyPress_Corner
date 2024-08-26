// StarRating.tsx
import React from "react";

interface StarRatingProps {
  rating: number; // Expect rating to be a number between 0 and 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
