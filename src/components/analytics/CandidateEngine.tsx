import React from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { Users, FileText, PieChart } from 'lucide-react';
import { AIScoring } from "@/components/analytics/AIScoring";
import { CandidateSearch } from "@/components/analytics/CandidateSearch";
import { generateMockCandidates } from '@/data/candidateMock.ts'
import { Candidate } from '@/types/candidate';
import CVAnalysis from "@/components/analytics/CVAnalysis.tsx";

// Generate mock data once at module level
const mockCandidates = generateMockCandidates(20);

export const CandidateEngine: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedCandidate, setSelectedCandidate] = React.useState<Candidate>(mockCandidates[0]);

    const navLinks = [
        {
            path: '/candidates',
            label: 'Candidates',
            icon: <Users size={20} />,
        },
        {
            path: '/candidates/cv-analysis',
            label: 'CV Analysis',
            icon: <FileText size={20} />,
        },
        {
            path: '/candidates/scoring',
            label: 'AI Scoring',
            icon: <PieChart size={20} />,
        },
    ];

    // Handle candidate selection and navigation
    const handleCandidateSelect = (candidate: Candidate) => {
        setSelectedCandidate(candidate);
        navigate('/candidates/cv-analysis');
    };

    const isActiveLink = (path: string) => {
        if (path === '/candidates') {
            return location.pathname === path || location.pathname === '/';
        }
        return location.pathname === path;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Candidate Engine</h1>
                    <p className="text-gray-600 mt-1">
                        AI-powered candidate analysis and scoring system
                    </p>
                </div>

                {/* Navigation */}
                <div className="mb-6 flex space-x-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                                isActiveLink(link.path)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Selected Candidate Info - Show when viewing analysis */}
                {location.pathname !== '/candidates' && location.pathname !== '/' && (
                    <div className="mb-6 p-4 bg-white rounded-lg border">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {selectedCandidate.firstName} {selectedCandidate.lastName}
                                </h2>
                                <p className="text-gray-600">{selectedCandidate.desiredPosition}</p>
                            </div>
                            <Link
                                to="/candidates"
                                className="text-blue-500 hover:text-blue-600"
                            >
                                ← Back to Candidates
                            </Link>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow">
                    <Routes>
                        <Route
                            path="/"
                            element={<CandidateSearch onSelectCandidate={handleCandidateSelect} />}
                        />
                        <Route
                            path="/cv-analysis"
                            element={<CVAnalysis />}
                        />
                        <Route
                            path="/scoring"
                            element={<AIScoring candidate={selectedCandidate} />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
};