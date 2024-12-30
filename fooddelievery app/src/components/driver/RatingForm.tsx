import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingFormProps {
  driverId: string;
  orderId: string;
  onSubmit: (rating: number, comment: string) => void;
}

const RatingForm = ({ driverId, orderId, onSubmit }: RatingFormProps) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Rate Your Delivery Experience</h3>
      
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(null)}
            className="p-1"
          >
            <Star
              className={`w-8 h-8 ${
                star <= (hoveredStar ?? rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your experience with the delivery (optional)"
        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
        rows={3}
      />

      <button
        onClick={() => onSubmit(rating, comment)}
        className="mt-4 w-full bg-[#4CAF50] text-white py-2 rounded-lg hover:bg-[#43A047]"
      >
        Submit Rating
      </button>
    </div>
  );
}