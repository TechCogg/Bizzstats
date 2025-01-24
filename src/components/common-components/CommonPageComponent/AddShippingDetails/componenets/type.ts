
export interface ShippingForm {
    shippingDetails: string
    shippingAddress: string;
    shippingCharges: string;
    shippingStatus: string;
    deliveredTo: string;
    deliveryPerson?: string;
    shippingDocument?: File | null;
  }
  export interface AdditionalExpense {
    expenseName: string;
    amount: string;
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
  