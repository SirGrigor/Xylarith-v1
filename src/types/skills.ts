export interface Skill {
  name: string;
  level: number;
  category: string;
  details: SkillDetail;
}

export interface SkillSet {
  technical: Skill[];
  soft: Skill[];
  leadership: Skill[];
  core: Skill[];
}

export interface SkillDetail {
  experience?: string;
  description?: string;
  proficiencyLevel?: string;
  lastAssessed: string;
  nextReview: string;
}

export type SkillCategory = keyof SkillSet;

interface ColorScheme {
  text: string;
  bg: string;
  border: string;
}

export const getSkillCategoryColor = (category: SkillCategory): ColorScheme => {
  const colors: Record<SkillCategory, ColorScheme> = {
    technical: { text: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    soft: { text: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
    leadership: { text: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
    core: { text: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' }
  };

  return colors[category];
};

export interface CapabilityArea {
  name: string;
  level: number;
  category: string;
  details?: {
    experience?: string;
    description?: string;
  };
}

export const transformSkillsToCapabilities = (skillMatrix: SkillSet): CapabilityArea[] => {
  return (Object.entries(skillMatrix) as [SkillCategory, Skill[]][]).flatMap(([category, skills]) =>
      skills.map((skill: Skill): CapabilityArea => ({
        name: skill.name,
        level: skill.level,
        category,
        details: {
          experience: skill.details?.experience,
          description: skill.details?.description
        }
      }))
  ).sort((a, b) => b.level - a.level);
};