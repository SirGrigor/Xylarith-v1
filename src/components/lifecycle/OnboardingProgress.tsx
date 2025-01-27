import { FC } from 'react';
import { OnboardingTask } from '../../types/hr';

interface OnboardingProgressProps {
  tasks: OnboardingTask[];
}

export const OnboardingProgress: FC<OnboardingProgressProps> = ({ tasks }) => {
  const getStatusColor = (status: OnboardingTask['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-400 border-green-500';
      case 'In Progress':
        return 'bg-blue-500/10 text-blue-400 border-blue-500';
      case 'Pending':
        return 'bg-gray-500/10 text-gray-400 border-gray-500';
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-6">Onboarding Progress</h3>
      
      <div className="space-y-6">
        {tasks.map((task, index) => (
          <div key={task.id} className="relative">
            {index !== tasks.length - 1 && (
              <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-700" />
            )}
            
            <div className="flex items-start">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${getStatusColor(task.status)}`}>
                {task.status === 'Completed' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="w-3 h-3 rounded-full bg-current" />
                )}
              </div>
              
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-medium">{task.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{task.description}</p>
                <div className="mt-2 flex items-center text-sm text-gray-400">
                  <span>Assignee: {task.assignee}</span>
                  <span className="mx-2">•</span>
                  <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
