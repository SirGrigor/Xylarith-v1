import React from 'react';
import { ChartComponent } from './ChartComponent';
import {Candidate} from "@/types/candidate.ts";
import {Brain, Target, Users, TrendingUp} from "lucide-react";

interface AIScoringProps {
    candidate: Candidate;
}

export const AIScoring: React.FC<AIScoringProps> = ({ candidate }) => {
    const scoreData = [
        { name: 'Skill Match', value: candidate.aiScore.skillMatch },
        { name: 'Experience Match', value: candidate.aiScore.experienceMatch },
        { name: 'Cultural Fit', value: candidate.aiScore.culturalFit },
        { name: 'Leadership', value: candidate.aiScore.leadershipPotential },
    ];

    const renderScoreCard = (title: string, score: number, icon: React.ReactNode, description: string) => (
        <div className="p-4 border rounded-lg bg-white">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    {icon}
                    <h3 className="font-semibold">{title}</h3>
                </div>
                <span className="text-2xl font-bold text-blue-600">{score}%</span>
            </div>
            <div className="text-sm text-gray-600">{description}</div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderScoreCard(
                    'Overall Match',
                    candidate.aiScore.overallScore,
                    <Target className="text-blue-500" size={20} />,
                    'Combined score based on all evaluation criteria'
                )}
                {renderScoreCard(
                    'Technical Skills',
                    candidate.aiScore.skillMatch,
                    <Brain className="text-blue-500" size={20} />,
                    'Match with required technical competencies'
                )}
                {renderScoreCard(
                    'Cultural Alignment',
                    candidate.aiScore.culturalFit,
                    <Users className="text-blue-500" size={20} />,
                    'Alignment with company values and culture'
                )}
                {renderScoreCard(
                    'Growth Potential',
                    candidate.aiScore.leadershipPotential,
                    <TrendingUp className="text-blue-500" size={20} />,
                    'Leadership and career development potential'
                )}
            </div>

            <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-6">Detailed Score Analysis</h2>
                <div className="h-96">
                    <ChartComponent data={scoreData} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-4">Strengths</h3>
                    <ul className="space-y-3">
                        {candidate.workExperience[0].achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                    <h3 className="font-semibold mb-4">Development Areas</h3>
                    <ul className="space-y-3">
                        {candidate.cvAnalysis.missingKeywords.map((keyword, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <span className="text-yellow-500 mt-1">!</span>
                                <span>Consider developing skills in {keyword}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};