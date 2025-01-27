import { FC } from 'react';
import { EmployeeProfile } from '@/types/employeeProfile';
import { format } from 'date-fns';
import { X, MapPin, Briefcase, Calendar, Phone, Mail, User, Shield, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import SkillOverview from "@/components/skills/SkillOverview.tsx";

interface EmployeeProfileViewProps {
  employee: EmployeeProfile;
  onClose: () => void;
}

export const EmployeeProfileView: FC<EmployeeProfileViewProps> = ({
                                                                    employee,
                                                                    onClose
                                                                  }) => {
  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-400/10 text-green-400 border-green-400/20',
      onLeave: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
      inactive: 'bg-red-400/10 text-red-400 border-red-400/20'
    };
    // @ts-ignore
    return status in colors ? colors[status] : 'bg-gray-400/10 text-gray-400 border-gray-400/20';
  };

  return (
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 h-full flex flex-col">
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Employee Profile</h2>
          <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Header Information */}
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader className="p-6">
                <div className="flex items-start space-x-6">
                  {employee.personalInfo.avatar ? (
                      <img
                          src={employee.personalInfo.avatar}
                          alt={`${employee.personalInfo.firstName} ${employee.personalInfo.lastName}`}
                          className="w-24 h-24 rounded-full object-cover border-2 border-gray-800"
                      />
                  ) : (
                      <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-700">
                        <User className="w-12 h-12 text-gray-400" />
                      </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">
                        {employee.personalInfo.firstName} {employee.personalInfo.lastName}
                      </h3>
                      <Badge className={getStatusColor(employee.employmentDetails.status)}>
                        {employee.employmentDetails.status}
                      </Badge>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-gray-400">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{employee.employmentDetails.title}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{employee.employmentDetails.department}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Joined {format(new Date(employee.employmentDetails.startDate), 'MMMM yyyy')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{employee.personalInfo.email}</span>
                    </div>
                    {employee.personalInfo.phone && (
                        <div className="flex items-center text-gray-400">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{employee.personalInfo.phone}</span>
                        </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Shield className="w-4 h-4 mr-2" />
                      <span>Employee ID: {employee.employmentDetails.id}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Contract: {employee.employmentDetails.contractType}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Skills & Competencies</h4>
              <SkillOverview skills={employee.skills} />
            </div>

            {/* Performance Section */}
            {employee.performance?.ratings && employee.performance.ratings.length > 0 && (
                <Card className="border-gray-800 bg-gray-900/50">
                  <CardHeader>
                    <h4 className="text-lg font-semibold text-white">Latest Performance</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {employee.performance.ratings.slice(0, 1).map((rating, index) => (
                          <div key={index} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-400">Period</p>
                                <p className="text-sm font-medium text-white">{rating.period}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-400">Score</p>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm font-medium text-white">{rating.score}/5</span>
                                  <Badge className="bg-blue-500/10 text-blue-400">
                                    {rating.score >= 4.5 ? 'Outstanding' :
                                        rating.score >= 4.0 ? 'Excellent' :
                                            rating.score >= 3.5 ? 'Very Good' :
                                                rating.score >= 3.0 ? 'Good' : 'Needs Improvement'}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            {rating.comments && (
                                <div>
                                  <p className="text-sm text-gray-400">Feedback</p>
                                  <p className="text-sm text-white mt-1">{rating.comments}</p>
                                </div>
                            )}
                          </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
            )}

            {/* Development Section */}
            {employee.development?.trainingCompleted && employee.development.trainingCompleted.length > 0 && (
                <Card className="border-gray-800 bg-gray-900/50">
                  <CardHeader>
                    <h4 className="text-lg font-semibold text-white">Recent Training</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {employee.development.trainingCompleted.map((training, index) => (
                          <div key={index} className="p-4 bg-gray-800/50 rounded-lg">
                            <div className="flex items-start justify-between">
                              <div>
                                <h5 className="text-white font-medium">{training.name}</h5>
                                <p className="text-sm text-gray-400 mt-1">Provider: {training.provider}</p>
                              </div>
                              <Badge className="bg-green-500/10 text-green-400">
                                {training.score}%
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-400 mt-2">
                              Completed: {format(new Date(training.completionDate), 'PP')}
                            </p>
                          </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
            )}
          </div>
        </div>
      </div>
  );
};