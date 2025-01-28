import React from 'react';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

interface ChartData {
    name: string;
    value: number;
}

interface ChartComponentProps {
    data: ChartData[];
}

export const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: '#9CA3AF' }}
                    axisLine={{ stroke: '#4B5563' }}
                />
                <PolarRadiusAxis
                    domain={[0, 100]}
                    tick={{ fill: '#9CA3AF' }}
                    axisLine={{ stroke: '#4B5563' }}
                />
                <Radar
                    name="Score"
                    dataKey="value"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '0.5rem',
                        color: '#E5E7EB'
                    }}
                    itemStyle={{ color: '#E5E7EB' }}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};