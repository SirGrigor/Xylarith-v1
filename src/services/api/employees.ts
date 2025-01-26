import { Employee } from '../../types/hr';
import { createApiEndpoint } from '../../hooks/useApi';

export const employeesApi = createApiEndpoint<Employee>('/employees');
