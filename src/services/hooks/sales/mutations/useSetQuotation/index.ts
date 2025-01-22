import { useCustomMutation, createMutationFn } from "@/services/hooks/mutation";
import { ADD_QUOTATION } from '@/services/hooks/urls/sales';
import { Quotation} from './interface';

interface UseAddQuotationParams {
  successMessage: string;
  errorMessage: string;
}

export const useAddQuotation = ({ successMessage, errorMessage }: UseAddQuotationParams) => {
  const addQuotationMutation = createMutationFn<Quotation, Quotation>({
    url: ADD_QUOTATION(),
    method: 'POST',
  });

  return useCustomMutation<Quotation, Quotation>({
    mutationKey: ['add-quotation'],
    mutationFn: addQuotationMutation,
    successMessage,
    errorMessage,
  });
};

