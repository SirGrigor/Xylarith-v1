import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Progress} from "@/components/ui/progress.tsx";


interface FeedbackMetric {
    category: string;
    score: number;
    responses: number;
}

interface AnalyticsData {
    month: string;
    onboarding: number;
    offboarding: number;
    satisfaction: number;
}

// Mock data
const mockAnalyticsData: AnalyticsData[] = [
    { month: 'Jan', onboarding: 5, offboarding: 2, satisfaction: 4.2 },
    { month: 'Feb', onboarding: 7, offboarding: 3, satisfaction: 4.5 },
    { month: 'Mar', onboarding: 4, offboarding: 4, satisfaction: 4.1 },
    { month: 'Apr', onboarding: 6, offboarding: 2, satisfaction: 4.4 },
];

const mockFeedbackMetrics: FeedbackMetric[] = [
    { category: 'Work Environment', score: 4.2, responses: 156 },
    { category: 'Management', score: 4.0, responses: 145 },
    { category: 'Career Growth', score: 3.8, responses: 150 },
    { category: 'Benefits', score: 4.5, responses: 160 },
];

// Analytics Dashboard Component
export const AnalyticsDashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <h3 className="text-xl font-semibold">Employee Lifecycle Trends</h3>
                </CardHeader>
                <CardContent>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={mockAnalyticsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="onboarding" stroke="#4CAF50" />
                                <Line type="monotone" dataKey="offboarding" stroke="#f44336" />
                                <Line type="monotone" dataKey="satisfaction" stroke="#2196F3" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockFeedbackMetrics.map((metric) => (
                    <Card key={metric.category}>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-medium text-sm text-gray-500">{metric.category}</h4>
                                    <p className="text-2xl font-bold">{metric.score.toFixed(1)}</p>
                                </div>
                                <Badge variant="secondary">{metric.responses} responses</Badge>
                            </div>
                            <Progress
                                value={metric.score * 20}
                                className="mt-4"
                                indicatorClassName={metric.score > 4 ? "bg-green-500" : "bg-blue-500"}
                            />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

// Feedback Component
export const FeedbackDashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <h3 className="text-xl font-semibold">Recent Feedback</h3>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockFeedbackMetrics.map((metric) => (
                            <div key={metric.category} className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-medium">{metric.category}</h4>
                                    <span className="text-sm text-gray-500">{metric.responses} responses</span>
                                </div>
                                <Progress
                                    value={metric.score * 20}
                                    indicatorClassName={metric.score > 4 ? "bg-green-500" : "bg-blue-500"}
                                />
                                <p className="mt-2 text-sm text-gray-600">
                                    Average score: {metric.score.toFixed(1)} / 5.0
                                </p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

// Employee Lifecycle Component
export const EmployeeLifecycle: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'onboarding' | 'offboarding'>('onboarding');

    return (
        <div className="space-y-6">
            <div className="flex space-x-4">
                <button
                    className={`px-4 py-2 rounded-lg ${
                        activeTab === 'onboarding'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveTab('onboarding')}
                >
                    Onboarding
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${
                        activeTab === 'offboarding'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveTab('offboarding')}
                >
                    Offboarding
                </button>
            </div>

            <Card>
                <CardContent>
                    <div className="space-y-6">
                        {activeTab === 'onboarding' ? (
                            <>
                                <h3 className="text-lg font-semibold">New Employees</h3>
                                <div className="space-y-4">
                                    {/* Onboarding progress cards would go here */}
                                    <div className="p-4 border rounded-lg">
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <h4 className="font-medium">John Doe</h4>
                                                <p className="text-sm text-gray-500">Engineering</p>
                                            </div>
                                            <Badge>Week 1</Badge>
                                        </div>
                                        <Progress value={30} />
                                        <p className="mt-2 text-sm text-gray-600">6 of 20 tasks completed</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-lg font-semibold">Offboarding Employees</h3>
                                <div className="space-y-4">
                                    {/* Offboarding progress cards would go here */}
                                    <div className="p-4 border rounded-lg">
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <h4 className="font-medium">Jane Smith</h4>
                                                <p className="text-sm text-gray-500">Marketing</p>
                                            </div>
                                            <Badge variant="secondary">Exit: 2 weeks</Badge>
                                        </div>
                                        <Progress value={70} />
                                        <p className="mt-2 text-sm text-gray-600">7 of 10 tasks completed</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

// Main Dashboard Component
export const HRDashboard: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'lifecycle' | 'feedback' | 'analytics'>('lifecycle');

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex space-x-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg ${
                        activeSection === 'lifecycle'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveSection('lifecycle')}
                >
                    Employee Lifecycle
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${
                        activeSection === 'feedback'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveSection('feedback')}
                >
                    Feedback
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${
                        activeSection === 'analytics'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setActiveSection('analytics')}
                >
                    Analytics
                </button>
            </div>

            {activeSection === 'lifecycle' && <EmployeeLifecycle />}
            {activeSection === 'feedback' && <FeedbackDashboard />}
            {activeSection === 'analytics' && <AnalyticsDashboard />}
        </div>
    );
};

export default HRDashboard;