import { FC } from 'react';

export const Search: FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Search</h2>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
