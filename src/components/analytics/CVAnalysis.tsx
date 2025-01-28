import React from 'react';
import { FileText, Check, Book } from 'lucide-react';
import {Candidate} from "@/types/candidate.ts";

interface CVAnalysisProps {
    candidate: Candidate;
}

export const CVAnalysis: React.FC<CVAnalysisProps> = ({ candidate }) => {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 bg-white rounded-lg border">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <FileText size={24} className="text-blue-500" />
                        <h2 className="text-xl font-semibold">CV Analysis Report</h2>
                    </div>
                    <div className="text-sm text-gray-600">
                        Last updated: {new Date(candidate.updatedAt).toLocaleDateString()}
                    </div>
                </div>

                {/* AI Analysis Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold mb-4">Skills Match Analysis</h3>
                        <div className="space-y-3">
                            {Object.entries(candidate.aiScore).map(([key, value]) => (
                                <div key={key}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        <span>{value}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-500 rounded-full h-2"
                                            style={{ width: `${value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-4">Keyword Analysis</h3>
                        <div className="space-y-4">
                            {candidate.cvAnalysis.keywordMatches.map((match, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <Check size={16} className="text-green-500 mt-1" />
                                    <div>
                                        <div className="font-medium">{match.keyword}</div>
                                        <div className="text-sm text-gray-600">
                                            Found {match.frequency} times
                                        </div>
                                        <div className="text-sm text-gray-500 italic">
                                            "{match.context}"
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education and Experience */}
                <div className="space-y-6">
                    <div className="border-t pt-6">
                        <h3 className="font-semibold mb-4 flex items-center space-x-2">
                            <Book size={20} />
                            <span>Education Analysis</span>
                        </h3>
                        <div className="space-y-4">
                            {candidate.education.map((edu, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <div className="font-medium">{edu.degree}</div>
                                    <div className="text-sm text-gray-600">
                                        {edu.institution} ({edu.graduationYear})
                                    </div>
                                    {edu.relevantCourses && (
                                        <div className="mt-2">
                                            <div className="text-sm font-medium">Relevant Courses:</div>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {edu.relevantCourses.map((course, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div className="border-t pt-6">
                        <h3 className="font-semibold mb-4">AI Recommendations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium mb-2">Recommended Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {candidate.cvAnalysis.recommendedSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium mb-2">Missing Keywords</h4>
                                <div className="flex flex-wrap gap-2">
                                    {candidate.cvAnalysis.missingKeywords.map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};