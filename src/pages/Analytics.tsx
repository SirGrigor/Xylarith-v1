import { FC } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export const Analytics: FC = () => {
    const location = useLocation();

    return (
        <div className="space-y-6">
            <div className="flex space-x-4 mb-6">
                <Link
                    to="/app/analytics"
                    className={`px-4 py-2 rounded-lg ${
                        location.pathname === '/app/analytics'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                >
                    Overview
                </Link>
                <Link
                    to="/app/analytics/feedback"
                    className={`px-4 py-2 rounded-lg ${
                        location.pathname === '/app/analytics/feedback'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                >
                    Feedback Analytics
                </Link>
                <Link
                    to="/app/analytics/performance"
                    className={`px-4 py-2 rounded-lg ${
                        location.pathname === '/app/analytics/performance'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                >
                    Performance Analytics
                </Link>
            </div>

            <Outlet />
        </div>
    );
};