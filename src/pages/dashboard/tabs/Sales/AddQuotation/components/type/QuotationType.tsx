export interface QuotationForm {
  serviceType: string;
  subscribe: boolean;
  customer: string;
  payTerm: string;
  quotationDate: string;
  quotationScheme: string;
  quotationNo?: string;
  document?: File | null;
  selectTable: string;
  serviceStaff: string;
}
export interface ProductItemForm {
  productName: string;
  sku: string;
  quantity: string;
  unitPrice: string;
  discount: string;
  priceIncTax: string;
  subtotal: string;
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
