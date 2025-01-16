import { createMutationFn, useCustomMutation } from "@/services/hooks/mutation";
import { UPDATE_PRODUCT } from "@/services/hooks/urls/products";
import { api } from "@/services/api";

interface UseUpdateProductLocationParams {
  successMessage: string;
  errorMessage: string;
}

interface UpdateProductLocationVariables {
  ProductId: string | number;
  businessLocation: string | string[];
  existingProductData: any; // Add this to include existing product data
}

export const useUpdateProductLocation = ({ successMessage, errorMessage }: UseUpdateProductLocationParams) => {
  const updateProductLocationMutation = async (variables: UpdateProductLocationVariables) => {
    const url = UPDATE_PRODUCT(variables.ProductId);
    
    // Merge the existing data with the new businessLocation
    const updatedProduct = {
      ...variables.existingProductData,
      businessLocation: variables.businessLocation,
    };

    // Now update the product with all fields
    return createMutationFn<void, typeof updatedProduct>({
      url,
      method: "PUT",
    })(updatedProduct);
  };

  return useCustomMutation<void, UpdateProductLocationVariables>({
    mutationKey: ["updateProductLocation"],
    mutationFn: updateProductLocationMutation,
    successMessage,
    errorMessage,
  });
};

