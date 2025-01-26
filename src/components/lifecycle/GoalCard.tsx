import { FC } from 'react';
import { PerformanceGoal } from '../../types/hr';

interface GoalCardProps {
  goal: PerformanceGoal;
}

export const GoalCard: FC<GoalCardProps> = ({ goal }) => {
  const getStatusColor = (status: PerformanceGoal['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-400';
      case 'In Progress':
        return 'bg-blue-500/10 text-blue-400';
      case 'Not Started':
        return 'bg-gray-500/10 text-gray-400';
      case 'Overdue':
        return 'bg-red-500/10 text-red-400';
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{goal.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{goal.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(goal.status)}`}>
          {goal.status}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Progress</span>
            <span className="text-white">{goal.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${goal.progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-400">Key Metrics:</p>
          <ul className="space-y-1">
            {goal.metrics?.map((metric, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                {metric}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-gray-400">Start Date</p>
            <p className="text-white">{new Date(goal.startDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-gray-400">Due Date</p>
            <p className="text-white">{new Date(goal.dueDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
