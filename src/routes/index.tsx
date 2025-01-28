import {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LandingPage} from '@/pages/LandingPage';
import {AppLayout} from '@/layouts/AppLayout';
import {Dashboard} from '@/pages/Dashboard';
import {Skills} from '@/pages/Skills';
import {Lifecycle} from '@/pages/Lifecycle';
import {Analytics} from '@/pages/Analytics';
import {NotFound} from '@/pages/NotFound';
import {Employees} from '@/pages/Employees';
import {Calendar} from '@/pages/Calendar';
import {Inbox} from '@/pages/Inbox';
import {AnalyticsDashboard, EmployeeLifecycle, FeedbackDashboard} from "@/components/lifecycle/HRDashboard.tsx";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage/>}/>

            {/* Protected App Routes */}
            <Route path="/app" element={<AppLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="inbox" element={<Inbox/>}/>
                <Route path="employees" element={<Employees/>}/>
                <Route path="skills" element={<Skills/>}/>

                {/* HR Lifecycle Section */}
                <Route path="lifecycle/*" element={<Lifecycle/>}>
                    <Route index element={<EmployeeLifecycle/>}/>
                    <Route path="feedback" element={<FeedbackDashboard/>}/>
                    <Route path="onboarding" element={<EmployeeLifecycle/>}/>
                    <Route path="offboarding" element={<EmployeeLifecycle/>}/>
                </Route>

                <Route path="calendar" element={<Calendar/>}/>

                {/* Analytics Section */}
                <Route path="analytics/*" element={<Analytics/>}>
                    <Route index element={<AnalyticsDashboard/>}/>
                    <Route path="feedback" element={<FeedbackDashboard/>}/>
                    <Route path="performance" element={<AnalyticsDashboard/>}/>
                </Route>
            </Route>

            {/* 404 and Redirects */}
            <Route path="/404" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="/404" replace/>}/>
        </Routes>
    );
};
