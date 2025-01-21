export interface ProductionFormData {
    recipeName: string;
    quantity: string;
    productType: string;
    unit: string;
    itemCode: string;
    ingredient: string;
    qty: string;
    rate: string;
    cost: string;
  
  }

  export interface FormFieldProps<T> {
    name: keyof T;
    label: string;
    type: "text" | "select" | "file" | "checkbox";
    required?: boolean;
    placeholder?: string;
    options?: string[];
    helperText?: string;
    hasInfoIcon?: boolean;
  }
  