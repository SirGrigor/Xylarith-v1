import React from 'react';
import {
    ThumbsUp,
    ThumbsDown,
    MessageSquare,
    TrendingUp,
    Users,
    Star,
    Calendar,
    AlertCircle,
    Check,
    Clock
} from 'lucide-react';

interface FeedbackItem {
    id: string;
    interviewerId: string;
    interviewerName: string;
    candidateId: string;
    candidateName: string;
    position: string;
    date: string;
    rating: number;
    sentiment: 'positive' | 'negative' | 'neutral';
    technicalScore: number;
    culturalScore: number;
    communicationScore: number;
    comments: string;
    status: 'pending' | 'reviewed' | 'flagged';
    tags: string[];
}

interface FeedbackMetrics {
    averageRating: number;
    totalFeedback: number;
    positivePercentage: number;
    negativePercentage: number;
    neutralPercentage: number;
    responseRate: number;
}

const mockFeedbackData: FeedbackItem[] = [
    {
        id: 'f1',
        interviewerId: 'i1',
        interviewerName: 'Sarah Johnson',
        candidateId: 'c1',
        candidateName: 'Alex Thompson',
        position: 'Senior Software Engineer',
        date: '2025-01-25',
        rating: 4.5,
        sentiment: 'positive',
        technicalScore: 92,
        culturalScore: 88,
        communicationScore: 90,
        comments: 'Excellent technical knowledge and great cultural fit. Strong problem-solving skills and clear communication.',
        status: 'reviewed',
        tags: ['Technical Excellence', 'Strong Communicator', 'Cultural Fit']
    },
    // Add more mock data here
];

const mockMetrics: FeedbackMetrics = {
    averageRating: 4.2,
    totalFeedback: 45,
    positivePercentage: 75,
    negativePercentage: 15,
    neutralPercentage: 10,
    responseRate: 92
};

const FeedbackAnalytics: React.FC = () => {
    const renderMetricsCard = (title: string, value: number | string, icon: React.ReactNode) => (
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    {icon}
                    <span className="text-sm text-gray-400">{title}</span>
                </div>
                <span className="text-2xl font-bold text-gray-100">{value}</span>
            </div>
        </div>
    );

    const renderSentimentIndicator = (sentiment: FeedbackItem['sentiment']) => {
        const colors = {
            positive: 'text-green-400',
            negative: 'text-red-400',
            neutral: 'text-gray-400'
        };
        const icons = {
            positive: <ThumbsUp size={16} className={colors[sentiment]} />,
            negative: <ThumbsDown size={16} className={colors[sentiment]} />,
            neutral: <MessageSquare size={16} className={colors[sentiment]} />
        };
        return icons[sentiment];
    };

    return (
        <div className="space-y-6">
            {/* Metrics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {renderMetricsCard(
                    'Average Rating',
                    `${mockMetrics.averageRating}/5`,
                    <Star className="text-yellow-400" size={20} />
                )}
                {renderMetricsCard(
                    'Total Feedback',
                    mockMetrics.totalFeedback,
                    <MessageSquare className="text-blue-400" size={20} />
                )}
                {renderMetricsCard(
                    'Response Rate',
                    `${mockMetrics.responseRate}%`,
                    <TrendingUp className="text-green-400" size={20} />
                )}
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Sentiment Distribution</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <ThumbsUp className="text-green-400 mb-2" size={24} />
                        <span className="text-2xl font-bold text-gray-100">{mockMetrics.positivePercentage}%</span>
                        <span className="text-sm text-gray-400">Positive</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <MessageSquare className="text-gray-400 mb-2" size={24} />
                        <span className="text-2xl font-bold text-gray-100">{mockMetrics.neutralPercentage}%</span>
                        <span className="text-sm text-gray-400">Neutral</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <ThumbsDown className="text-red-400 mb-2" size={24} />
                        <span className="text-2xl font-bold text-gray-100">{mockMetrics.negativePercentage}%</span>
                        <span className="text-sm text-gray-400">Negative</span>
                    </div>
                </div>
            </div>

            {/* Recent Feedback */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Recent Feedback</h3>
                <div className="space-y-4">
                    {mockFeedbackData.map((feedback) => (
                        <div key={feedback.id} className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                    <Users className="text-blue-400" size={20} />
                                    <div>
                                        <h4 className="text-gray-100 font-medium">{feedback.candidateName}</h4>
                                        <p className="text-sm text-gray-400">{feedback.position}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    {renderSentimentIndicator(feedback.sentiment)}
                                    <span className="text-gray-100 font-bold">{feedback.rating}/5</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-3">
                                <div className="flex items-center space-x-2">
                                    <Star className="text-yellow-400" size={16} />
                                    <span className="text-sm text-gray-400">Technical: {feedback.technicalScore}%</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Users className="text-purple-400" size={16} />
                                    <span className="text-sm text-gray-400">Cultural: {feedback.culturalScore}%</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MessageSquare className="text-blue-400" size={16} />
                                    <span className="text-sm text-gray-400">Communication: {feedback.communicationScore}%</span>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">{feedback.comments}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {feedback.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs border border-blue-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <Calendar size={14} className="text-gray-400" />
                                    <span className="text-gray-400">{feedback.date}</span>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center space-x-2">
                                {feedback.status === 'reviewed' && (
                                    <span className="flex items-center space-x-1 text-xs text-green-400">
                                        <Check size={12} />
                                        <span>Reviewed</span>
                                    </span>
                                )}
                                {feedback.status === 'pending' && (
                                    <span className="flex items-center space-x-1 text-xs text-yellow-400">
                                        <Clock size={12} />
                                        <span>Pending Review</span>
                                    </span>
                                )}
                                {feedback.status === 'flagged' && (
                                    <span className="flex items-center space-x-1 text-xs text-red-400">
                                        <AlertCircle size={12} />
                                        <span>Flagged for Review</span>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeedbackAnalytics;