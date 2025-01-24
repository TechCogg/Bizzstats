export interface DiscountForm {
    discountType: string;
    discountAmount: string;
    orderTax: string;
    sellNote?: string;
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