export type NotificationType = 
  | 'system_update' 
  | 'employee_update' 
  | 'review' 
  | 'onboarding' 
  | 'training' 
  | 'alert';

export interface SystemNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
  actionUrl?: string;
  actionLabel?: string;
  metadata?: Record<string, any>;
}
