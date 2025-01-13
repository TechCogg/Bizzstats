import { createMutationFn, useCustomMutation } from "@/services/hooks/mutation";
import { DELETE_PRODUCT } from "@/services/hooks/urls/products";

interface UseDeleteProductParams {
  successMessage: string;
  errorMessage: string;
}

interface DeleteProductVariables {
  ProductId: string | number;
}

export const useDeleteProduct = ({ successMessage, errorMessage }: UseDeleteProductParams) => {
  const deleteProductMutation = (variables: DeleteProductVariables) => {
    const url = DELETE_PRODUCT(variables.ProductId);
    return createMutationFn<void, DeleteProductVariables>({
      url, 
      method: 'DELETE',
    })(variables);
  };

  return useCustomMutation<void, DeleteProductVariables>({
    mutationKey: ['deleteProduct'],
    mutationFn: deleteProductMutation,  
    successMessage,
    errorMessage,
  });
};
