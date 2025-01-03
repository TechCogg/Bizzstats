import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { api } from '@/services/api';

interface QueryFnConfig<T = unknown> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: Record<string, unknown>;
  data?: unknown;
  headers?: Record<string, string>;
}

export const createQueryFn = <T = unknown>(config: QueryFnConfig<T>) => {
  return async (): Promise<T> => {
    const { url, method = 'GET', params, data, headers } = config;
    const axiosConfig: AxiosRequestConfig = {
      url,
      method,
      params,
      data,
      headers,
    };

    try {
      const response = await api.request<T>(axiosConfig);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  };
};

interface UseFetchQueryOptions<T = unknown> {
  queryKey: QueryKey;
  fetchFn: () => Promise<T>;
  options?: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'>;
}

export const useFetchQuery = <T = unknown>({
  queryKey,
  fetchFn,
  options,
}: UseFetchQueryOptions<T>) => {
  return useQuery<T, Error>({
    queryKey,
    queryFn: fetchFn,
    ...options,
  });
};

