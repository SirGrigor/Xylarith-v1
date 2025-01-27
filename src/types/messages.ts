export type MessagePriority = 'high' | 'medium' | 'low';
export type MessageCategory = 'hr' | 'system' | 'review' | 'training' | 'general';
export type MessageStatus = 'unread' | 'read' | 'archived' | 'flagged';

export interface Message {
  id: string;
  subject: string;
  body: string;
  sender: {
    name: string;
    avatar?: string;
    department?: string;
  };
  timestamp: string;
  priority: MessagePriority;
  category: MessageCategory;
  status: MessageStatus;
  attachments?: {
    name: string;
    type: string;
    size: number;
    url: string;
  }[];
  labels?: string[];
}
