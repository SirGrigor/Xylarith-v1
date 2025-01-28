import { FileText, Check, Book, Briefcase, Star, ChevronRight, Bot, Sparkles, Binary } from 'lucide-react';
import { mockCandidate } from '@/data/candidate.ts';

const CVAnalytics = () => {
    const candidate = mockCandidate;

    return (
        <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gray-900 min-h-screen">
            {/* AI Analysis Header */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-6 text-gray-100 shadow-xl border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <Bot size={32} className="text-blue-400" />
                        <div>
                            <h1 className="text-3xl font-bold">AI-Powered CV Analysis</h1>
                            <p className="text-gray-300">Automated insights generated by TalentPulse AI Engine</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                        <Sparkles size={20} className="text-blue-400" />
                        <span className="text-sm text-gray-300">Analysis Complete</span>
                    </div>
                </div>
            </div>

            {/* Candidate Header */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <FileText size={28} className="text-blue-400" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-100">{candidate.name}</h1>
                            <p className="text-gray-400">{candidate.email} | {candidate.phone}</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400">
                        Last Analyzed: {new Date(candidate.updatedAt).toLocaleDateString()}
                    </div>
                </div>

                {/* AI Score Cards */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    {Object.entries(candidate.aiScore).map(([key, value]) => (
                        <div key={key} className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-300 font-medium">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                                <Binary size={18} className="text-blue-400" />
                            </div>
                            <div className="flex items-end space-x-2">
                                <span className="text-2xl font-bold text-gray-100">{value}%</span>
                                <div className="flex-grow h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                                        style={{ width: `${value}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-5 gap-8">
                {/* Left Column - Experience & Education */}
                <div className="col-span-3 space-y-6">
                    {/* AI Insights Card */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <div className="flex items-center space-x-3 mb-6">
                            <Sparkles className="text-purple-400" />
                            <h2 className="text-xl font-semibold text-gray-100">AI Insights Summary</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-green-900/20 rounded-lg border border-green-700">
                                <h3 className="text-sm font-medium text-green-400 mb-2">✅ Strengths</h3>
                                <ul className="space-y-1 text-sm text-green-300">
                                    <li>• Strong technical skills (Top 10%)</li>
                                    <li>• Excellent cloud infrastructure experience</li>
                                    <li>• Proven leadership experience</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-700">
                                <h3 className="text-sm font-medium text-orange-400 mb-2">⚠️ Recommendations</h3>
                                <ul className="space-y-1 text-sm text-orange-300">
                                    <li>• Improve REST API security mentions</li>
                                    <li>• Add scalability pattern examples</li>
                                    <li>• Include more metrics in experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <div className="flex items-center space-x-3 mb-6">
                            <Briefcase className="text-blue-400" />
                            <h2 className="text-xl font-semibold text-gray-100">Professional Experience</h2>
                        </div>
                        <div className="space-y-6">
                            {candidate.experience.map((exp, index) => (
                                <div key={index} className="border-l-4 border-blue-800 pl-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold text-gray-100">{exp.title}</h3>
                                            <p className="text-gray-400 text-sm">{exp.company}</p>
                                        </div>
                                        <span className="text-sm text-gray-400">
                                            {exp.startDate} - {exp.endDate || 'Present'}
                                        </span>
                                    </div>
                                    <ul className="mt-3 space-y-2">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="text-sm text-gray-300 flex items-start">
                                                <ChevronRight size={16} className="mt-1 mr-2 text-blue-400" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <div className="flex items-center space-x-3 mb-6">
                            <Book className="text-blue-400" />
                            <h2 className="text-xl font-semibold text-gray-100">Education</h2>
                        </div>
                        <div className="space-y-6">
                            {candidate.education.map((edu, index) => (
                                <div key={index} className="border-l-4 border-blue-800 pl-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold text-gray-100">{edu.degree}</h3>
                                            <p className="text-gray-400 text-sm">{edu.institution}</p>
                                        </div>
                                        <span className="text-sm text-gray-400">
                                            {edu.graduationYear}
                                        </span>
                                    </div>
                                    {edu.relevantCourses && (
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-300 mb-2">Relevant Courses:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.relevantCourses.map((course, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-700"
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
                </div>

                {/* Right Column - Analysis */}
                <div className="col-span-2 space-y-6">
                    {/* Keyword Matches */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <div className="flex items-center space-x-3 mb-6">
                            <Check className="text-green-400" />
                            <h2 className="text-xl font-semibold text-gray-100">Keyword Analysis</h2>
                        </div>
                        <div className="space-y-4">
                            {candidate.cvAnalysis.keywordMatches.map((match, index) => (
                                <div key={index} className="p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-gray-100">{match.keyword}</span>
                                        <span className="text-sm text-gray-400">
                                            {match.frequency} mention{match.frequency > 1 ? 's' : ''}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 italic">
                                        "{match.context}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Analysis */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <div className="flex items-center space-x-3 mb-6">
                            <Star className="text-yellow-400" />
                            <h2 className="text-xl font-semibold text-gray-100">Skills Analysis</h2>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-300 mb-2">Current Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {candidate.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm flex items-center border border-green-700"
                                        >
                                            <Check size={14} className="mr-1" /> {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-300 mb-2">Recommended Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {candidate.cvAnalysis.recommendedSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm flex items-center border border-blue-700"
                                        >
                                            <Sparkles size={14} className="mr-1" /> {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-300 mb-2">Missing Keywords</h3>
                                <div className="flex flex-wrap gap-2">
                                    {candidate.cvAnalysis.missingKeywords.map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-orange-900/30 text-orange-300 rounded-full text-sm flex items-center border border-orange-700"
                                        >
                                            <span className="mr-1">⚠️</span> {keyword}
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

export default CVAnalytics;