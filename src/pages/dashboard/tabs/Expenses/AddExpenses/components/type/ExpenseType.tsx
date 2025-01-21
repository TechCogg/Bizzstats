export interface ExpenseFormData {
  businessLocation: string;
  expenseCategory: string;
  subCategory: string;
  referenceNo: string;
  date: string;
  expenseFor: string;
  expenseForContact: string;
  attachDocument: File | null;
  applicableTax: string;
  totalAmount: string;
  expenseNote: string;
  isRefund: boolean;
  isRecurring: boolean;
  recurringInterval: string;
  noOfRepetitions: number;
}

export type PaymentFormData = {
  amount: string;
  paidOn: string;
  paymentMethod:string;
  paymentAccount: string;
  paymentNote: string;
};

export interface FormFieldProps<T> {
  name: keyof T;
  label: string;
  type: "text" | "select" | "file" | "checkbox" |"datetime";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  helperText?: string;
  hasInfoIcon?: boolean;
}
