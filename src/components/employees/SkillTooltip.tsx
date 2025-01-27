import { FC } from 'react';

interface SkillTooltipProps {
  name: string;
  level: number;
  details?: {
    experience?: string;
    lastUsed?: string;
    description?: string;
  };
  position: {
    x: number;
    y: number;
  };
}

export const SkillTooltip: FC<SkillTooltipProps> = ({ 
  name, 
  level, 
  details,
  position 
}) => {
  return (
    <div
      className="absolute z-50 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-3 w-64"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%)',
        marginTop: '-10px'
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-white">{name}</span>
        <span className="text-sm text-blue-400">Level {level}</span>
      </div>
      {details && (
        <div className="space-y-1">
          {details.experience && (
            <p className="text-sm text-gray-300">
              Experience: {details.experience}
            </p>
          )}
          {details.lastUsed && (
            <p className="text-sm text-gray-300">
              Last Used: {details.lastUsed}
            </p>
          )}
          {details.description && (
            <p className="text-sm text-gray-400">
              {details.description}
            </p>
          )}
        </div>
      )}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800 border-r border-b border-gray-700"></div>
    </div>
  );
};
