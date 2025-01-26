import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../components/dashboard/Dashboard';
import { EmployeeList } from '../components/employees/EmployeeList';
import { Calendar } from '../components/calendar/Calendar';
import { PerformanceTracker } from '../components/performance/PerformanceTracker';
import { Layout } from '../components/layout/Layout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="performance" element={<PerformanceTracker />} />
      </Route>
    </Routes>
  );
};
