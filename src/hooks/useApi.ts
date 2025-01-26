import { useState, useCallback } from 'react';
import api from '../utils/api';
import { AxiosError } from 'axios';

interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: (...args: any[]) => Promise<void>;
}

export function useApi<T>(
  apiFunction: (...args: any[]) => Promise<T>
): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (...args: any[]) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiFunction(...args);
      setData(response);
    } catch (err) {
      const error = err as AxiosError;
      setError(new Error(error.message));
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  return { data, loading, error, execute };
}

// API function creators
export const createApiEndpoint = <T>(endpoint: string) => ({
  getAll: () => 
    api.get<T[]>(endpoint).then(response => response.data),
  getById: (id: string) => 
    api.get<T>(`${endpoint}/${id}`).then(response => response.data),
  create: (data: Partial<T>) => 
    api.post<T>(endpoint, data).then(response => response.data),
  update: (id: string, data: Partial<T>) => 
    api.put<T>(`${endpoint}/${id}`, data).then(response => response.data),
  delete: (id: string) => 
    api.delete(`${endpoint}/${id}`).then(response => response.data),
});
