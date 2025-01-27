import { FC } from 'react';
import { PredictionCard } from '../components/analytics/PredictionCard';
import { ResourceForecastChart } from '../components/analytics/ResourceForecastChart';
import { TeamCalendar } from '../components/calendar/TeamCalendar';
import { mockPredictions, mockResourceForecast, mockTeamEvents } from '../data/mockData';

export const Analytics: FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockPredictions.map(prediction => (
          <PredictionCard key={prediction.id} prediction={prediction} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResourceForecastChart data={mockResourceForecast} />
        <TeamCalendar events={mockTeamEvents} />
      </div>
    </div>
  );
};
