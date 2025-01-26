import { FC } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { mainNavigation } from '@/config/navigation';
import clsx from 'clsx';

export const AppLayout: FC = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#0A0B14]">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6">
            <Link to="/app" className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-xl font-bold text-white">TalentPulse</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {mainNavigation.map((item) => {
              const isActive = location.pathname === item.path || 
                             location.pathname.startsWith(`${item.path}/`);
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={clsx(
                    'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/5'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="ml-3">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-blue-500/20 text-blue-400 py-0.5 px-2 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900">
        <main className="h-full overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
