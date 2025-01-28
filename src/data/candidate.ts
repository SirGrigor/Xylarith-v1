export interface Education {
    degree: string;
    institution: string;
    graduationYear: number;
    relevantCourses?: string[];
}

export interface KeywordMatch {
    keyword: string;
    frequency: number;
    context: string;
}

export interface CVAnalysis {
    keywordMatches: KeywordMatch[];
    recommendedSkills: string[];
    missingKeywords: string[];
}

export interface Candidate {
    id: string;
    name: string;
    email: string;
    phone: string;
    updatedAt: string;
    education: Education[];
    experience: {
        title: string;
        company: string;
        startDate: string;
        endDate?: string;
        description: string[];
    }[];
    skills: string[];
    aiScore: {
        technicalSkills: number;
        communicationSkills: number;
        leadershipPotential: number;
        jobFitScore: number;
    };
    cvAnalysis: CVAnalysis;
}

// mockData.ts
export const mockCandidate: Candidate = {
    id: "cand-001",
    name: "Alex Thompson",
    email: "alex.thompson@email.com",
    phone: "+1 (555) 123-4567",
    updatedAt: "2025-01-15T08:30:00Z",
    education: [
        {
            degree: "Master of Computer Science",
            institution: "Stanford University",
            graduationYear: 2023,
            relevantCourses: [
                "Advanced Machine Learning",
                "Distributed Systems",
                "Cloud Computing",
                "Software Engineering Practices"
            ]
        },
        {
            degree: "Bachelor of Science in Computer Engineering",
            institution: "MIT",
            graduationYear: 2021,
            relevantCourses: [
                "Data Structures",
                "Algorithms",
                "Computer Architecture",
                "Operating Systems"
            ]
        }
    ],
    experience: [
        {
            title: "Senior Software Engineer",
            company: "TechCorp Inc.",
            startDate: "2023-06",
            endDate: "2024-12",
            description: [
                "Led a team of 5 developers in building a microservices architecture",
                "Improved system performance by 40% through optimization",
                "Implemented CI/CD pipeline reducing deployment time by 60%"
            ]
        },
        {
            title: "Software Developer",
            company: "StartupXYZ",
            startDate: "2021-07",
            endDate: "2023-05",
            description: [
                "Developed full-stack applications using React and Node.js",
                "Implemented REST APIs serving 1M+ requests daily",
                "Mentored junior developers and conducted code reviews"
            ]
        }
    ],
    skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "AWS",
        "Docker",
        "Kubernetes"
    ],
    aiScore: {
        technicalSkills: 92,
        communicationSkills: 85,
        leadershipPotential: 78,
        jobFitScore: 88
    },
    cvAnalysis: {
        keywordMatches: [
            {
                keyword: "React",
                frequency: 3,
                context: "Developed full-stack applications using React and Node.js"
            },
            {
                keyword: "microservices",
                frequency: 2,
                context: "Led a team of 5 developers in building a microservices architecture"
            },
            {
                keyword: "CI/CD",
                frequency: 1,
                context: "Implemented CI/CD pipeline reducing deployment time by 60%"
            }
        ],
        recommendedSkills: [
            "GraphQL",
            "MongoDB",
            "System Design",
            "Agile Methodologies",
            "Test-Driven Development"
        ],
        missingKeywords: [
            "REST API Security",
            "Performance Optimization",
            "Scalability Patterns"
        ]
    }
};