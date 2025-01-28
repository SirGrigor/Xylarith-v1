import { FC, useMemo } from 'react';
import { SkillRadar } from './SkillRadar';
import { SkillMatrix } from './SkillMatrix';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, Award, Target } from 'lucide-react';
import { CapabilityArea } from '@/types/skills';
import {mockEmployeeData} from "@/data/mockEmployeeData.ts";
import {WindRose} from "@/components/employees/WindRose.tsx";

// Define interfaces for our data structures
interface SkillGroup {
    levels: number[];
    category: string;
}

interface SkillGroups {
    [key: string]: SkillGroup;
}

// Create a basic Card component since CardTitle is missing
const Card: FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
    <div className={`rounded-lg ${className}`}>
        {children}
    </div>
);

const CardHeader: FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="px-6 py-4 border-b border-gray-800">
        {children}
    </div>
);

const CardContent: FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
    <div className={`p-6 ${className || ''}`}>
        {children}
    </div>
);

const EnterpriseSkillsDashboard: FC = () => {
    // Transform all employee skills into radar data
    const aggregatedSkillsData = useMemo(() => {
        const allSkills = mockEmployeeData.flatMap(employee => [
            ...employee.skills.technical,
            ...employee.skills.soft,
            ...employee.skills.leadership,
            ...employee.skills.core
        ]);

        const skillGroups: SkillGroups = allSkills.reduce((acc: SkillGroups, skill) => {
            if (!acc[skill.name]) {
                acc[skill.name] = {
                    levels: [],
                    category: skill.category
                };
            }
            acc[skill.name].levels.push(skill.level);
            return acc;
        }, {});

        return Object.entries(skillGroups).map(([name, data]) => ({
            name,
            level: data.levels.reduce((a, b) => a + b, 0) / data.levels.length,
            category: data.category,
            details: {
                experience: `${data.levels.length} employees`,
                description: `Average proficiency across organization`
            }
        }));
    }, []);

    // Calculate capability scores for the WindRose
    const capabilityAreas = useMemo(() => {
        const areas = [
            'Engineering Excellence',
            'Leadership & Management',
            'Innovation & Research',
            'Client Relations',
            'Product Development',
            'Data & Analytics',
            'Security & Compliance',
            'Agile & Delivery'
        ];

        return areas.map(area => ({
            name: area,
            level: 3 + Math.random() * 2, // Simulated scores
            category: 'capability' // Add required category field
        } as CapabilityArea));
    }, []);

    // Calculate team distribution data
    const teamSkillsData = useMemo(() => {
        const categories = ['Technical', 'Leadership', 'Soft Skills', 'Domain Expertise'];
        return categories.map(category => ({
            categoryId: category.toLowerCase(),
            level: 3 + Math.random() * 2,
            count: Math.floor(mockEmployeeData.length * (0.6 + Math.random() * 0.4))
        }));
    }, []);

    // Calculate high-level metrics
    const metrics = useMemo(() => {
        const totalSkills = aggregatedSkillsData.length;
        const avgSkillLevel = aggregatedSkillsData.reduce((acc, skill) => acc + skill.level, 0) / totalSkills;
        const skillCoverage = (totalSkills / (mockEmployeeData.length * 5)) * 100;

        return {
            averageSkillLevel: avgSkillLevel.toFixed(1),
            skillCoverage: Math.min(100, skillCoverage).toFixed(1),
            totalEmployees: mockEmployeeData.length,
            criticalSkillsGap: Math.floor(Math.random() * 5)
        };
    }, [aggregatedSkillsData]);

    return (
        <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Average Skill Level</p>
                                <h3 className="text-2xl font-bold text-white mt-1">{metrics.averageSkillLevel}/5</h3>
                            </div>
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-blue-400" />
                            </div>
                        </div>
                        <Progress value={Number(metrics.averageSkillLevel) * 20} className="mt-4 bg-gray-700" />
                    </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Skill Coverage</p>
                                <h3 className="text-2xl font-bold text-white mt-1">{metrics.skillCoverage}%</h3>
                            </div>
                            <div className="p-3 bg-green-500/10 rounded-lg">
                                <Target className="w-6 h-6 text-green-400" />
                            </div>
                        </div>
                        <Progress value={Number(metrics.skillCoverage)} className="mt-4 bg-gray-700" />
                    </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Total Employees</p>
                                <h3 className="text-2xl font-bold text-white mt-1">{metrics.totalEmployees}</h3>
                            </div>
                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                <Users className="w-6 h-6 text-purple-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">Critical Skill Gaps</p>
                                <h3 className="text-2xl font-bold text-white mt-1">{metrics.criticalSkillsGap}</h3>
                            </div>
                            <div className="p-3 bg-red-500/10 rounded-lg">
                                <Award className="w-6 h-6 text-red-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                    <CardHeader>
                        <h3 className="text-lg font-semibold text-white">Organization Skill Distribution</h3>
                    </CardHeader>
                    <CardContent>
                        <SkillRadar skills={aggregatedSkillsData} size={400} />
                    </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                    <CardHeader>
                        <h3 className="text-lg font-semibold text-white">Enterprise Capabilities</h3>
                    </CardHeader>
                    <CardContent>
                        <WindRose skills={capabilityAreas} size={400} />
                    </CardContent>
                </Card>
            </div>

            {/* Team Skills Matrix */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <CardHeader>
                    <h3 className="text-lg font-semibold text-white">Skills Coverage by Department</h3>
                </CardHeader>
                <CardContent>
                    <SkillMatrix teamSkills={teamSkillsData} />
                </CardContent>
            </Card>

            {/* Top Skills Overview */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <CardHeader>
                    <h3 className="text-lg font-semibold text-white">Critical Skills Analysis</h3>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {aggregatedSkillsData
                            .sort((a, b) => b.level - a.level)
                            .slice(0, 6)
                            .map((skill, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-lg border border-gray-800 bg-gray-800/50"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h5 className="text-sm font-medium text-white">
                                                {skill.name}
                                            </h5>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {skill.details.experience}
                                            </p>
                                        </div>
                                        <Badge className="bg-blue-500/10 text-blue-400">
                                            {skill.level.toFixed(1)}/5
                                        </Badge>
                                    </div>
                                    <Progress
                                        value={skill.level * 20}
                                        className="mt-2 h-1.5 bg-gray-700"
                                    />
                                </div>
                            ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default EnterpriseSkillsDashboard;