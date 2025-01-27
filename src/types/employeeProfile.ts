// Core information interfaces
export interface PersonalInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
    dateOfBirth?: string;
    address?: {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    emergencyContact?: {
        name: string;
        relationship: string;
        phone: string;
        email?: string;
    };
}

export interface EmploymentDetails {
    id: string;
    title: string;
    department: string;
    startDate: string;
    reportsTo?: string;
    status: 'active' | 'inactive' | 'onLeave';
    contractType: 'fullTime' | 'partTime' | 'contractor';
    location: string;
    team?: string;
    compensation?: {
        salary: number;
        currency: string;
        effectiveDate: string;
        reviewDate: string;
    };
    workSchedule?: {
        timeZone: string;
        standardHours: number;
        flexibleHours: boolean;
    };
}

export interface SkillDetail {
    experience?: string;
    description: string;
    proficiencyLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    certifications?: Array<{
        name: string;
        issuer: string;
        date: string;
        expiryDate?: string;
        verificationLink?: string;
    }>;
    projects?: Array<{
        name: string;
        role: string;
        duration: string;
        impact: string;
        technologies?: string[];
    }>;
    lastAssessed: string;
    nextReview: string;
}

export interface SkillCategory {
    technical: Skill[];
    soft: Skill[];
    leadership: Skill[];
    core: Skill[];
}

export interface Skill {
    name: string;
    level: number;
    category: keyof SkillCategory;
    details: SkillDetail;
}

export interface Performance {
    ratings: Array<{
        period: string;
        score: number;
        reviewer: string;
        comments: string;
        areas: {
            category: string;
            rating: number;
            feedback: string;
        }[];
    }>;
    goals: Array<{
        title: string;
        description: string;
        status: 'pending' | 'inProgress' | 'completed';
        dueDate: string;
        alignedWith?: string[];
        metrics?: {
            target: string;
            current: string;
            unit: string;
        };
    }>;
    achievements: Array<{
        title: string;
        description: string;
        date: string;
        impact: string;
        recognition?: string[];
    }>;
}

export interface Development {
    trainingCompleted: Array<{
        name: string;
        provider: string;
        completionDate: string;
        score?: number;
        certificateUrl?: string;
        skillsAcquired?: string[];
    }>;
    careerPath: {
        currentLevel: string;
        targetRole: string;
        requiredSkills: string[];
        timeline: string;
        developmentPlan?: {
            milestones: Array<{
                description: string;
                targetDate: string;
                status: 'pending' | 'inProgress' | 'completed';
            }>;
        };
    };
    mentorship?: {
        mentor?: string;
        mentees?: string[];
        programs?: Array<{
            name: string;
            role: 'mentor' | 'mentee';
            period: string;
            outcomes: string[];
        }>;
    };
}

export interface EmployeeProfile {
    id: string;
    personalInfo: PersonalInfo;
    employmentDetails: EmploymentDetails;
    skills: SkillCategory;
    performance: Performance;
    development: Development;
    metadata: {
        lastUpdated: string;
        updatedBy: string;
        version: number;
        changelog?: Array<{
            date: string;
            updatedBy: string;
            changes: string[];
        }>;
    };
}