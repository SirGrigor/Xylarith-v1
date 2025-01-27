import { FC } from 'react';
import { skillCategories } from '../../data/mockData';
import { SkillCategory } from '../../types/hr';

interface SkillMatrixProps {
  teamSkills: {
    categoryId: string;
    level: number;
    count: number;
  }[];
}

export const SkillMatrix: FC<SkillMatrixProps> = ({ teamSkills }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
      <h3 className="text-lg font-semibold text-white mb-6">Team Skills Distribution</h3>
      <div className="space-y-4">
        {skillCategories.map((category: SkillCategory) => {
          const skillData = teamSkills.find(s => s.categoryId === category.id);
          const level = skillData?.level || 0;
          const count = skillData?.count || 0;
          
          return (
            <div key={category.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{category.name}</span>
                <span className="text-sm text-white">{count} members</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${(level / 5) * 100}%`,
                    backgroundColor: category.color
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
