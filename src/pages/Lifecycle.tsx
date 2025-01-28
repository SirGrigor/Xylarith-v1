import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Types
interface Task {
    id: string;
    name: string;
    completed: boolean;
    date: string;
    description?: string;
}

interface Stage {
    id: string;
    title: string;
    description?: string;
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
    stages: Stage[];
}

// Color palette
const colors = {
    background: 'bg-[#0B1120]',
    cardBg: 'bg-[#1A1F2E]',
    primary: 'bg-[#3B82F6]',
    secondary: 'bg-[#374151]',
    success: 'bg-green-500',
    text: {
        primary: 'text-white',
        secondary: 'text-gray-400',
        muted: 'text-gray-500'
    },
    border: 'border-[#2D3748]'
};

// Stage data
const onboardingStages: Stage[] = [
    {
        id: 'pre-onboarding',
        title: 'Pre-Onboarding',
        description: 'Complete pre-arrival documentation and setup',
        tasks: [
            { id: '1', name: 'Offer Letter Signing', completed: true, date: '2024-01-24' },
            { id: '2', name: 'Background Check', completed: true, date: '2024-01-25' },
            { id: '3', name: 'Documentation Submission', completed: true, date: '2024-01-26' }
        ]
    },
    {
        id: 'first-day',
        title: 'First Day Setup',
        description: 'Initial workspace and system setup',
        tasks: [
            { id: '4', name: 'Workspace Setup', completed: true, date: '2024-02-01' },
            { id: '5', name: 'IT System Access', completed: true, date: '2024-02-01' },
            { id: '6', name: 'Security Badge', completed: false, date: '2024-02-01' }
        ]
    },
    {
        id: 'first-week',
        title: 'First Week',
        description: 'Orientation and team integration',
        tasks: [
            { id: '7', name: 'HR Orientation', completed: false, date: '2024-02-02' },
            { id: '8', name: 'Team Introduction', completed: false, date: '2024-02-03' },
            { id: '9', name: 'Project Overview', completed: false, date: '2024-02-05' }
        ]
    },
    {
        id: 'training',
        title: 'Training & Integration',
        description: 'Complete required training and project setup',
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
        description: 'Initial offboarding planning',
        tasks: [
            { id: '1', name: 'Resignation Acceptance', completed: true, date: '2024-02-01' },
            { id: '2', name: 'Exit Timeline Planning', completed: true, date: '2024-02-02' },
            { id: '3', name: 'Project Handover Plan', completed: true, date: '2024-02-03' }
        ]
    },
    {
        id: 'knowledge-transfer',
        title: 'Knowledge Transfer',
        description: 'Documentation and training handover',
        tasks: [
            { id: '4', name: 'Documentation Update', completed: true, date: '2024-02-10' },
            { id: '5', name: 'Team Training Sessions', completed: false, date: '2024-02-15' },
            { id: '6', name: 'Client Handover', completed: false, date: '2024-02-20' }
        ]
    },
    {
        id: 'exit-process',
        title: 'Exit Process',
        description: 'Final exit procedures',
        tasks: [
            { id: '7', name: 'Exit Interview', completed: false, date: '2024-02-25' },
            { id: '8', name: 'Asset Return', completed: false, date: '2024-02-27' },
            { id: '9', name: 'Account Deactivation', completed: false, date: '2024-02-28' }
        ]
    }
];

// Mock data
const mockEmployees: Employee[] = [
    {
        id: '1',
        name: 'Sarah Chen',
        position: 'Frontend Developer',
        department: 'Engineering',
        targetDate: '2024-03-01'
    },
    {
        id: '2',
        name: 'James Wilson',
        position: 'Account Executive',
        department: 'Sales',
        targetDate: '2024-02-28'
    }
];

const ProcessStage: React.FC<ProcessStageProps> = ({ stage, isLast }) => {
    const completedTasks = stage.tasks.filter(task => task.completed).length;
    const progress = (completedTasks / stage.tasks.length) * 100;

    return (
        <div className="flex-1 min-w-[250px]">
            <div className="relative">
                <div className={`${colors.cardBg} p-4 rounded-lg ${colors.border} border`}>
                    <div className="mb-3">
                        <h4 className={`${colors.text.primary} font-medium`}>{stage.title}</h4>
                        {stage.description && (
                            <p className={`text-sm ${colors.text.muted} mt-1`}>{stage.description}</p>
                        )}
                        <div className="mt-2">
                            <Progress
                                value={progress}
                                className="h-1.5"
                                indicatorClassName={progress === 100 ? 'bg-green-500' : 'bg-blue-500'}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        {stage.tasks.map(task => (
                            <div key={task.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                        task.completed ? 'bg-green-500' : 'bg-gray-500'
                                    }`} />
                                    <span className={`text-sm ${colors.text.secondary}`}>
                                        {task.name}
                                    </span>
                                </div>
                                <span className={`text-xs ${colors.text.muted}`}>
                                    {task.completed ? 'Completed' : `Due ${new Date(task.date).toLocaleDateString()}`}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {!isLast && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-0.5 bg-gray-700" />
                    </div>
                )}
            </div>
        </div>
    );
};

const EmployeeProcess: React.FC<EmployeeProcessProps> = ({ type, employee, stages }) => {
    return (
        <Card className={`${colors.cardBg} ${colors.border} border mb-4`}>
            <CardContent className="py-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full ${colors.secondary} flex items-center justify-center`}>
                            <span className={colors.text.primary}>
                                {employee.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        <div>
                            <h3 className={`${colors.text.primary} font-medium`}>{employee.name}</h3>
                            <p className={`text-sm ${colors.text.muted}`}>
                                {employee.position} • {employee.department}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Badge className={type === 'onboarding' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Badge>
                        <span className={`text-sm ${colors.text.muted}`}>
                            Target: {new Date(employee.targetDate).toLocaleDateString()}
                        </span>
                    </div>
                </div>
                <div className="flex space-x-8 overflow-x-auto pb-2">
                    {stages.map((stage, index) => (
                        <ProcessStage
                            key={stage.id}
                            stage={stage}
                            isLast={index === stages.length - 1}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export const Lifecycle: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'onboarding' | 'offboarding'>('all');

    return (
        <div className={`space-y-6 ${colors.background} min-h-screen p-6`}>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className={`text-2xl font-bold ${colors.text.primary}`}>Employee Lifecycle</h1>
                    <p className={colors.text.muted}>Track employee onboarding and offboarding progress</p>
                </div>
                <div className="flex space-x-2">
                    {(['all', 'onboarding', 'offboarding'] as const).map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-3 py-1.5 rounded-lg text-sm ${
                                filter === type
                                    ? 'bg-blue-500 text-white'
                                    : `${colors.secondary} ${colors.text.secondary} hover:bg-gray-700`
                            }`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                {filter !== 'offboarding' && (
                    <EmployeeProcess
                        type="onboarding"
                        employee={mockEmployees[0]}
                        stages={onboardingStages}
                    />
                )}
                {filter !== 'onboarding' && (
                    <EmployeeProcess
                        type="offboarding"
                        employee={mockEmployees[1]}
                        stages={offboardingStages}
                    />
                )}
            </div>
        </div>
    );
};

export default Lifecycle;