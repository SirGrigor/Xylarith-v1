import {Candidate, CandidateStatus, Department, InterviewType, RemotePreference, Skill} from "@/types/candidate.ts";


const CITIES = [
    { city: 'San Francisco', country: 'USA' },
    { city: 'New York', country: 'USA' },
    { city: 'London', country: 'UK' },
    { city: 'Berlin', country: 'Germany' },
    { city: 'Toronto', country: 'Canada' }
];

const REMOTE_PREFERENCES: RemotePreference[] = ['remote', 'hybrid', 'onsite'];
const INTERVIEW_TYPES: InterviewType[] = ['screening', 'technical', 'cultural', 'final'];

const generateMockSkills = (department: Department): Skill[] => {
    const skillSets: Record<Department, Skill[]> = {
        engineering: [
            { name: 'React', level: 'expert', yearsOfExperience: 4 },
            { name: 'TypeScript', level: 'expert', yearsOfExperience: 3 },
            { name: 'Node.js', level: 'intermediate', yearsOfExperience: 2 },
            { name: 'Python', level: 'intermediate', yearsOfExperience: 3 },
            { name: 'AWS', level: 'beginner', yearsOfExperience: 1 }
        ],
        design: [
            { name: 'Figma', level: 'expert', yearsOfExperience: 3 },
            { name: 'UI/UX', level: 'expert', yearsOfExperience: 4 },
            { name: 'Adobe Creative Suite', level: 'intermediate', yearsOfExperience: 5 },
            { name: 'Sketch', level: 'expert', yearsOfExperience: 3 },
            { name: 'Prototyping', level: 'intermediate', yearsOfExperience: 4 }
        ],
        product: [
            { name: 'Product Strategy', level: 'expert', yearsOfExperience: 5 },
            { name: 'Agile', level: 'expert', yearsOfExperience: 4 },
            { name: 'User Research', level: 'intermediate', yearsOfExperience: 3 },
            { name: 'Data Analysis', level: 'intermediate', yearsOfExperience: 2 },
            { name: 'Product Analytics', level: 'expert', yearsOfExperience: 4 }
        ],
        marketing: [
            { name: 'Digital Marketing', level: 'expert', yearsOfExperience: 4 },
            { name: 'Content Strategy', level: 'expert', yearsOfExperience: 3 },
            { name: 'SEO', level: 'intermediate', yearsOfExperience: 3 },
            { name: 'Social Media', level: 'expert', yearsOfExperience: 5 },
            { name: 'Analytics', level: 'intermediate', yearsOfExperience: 2 }
        ],
        sales: [
            { name: 'Enterprise Sales', level: 'expert', yearsOfExperience: 5 },
            { name: 'CRM', level: 'expert', yearsOfExperience: 4 },
            { name: 'Negotiation', level: 'expert', yearsOfExperience: 6 },
            { name: 'Sales Analytics', level: 'intermediate', yearsOfExperience: 3 },
            { name: 'Account Management', level: 'expert', yearsOfExperience: 4 }
        ],
        hr: [
            { name: 'Recruitment', level: 'expert', yearsOfExperience: 4 },
            { name: 'Employee Relations', level: 'expert', yearsOfExperience: 5 },
            { name: 'HR Analytics', level: 'intermediate', yearsOfExperience: 2 },
            { name: 'Training & Development', level: 'expert', yearsOfExperience: 3 },
            { name: 'HRIS', level: 'intermediate', yearsOfExperience: 2 }
        ]
    };

    // Return 3-5 random skills from the department's skill set
    const departmentSkills = skillSets[department];
    const numSkills = Math.floor(Math.random() * 3) + 3; // 3-5 skills
    return departmentSkills
        .sort(() => Math.random() - 0.5)
        .slice(0, numSkills);
};

const generateWorkExperience = (department: Department) => {
    const companies = [
        'Tech Corp', 'Innovation Labs', 'Future Systems',
        'Digital Solutions', 'Creative Mind', 'Global Tech'
    ];

    const achievements: Record<Department, string[]> = {
        engineering: [
            'Led development of microservices architecture',
            'Improved application performance by 40%',
            'Implemented CI/CD pipeline',
            'Reduced bug count by 60%',
            'Mentored junior developers'
        ],
        design: [
            'Redesigned core product interface',
            'Increased user engagement by 35%',
            'Created design system',
            'Led user research initiatives',
            'Improved accessibility compliance'
        ],
        product: [
            'Launched 3 major product features',
            'Increased user retention by 25%',
            'Led cross-functional team of 8',
            'Defined product strategy',
            'Implemented agile methodologies'
        ],
        marketing: [
            'Increased lead generation by 45%',
            'Launched successful email campaign',
            'Improved conversion rate by 30%',
            'Managed $1M marketing budget',
            'Developed content strategy'
        ],
        sales: [
            'Exceeded sales targets by 50%',
            'Built enterprise client relationships',
            'Managed team of 5 sales representatives',
            'Implemented new CRM system',
            'Developed sales strategy'
        ],
        hr: [
            'Reduced hiring time by 40%',
            'Implemented new HRIS system',
            'Developed training programs',
            'Improved employee satisfaction by 25%',
            'Led diversity initiatives'
        ]
    };

    const startDate = new Date(Date.now() - (Math.random() * 5 + 2) * 365 * 24 * 60 * 60 * 1000);
    const endDate = new Date(startDate.getTime() + Math.random() * 4 * 365 * 24 * 60 * 60 * 1000);
    const isCurrent = Math.random() > 0.7;

    return {
        company: companies[Math.floor(Math.random() * companies.length)],
        position: `Senior ${department.charAt(0).toUpperCase() + department.slice(1)} ${
            Math.random() > 0.5 ? 'Specialist' : 'Manager'
        }`,
        startDate: startDate.toISOString().split('T')[0],
        endDate: isCurrent ? undefined : endDate.toISOString().split('T')[0],
        current: isCurrent,
        achievements: achievements[department]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3),
        technologies: generateMockSkills(department).map(skill => skill.name)
    };
};

const generateMockCandidates = (count = 20): Candidate[] => {
    const mockCandidates: Candidate[] = [];
    const departments: Department[] = ['engineering', 'design', 'product', 'marketing', 'sales', 'hr'];
    const statuses: CandidateStatus[] = ['new', 'screening', 'interview', 'offer', 'rejected', 'hired'];

    for (let i = 1; i <= count; i++) {
        const department = departments[Math.floor(Math.random() * departments.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const location = CITIES[Math.floor(Math.random() * CITIES.length)];
        const remotePreference = REMOTE_PREFERENCES[Math.floor(Math.random() * REMOTE_PREFERENCES.length)];

        const candidate: Candidate = {
            id: `CAND-${i.toString().padStart(4, '0')}`,
            firstName: `John${i}`,
            lastName: `Doe${i}`,
            email: `john.doe${i}@example.com`,
            phone: `+1 (555) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
            location: {
                ...location,
                remotePreference
            },
            department,
            desiredPosition: `Senior ${department.charAt(0).toUpperCase() + department.slice(1)} Specialist`,
            skills: generateMockSkills(department),
            education: [
                {
                    degree: 'Bachelor of Science',
                    institution: 'Stanford University',
                    graduationYear: 2018 - Math.floor(Math.random() * 5),
                    gpa: 3 + Math.random(),
                    relevantCourses: ['Data Structures', 'Algorithms', 'Software Engineering']
                }
            ],
            workExperience: [generateWorkExperience(department)],
            languages: [
                { name: 'English', proficiency: 'native' },
                { name: 'Spanish', proficiency: 'intermediate' }
            ],
            status,
            aiScore: {
                skillMatch: Math.floor(Math.random() * 30 + 70),
                experienceMatch: Math.floor(Math.random() * 30 + 70),
                culturalFit: Math.floor(Math.random() * 30 + 70),
                leadershipPotential: Math.floor(Math.random() * 30 + 70),
                overallScore: Math.floor(Math.random() * 30 + 70)
            },
            cvAnalysis: {
                keywordMatches: [
                    {
                        keyword: 'leadership',
                        frequency: Math.floor(Math.random() * 5 + 1),
                        context: 'Led team developments and initiatives'
                    }
                ],
                missingKeywords: ['cloud computing', 'AWS'],
                recommendedSkills: ['Docker', 'Kubernetes'],
                educationRelevance: Math.floor(Math.random() * 20 + 80),
                experienceRelevance: Math.floor(Math.random() * 20 + 80)
            },
            applications: [
                {
                    jobId: `JOB-${Math.floor(Math.random() * 1000)}`,
                    applicationDate: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
                    status: 'in_review'
                }
            ],
            interviews: [
                {
                    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
                    type: INTERVIEW_TYPES[Math.floor(Math.random() * INTERVIEW_TYPES.length)],
                    feedback: 'Good communication skills, shows potential',
                    score: Math.floor(Math.random() * 20 + 80)
                }
            ],
            notes: [
                {
                    id: `NOTE-${i}-1`,
                    date: new Date().toISOString(),
                    author: 'HR Manager',
                    content: 'Strong candidate with relevant experience',
                    type: 'general'
                }
            ],
            tags: ['experienced', 'leadership', department],
            createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date().toISOString()
        };

        mockCandidates.push(candidate);
    }

    return mockCandidates;
};

export { generateMockCandidates, generateMockSkills, generateWorkExperience };