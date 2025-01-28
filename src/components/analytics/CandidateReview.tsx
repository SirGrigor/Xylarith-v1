import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Briefcase,
    MapPin,
    Globe2,
    GraduationCap,
    ThumbsDown,
    AlertTriangle,
    Trophy,
    Target,
    Scale
} from 'lucide-react';
import { Candidate } from "@/types/candidate";
import {ScrollArea} from "@/components/ui/scroll.tsx";

interface CandidateReviewProps {
    candidate: Candidate | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const CandidateReview: React.FC<CandidateReviewProps> = ({
                                                             candidate,
                                                             open,
                                                             onOpenChange
                                                         }) => {
    if (!candidate) return null;

    const calculateStrengths = (candidate: Candidate) => {
        const strengths = [];

        // Skills assessment
        const expertSkills = candidate.skills.filter(skill => skill.level === 'expert');
        if (expertSkills.length >= 2) {
            strengths.push({
                title: 'Strong Technical Expertise',
                description: `Expert-level proficiency in ${expertSkills.map(s => s.name).join(', ')}`,
                icon: Trophy
            });
        }

        // Experience assessment
        const totalExp = candidate.workExperience.reduce((acc, exp) => {
            const start = new Date(exp.startDate);
            const end = exp.current ? new Date() : new Date(exp.endDate || '');
            return acc + (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
        }, 0);

        if (totalExp > 5) {
            strengths.push({
                title: 'Extensive Experience',
                description: `${Math.floor(totalExp)} years of relevant industry experience`,
                icon: Briefcase
            });
        }

        // AI Score assessment
        if (candidate.aiScore.overallScore >= 80) {
            strengths.push({
                title: 'High AI Match Score',
                description: 'Excellent overall match for the position based on AI analysis',
                icon: Target
            });
        }

        return strengths;
    };

    const calculateWeaknesses = (candidate: Candidate) => {
        const weaknesses = [];

        // Missing skills
        if (candidate.cvAnalysis.missingKeywords.length > 0) {
            weaknesses.push({
                title: 'Skill Gaps',
                description: `Missing key skills: ${candidate.cvAnalysis.missingKeywords.join(', ')}`,
                icon: AlertTriangle
            });
        }

        // Experience gaps
        const hasRecentGap = candidate.workExperience.some(exp => {
            if (!exp.endDate || exp.current) return false;
            const gap = new Date().getTime() - new Date(exp.endDate).getTime();
            return gap > (180 * 24 * 60 * 60 * 1000); // 6 months
        });

        if (hasRecentGap) {
            weaknesses.push({
                title: 'Employment Gap',
                description: 'Notable gap in recent employment history',
                icon: AlertTriangle
            });
        }

        // AI Score weaknesses
        const lowScores = Object.entries(candidate.aiScore)
            .filter(([key, value]) => key !== 'overallScore' && value < 70);

        if (lowScores.length > 0) {
            weaknesses.push({
                title: 'Lower Match Areas',
                description: `Below threshold scores in: ${lowScores.map(([key]) => key.replace(/([A-Z])/g, ' $1').toLowerCase()).join(', ')}`,
                icon: ThumbsDown
            });
        }

        return weaknesses;
    };

    const getHiringRecommendation = (candidate: Candidate) => {
        const scores = Object.values(candidate.aiScore);
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        const expertSkillsCount = candidate.skills.filter(s => s.level === 'expert').length;

        if (avgScore >= 80 && expertSkillsCount >= 2) {
            return {
                recommendation: 'Strongly Recommend Hiring',
                reason: 'High AI match score combined with strong technical expertise makes this candidate an excellent fit.',
                class: 'bg-green-900 text-green-100'
            };
        } else if (avgScore >= 70) {
            return {
                recommendation: 'Consider Hiring',
                reason: 'Good potential with some areas for development. Additional screening recommended.',
                class: 'bg-blue-900 text-blue-100'
            };
        } else {
            return {
                recommendation: 'Further Assessment Needed',
                reason: 'Some concerns exist that should be addressed before proceeding.',
                class: 'bg-yellow-900 text-yellow-100'
            };
        }
    };

    const strengths = calculateStrengths(candidate);
    const weaknesses = calculateWeaknesses(candidate);
    const recommendation = getHiringRecommendation(candidate);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl h-[90vh] bg-gray-900 text-gray-100">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">
                        Candidate Assessment: {candidate.firstName} {candidate.lastName}
                    </DialogTitle>
                </DialogHeader>

                <ScrollArea className="h-full px-4">
                    {/* Basic Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6 mt-4">
                        <div className="flex items-center space-x-2">
                            <MapPin className="text-gray-400" size={16} />
                            <span>{candidate.location.city}, {candidate.location.country}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe2 className="text-gray-400" size={16} />
                            <span>{candidate.location.remotePreference}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Briefcase className="text-gray-400" size={16} />
                            <span>{candidate.desiredPosition}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <GraduationCap className="text-gray-400" size={16} />
                            <span>{candidate.education[0].degree}</span>
                        </div>
                    </div>

                    {/* AI Scores */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">AI Assessment Scores</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(candidate.aiScore).map(([key, value]) => (
                                key !== 'overallScore' && (
                                    <div key={key} className="bg-gray-800 p-4 rounded-lg">
                                        <div className="flex justify-between mb-2">
                      <span className="text-gray-400">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                                            <span className="font-semibold">{value}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                                                style={{ width: `${value}%` }}
                                            />
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Strengths */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Key Strengths</h3>
                        <div className="space-y-4">
                            {strengths.map((strength, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-start space-x-3">
                                    <strength.icon className="text-green-400 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-green-400">{strength.title}</h4>
                                        <p className="text-gray-300">{strength.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Weaknesses */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Areas for Consideration</h3>
                        <div className="space-y-4">
                            {weaknesses.map((weakness, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-start space-x-3">
                                    <weakness.icon className="text-yellow-400 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-yellow-400">{weakness.title}</h4>
                                        <p className="text-gray-300">{weakness.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hiring Recommendation */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Hiring Recommendation</h3>
                        <div className={`p-4 rounded-lg ${recommendation.class}`}>
                            <div className="flex items-center space-x-2 mb-2">
                                <Scale size={20} />
                                <h4 className="font-semibold">{recommendation.recommendation}</h4>
                            </div>
                            <p>{recommendation.reason}</p>
                        </div>
                    </div>

                    {/* Interview History */}
                    {candidate.interviews.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Interview History</h3>
                            <div className="space-y-4">
                                {candidate.interviews.map((interview, index) => (
                                    <div key={index} className="bg-gray-800 p-4 rounded-lg">
                                        <div className="flex justify-between mb-2">
                      <span className="font-semibold">
                        {interview.type.charAt(0).toUpperCase() + interview.type.slice(1)} Interview
                      </span>
                                            <span className="text-gray-400">
                        {new Date(interview.date).toLocaleDateString()}
                      </span>
                                        </div>
                                        {interview.feedback && (
                                            <p className="text-gray-300 mb-2">{interview.feedback}</p>
                                        )}
                                        {interview.score && (
                                            <div className="flex items-center space-x-2">
                                                <span className="text-gray-400">Score:</span>
                                                <span className="font-semibold">{interview.score}%</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default CandidateReview;