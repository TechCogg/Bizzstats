import { useCustomMutation, createMutationFn } from "@/services/hooks/mutation";
import { ADD_DRAFT } from '@/services/hooks/urls/sales';
import { Draft} from './interface';

interface UseAddDraftParams {
  successMessage: string;
  errorMessage: string;
}

export const useAddDraft = ({ successMessage, errorMessage }: UseAddDraftParams) => {
  const addDraftMutation = createMutationFn<Draft, Draft>({
    url: ADD_DRAFT(),
    method: 'POST',
  });

  return useCustomMutation<Draft, Draft>({
    mutationKey: ['add-draft'],
    mutationFn: addDraftMutation,
    successMessage,
    errorMessage,
  });
};

