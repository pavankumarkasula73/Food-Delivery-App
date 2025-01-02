import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingFormProps {
  onSubmit: (rating: number, comment: string) => void;
}

const RatingForm: React.FC<RatingFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(rating, comment);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Rate Your Delivery Experience</h3>
      
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(null)}
            className={`w-8 h-8 ${star <= (hoveredStar || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            title={`Rate ${star} star${star > 1 ? 's' : ''}`}
          >
            <Star className="w-full h-full" />
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4CAF50] hover:bg-[#45a049]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RatingForm;