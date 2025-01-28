import { 
  HomeIcon,
  InboxIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import { ComponentType } from 'react';
import {Brain} from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: ComponentType<{ className?: string }>;
  badge?: number;
}

export const mainNavigation: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/app',
    icon: HomeIcon
  },
  {
    id: 'inbox',
    label: 'Inbox',
    path: '/app/inbox',
    icon: InboxIcon,
    badge: 3
  },
  {
    id: 'employees',
    label: 'Employees',
    path: '/app/employees',
    icon: UserGroupIcon
  },
  {
    id: 'skills',
    label: 'Skills',
    path: '/app/skills',
    icon: AcademicCapIcon
  },
  {
    id: 'lifecycle',
    label: 'Lifecycle',
    path: '/app/lifecycle',
    icon: ChartBarIcon
  },
  {
    id: 'calendar',
    label: 'Calendar',
    path: '/app/calendar',
    icon: CalendarIcon
  },
  {
    id: 'analytics',
    label: 'Analytics',
    path: '/app/analytics',
    icon: Brain
  }
];
