import { Message } from '../types/messages';

export const mockMessages: Message[] = [
  {
    id: '1',
    subject: 'Annual Performance Review Process Starting',
    body: `
Dear Team Members,

The annual performance review cycle for 2024 is now starting. Please complete the following steps:

1. Self-assessment form
2. Peer reviews (if applicable)
3. Goals setting for next quarter

Deadline: March 15th, 2024

Best regards,
HR Team
    `,
    sender: {
      name: 'HR System',
      department: 'Human Resources'
    },
    timestamp: '2024-03-01T09:00:00Z',
    priority: 'high',
    category: 'hr',
    status: 'unread',
    labels: ['important', 'review']
  },
  {
    id: '2',
    subject: 'New Training Module Available: Leadership Skills',
    body: `
New leadership training module is now available in the learning portal.

Topics covered:
- Team Management
- Effective Communication
- Conflict Resolution
- Decision Making

Please complete by: April 1st, 2024
    `,
    sender: {
      name: 'Learning Portal',
      department: 'Training'
    },
    timestamp: '2024-03-02T10:30:00Z',
    priority: 'medium',
    category: 'training',
    status: 'unread',
    labels: ['training']
  },
  {
    id: '3',
    subject: 'System Maintenance Notice',
    body: 'The HR system will undergo maintenance this weekend. Expected downtime: 2 hours.',
    sender: {
      name: 'System Admin',
      department: 'IT'
    },
    timestamp: '2024-03-02T14:15:00Z',
    priority: 'low',
    category: 'system',
    status: 'read',
    labels: ['system']
  },
  {
    id: '4',
    subject: 'Quarterly Team Goals Update Required',
    body: 'Please update your team goals in the system by end of this week.',
    sender: {
      name: 'Goals Tracker',
      department: 'HR'
    },
    timestamp: '2024-03-03T11:20:00Z',
    priority: 'medium',
    category: 'general',
    status: 'flagged',
    labels: ['goals', 'important']
  }
];
