import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { api } from '@/services/api'; // Assuming you have an api instance set up

// Define the structure for the query function parameters
interface QueryFnParams<T> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

// Create a type-safe query function creator
export const createQueryFn = <T>({
  url,
  method = 'GET',
  params,
  headers,
}: QueryFnParams<T>) => {
  return async (): Promise<T> => {
    const config: AxiosRequestConfig = {
      url,
      method,
      params,
      headers,
    };

    const { data } = await api.request<T>(config);
    return data;
  };
};


// Define the structure for useFetchQuery parameters
interface UseFetchQueryParams<T> {
  queryKey: QueryKey;
  fetchFn: () => Promise<T>;
  options?: Omit<UseQueryOptions<T, AxiosError>, 'queryKey' | 'queryFn'>;
}

// Create a custom hook for fetching data
export const useFetchQuery = <T>({
  queryKey,
  fetchFn,
  options,
}: UseFetchQueryParams<T>) => {
  return useQuery<T, AxiosError>({
    queryKey,
    queryFn: fetchFn,
    ...options,
  });
};

