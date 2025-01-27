import { FC, useState } from 'react';
import { MessageList } from '../components/inbox/MessageList';
import { MessageDetail } from '../components/inbox/MessageDetail';
import { mockMessages } from '../data/mockMessages';
import { Message } from '../types/messages';

export const Inbox: FC = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'flagged'>('all');

  const handleSelectMessage = (message: Message) => {
    if (message.status === 'unread') {
      setMessages(messages.map(m => 
        m.id === message.id ? { ...m, status: 'read' } : m
      ));
    }
    setSelectedMessage(message);
  };

  const filteredMessages = messages.filter(message => {
    switch (filter) {
      case 'unread':
        return message.status === 'unread';
      case 'flagged':
        return message.status === 'flagged';
      default:
        return true;
    }
  });

  const unreadCount = messages.filter(m => m.status === 'unread').length;
  const flaggedCount = messages.filter(m => m.status === 'flagged').length;

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">Inbox</h1>
          {unreadCount > 0 && (
            <span className="px-2.5 py-0.5 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full">
              {unreadCount} unread
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              filter === 'all' 
                ? 'bg-gray-700 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              filter === 'unread' 
                ? 'bg-gray-700 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Unread ({unreadCount})
          </button>
          <button
            onClick={() => setFilter('flagged')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              filter === 'flagged' 
                ? 'bg-gray-700 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Flagged ({flaggedCount})
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
        <div className="overflow-y-auto rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <MessageList
            messages={filteredMessages}
            selectedId={selectedMessage?.id}
            onSelect={handleSelectMessage}
          />
        </div>
        <div className="overflow-hidden">
          {selectedMessage ? (
            <MessageDetail
              message={selectedMessage}
              onClose={() => setSelectedMessage(null)}
            />
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-300">Select a message</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
