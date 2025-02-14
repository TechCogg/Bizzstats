export interface GopForm {
  serviceType: string;
  subscribe: boolean;
  customer: string;
  payTerm: string;
  gopDate: string;
  invoiceScheme: string;
  invoiceNo?: string;
  document?: File | null;
  salesOrder?: string;
  selectTable: string;
  serviceStaff: string;
  vehicleDetails: string;
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
