import {
    CalendarEvent,
    eventTypeColors
} from '../types/calendar';

export const mockCalendarEvents: CalendarEvent[] = [
    {
        id: 'evt001',
        title: 'Q1 Performance Reviews',
        description: 'Quarterly performance review sessions for Engineering department',
        type: 'review',
        startDate: '2025-02-01T09:00:00',
        endDate: '2025-02-01T17:00:00',
        allDay: true,
        priority: 'high',
        status: 'scheduled',
        location: {
            type: 'physical',
            name: 'Conference Room A',
            roomNumber: 'A101',
            floor: '1st Floor'
        },
        participants: [
            {
                id: 'emp001',
                name: 'Sarah Chen',
                role: 'Data Science Lead',
                response: 'accepted',
                requiredAttendance: true
            },
            {
                id: 'emp033',
                name: 'David Wilson',
                role: 'Engineering Director',
                response: 'accepted',
                requiredAttendance: true
            }
        ],
        metadata: {
            createdBy: 'HR System',
            createdAt: '2025-01-15T08:00:00',
            lastModified: '2025-01-15T08:00:00',
            department: 'Engineering',
            category: 'Performance Management',
            tags: ['quarterly-review', 'engineering'],
            visibility: 'department',
            recurrence: 'quarterly',
            nextOccurrence: '2025-05-01T09:00:00'
        },
        attachments: [
            {
                id: 'att001',
                name: 'Q1 Review Template',
                type: 'application/pdf',
                url: '/documents/review-template.pdf'
            }
        ],
        reminder: {
            enabled: true,
            timing: 1440, // 24 hours before
            type: 'both'
        }
    },
    {
        id: 'evt002',
        title: 'New Employee Orientation',
        description: 'Onboarding session for new hires',
        type: 'onboarding',
        startDate: '2025-02-05T10:00:00',
        endDate: '2025-02-05T16:00:00',
        allDay: false,
        priority: 'medium',
        status: 'scheduled',
        location: {
            type: 'hybrid',
            name: 'Training Room B + Zoom',
            roomNumber: 'B202',
            meetingLink: 'https://company.zoom.us/j/123456789',
            meetingId: '123456789'
        },
        metadata: {
            createdBy: 'HR System',
            createdAt: '2025-01-20T09:00:00',
            lastModified: '2025-01-20T09:00:00',
            department: 'HR',
            category: 'Onboarding',
            tags: ['orientation', 'new-hires'],
            visibility: 'public',
            recurrence: 'monthly',
            lastOccurrence: '2025-01-05T10:00:00',
            nextOccurrence: '2025-03-05T10:00:00'
        },
        attachments: [
            {
                id: 'att002',
                name: 'Employee Handbook',
                type: 'application/pdf',
                url: '/documents/employee-handbook.pdf'
            },
            {
                id: 'att003',
                name: 'IT Setup Guide',
                type: 'application/pdf',
                url: '/documents/it-setup-guide.pdf'
            }
        ],
        reminder: {
            enabled: true,
            timing: 60,
            type: 'email'
        }
    },
    {
        id: 'evt003',
        title: 'Design System Workshop',
        description: 'Training session on new design system implementation',
        type: 'training',
        startDate: '2025-02-10T14:00:00',
        endDate: '2025-02-10T16:00:00',
        allDay: false,
        priority: 'medium',
        status: 'scheduled',
        location: {
            type: 'virtual',
            name: 'Microsoft Teams',
            meetingLink: 'https://teams.microsoft.com/l/meetup-join/123',
            meetingId: 'design-system-workshop'
        },
        participants: [
            {
                id: 'emp002',
                name: 'Marcus Rodriguez',
                role: 'Product Design Manager',
                response: 'accepted',
                requiredAttendance: true
            }
        ],
        metadata: {
            createdBy: 'HR System',
            createdAt: '2025-01-25T10:00:00',
            lastModified: '2025-01-25T10:00:00',
            department: 'Design',
            category: 'Training & Development',
            tags: ['design-system', 'workshop'],
            visibility: 'team',
            recurrence: 'none'
        },
        attachments: [
            {
                id: 'att004',
                name: 'Design System Documentation',
                type: 'application/pdf',
                url: '/documents/design-system-docs.pdf'
            }
        ],
        reminder: {
            enabled: true,
            timing: 30,
            type: 'notification'
        }
    },
    {
        id: 'evt004',
        title: 'Company Holiday - Presidents Day',
        description: 'Office closed for Presidents Day',
        type: 'holiday',
        startDate: '2025-02-17T00:00:00',
        endDate: '2025-02-17T23:59:59',
        allDay: true,
        priority: 'medium',
        status: 'scheduled',
        metadata: {
            createdBy: 'HR System',
            createdAt: '2025-01-01T00:00:00',
            lastModified: '2025-01-01T00:00:00',
            category: 'Company Events',
            tags: ['holiday', 'office-closed'],
            visibility: 'public',
            recurrence: 'yearly',
            nextOccurrence: '2026-02-17T00:00:00'
        }
    },
    {
        id: 'evt005',
        title: 'ML Platform Review',
        description: 'Project milestone review for ML Platform Scaling initiative',
        type: 'deadline',
        startDate: '2025-02-20T15:00:00',
        endDate: '2025-02-20T16:30:00',
        allDay: false,
        priority: 'high',
        status: 'scheduled',
        location: {
            type: 'physical',
            name: 'Conference Room C',
            roomNumber: 'C303',
            floor: '3rd Floor'
        },
        participants: [
            {
                id: 'emp001',
                name: 'Sarah Chen',
                role: 'Data Science Lead',
                response: 'accepted',
                requiredAttendance: true
            }
        ],
        metadata: {
            createdBy: 'HR System',
            createdAt: '2025-01-28T11:00:00',
            lastModified: '2025-01-28T11:00:00',
            department: 'Analytics',
            category: 'Project Management',
            tags: ['ml-platform', 'milestone'],
            visibility: 'team',
            recurrence: 'none'
        },
        reminder: {
            enabled: true,
            timing: 120,
            type: 'both'
        }
    },
    {
        id: 'evt006',
        title: 'Team Building: Virtual Game Night',
        description: 'Monthly virtual game night for remote team bonding',
        type: 'meeting',
        startDate: '2025-02-25T19:00:00',
        endDate: '2025-02-25T21:00:00',
        allDay: false,
        priority: 'low',
        status: 'scheduled',
        location: {
            type: 'virtual',
            name: 'Discord Game Channel',
            meetingLink: 'https://discord.gg/gamechannel'
        },
        metadata: {
            createdBy: 'HR System',
            createdAt: '2025-01-30T14:00:00',
            lastModified: '2025-01-30T14:00:00',
            department: 'All',
            category: 'Team Building',
            tags: ['team-building', 'social'],
            visibility: 'public',
            recurrence: 'monthly',
            nextOccurrence: '2025-03-25T19:00:00'
        },
        reminder: {
            enabled: true,
            timing: 60,
            type: 'notification'
        }
    },
    {
        id: 'evt007',
        title: 'Technical Skills Assessment',
        description: 'Annual technical skills evaluation for engineering team',
        type: 'assessment',
        startDate: '2025-02-28T10:00:00',
        endDate: '2025-02-28T12:00:00',
        allDay: false,
        priority: 'high',
        status: 'scheduled',
        location: {
            type: 'hybrid',
            name: 'Tech Lab + Remote',
            roomNumber: 'L101',
            meetingLink: 'https://assessment-platform.company.com'
        },
        metadata: {
            createdBy: 'HR System',
            createdAt: '2025-01-15T09:00:00',
            lastModified: '2025-01-15T09:00:00',
            department: 'Engineering',
            category: 'Skills & Development',
            tags: ['assessment', 'engineering'],
            visibility: 'department',
            recurrence: 'yearly',
            nextOccurrence: '2026-02-28T10:00:00'
        },
        attachments: [
            {
                id: 'att005',
                name: 'Assessment Guidelines',
                type: 'application/pdf',
                url: '/documents/assessment-guidelines.pdf'
            }
        ],
        reminder: {
            enabled: true,
            timing: 1440,
            type: 'both'
        }
    }
];

export { eventTypeColors };