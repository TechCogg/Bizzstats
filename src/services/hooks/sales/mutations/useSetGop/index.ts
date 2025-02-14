import { useCustomMutation, createMutationFn } from "@/services/hooks/mutation";
import { ADD_GOP } from '@/services/hooks/urls/sales';
import { Gop} from './interface';

interface UseAddGopParams {
  successMessage: string;
  errorMessage: string;
}

export const useAddGop = ({ successMessage, errorMessage }: UseAddGopParams) => {
  const addGopMutation = createMutationFn<Gop, Gop>({
    url: ADD_GOP(),
    method: 'POST',
  });

  return useCustomMutation<Gop, Gop>({
    mutationKey: ['add-gOP'],
    mutationFn: addGopMutation,
    successMessage,
    errorMessage,
  });
};

