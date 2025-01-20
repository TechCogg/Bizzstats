import { createMutationFn, useCustomMutation } from "@/services/hooks/mutation";
import { DELETE_PURCHASE } from "@/services/hooks/urls/purchases";

interface UseDeletePurchaseParams {
  successMessage: string;
  errorMessage: string;
}

interface DeletePurchaseVariables {
  PurchaseId: string | number;
}

export const useDeletePurchase = ({ successMessage, errorMessage }: UseDeletePurchaseParams) => {
  const deletePurchaseMutation = (variables: DeletePurchaseVariables) => {
    const url = DELETE_PURCHASE(variables.PurchaseId);
    return createMutationFn<void, DeletePurchaseVariables>({
      url, 
      method: 'DELETE',
    })(variables);
  };

  return useCustomMutation<void, DeletePurchaseVariables>({
    mutationKey: ['deletePurchase'],
    mutationFn: deletePurchaseMutation,  
    successMessage,
    errorMessage,
  });
};
