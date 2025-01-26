import { Skill } from '../../types/hr';
import { createApiEndpoint } from '../../hooks/useApi';

export const skillsApi = createApiEndpoint<Skill>('/skills');
