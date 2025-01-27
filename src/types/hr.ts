// Core Types
export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  avatar?: string;
  startDate: string;
  allocation: number;
  skills: Skill[];
  certifications: Certification[];
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  endorsements: Endorsement[];
  lastAssessed: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateAcquired: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'pending';
}

export interface Endorsement {
  id: string;
  endorserId: string;
  skillId: string;
  date: string;
  note?: string;
}

export interface Allocation {
  employeeId: string;
  projectId: string;
  percentage: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'planned' | 'completed';
}

export interface PerformanceGoal {
  id: string;
  employeeId: string;
  title: string;
  description: string;
  category: 'Professional' | 'Personal' | 'Technical' | 'Leadership';
  status: 'Not Started' | 'In Progress' | 'Completed' | 'Overdue';
  progress: number;
  startDate: string;
  dueDate: string;
  completedDate?: string;
  metrics?: string[];
}

export interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  category: 'Documentation' | 'Training' | 'Setup' | 'Introduction';
  status: 'Pending' | 'In Progress' | 'Completed';
  assignee: string;
  dueDate: string;
  completedDate?: string;
  dependencies?: string[];
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  reviewerId: string;
  period: string;
  status: 'Scheduled' | 'In Progress' | 'Completed';
  date: string;
  scores: {
    category: string;
    score: number;
    feedback: string;
  }[];
  summary: string;
  goals: string[];
}

export interface AnalyticsPrediction {
  id: string;
  category: 'attrition' | 'performance' | 'capacity' | 'skills';
  metric: string;
  currentValue: number;
  predictedValue: number;
  confidence: number;
  trend: 'up' | 'down' | 'stable';
  impactLevel: 'high' | 'medium' | 'low';
  timeframe: string;
}

export interface TeamEvent {
  id: string;
  title: string;
  type: 'leave' | 'training' | 'review' | 'meeting' | 'deadline';
  start: string;
  end: string;
  employeeId: string;
  description?: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  priority: 'high' | 'medium' | 'low';
}

export interface ResourceForecast {
  period: string;
  demand: number;
  capacity: number;
  gap: number;
  risk: 'high' | 'medium' | 'low';
}
