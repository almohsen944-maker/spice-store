import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const StarRating: React.FC<{ rating: number; size?: number }> = ({ rating, size = 16 }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= rating
              ? 'text-brand-gold fill-brand-gold'
              : 'text-brand-brown/20'
          }
        />
      ))}
    </div>
  );
};

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="bg-brand-brown/5 p-8 rounded-luxury border border-brand-brown/10 text-center">
        <p className="text-brand-brown/60">No reviews yet. Be the first to review this product!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-serif text-brand-brown">Customer Reviews</h2>
      <div className="divide-y divide-brand-brown/10">
        {reviews.map((review) => (
          <div key={review.id} className="py-6 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-brown/10 flex items-center justify-center text-brand-brown font-medium text-sm">
                  {review.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-brown">{review.author}</p>
                  <p className="text-xs text-brand-brown/50">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-sm text-brand-brown/80 leading-relaxed">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export type { Review };
