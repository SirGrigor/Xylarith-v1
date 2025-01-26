import { FC } from 'react';
import { AnalyticsPrediction } from '../../types/hr';

interface PredictionCardProps {
  prediction: AnalyticsPrediction;
}

export const PredictionCard: FC<PredictionCardProps> = ({ prediction }) => {
  const getTrendColor = (trend: AnalyticsPrediction['trend']) => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      case 'stable':
        return 'text-blue-400';
    }
  };

  const getImpactBadge = (impact: AnalyticsPrediction['impactLevel']) => {
    switch (impact) {
      case 'high':
        return 'bg-red-500/10 text-red-400';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'low':
        return 'bg-green-500/10 text-green-400';
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{prediction.metric}</h3>
          <p className="text-sm text-gray-400">{prediction.timeframe}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${getImpactBadge(prediction.impactLevel)}`}>
          {prediction.impactLevel} impact
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-400">Current</p>
          <p className="text-2xl font-bold text-white">{prediction.currentValue}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Predicted</p>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-white">{prediction.predictedValue}%</p>
            <span className={`ml-2 ${getTrendColor(prediction.trend)}`}>
              {prediction.trend === 'up' ? '↑' : prediction.trend === 'down' ? '↓' : '→'}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Confidence</span>
          <span className="text-white">{prediction.confidence}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${prediction.confidence}%` }}
          />
        </div>
      </div>
    </div>
  );
};
