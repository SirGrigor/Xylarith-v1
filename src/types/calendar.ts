// types/calendar.ts

export type EventPriority = 'high' | 'medium' | 'low';

export type EventStatus = 'scheduled' | 'inProgress' | 'completed' | 'cancelled';

export type EventType =
    | 'review'           // Performance reviews
    | 'training'         // Training sessions
    | 'onboarding'       // New employee onboarding
    | 'meeting'          // Team/department meetings
    | 'holiday'          // Company holidays
    | 'deadline'         // Project/task deadlines
    | 'timeOff'         // Employee time off
    | 'interview'        // Recruitment interviews
    | 'assessment'       // Skill assessments
    | 'birthday';        // Employee birthdays

export type EventCategory =
    | 'Performance Management'
    | 'Training & Development'
    | 'Onboarding'
    | 'Team Building'
    | 'Company Events'
    | 'Project Management'
    | 'Leave Management'
    | 'Recruitment'
    | 'Skills & Development'
    | 'Employee Engagement';

export type EventRecurrence =
    | 'none'
    | 'daily'
    | 'weekly'
    | 'biweekly'
    | 'monthly'
    | 'quarterly'
    | 'yearly';

export type EventVisibility =
    | 'public'      // Visible to all employees
    | 'private'     // Visible only to participants
    | 'department'  // Visible to specific department
    | 'team'        // Visible to specific team
    | 'management'; // Visible to management only

export interface EventParticipant {
    id: string;
    name: string;
    role: string;
    response?: 'accepted' | 'declined' | 'tentative' | 'pending';
    requiredAttendance?: boolean;
}

export interface EventLocation {
    type: 'physical' | 'virtual' | 'hybrid';
    name: string;
    address?: string;
    meetingLink?: string;
    meetingId?: string;
    roomNumber?: string;
    floor?: string;
}

export interface EventMetadata {
    createdBy: string;
    createdAt: string;
    lastModified: string;
    department?: string;
    category?: EventCategory;
    tags?: string[];
    visibility: EventVisibility;
    recurrence: EventRecurrence;
    lastOccurrence?: string;
    nextOccurrence?: string;
}

export interface CalendarEvent {
    id: string;
    title: string;
    description: string;
    type: EventType;
    startDate: string;
    endDate?: string;
    allDay: boolean;
    priority: EventPriority;
    status: EventStatus;
    location?: EventLocation;
    participants?: EventParticipant[];
    metadata: EventMetadata;
    attachments?: Array<{
        id: string;
        name: string;
        type: string;
        url: string;
    }>;
    reminder?: {
        enabled: boolean;
        timing: number; // minutes before event
        type: 'email' | 'notification' | 'both';
    };
}

export interface CalendarFilters {
    eventTypes: EventType[];
    dateRange: {
        start: Date;
        end: Date;
    };
    departments?: string[];
    priority?: EventPriority[];
    visibility?: EventVisibility[];
    categories?: EventCategory[];
    status?: EventStatus[];
}

export interface CalendarView {
    type: 'month' | 'week' | 'day' | 'agenda';
    startDate: Date;
    endDate: Date;
}

export interface CalendarSettings {
    defaultView: CalendarView['type'];
    firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 1 = Monday, etc.
    workingHours: {
        start: string; // HH:mm format
        end: string;   // HH:mm format
    };
    timeZone: string;
    showWeekends: boolean;
    showDeclinedEvents: boolean;
    enableReminders: boolean;
    defaultEventDuration: number; // minutes
}

// Color mapping for event types
export const eventTypeColors: Record<EventType, string> = {
    review: 'bg-purple-500',
    training: 'bg-blue-500',
    onboarding: 'bg-green-500',
    meeting: 'bg-yellow-500',
    holiday: 'bg-red-500',
    deadline: 'bg-orange-500',
    timeOff: 'bg-indigo-500',
    interview: 'bg-pink-500',
    assessment: 'bg-cyan-500',
    birthday: 'bg-emerald-500'
};