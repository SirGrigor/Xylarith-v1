import { FC } from 'react';
import { Message } from '../../types/messages';
import { formatDistanceToNow } from 'date-fns';
import clsx from 'clsx';

interface MessageListProps {
  messages: Message[];
  selectedId?: string;
  onSelect: (message: Message) => void;
}

export const MessageList: FC<MessageListProps> = ({ 
  messages, 
  selectedId, 
  onSelect 
}) => {
  const getPriorityColor = (priority: Message['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'low':
        return 'bg-green-500/20 text-green-400';
    }
  };

  return (
    <div className="divide-y divide-gray-800">
      {messages.map((message) => (
        <div
          key={message.id}
          onClick={() => onSelect(message)}
          className={clsx(
            'p-4 cursor-pointer transition-colors',
            selectedId === message.id ? 'bg-gray-800/50' : 'hover:bg-gray-800/30',
            message.status === 'unread' && 'bg-gray-800/20'
          )}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {message.sender.avatar ? (
                  <img
                    src={message.sender.avatar}
                    alt={message.sender.name}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-300">
                      {message.sender.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className={clsx(
                    'text-sm font-medium',
                    message.status === 'unread' ? 'text-white' : 'text-gray-300'
                  )}>
                    {message.sender.name}
                  </p>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
                  </span>
                </div>
                <p className={clsx(
                  'text-sm',
                  message.status === 'unread' ? 'text-gray-300' : 'text-gray-400'
                )}>
                  {message.subject}
                </p>
                <div className="mt-1 flex items-center space-x-2">
                  <span className={`
                    inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                    ${getPriorityColor(message.priority)}
                  `}>
                    {message.priority}
                  </span>
                  {message.labels?.map(label => (
                    <span
                      key={label}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-700 text-gray-300"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
