// types/employee.ts

export interface SkillDetail {
  experience?: string;
  description: string;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
    expiryDate?: string;
  }>;
  projects?: Array<{
    name: string;
    role: string;
    duration: string;
    impact: string;
  }>;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'leadership' | 'core';
  details: SkillDetail;
  lastAssessed?: string;
  nextReview?: string;
}

export interface SkillMatrix {
  technical: Skill[];
  soft: Skill[];
  leadership: Skill[];
  core: Skill[];
}

export interface EmployeeProfile {
  id: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
  };
  employmentDetails: {
    id: string;
    title: string;
    department: string;
    startDate: string;
    status: 'active' | 'inactive' | 'onLeave';
    contractType: 'fullTime' | 'partTime' | 'contractor';
    location: string;
    team?: string;
  };
  skills: SkillMatrix;
  performance: {
    ratings: Array<{
      period: string;
      score: number;
      reviewer: string;
      comments: string;
    }>;
    goals: Array<{
      title: string;
      description: string;
      status: 'pending' | 'inProgress' | 'completed';
      dueDate: string;
    }>;
    achievements: Array<{
      title: string;
      description: string;
      date: string;
      impact: string;
    }>;
  };
  development: {
    trainingCompleted: Array<{
      name: string;
      provider: string;
      completionDate: string;
      score?: number;
    }>;
    careerPath: {
      currentLevel: string;
      targetRole: string;
      requiredSkills: string[];
      timeline: string;
    };
  };
  metadata: {
    lastUpdated: string;
    updatedBy: string;
    version: number;
  };
}

export interface SkillLevel {
  name: string;
  level: number;
  category: string;
  details?: {
    experience?: string;
    lastUsed?: string;
    description?: string;
  };
}
