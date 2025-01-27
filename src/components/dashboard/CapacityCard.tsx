import { FC } from 'react';

interface CapacityCardProps {
  title: string;
  value: number;
  change: number;
  icon: React.ReactNode;
}

export const CapacityCard: FC<CapacityCardProps> = ({ title, value, change, icon }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-semibold text-white mt-1">{value}%</p>
        </div>
        <div className="p-3 bg-blue-500/10 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <span className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
          </span>
          <span className="text-sm text-gray-400 ml-2">vs last month</span>
        </div>
      </div>
    </div>
  );
};
