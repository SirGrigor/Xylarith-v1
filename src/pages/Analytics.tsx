import { FC, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import {
    FileText,
    MessageCircle,
    PieChart,
    Users,
    TrendingUp,
    Clock,
    Target,
    Briefcase,
    Code,
    BarChart2, Brain
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as ReChartsPie, Pie, Cell } from 'recharts';
import { generateMockCandidates } from '@/data/candidateMock.ts';
import { AIScoring } from "@/components/analytics/AIScoring.tsx";
import { CandidateSearch } from "@/components/analytics/CandidateSearch.tsx";
import { Candidate } from "@/types/candidate";
import CVAnalysis from "@/components/analytics/CVAnalysis.tsx";
import FeedbackAnalytics from "@/components/analytics/FeedbackAnalytics.tsx";

const mockCandidates = generateMockCandidates(20);

// Analytics Dashboard Card Component
const AnalyticsCard: FC<{
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    trend?: string;
}> = ({title, value, icon, trend}) => (
    <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
                {icon}
                <span className="text-sm text-gray-400">{title}</span>
            </div>
            <div className="text-right">
                <div className="text-2xl font-bold text-gray-100">{value}</div>
                {trend && (
                    <div className="flex items-center text-sm">
                        <TrendingUp size={14} className="text-green-400 mr-1" />
                        <span className="text-green-400">{trend}</span>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export const Analytics: FC = () => {
    const location = useLocation();
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate>(mockCandidates[0]);

    // Mock data for visualizations
    const hiringTrendData = [
        { month: 'Jan', candidates: 45, interviews: 28, offers: 12 },
        { month: 'Feb', candidates: 52, interviews: 32, offers: 15 },
        { month: 'Mar', candidates: 58, interviews: 35, offers: 18 },
        { month: 'Apr', candidates: 63, interviews: 40, offers: 22 },
        { month: 'May', candidates: 70, interviews: 45, offers: 25 },
        { month: 'Jun', candidates: 75, interviews: 48, offers: 28 },
    ];

    const skillDistributionData = [
        { name: 'Frontend', value: 35 },
        { name: 'Backend', value: 30 },
        { name: 'DevOps', value: 15 },
        { name: 'Data Science', value: 20 },
    ];

    const navLinks = [
        {
            path: "/app/analytics",
            label: "Overview",
            icon: <Brain size={20} className="text-blue-400" />,
        },
        {
            path: "/app/analytics/candidates",
            label: "Candidates",
            icon: <Users size={20}/>,
        },
        {
            path: "/app/analytics/cv-analysis",
            label: "CV Analysis",
            icon: <FileText size={20}/>,
        },
        {
            path: "/app/analytics/scoring",
            label: "AI Scoring",
            icon: <PieChart size={20}/>,
        },
        {
            path: "/app/analytics/feedback",
            label: "Feedback",
            icon: <MessageCircle size={20}/>,
        }
    ];

    // Enhanced Overview Analytics Component
    const OverviewAnalytics = () => (
        <div className="space-y-6">
            {/* Top Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <AnalyticsCard
                    title="Total Candidates"
                    value={mockCandidates.length}
                    icon={<Users className="text-blue-400" size={20} />}
                    trend="+12% this month"
                />
                <AnalyticsCard
                    title="Average Time to Hire"
                    value="18 days"
                    icon={<Clock className="text-purple-400" size={20} />}
                    trend="-3 days"
                />
                <AnalyticsCard
                    title="Success Rate"
                    value={`${Math.round(mockCandidates.reduce((acc, curr) => acc + curr.aiScore.overallScore, 0) / mockCandidates.length)}%`}
                    icon={<Target className="text-green-400" size={20} />}
                    trend="+5% this month"
                />
                <AnalyticsCard
                    title="Active Interviews"
                    value={mockCandidates.filter(c => c.status === 'interview').length}
                    icon={<Briefcase className="text-yellow-400" size={20} />}
                />
            </div>

            {/* Hiring Funnel Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hiring Trends Chart */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-100">Hiring Pipeline Trends</h2>
                        <BarChart2 className="text-blue-400" size={20} />
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={hiringTrendData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="month" stroke="#9CA3AF" />
                                <YAxis stroke="#9CA3AF" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1F2937',
                                        border: '1px solid #374151',
                                        borderRadius: '0.5rem'
                                    }}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="candidates" stroke="#3B82F6" strokeWidth={2} />
                                <Line type="monotone" dataKey="interviews" stroke="#8B5CF6" strokeWidth={2} />
                                <Line type="monotone" dataKey="offers" stroke="#10B981" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Skills Distribution */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-100">Candidate Skills Distribution</h2>
                        <Code className="text-purple-400" size={20} />
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <ReChartsPie>
                                <Pie
                                    data={skillDistributionData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {skillDistributionData.map((index) => (
                                        <Cell key={`cell-${index}`} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1F2937',
                                        border: '1px solid #374151',
                                        borderRadius: '0.5rem'
                                    }}
                                />
                            </ReChartsPie>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Bottom Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recruitment Stage Breakdown */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4">Recruitment Stages</h3>
                    <div className="space-y-4">
                        {[
                            { stage: 'Initial Screening', count: 45, percentage: 70 },
                            { stage: 'Technical Interview', count: 28, percentage: 55 },
                            { stage: 'Culture Fit', count: 20, percentage: 40 },
                            { stage: 'Final Round', count: 12, percentage: 25 },
                        ].map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-300">{item.stage}</span>
                                    <span className="text-gray-400">{item.count} candidates</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 rounded-full h-2"
                                        style={{ width: `${item.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Department Hiring Status */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4">Department Hiring Status</h3>
                    <div className="space-y-4">
                        {[
                            { dept: 'Engineering', open: 12, filled: 8 },
                            { dept: 'Design', open: 5, filled: 3 },
                            { dept: 'Product', open: 4, filled: 2 },
                            { dept: 'Marketing', open: 3, filled: 1 },
                        ].map((dept, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-gray-300">{dept.dept}</span>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-green-400">{dept.filled} filled</span>
                                    <span className="text-sm text-yellow-400">{dept.open} open</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4">Recent Activities</h3>
                    <div className="space-y-4">
                        {[
                            { action: 'New candidate applied', position: 'Senior Developer', time: '2h ago' },
                            { action: 'Interview scheduled', position: 'UX Designer', time: '4h ago' },
                            { action: 'Offer accepted', position: 'Product Manager', time: '6h ago' },
                            { action: 'Assessment completed', position: 'Frontend Developer', time: '8h ago' },
                        ].map((activity, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                </div>
                                <div>
                                    <p className="text-gray-300">{activity.action}</p>
                                    <div className="flex items-center space-x-2 text-sm">
                                        <span className="text-gray-400">{activity.position}</span>
                                        <span className="text-gray-500">•</span>
                                        <span className="text-gray-500">{activity.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Navigation */}
            <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-4 py-2 rounded-lg flex items-center space-x-2 whitespace-nowrap transition-colors ${
                            location.pathname === link.path
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </Link>
                ))}
            </div>

            {/* Selected Candidate Info */}
            {(location.pathname === '/app/analytics/cv-analysis' ||
                location.pathname === '/app/analytics/scoring') && selectedCandidate && (
                <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                {selectedCandidate.firstName} {selectedCandidate.lastName}
                            </h2>
                            <p className="text-gray-400">{selectedCandidate.desiredPosition}</p>
                        </div>
                        <Link
                            to="/app/analytics/candidates"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            ← Back to Candidates
                        </Link>
                    </div>
                </div>
            )}

            <Routes>
                <Route path="/" element={<OverviewAnalytics/>}/>
                <Route
                    path="/candidates"
                    element={<CandidateSearch onSelectCandidate={setSelectedCandidate}/>}
                />
                <Route
                    path="/cv-analysis"
                    element={<CVAnalysis/>}
                />
                <Route
                    path="/scoring"
                    element={<AIScoring candidate={selectedCandidate}/>}
                />
                <Route
                    path="/feedback"
                    element={<FeedbackAnalytics/>}
                />
            </Routes>
        </div>
    );
};