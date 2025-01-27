import { FC } from 'react';
import { EmployeeProfile } from '@/types/employeeProfile';
import { MapPin, Briefcase, Clock, Mail, Phone, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface EmployeeCardProps {
  employee: EmployeeProfile;
  onClick: (employee: EmployeeProfile) => void;
}

type StatusColorType = {
  [key in 'active' | 'onLeave' | 'inactive']: {
    bg: string;
    text: string;
    border: string;
  };
};

export const EmployeeCard: FC<EmployeeCardProps> = ({ employee, onClick }) => {
  const statusColors: StatusColorType = {
    active: {
      bg: 'bg-green-400/10',
      text: 'text-green-400',
      border: 'border-green-400/20'
    },
    onLeave: {
      bg: 'bg-yellow-400/10',
      text: 'text-yellow-400',
      border: 'border-yellow-400/20'
    },
    inactive: {
      bg: 'bg-red-400/10',
      text: 'text-red-400',
      border: 'border-red-400/20'
    }
  };

  const getStatusColor = (status: string) => {
    const normalizedStatus = status.toLowerCase() as keyof StatusColorType;
    return statusColors[normalizedStatus] || {
      bg: 'bg-gray-400/10',
      text: 'text-gray-400',
      border: 'border-gray-400/20'
    };
  };

  const getInitials = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getTopSkills = () => {
    const allSkills = [
      ...employee.skills.technical,
      ...employee.skills.soft,
      ...employee.skills.leadership,
      ...employee.skills.core
    ].sort((a, b) => b.level - a.level);

    return allSkills.slice(0, 3);
  };

  const statusColor = getStatusColor(employee.employmentDetails.status);

  return (
      <Card
          onClick={() => onClick(employee)}
          className="group hover:border-gray-700 transition-all duration-300 cursor-pointer bg-gray-900/50 backdrop-blur-sm border-gray-800"
      >
        <CardHeader className="p-6">
          <div className="flex items-center space-x-4">
            {employee.personalInfo.avatar ? (
                <img
                    src={employee.personalInfo.avatar}
                    alt={`${employee.personalInfo.firstName} ${employee.personalInfo.lastName}`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-800 group-hover:border-gray-700 transition-colors duration-300"
                />
            ) : (
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-700 text-gray-400 text-lg font-semibold">
                  {getInitials(employee.personalInfo.firstName, employee.personalInfo.lastName)}
                </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
                {employee.personalInfo.firstName} {employee.personalInfo.lastName}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-400 truncate">{employee.employmentDetails.title}</p>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-500 truncate">{employee.employmentDetails.department}</p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <div className="flex items-center justify-between mb-4">
            <Badge
                variant="outline"
                className={`${statusColor.bg} ${statusColor.text} ${statusColor.border}`}
            >
              {employee.employmentDetails.status}
            </Badge>
            <div className="flex items-center space-x-1 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-xs">
              Joined {new Date(employee.employmentDetails.startDate).getFullYear()}
            </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span className="truncate">{employee.personalInfo.email}</span>
            </div>
            {employee.personalInfo.phone && (
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>{employee.personalInfo.phone}</span>
                </div>
            )}
          </div>

          <div className="mt-4">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-4 h-4 text-gray-400" />
              <p className="text-sm text-gray-400">Top Skills</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {getTopSkills().map((skill) => (
                  <Badge
                      key={skill.name}
                      variant="outline"
                      className="bg-blue-500/10 text-blue-400 border-blue-400/20 hover:bg-blue-500/20"
                  >
                    {skill.name} • {skill.level}/5
                  </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
  );
};