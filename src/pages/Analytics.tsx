import {FC, useState} from 'react';
import {Link, Route, Routes, useLocation} from 'react-router-dom';
import {BarChart, FileText, MessageCircle, PieChart, Users} from 'lucide-react';
import {generateMockCandidates} from '@/data/candidateMock.ts'
import {AIScoring} from "@/components/analytics/AIScoring.tsx";
import {CVAnalysis} from "@/components/analytics/CVAnalysis.tsx";
import {CandidateSearch} from "@/components/analytics/CandidateSearch.tsx";
import {Candidate} from "@/types/candidate";

const mockCandidates = generateMockCandidates(20);

// Analytics Dashboard Card Component
const AnalyticsCard: FC<{title: string; value: string | number}> = ({title, value}) => (
    <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
        <div className="text-sm text-gray-400">{title}</div>
        <div className="text-2xl font-bold text-white">{value}</div>
    </div>
);

export const Analytics: FC = () => {
    const location = useLocation();
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate>(mockCandidates[0]);

    const navLinks = [
        {
            path: "/app/analytics",
            label: "Overview",
            icon: <BarChart size={20}/>,
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

    // Mock components for analytics sections
    const OverviewAnalytics = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AnalyticsCard
                    title="Total Candidates"
                    value={mockCandidates.length}
                />
                <AnalyticsCard
                    title="Average Score"
                    value={`${Math.round(mockCandidates.reduce((acc, curr) => acc + curr.aiScore.overallScore, 0) / mockCandidates.length)}%`}
                />
                <AnalyticsCard
                    title="Active Interviews"
                    value={mockCandidates.filter(c => c.status === 'interview').length}
                />
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-4">Analytics Overview</h2>
                {/* Add additional overview content here */}
            </div>
        </div>
    );

    const FeedbackAnalytics = () => (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Feedback Analytics</h2>
            {/* Add feedback analytics content */}
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

            {/* Main Content */}
            <Routes>
                <Route path="/" element={<OverviewAnalytics/>}/>
                <Route
                    path="/candidates"
                    element={<CandidateSearch onSelectCandidate={setSelectedCandidate}/>}
                />
                <Route
                    path="/cv-analysis"
                    element={<CVAnalysis candidate={selectedCandidate}/>}
                />
                <Route
                    path="/scoring"
                    element={<AIScoring candidate={selectedCandidate}/>}
                />
                <Route path="/feedback" element={<FeedbackAnalytics/>}/>
            </Routes>
        </div>
    );
};