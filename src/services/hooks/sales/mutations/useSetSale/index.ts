import { useCustomMutation, createMutationFn } from "@/services/hooks/mutation";
import { ADD_SALE } from "@/services/hooks/urls/sales";
import { Sale } from "./interface";

interface UseAddSaleParams {
  successMessage: string;
  errorMessage: string;
}

export const useAddSale = ({
  successMessage,
  errorMessage,
}: UseAddSaleParams) => {
  const addSaleMutation = createMutationFn<Sale, Sale>({
    url: ADD_SALE (),
    method: "POST",
  });

  return useCustomMutation<Sale, Sale>({
    mutationKey: ["add-sale"],
    mutationFn: addSaleMutation,
    successMessage,
    errorMessage,
  });
};
