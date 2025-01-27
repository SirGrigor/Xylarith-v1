import { PerformanceGoal } from '../../types/hr';
import { createApiEndpoint } from '../../hooks/useApi';

export const goalsApi = createApiEndpoint<PerformanceGoal>('/goals');
