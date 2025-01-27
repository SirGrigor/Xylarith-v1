import { FC, useState } from 'react';
import { EmployeeCard } from '../components/employees/EmployeeCard';
import { EmployeeProfileView } from '../components/employees/EmployeeProfile';
import { mockEmployeeData } from '../data/mockEmployeeData.ts';
import { EmployeeProfile } from '../types/employeeProfile.ts';

export const Employees: FC = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeProfile | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = mockEmployeeData.filter(employee => 
    `${employee.personalInfo.firstName} ${employee.personalInfo.lastName} ${employee.employmentDetails.title}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white">Employees</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Add Employee
          </button>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
        <div className="overflow-y-auto">
          <div className="grid gap-4">
            {filteredEmployees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onClick={setSelectedEmployee}
              />
            ))}
          </div>
        </div>
        
        <div className="overflow-hidden">
          {selectedEmployee ? (
            <EmployeeProfileView
              employee={selectedEmployee}
              onClose={() => setSelectedEmployee(null)}
            />
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-300">
                  Select an employee to view details
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
