import { FC } from 'react';

export const DashboardPreview: FC = () => {
  return (
    <div className="w-full bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 flex flex-col items-center">
                <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Add Employee
              </button>
              <button className="p-4 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-400 flex flex-col items-center">
                <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Meeting
              </button>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { text: 'New employee onboarding: Sarah Chen', time: '2 hours ago' },
                { text: 'Performance review scheduled', time: '4 hours ago' },
                { text: 'Training completion: React Advanced', time: 'Yesterday' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-400"></div>
                  <div>
                    <p className="text-gray-300">{activity.text}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Team Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Total Employees</p>
                <p className="text-2xl font-bold text-white">1,234</p>
                <p className="text-sm text-emerald-400">↑ 12% vs last month</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Open Positions</p>
                <p className="text-2xl font-bold text-white">23</p>
                <p className="text-sm text-blue-400">5 new this week</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Upcoming Reviews</h3>
            <div className="space-y-3">
              {[
                { name: 'Michael Scott', date: 'Mar 15', department: 'Sales' },
                { name: 'Jim Halpert', date: 'Mar 16', department: 'Marketing' },
                { name: 'Pam Beesly', date: 'Mar 17', department: 'Design' },
              ].map((review, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-300">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.department}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
