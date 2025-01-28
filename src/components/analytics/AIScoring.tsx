import React from 'react';
import { ChartComponent } from './ChartComponent';
import { Candidate } from "@/types/candidate.ts";
import {
    Brain,
    Target,
    Users,
    TrendingUp,
    Heart,
    MessageCircle,
    Lightbulb,
    BadgeCheck,
    Shield,
    Zap
} from "lucide-react";

interface AIScoringProps {
    candidate: Candidate;
}

interface TraitAnalysis {
    category: string;
    score: number;
    traits: Array<{name: string; strength: number}>;
}

export const AIScoring: React.FC<AIScoringProps> = ({ candidate }) => {
    const scoreData = [
        { name: 'Skill Match', value: candidate.aiScore.skillMatch },
        { name: 'Experience Match', value: candidate.aiScore.experienceMatch },
        { name: 'Cultural Fit', value: candidate.aiScore.culturalFit },
        { name: 'Leadership', value: candidate.aiScore.leadershipPotential },
    ];

    const personalityTraits: TraitAnalysis[] = [
        {
            category: 'Soft Skills',
            score: 85,
            traits: [
                { name: 'Communication', strength: 90 },
                { name: 'Team Collaboration', strength: 85 },
                { name: 'Problem Solving', strength: 88 },
                { name: 'Adaptability', strength: 82 }
            ]
        },
        {
            category: 'Cultural Values',
            score: 82,
            traits: [
                { name: 'Innovation Focus', strength: 85 },
                { name: 'Customer Centricity', strength: 80 },
                { name: 'Diversity & Inclusion', strength: 88 },
                { name: 'Growth Mindset', strength: 75 }
            ]
        }
    ];

    const renderScoreCard = (title: string, score: number, icon: React.ReactNode, description: string) => (
        <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    {icon}
                    <h3 className="font-semibold text-gray-100">{title}</h3>
                </div>
                <span className="text-2xl font-bold text-blue-400">{score}%</span>
            </div>
            <div className="text-sm text-gray-400">{description}</div>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );

    const renderTraitAnalysis = (analysis: TraitAnalysis) => (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-100">{analysis.category}</h3>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-700">
                    {analysis.score}% Match
                </span>
            </div>
            <div className="space-y-4">
                {analysis.traits.map((trait, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{trait.name}</span>
                            <span className="text-gray-400">{trait.strength}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div
                                className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-full h-1.5"
                                style={{ width: `${trait.strength}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderScoreCard(
                    'Overall Match',
                    candidate.aiScore.overallScore,
                    <Target className="text-blue-400" size={20} />,
                    'Combined score based on all evaluation criteria'
                )}
                {renderScoreCard(
                    'Technical Skills',
                    candidate.aiScore.skillMatch,
                    <Brain className="text-blue-400" size={20} />,
                    'Match with required technical competencies'
                )}
                {renderScoreCard(
                    'Cultural Alignment',
                    candidate.aiScore.culturalFit,
                    <Users className="text-blue-400" size={20} />,
                    'Alignment with company values and culture'
                )}
                {renderScoreCard(
                    'Growth Potential',
                    candidate.aiScore.leadershipPotential,
                    <TrendingUp className="text-blue-400" size={20} />,
                    'Leadership and career development potential'
                )}
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h2 className="text-xl font-semibold mb-6 text-gray-100">Detailed Score Analysis</h2>
                <div className="h-96">
                    <ChartComponent data={scoreData} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalityTraits.map((trait) => (
                    renderTraitAnalysis(trait)
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-semibold mb-4 text-gray-100">Key Strengths</h3>
                    <ul className="space-y-3">
                        {candidate.workExperience[0].achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <BadgeCheck className="text-green-400 mt-1" size={16} />
                                <span className="text-gray-300">{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-semibold mb-4 text-gray-100">Growth Opportunities</h3>
                    <ul className="space-y-3">
                        {candidate.cvAnalysis.missingKeywords.map((keyword, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <Lightbulb className="text-yellow-400 mt-1" size={16} />
                                <span className="text-gray-300">Consider developing skills in {keyword}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Additional Competency Analysis */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h2 className="text-xl font-semibold mb-6 text-gray-100">Core Competencies Analysis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        {
                            icon: <Heart className="text-pink-400" size={20} />,
                            title: 'Emotional Intelligence',
                            score: 88,
                            description: 'Strong empathy and self-awareness'
                        },
                        {
                            icon: <MessageCircle className="text-purple-400" size={20} />,
                            title: 'Communication Style',
                            score: 92,
                            description: 'Clear and effective communicator'
                        },
                        {
                            icon: <Shield className="text-indigo-400" size={20} />,
                            title: 'Professional Ethics',
                            score: 95,
                            description: 'High integrity and accountability'
                        },
                        {
                            icon: <Zap className="text-yellow-400" size={20} />,
                            title: 'Innovation Drive',
                            score: 85,
                            description: 'Creative problem-solving approach'
                        }
                    ].map((competency, index) => (
                        <div key={index} className="p-4 border border-gray-700 rounded-lg bg-gray-900/50">
                            <div className="flex items-center space-x-2 mb-2">
                                {competency.icon}
                                <h3 className="font-semibold text-gray-100">{competency.title}</h3>
                            </div>
                            <div className="text-2xl font-bold text-blue-400 mb-1">{competency.score}%</div>
                            <p className="text-sm text-gray-400">{competency.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};