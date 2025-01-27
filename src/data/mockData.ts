import { 
  SkillCategory, 
  Employee, 
  AnalyticsPrediction, 
  TeamEvent, 
  ResourceForecast,
  PerformanceGoal,
  OnboardingTask,
  PerformanceReview
} from '../types/hr';

export const skillCategories: SkillCategory[] = [
  {
    id: '1',
    name: 'Technical',
    description: 'Programming and technical skills',
    color: '#3B82F6'
  },
  {
    id: '2',
    name: 'Leadership',
    description: 'Team management and leadership',
    color: '#10B981'
  },
  {
    id: '3',
    name: 'Communication',
    description: 'Written and verbal communication',
    color: '#8B5CF6'
  },
  {
    id: '4',
    name: 'Problem Solving',
    description: 'Analytical and problem-solving abilities',
    color: '#F59E0B'
  },
  {
    id: '5',
    name: 'Project Management',
    description: 'Project planning and execution',
    color: '#EC4899'
  },
  {
    id: '6',
    name: 'Domain Knowledge',
    description: 'Industry and domain expertise',
    color: '#6366F1'
  },
  {
    id: '7',
    name: 'Tools & Software',
    description: 'Proficiency in relevant tools',
    color: '#14B8A6'
  },
  {
    id: '8',
    name: 'Soft Skills',
    description: 'Interpersonal and behavioral skills',
    color: '#F97316'
  }
];

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'Senior Developer',
    department: 'Engineering',
    email: 'alex.t@company.com',
    startDate: '2022-01-15',
    allocation: 85,
    skills: [
      {
        id: '1',
        name: 'React',
        category: skillCategories[0],
        level: 4,
        endorsements: [],
        lastAssessed: '2023-12-01'
      },
      {
        id: '2',
        name: 'Team Leadership',
        category: skillCategories[1],
        level: 3,
        endorsements: [],
        lastAssessed: '2023-11-15'
      }
    ],
    certifications: [
      {
        id: '1',
        name: 'AWS Solutions Architect',
        issuer: 'Amazon',
        dateAcquired: '2023-06-15',
        status: 'active'
      }
    ]
  }
];

export const mockPerformanceGoals: PerformanceGoal[] = [
  {
    id: '1',
    employeeId: '1',
    title: 'Master React Advanced Patterns',
    description: 'Complete advanced React training and implement in projects',
    category: 'Technical',
    status: 'In Progress',
    progress: 65,
    startDate: '2024-01-01',
    dueDate: '2024-06-30',
    metrics: [
      'Complete 3 advanced React courses',
      'Implement 2 complex features using advanced patterns',
      'Share knowledge in 2 team presentations'
    ]
  }
];

export const mockOnboardingTasks: OnboardingTask[] = [
  {
    id: '1',
    title: 'Complete HR Documentation',
    description: 'Submit all required HR documents and forms',
    category: 'Documentation',
    status: 'Completed',
    assignee: 'HR Team',
    dueDate: '2024-02-15',
    completedDate: '2024-02-14'
  }
];

export const mockPerformanceReviews: PerformanceReview[] = [
  {
    id: '1',
    employeeId: '1',
    reviewerId: '2',
    period: '2023-H2',
    status: 'Completed',
    date: '2023-12-15',
    scores: [
      {
        category: 'Technical Skills',
        score: 4.5,
        feedback: 'Excellent technical knowledge and problem-solving abilities'
      }
    ],
    summary: 'Strong overall performance with notable technical excellence',
    goals: ['1', '2']
  }
];

export const mockPredictions: AnalyticsPrediction[] = [
  {
    id: '1',
    category: 'attrition',
    metric: 'Team Attrition Rate',
    currentValue: 5.2,
    predictedValue: 7.8,
    confidence: 85,
    trend: 'up',
    impactLevel: 'high',
    timeframe: 'Next 6 months'
  }
];

export const mockTeamEvents: TeamEvent[] = [
  {
    id: '1',
    title: 'Annual Performance Review',
    type: 'review',
    start: '2024-03-15T10:00:00',
    end: '2024-03-15T11:30:00',
    employeeId: '1',
    description: 'Annual performance review with team lead',
    status: 'pending',
    priority: 'high'
  }
];

export const mockResourceForecast: ResourceForecast[] = [
  {
    period: 'Mar 2024',
    demand: 120,
    capacity: 100,
    gap: -20,
    risk: 'high'
  }
];

export const generateMockAllocationData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map(month => ({
    name: month,
    planned: Math.floor(Math.random() * 30) + 70,
    actual: Math.floor(Math.random() * 30) + 70,
  }));
};
