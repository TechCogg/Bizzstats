import { useCustomMutation, createMutationFn } from "@/services/hooks/mutation";
import { ADD_GDN } from '@/services/hooks/urls/sales';
import { Gdn} from './interface';

interface UseAddGdnParams {
  successMessage: string;
  errorMessage: string;
}

export const useAddGdn = ({ successMessage, errorMessage }: UseAddGdnParams) => {
  const addGdnMutation = createMutationFn<Gdn, Gdn>({
    url: ADD_GDN(),
    method: 'POST',
  });

  return useCustomMutation<Gdn, Gdn>({
    mutationKey: ['add-gdn'],
    mutationFn: addGdnMutation,
    successMessage,
    errorMessage,
  });
};

