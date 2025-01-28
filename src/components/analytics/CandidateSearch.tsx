import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { CandidateCard } from './CandidateCard';
import { Candidate, CandidateStatus, Department, SearchFilters } from "@/types/candidate";
import { generateMockCandidates } from '@/data/candidateMock.ts'

// Generate mock data once at module level
const mockCandidates = generateMockCandidates(20);

interface CandidateSearchProps {
    onSelectCandidate: (candidate: Candidate) => void;
}

export const CandidateSearch: React.FC<CandidateSearchProps> = ({ onSelectCandidate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState<SearchFilters>({
        departments: [],
        skills: [],
        experienceYears: { min: 0, max: 20 },
        locations: [],
        status: [],
        minScore: 0,
    });
    const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>(mockCandidates);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        // Search and filter logic
        const filtered = mockCandidates.filter(candidate => {
            const searchMatch =
                `${candidate.firstName} ${candidate.lastName} ${candidate.desiredPosition}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const departmentMatch =
                filters.departments.length === 0 ||
                filters.departments.includes(candidate.department);

            const statusMatch =
                filters.status.length === 0 ||
                filters.status.includes(candidate.status);

            const scoreMatch =
                candidate.aiScore.overallScore >= filters.minScore;

            return searchMatch && departmentMatch && statusMatch && scoreMatch;
        });

        setFilteredCandidates(filtered);
    }, [searchTerm, filters]);

    const handleCandidateClick = (id: string) => {
        const candidate = mockCandidates.find(c => c.id === id);
        if (candidate) {
            onSelectCandidate(candidate);
        }
    };

    return (
        <div className="space-y-6 p-6">
            {/* Search and UI implementation remains the same */}
            <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="Search candidates..."
                        className="w-full px-4 py-2 pl-10 rounded-lg border focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="px-4 py-2 rounded-lg border flex items-center gap-2 hover:bg-gray-50"
                >
                    <Filter size={20} />
                    Filters
                </button>
            </div>

            {showFilters && (
                <div className="p-4 border rounded-lg bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Department Filter */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Department</label>
                            <select
                                multiple
                                className="w-full p-2 border rounded-lg"
                                value={filters.departments}
                                onChange={(e) => {
                                    const values = Array.from(e.target.selectedOptions, option => option.value as Department);
                                    setFilters(prev => ({ ...prev, departments: values }));
                                }}
                            >
                                {['engineering', 'design', 'product', 'marketing', 'sales', 'hr'].map(dept => (
                                    <option key={dept} value={dept}>
                                        {dept.charAt(0).toUpperCase() + dept.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Status Filter */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Status</label>
                            <select
                                multiple
                                className="w-full p-2 border rounded-lg"
                                value={filters.status}
                                onChange={(e) => {
                                    const values = Array.from(e.target.selectedOptions, option => option.value as CandidateStatus);
                                    setFilters(prev => ({ ...prev, status: values }));
                                }}
                            >
                                {['new', 'screening', 'interview', 'offer', 'rejected', 'hired'].map(status => (
                                    <option key={status} value={status}>
                                        {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Score Filter */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Minimum Score</label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={filters.minScore}
                                onChange={(e) => setFilters(prev => ({ ...prev, minScore: Number(e.target.value) }))}
                                className="w-full"
                            />
                            <div className="text-sm text-gray-600 text-right">{filters.minScore}%</div>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCandidates.map((candidate) => (
                    <CandidateCard
                        key={candidate.id}
                        candidate={candidate}
                        onClick={() => handleCandidateClick(candidate.id)}
                    />
                ))}
            </div>

            {filteredCandidates.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No candidates match your search criteria
                </div>
            )}
        </div>
    );
};