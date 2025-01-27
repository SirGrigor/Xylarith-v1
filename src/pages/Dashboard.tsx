import { FC, useState } from 'react';
import { NotificationCard } from '../components/dashboard/NotificationCard';
import { mockNotifications } from '../data/mockNotifications';
import { SystemNotification } from '../types/notifications';

export const Dashboard: FC = () => {
  const [notifications, setNotifications] = useState<SystemNotification[]>(mockNotifications);

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id 
        ? { ...notification, read: true }
        : notification
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        {unreadCount > 0 && (
          <span className="px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full">
            {unreadCount} new notification{unreadCount !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Recent Updates</h2>
          <div className="space-y-4">
            {notifications.map(notification => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onMarkAsRead={handleMarkAsRead}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 flex flex-col items-center transition-colors">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Add Employee
            </button>
            <button className="p-4 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-400 flex flex-col items-center transition-colors">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
