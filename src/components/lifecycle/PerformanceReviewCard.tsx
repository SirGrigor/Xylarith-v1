import { FC } from 'react';
import { PerformanceReview } from '../../types/hr';

interface PerformanceReviewCardProps {
  review: PerformanceReview;
}

export const PerformanceReviewCard: FC<PerformanceReviewCardProps> = ({ review }) => {
  const getStatusColor = (status: PerformanceReview['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-400';
      case 'In Progress':
        return 'bg-blue-500/10 text-blue-400';
      case 'Scheduled':
        return 'bg-yellow-500/10 text-yellow-400';
    }
  };

  const averageScore = review.scores.reduce((acc, curr) => acc + curr.score, 0) / review.scores.length;

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Performance Review</h3>
          <p className="text-sm text-gray-400">Period: {review.period}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(review.status)}`}>
            {review.status}
          </span>
          <span className="text-2xl font-bold text-white mt-2">
            {averageScore.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {review.scores.map((score, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">{score.category}</span>
              <span className="text-white">{score.score.toFixed(1)}/5</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                style={{ width: `${(score.score / 5) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-1">{score.feedback}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-white mb-2">Summary</h4>
        <p className="text-sm text-gray-400">{review.summary}</p>
      </div>
    </div>
  );
};
