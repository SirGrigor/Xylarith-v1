export type SkillLevel = 'beginner' | 'intermediate' | 'expert';
export type CandidateStatus = 'new' | 'screening' | 'interview' | 'offer' | 'rejected' | 'hired';
export type Department = 'engineering' | 'design' | 'product' | 'marketing' | 'sales' | 'hr';
export type RemotePreference = 'remote' | 'hybrid' | 'onsite';
export type LanguageProficiency = 'basic' | 'intermediate' | 'fluent' | 'native';
export type InterviewType = 'screening' | 'technical' | 'cultural' | 'final';
export type NoteType = 'general' | 'interview' | 'important';

// Basic interfaces
export interface Skill {
    name: string;
    level: SkillLevel;
    yearsOfExperience: number;
}

export interface Education {
    degree: string;
    institution: string;
    graduationYear: number;
    gpa?: number;
    relevantCourses?: string[];
}

export interface WorkExperience {
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    achievements: string[];
    technologies: string[];
}

export interface Language {
    name: string;
    proficiency: LanguageProficiency;
}

// AI-related interfaces
export interface AiScore {
    skillMatch: number;
    experienceMatch: number;
    culturalFit: number;
    leadershipPotential: number;
    overallScore: number;
}

export interface KeywordMatch {
    keyword: string;
    frequency: number;
    context: string;
}

export interface CvAnalysis {
    keywordMatches: KeywordMatch[];
    missingKeywords: string[];
    recommendedSkills: string[];
    educationRelevance: number;
    experienceRelevance: number;
}

// Application-related interfaces
export interface Application {
    jobId: string;
    applicationDate: string;
    status: string;
}

export interface Interview {
    date: string;
    type: InterviewType;
    feedback?: string;
    score?: number;
}

export interface Note {
    id: string;
    date: string;
    author: string;
    content: string;
    type: NoteType;
}

export interface Location {
    city: string;
    country: string;
    remotePreference: RemotePreference;
}

// Main interfaces
export interface Candidate {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: Location;
    department: Department;
    desiredPosition: string;
    skills: Skill[];
    education: Education[];
    workExperience: WorkExperience[];
    languages: Language[];
    status: CandidateStatus;
    aiScore: AiScore;
    cvAnalysis: CvAnalysis;
    applications: Application[];
    interviews: Interview[];
    notes: Note[];
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

export interface SearchFilters {
    departments: Department[];
    skills: string[];
    experienceYears: {
        min: number;
        max: number;
    };
    locations: string[];
    remotePreference?: RemotePreference;
    status: CandidateStatus[];
    minScore: number;
}