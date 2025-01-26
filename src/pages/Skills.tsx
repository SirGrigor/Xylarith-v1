import { FC, useState } from 'react';
import { SkillRadar } from '../components/skills/SkillRadar';
import { SkillCard } from '../components/skills/SkillCard';
import { SkillMatrix } from '../components/skills/SkillMatrix';
import { CertificationCard } from '../components/skills/CertificationCard';
import { mockEmployees, skillCategories } from '../data/mockData';

export const Skills: FC = () => {
  const [selectedEmployee] = useState(mockEmployees[0]);

  const radarData = skillCategories.map(category => ({
    category: category.name,
    value: selectedEmployee.skills.filter(s => s.category.id === category.id)
      .reduce((acc, curr) => acc + curr.level, 0) / 
      selectedEmployee.skills.filter(s => s.category.id === category.id).length || 0,
    fullMark: 5
  }));

  const teamSkills = skillCategories.map(category => ({
    categoryId: category.id,
    level: mockEmployees.reduce((acc, emp) => {
      const skills = emp.skills.filter(s => s.category.id === category.id);
      return acc + (skills.reduce((sum, s) => sum + s.level, 0) / (skills.length || 1));
    }, 0) / mockEmployees.length,
    count: mockEmployees.filter(emp => 
      emp.skills.some(s => s.category.id === category.id)
    ).length
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-6">Skills Overview</h3>
          <SkillRadar data={radarData} />
        </div>
        <SkillMatrix teamSkills={teamSkills} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedEmployee.skills.map(skill => (
          <SkillCard
            key={skill.id}
            skill={skill}
            onEndorse={(skillId) => console.log('Endorse skill:', skillId)}
          />
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedEmployee.certifications.map(cert => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </div>
  );
};
