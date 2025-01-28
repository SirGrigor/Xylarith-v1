import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { AppLayout } from '@/layouts/AppLayout';
import { Dashboard } from '@/pages/Dashboard';
import { Skills } from '@/pages/Skills';
import { Lifecycle } from '@/pages/Lifecycle';
import { Analytics } from '@/pages/Analytics';
import { NotFound } from '@/pages/NotFound';
import { Employees } from '@/pages/Employees';
import { Calendar } from '@/pages/Calendar';
import { Inbox } from '@/pages/Inbox';

export const AppRoutes: FC = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />

            {/* Protected App Routes */}
            <Route path="/app" element={<AppLayout />}>
                <Route index element={<Navigate to="/app/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="inbox" element={<Inbox />} />
                <Route path="employees" element={<Employees />} />
                <Route path="skills" element={<Skills />} />
                <Route path="lifecycle/*" element={<Lifecycle />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="analytics/*" element={<Analytics />} />
            </Route>

            {/* 404 and Redirects */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};