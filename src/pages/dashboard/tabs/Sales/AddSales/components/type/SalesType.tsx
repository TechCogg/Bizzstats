export interface SalesForm {
  serviceType: string;
  subscribe: boolean;
  customer: string;
  payTerm: string;
  saleDate: string;
  status: string;
  invoiceScheme: string;
  invoiceNo?: string;
  document?: File | null;
  salesOrder?: string;
  selectTable: string;
  serviceStaff: string;

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
