import { SystemNotification } from '../types/notifications';

export const mockNotifications: SystemNotification[] = [
  {
    id: '1',
    type: 'system_update',
    title: 'New Performance Review Cycle',
    message: 'Q1 2024 performance review cycle has been initiated. Please complete your self-assessments by March 15th.',
    timestamp: '2024-03-01T09:00:00Z',
    read: false,
    priority: 'high',
    actionUrl: '/app/performance',
    actionLabel: 'Start Review'
  },
  {
    id: '2',
    type: 'employee_update',
    title: 'New Team Member Onboarding',
    message: 'Sarah Chen will be joining the Engineering team on March 15th. Please help welcome her!',
    timestamp: '2024-03-02T10:30:00Z',
    read: false,
    priority: 'medium',
    actionUrl: '/app/employees',
    actionLabel: 'View Profile'
  },
  {
    id: '3',
    type: 'training',
    title: 'Required Compliance Training',
    message: 'Annual security awareness training is due by the end of March.',
    timestamp: '2024-03-02T14:15:00Z',
    read: false,
    priority: 'high',
    actionUrl: '/app/training',
    actionLabel: 'Start Training'
  },
  {
    id: '4',
    type: 'alert',
    title: 'Resource Allocation Alert',
    message: 'Project Alpha is currently understaffed. Review resource allocation.',
    timestamp: '2024-03-03T11:20:00Z',
    read: true,
    priority: 'high',
    actionUrl: '/app/resources',
    actionLabel: 'View Resources'
  },
  {
    id: '5',
    type: 'onboarding',
    title: 'Onboarding Tasks Updated',
    message: 'New onboarding checklist items have been added for technical roles.',
    timestamp: '2024-03-03T15:45:00Z',
    read: true,
    priority: 'medium',
    actionUrl: '/app/onboarding',
    actionLabel: 'View Changes'
  }
];
