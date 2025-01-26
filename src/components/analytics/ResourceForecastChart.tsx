import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ResourceForecast } from '../../types/hr';

interface ResourceForecastChartProps {
  data: ResourceForecast[];
}

export const ResourceForecastChart: FC<ResourceForecastChartProps> = ({ data }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-6">Resource Forecast</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="period" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '0.5rem'
              }}
              labelStyle={{ color: '#F3F4F6' }}
              itemStyle={{ color: '#F3F4F6' }}
            />
            <Bar dataKey="demand" fill="#3B82F6" name="Demand" />
            <Bar dataKey="capacity" fill="#10B981" name="Capacity" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
