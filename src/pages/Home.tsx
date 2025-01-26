import { FC } from 'react';

export const Home: FC = () => {
  const currentDate = new Date();
  const greeting = getGreeting();
  const userName = "Ilja"; // This would come from auth context in a real app

  function getGreeting() {
    const hour = currentDate.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="text-gray-500">{currentDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
        <h1 className="text-3xl font-bold text-gray-900">{greeting}, {userName}</h1>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Inbox Preview */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Inbox</h2>
          <div className="text-gray-500">1 task</div>
          <button className="mt-4 w-full py-2 text-center border rounded-lg hover:bg-gray-50">
            Open inbox
          </button>
        </div>

        {/* Calendar Preview */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Calendars</h2>
          <div className="text-gray-500">This month</div>
          <button className="mt-4 w-full py-2 text-center border rounded-lg hover:bg-gray-50">
            View calendar
          </button>
        </div>
      </div>
    </div>
  );
};
