import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0B14] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link 
          to="/app"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};
