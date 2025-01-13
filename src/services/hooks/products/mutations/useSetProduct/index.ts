import { useCustomMutation, createMutationFn } from "@/services/hooks/mutation";
import { ADD_PRODUCT } from '@/services/hooks/urls/products';
import { Product } from './interface';

interface UseAddProductParams {
  successMessage: string;
  errorMessage: string;
}

export const useAddProduct = ({ successMessage, errorMessage }: UseAddProductParams) => {
  const addProductMutation = createMutationFn<Product, Product>({
    url: ADD_PRODUCT(),
    method: 'POST',
  });

  return useCustomMutation<Product, Product>({
    mutationKey: ['addProduct'],
    mutationFn: addProductMutation,
    successMessage,
    errorMessage,
  });
};

