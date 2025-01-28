import React, { useState } from 'react';
import { Briefcase, MapPin, Globe2, Clock } from 'lucide-react';
import { Candidate, CandidateStatus } from "@/types/candidate";
import CandidateReview from './CandidateReview';

interface CandidateCardProps {
    candidate: Candidate;
    onClick: () => void;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
    const [isReviewOpen, setIsReviewOpen] = useState(false);

    const getStatusColor = (status: CandidateStatus) => {
        const colors = {
            new: 'bg-blue-800 text-blue-100',
            screening: 'bg-yellow-800 text-yellow-100',
            interview: 'bg-purple-800 text-purple-100',
            offer: 'bg-green-800 text-green-100',
            rejected: 'bg-red-800 text-red-100',
            hired: 'bg-emerald-800 text-emerald-100',
        };
        return colors[status] || 'bg-gray-800 text-gray-100';
    };

    const getProgressBarColor = (score: number) => {
        if (score >= 80) return 'bg-green-500';
        if (score >= 60) return 'bg-blue-500';
        if (score >= 40) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <>
            <div
                className="p-6 border border-gray-700 rounded-lg hover:shadow-xl transition-shadow cursor-pointer bg-gray-800"
                onClick={() => {
                    setIsReviewOpen(true);
                }}
            >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="font-semibold text-lg text-white">
                            {candidate.firstName} {candidate.lastName}
                        </h3>
                        <p className="text-sm text-gray-400">{candidate.desiredPosition}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(candidate.status)}`}>
                        {candidate.status}
                    </span>
                </div>

                {/* Scores */}
                <div className="space-y-3 mb-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">Overall Match</span>
                            <span className="font-semibold text-white">{candidate.aiScore.overallScore}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                                className={`${getProgressBarColor(candidate.aiScore.overallScore)} rounded-full h-2 transition-all duration-500`}
                                style={{ width: `${candidate.aiScore.overallScore}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {candidate.skills.slice(0, 3).map((skill, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                        >
                            {skill.name} ({skill.level})
                        </span>
                    ))}
                    {candidate.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                            +{candidate.skills.length - 3} more
                        </span>
                    )}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{candidate.location.city}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Globe2 size={16} />
                        <span>{candidate.location.remotePreference}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Briefcase size={16} />
                        <span>{candidate.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{candidate.workExperience[0].current ? 'Currently employed' : 'Available'}</span>
                    </div>
                </div>

                {/* Languages */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                        {candidate.languages.map((lang, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                            >
                                {lang.name} ({lang.proficiency})
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Review Modal */}
            <CandidateReview
                candidate={candidate}
                open={isReviewOpen}
                onOpenChange={setIsReviewOpen}
            />
        </>
    );
};