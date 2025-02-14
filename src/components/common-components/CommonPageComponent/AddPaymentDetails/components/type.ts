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
    type: "text" | "select" | "file" | "checkbox" |"datetime" | "textarea";
    required?: boolean;
    placeholder?: string;
    options?: string[];
    helperText?: string;
    hasInfoIcon?: boolean;
  }
  