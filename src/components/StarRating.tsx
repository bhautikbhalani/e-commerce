import React from 'react';
import { Star } from 'lucide-react';
import type { StarRatingProps } from '../utils/types';


const StarRating: React.FC<StarRatingProps> = ({ rating, count }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
    }

    if (hasHalfStar) {
        stars.push(
            <Star
                key="half"
                className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50"
            />
        );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return (
        <div className="flex items-center gap-1">
            <div className="flex">{stars}</div>
            {count !== undefined && (
                <span className="text-sm text-gray-500">({count})</span>
            )}
        </div>
    );
};

export default StarRating;
