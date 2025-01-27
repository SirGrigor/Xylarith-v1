import { EmployeeProfile } from "@/types/employeeProfile.ts";

const generateAvatarUrl = (firstName: string, lastName: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      `${firstName} ${lastName}`
  )}&background=random&size=256&font-size=0.35&length=2&bold=true&color=ffffff`;
};

export const mockEmployeeData: EmployeeProfile[] = [
  {
    id: "emp001",
    personalInfo: {
      firstName: "Sarah",
      lastName: "Chen",
      email: "sarah.chen@company.com",
      phone: "+1 (555) 234-5678",
      avatar: generateAvatarUrl("Sarah", "Chen"),
      dateOfBirth: "1990-07-22",
      address: {
        street: "456 Innovation Drive",
        city: "Seattle",
        state: "WA",
        country: "USA",
        zipCode: "98101"
      },
      emergencyContact: {
        name: "Michael Chen",
        relationship: "Brother",
        phone: "+1 (555) 876-5432",
        email: "michael.chen@email.com"
      }
    },
    employmentDetails: {
      id: "emp001",
      title: "Data Science Lead",
      department: "Analytics",
      startDate: "2019-03-01",
      reportsTo: "emp033",
      status: "active",
      contractType: "fullTime",
      location: "Seattle",
      team: "Machine Learning",
      compensation: {
        salary: 145000,
        currency: "USD",
        effectiveDate: "2024-01-01",
        reviewDate: "2025-01-01"
      },
      workSchedule: {
        timeZone: "America/Los_Angeles",
        standardHours: 40,
        flexibleHours: true
      }
    },
    skills: {
      technical: [
        {
          name: "Machine Learning",
          level: 4.8,
          category: "technical",
          details: {
            experience: "6 years",
            description: "Advanced ML model development and deployment",
            proficiencyLevel: "expert",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        },
        {
          name: "Python",
          level: 4.6,
          category: "technical",
          details: {
            experience: "8 years",
            description: "Advanced Python development and ML frameworks",
            proficiencyLevel: "expert",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        }
      ],
      soft: [
        {
          name: "Leadership",
          level: 3.8,
          category: "soft",
          details: {
            description: "Strong team leadership and mentoring abilities",
            proficiencyLevel: "advanced",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        }
      ],
      leadership: [
        {
          name: "Strategic Planning",
          level: 4.2,
          category: "leadership",
          details: {
            experience: "4 years",
            description: "Project strategy and resource planning",
            proficiencyLevel: "expert",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        }
      ],
      core: [
        {
          name: "Innovation",
          level: 4.6,
          category: "core",
          details: {
            description: "Driving technical innovation and research",
            proficiencyLevel: "expert",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        }
      ]
    },
    performance: {
      ratings: [
        {
          period: "2024-H2",
          score: 4.7,
          reviewer: "David Wilson",
          comments: "Outstanding technical innovation and team leadership",
          areas: []
        }
      ],
      goals: [
        {
          title: "ML Platform Scaling",
          description: "Scale ML infrastructure to support enterprise-wide deployment",
          status: "inProgress",
          dueDate: "2025-06-30"
        }
      ],
      achievements: []
    },
    development: {
      trainingCompleted: [
        {
          name: "Advanced Deep Learning",
          provider: "DeepLearning.AI",
          completionDate: "2024-10-20",
          score: 98
        }
      ],
      careerPath: {
        currentLevel: "Lead Data Scientist",
        targetRole: "Director of AI",
        timeline: "2026",
        requiredSkills: []
      }
    },
    metadata: {
      lastUpdated: "2025-01-26",
      updatedBy: "HR System",
      version: 1
    }
  },
  {
    id: "emp002",
    personalInfo: {
      firstName: "Marcus",
      lastName: "Rodriguez",
      email: "marcus.rodriguez@company.com",
      phone: "+1 (555) 345-6789",
      avatar: generateAvatarUrl("Marcus", "Rodriguez"),
      dateOfBirth: "1992-11-03",
      address: {
        street: "789 Product Lane",
        city: "Austin",
        state: "TX",
        country: "USA",
        zipCode: "78701"
      },
      emergencyContact: {
        name: "Elena Rodriguez",
        relationship: "Sister",
        phone: "+1 (555) 765-4321",
        email: "elena.rodriguez@email.com"
      }
    },
    employmentDetails: {
      id: "emp002",
      title: "Product Design Manager",
      department: "Design",
      startDate: "2021-06-15",
      reportsTo: "emp028",
      status: "active",
      contractType: "fullTime",
      location: "Austin",
      team: "User Experience",
      compensation: {
        salary: 135000,
        currency: "USD",
        effectiveDate: "2024-01-01",
        reviewDate: "2025-01-01"
      },
      workSchedule: {
        timeZone: "America/Chicago",
        standardHours: 40,
        flexibleHours: true
      }
    },
    skills: {
      technical: [
        {
          name: "UI/UX Design",
          level: 4.5,
          category: "technical",
          details: {
            experience: "7 years",
            description: "Advanced product design and user research",
            proficiencyLevel: "expert",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        },
        {
          name: "Figma",
          level: 4.7,
          category: "technical",
          details: {
            experience: "5 years",
            description: "Advanced design system and prototyping",
            proficiencyLevel: "expert",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        }
      ],
      soft: [
        {
          name: "Creativity",
          level: 4.9,
          category: "soft",
          details: {
            description: "Exceptional creative problem-solving abilities",
            proficiencyLevel: "expert",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        }
      ],
      leadership: [
        {
          name: "Design Leadership",
          level: 4.0,
          category: "leadership",
          details: {
            experience: "3 years",
            description: "Design team leadership and vision setting",
            proficiencyLevel: "advanced",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        }
      ],
      core: [
        {
          name: "User Empathy",
          level: 4.7,
          category: "core",
          details: {
            description: "Strong user-centered design approach",
            proficiencyLevel: "expert",
            lastAssessed: "2024-01-15",
            nextReview: "2024-07-15"
          }
        }
      ]
    },
    performance: {
      ratings: [
        {
          period: "2024-H2",
          score: 4.6,
          reviewer: "Amanda Lee",
          comments: "Exceptional design leadership and innovation",
          areas: []
        }
      ],
      goals: [
        {
          title: "Design System Evolution",
          description: "Lead the evolution of company-wide design system",
          status: "inProgress",
          dueDate: "2025-07-31"
        }
      ],
      achievements: []
    },
    development: {
      trainingCompleted: [
        {
          name: "Advanced Design Leadership",
          provider: "Design Leadership Academy",
          completionDate: "2024-11-30",
          score: 96
        }
      ],
      careerPath: {
        currentLevel: "Design Manager",
        targetRole: "Director of Design",
        timeline: "2026",
        requiredSkills: []
      }
    },
    metadata: {
      lastUpdated: "2025-01-26",
      updatedBy: "HR System",
      version: 1
    }
  }
];