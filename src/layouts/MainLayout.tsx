import { FC, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "📥", label: "Inbox", path: "/inbox" },
  { icon: "🔍", label: "Search", path: "/search" },
  { icon: "👥", label: "Employees", path: "/employees" },
  { icon: "📅", label: "Calendars", path: "/calendars" },
  { icon: "📊", label: "Performance & Development", path: "/performance" },
];

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        {/* Company Logo */}
        <div className="h-16 flex items-center px-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TP</span>
            </div>
            <span className="text-white font-semibold">TalentPulse</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="mt-4">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 text-sm ${
                location.pathname === item.path
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="w-6">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Help & Feedback */}
        <div className="absolute bottom-0 w-64 border-t border-gray-700">
          <Link
            to="/help"
            className="flex items-center px-4 py-3 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <span className="w-6">❓</span>
            <span>Help & Feedback</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
          <h1 className="text-xl text-white font-semibold">
            {navigationItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
          </h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
