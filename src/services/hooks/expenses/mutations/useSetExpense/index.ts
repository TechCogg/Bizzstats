import { useCustomMutation, createMutationFn } from "@/services/hooks/mutation";
import { ADD_EXPENSE } from '@/services/hooks/urls/expenses';
import { Expense } from './interface';

interface UseAddExpenseParams {
  successMessage: string;
  errorMessage: string;
}

export const useAddExpense = ({ successMessage, errorMessage }: UseAddExpenseParams) => {
  const addExpenseMutation = createMutationFn<Expense, Expense>({
    url: ADD_EXPENSE(),
    method: 'POST',
  });

  return useCustomMutation<Expense, Expense>({
    mutationKey: ['add-expense'],
    mutationFn: addExpenseMutation,
    successMessage,
    errorMessage,
  });
};

