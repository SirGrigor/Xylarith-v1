import { FC } from 'react';
import { Skill } from '../../types/hr';

interface SkillCardProps {
  skill: Skill;
  onEndorse?: (skillId: string) => void;
}

export const SkillCard: FC<SkillCardProps> = ({ skill, onEndorse }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-medium">{skill.name}</h3>
          <p className="text-sm text-gray-400">{skill.category.name}</p>
        </div>
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${skill.category.color}20` }}
        >
          <span className="text-lg font-semibold" style={{ color: skill.category.color }}>
            {skill.level}
          </span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${(skill.level / 5) * 100}%`,
              backgroundColor: skill.category.color
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">
            {skill.endorsements.length} endorsements
          </span>
        </div>
        {onEndorse && (
          <button
            onClick={() => onEndorse(skill.id)}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Endorse
          </button>
        )}
      </div>
    </div>
  );
};
