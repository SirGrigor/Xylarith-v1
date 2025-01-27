import React, { useMemo } from 'react';
import { SkillRadar } from './SkillRadar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {WindRose} from "@/components/employees/WindRose.tsx";

interface Skill {
    name: string;
    level: number;
    category: string;
    details?: {
        experience?: string;
        description?: string;
        proficiencyLevel?: string;
    };
}

interface SkillSet {
    technical: Skill[];
    soft: Skill[];
    leadership: Skill[];
    core: Skill[];
}

interface SkillOverviewProps {
    skills: SkillSet;
}

const SkillOverview: React.FC<SkillOverviewProps> = ({ skills }) => {
    const skillCategories = ['technical', 'soft', 'leadership', 'core'] as const;

    const transformedSkills = useMemo(() => {
        return Object.entries(skills)
            .flatMap(([category, skillList]) =>
                skillList.map(skill => ({
                    ...skill,
                    categoryType: category
                }))
            )
            .sort((a, b) => b.level - a.level);
    }, [skills]);

    const getSkillColor = (category: string) => {
        const colors = {
            technical: { text: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
            soft: { text: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
            leadership: { text: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
            core: { text: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' }
        };
        return colors[category.toLowerCase()] || { text: 'text-gray-400', bg: 'bg-gray-400/10', border: 'border-gray-400/20' };
    };

    const getProficiencyLabel = (level: number): string => {
        if (level >= 4.5) return 'Expert';
        if (level >= 3.5) return 'Advanced';
        if (level >= 2.5) return 'Intermediate';
        return 'Beginner';
    };

    return (
        <div className="space-y-6">
            {/* Skill Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SkillRadar skills={transformedSkills} size={400} />
                <WindRose skills={transformedSkills} size={400} />
            </div>

            {/* Skill Categories Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {skillCategories.map((category) => {
                    const categorySkills = skills[category] || [];
                    const colors = getSkillColor(category);

                    return (
                        <div
                            key={category}
                            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-white capitalize">
                                    {category} Skills
                                </h4>
                                <Badge variant="secondary" className={colors.text + ' ' + colors.bg}>
                                    {categorySkills.length} skills
                                </Badge>
                            </div>

                            <div className="space-y-4">
                                {categorySkills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="p-4 rounded-lg border bg-gray-800/50"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h5 className="text-sm font-medium text-white">
                                                    {skill.name}
                                                </h5>
                                                {skill.details?.experience && (
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        {skill.details.experience} experience
                                                    </p>
                                                )}
                                            </div>
                                            <Badge className={colors.text + ' ' + colors.bg}>
                                                {getProficiencyLabel(skill.level)}
                                            </Badge>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-400">Proficiency</span>
                                                <span className={colors.text}>{skill.level}/5</span>
                                            </div>
                                            <Progress
                                                value={skill.level * 20}
                                                className="h-1.5 bg-gray-700"
                                                indicatorClassName={colors.bg.replace('/10', '')}
                                            />
                                        </div>

                                        {skill.details?.description && (
                                            <p className="text-sm text-gray-400 mt-3">
                                                {skill.details.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillOverview;