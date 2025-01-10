import { useMutation, UseMutationOptions, MutationKey } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { api } from '@/services/api'; // Assuming you have an api instance set up

// Define the structure for the mutation function parameters
interface MutationFnParams<TData, TVariables> {
  url: string;
  method: 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
}

// Create a type-safe mutation function creator
export const createMutationFn = <TData, TVariables>({
  url,
  method,
  headers,
}: MutationFnParams<TData, TVariables>) => {
  return async (variables: TVariables): Promise<TData> => {
    const config: AxiosRequestConfig = {
      url,
      method,
      headers,
      data: variables,
    };

    const { data } = await api.request<TData>(config);
    return data;
  };
};

// Define the structure for useMutation parameters
interface UseMutationParams<TData, TVariables, TContext = unknown> {
  mutationKey: MutationKey;
  mutationFn: (variables: TVariables) => Promise<TData>;
  options?: Omit<
    UseMutationOptions<TData, AxiosError, TVariables, TContext>,
    'mutationKey' | 'mutationFn'
  >;
}

// Create a custom hook for mutations
export const useCustomMutation = <TData, TVariables, TContext = unknown>({
  mutationKey,
  mutationFn,
  options,
}: UseMutationParams<TData, TVariables, TContext>) => {
  return useMutation<TData, AxiosError, TVariables, TContext>({
    mutationKey,
    mutationFn,
    ...options,
  });
};

