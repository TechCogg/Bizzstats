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

export interface FormFieldProps<T> {
  name: keyof T;
  label: string;
  type: "text" | "select" | "file" | "checkbox" |"datetime" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  helperText?: string;
  hasInfoIcon?: boolean;
}
