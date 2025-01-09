export interface ProductFormData {
  productName: string;
  itemCode: string;
  barcodeType: string;
  unit: string;
  brand: string;
  category: string;
  subCategory: string;
  businessLocation: string;
  alertQuantity: string;
  productType: string;
  productImage: FileList;
  manageStock: boolean;

}
export type TaxFormData = {
  sellingPriceTaxType?: string;
  applicableTax?: string;
  productType?: string;
  exctax?: string;
  incTax?: string;
  margin?: string;
  excTax?: string;
  productImage?: FileList;
};

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
