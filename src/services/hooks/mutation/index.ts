import { useMutation, UseMutationOptions, MutationKey } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { api } from '@/services/api';
import { showToast } from '@/components/common-components/Toastify/Toastify';

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
  successMessage?: string;
  errorMessage?: string;
}

// Create a custom hook for mutations
export const useCustomMutation = <TData, TVariables, TContext = unknown>({
  mutationKey,
  mutationFn,
  options,
  successMessage,
  errorMessage,
}: UseMutationParams<TData, TVariables, TContext>) => {
  return useMutation<TData, AxiosError, TVariables, TContext>({
    mutationKey,
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      if (successMessage) {
        showToast(successMessage, 'success');
      }
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      if (errorMessage) {
        showToast(errorMessage, 'error');
      } else {
        showToast(error.message || 'An error occurred', 'error');
      }
      options?.onError?.(error, variables, context);
    },
  });
};

