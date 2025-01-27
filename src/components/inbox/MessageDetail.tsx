import { FC } from 'react';
import { Message } from '../../types/messages';
import { format } from 'date-fns';

interface MessageDetailProps {
  message: Message;
  onClose: () => void;
}

export const MessageDetail: FC<MessageDetailProps> = ({ message, onClose }) => {
  return (
    <div className="h-full flex flex-col bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">{message.subject}</h2>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-gray-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              {message.sender.avatar ? (
                <img
                  src={message.sender.avatar}
                  alt={message.sender.name}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-lg font-medium text-gray-300">
                    {message.sender.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{message.sender.name}</p>
              {message.sender.department && (
                <p className="text-sm text-gray-400">{message.sender.department}</p>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-400">
            {format(new Date(message.timestamp), 'PPpp')}
          </p>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="prose prose-invert max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-gray-300">
            {message.body}
          </pre>
        </div>
      </div>

      {message.attachments && message.attachments.length > 0 && (
        <div className="p-4 border-t border-gray-800">
          <h3 className="text-sm font-medium text-white mb-3">Attachments</h3>
          <div className="space-y-2">
            {message.attachments.map((attachment) => (
              <a
                key={attachment.name}
                href={attachment.url}
                className="flex items-center p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white truncate">{attachment.name}</p>
                  <p className="text-xs text-gray-400">{(attachment.size / 1024).toFixed(1)} KB</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
