import { FC } from 'react';
import { TeamEvent } from '../../types/hr';

interface TeamCalendarProps {
  events: TeamEvent[];
}

export const TeamCalendar: FC<TeamCalendarProps> = ({ events }) => {
  const getEventTypeStyles = (type: TeamEvent['type']) => {
    switch (type) {
      case 'leave':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500';
      case 'training':
        return 'bg-blue-500/10 text-blue-400 border-blue-500';
      case 'review':
        return 'bg-purple-500/10 text-purple-400 border-purple-500';
      case 'meeting':
        return 'bg-green-500/10 text-green-400 border-green-500';
      case 'deadline':
        return 'bg-red-500/10 text-red-400 border-red-500';
    }
  };

  const getStatusBadge = (status: TeamEvent['status']) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/10 text-green-400';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'rejected':
        return 'bg-red-500/10 text-red-400';
      case 'completed':
        return 'bg-blue-500/10 text-blue-400';
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-6">Team Calendar</h3>
      <div className="space-y-4">
        {events.map(event => (
          <div
            key={event.id}
            className={`p-4 rounded-lg border ${getEventTypeStyles(event.type)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-medium text-white">{event.title}</h4>
                <p className="text-sm text-gray-400">{event.description}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadge(event.status)}`}>
                {event.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">
                  {new Date(event.start).toLocaleDateString()}
                </span>
                <span className="text-gray-400">
                  {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                event.priority === 'high' ? 'bg-red-500/10 text-red-400' :
                event.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                'bg-green-500/10 text-green-400'
              }`}>
                {event.priority} priority
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
