interface Task {
    id: string;
    name: string;
    completed: boolean;
    date: string;
}

interface Stage {
    id: string;
    title: string;
    tasks: Task[];
}

interface Employee {
    id: string;
    name: string;
    position: string;
    department: string;
    targetDate: string;
}

interface ProcessStageProps {
    stage: Stage;
    isLast: boolean;
}

interface EmployeeProcessProps {
    type: 'onboarding' | 'offboarding';
    employee: Employee;
}

const onboardingStages: Stage[] = [
    {
        id: 'pre-onboarding',
        title: 'Pre-Onboarding',
        tasks: [
            { id: '1', name: 'Offer Letter Signing', completed: true, date: '2024-01-24' },
            { id: '2', name: 'Background Check', completed: true, date: '2024-01-25' },
            { id: '3', name: 'Documentation Submission', completed: true, date: '2024-01-26' }
        ]
    },
    {
        id: 'first-day',
        title: 'First Day Setup',
        tasks: [
            { id: '4', name: 'Workspace Setup', completed: true, date: '2024-02-01' },
            { id: '5', name: 'IT System Access', completed: true, date: '2024-02-01' },
            { id: '6', name: 'Security Badge', completed: false, date: '2024-02-01' }
        ]
    },
    {
        id: 'first-week',
        title: 'First Week',
        tasks: [
            { id: '7', name: 'HR Orientation', completed: false, date: '2024-02-02' },
            { id: '8', name: 'Team Introduction', completed: false, date: '2024-02-03' },
            { id: '9', name: 'Project Overview', completed: false, date: '2024-02-05' }
        ]
    },
    {
        id: 'training',
        title: 'Training & Integration',
        tasks: [
            { id: '10', name: 'Company Policies Training', completed: false, date: '2024-02-10' },
            { id: '11', name: 'Technical Onboarding', completed: false, date: '2024-02-15' },
            { id: '12', name: 'Initial Project Assignment', completed: false, date: '2024-02-20' }
        ]
    }
];

const offboardingStages: Stage[] = [
    {
        id: 'notice-period',
        title: 'Notice Period',
        tasks: [
            { id: '1', name: 'Resignation Acceptance', completed: true, date: '2024-02-01' },
            { id: '2', name: 'Exit Timeline Planning', completed: true, date: '2024-02-02' },
            { id: '3', name: 'Project Handover Plan', completed: true, date: '2024-02-03' }
        ]
    },
    {
        id: 'knowledge-transfer',
        title: 'Knowledge Transfer',
        tasks: [
            { id: '4', name: 'Documentation Update', completed: true, date: '2024-02-10' },
            { id: '5', name: 'Team Training Sessions', completed: false, date: '2024-02-15' },
            { id: '6', name: 'Client Handover', completed: false, date: '2024-02-20' }
        ]
    },
    {
        id: 'exit-process',
        title: 'Exit Process',
        tasks: [
            { id: '7', name: 'Exit Interview', completed: false, date: '2024-02-25' },
            { id: '8', name: 'Asset Return', completed: false, date: '2024-02-27' },
            { id: '9', name: 'Account Deactivation', completed: false, date: '2024-02-28' }
        ]
    }
];