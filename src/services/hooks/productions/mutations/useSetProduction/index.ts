import { useCustomMutation, createMutationFn } from "@/services/hooks/mutation";
import { ADD_PRODUCTION } from '@/services/hooks/urls/productions';
import { Production } from './interface';

interface UseAddProductionParams {
  successMessage: string;
  errorMessage: string;
}

export const useAddProduction = ({ successMessage, errorMessage }: UseAddProductionParams) => {
  const addProductionMutation = createMutationFn<Production, Production>({
    url: ADD_PRODUCTION(),
    method: 'POST',
  });

  return useCustomMutation<Production, Production>({
    mutationKey: ['addProduction'],
    mutationFn: addProductionMutation,
    successMessage,
    errorMessage,
  });
};

