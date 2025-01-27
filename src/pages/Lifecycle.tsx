import { FC } from 'react';
import { GoalCard } from '../components/lifecycle/GoalCard';
import { OnboardingProgress } from '../components/lifecycle/OnboardingProgress';
import { PerformanceReviewCard } from '../components/lifecycle/PerformanceReviewCard';
import { mockPerformanceGoals, mockOnboardingTasks, mockPerformanceReviews } from '../data/mockData';

export const Lifecycle: FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Performance Goals</h2>
          {mockPerformanceGoals.map(goal => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Latest Review</h2>
          <PerformanceReviewCard review={mockPerformanceReviews[0]} />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Onboarding Progress</h2>
        <OnboardingProgress tasks={mockOnboardingTasks} />
      </div>
    </div>
  );
};
