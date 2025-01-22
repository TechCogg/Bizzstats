import React, { ChangeEvent } from "react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  quotationFormSchema,
  QuotationFormSchema,
} from "../Schema/QuotationSchema";
import type { FormFieldProps, ProductItemForm} from "../type/QuotationType";
import { UseFormReturn } from "react-hook-form";
const productFields: FormFieldProps<ProductItemForm>[] = [
    {
      name: "productName",
      label: "Product Name",
      type: "text",
      required: true,
      placeholder: "Enter product name",
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      required: true,
      placeholder: "Enter product SKU",
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "text",
      required: true,
      placeholder: "Enter quantity",
    },
    {
      name: "unitPrice",
      label: "Unit Price",
      type: "text",
      required: true,
      placeholder: "Enter unit price",
    },
    {
      name: "discount",
      label: "Discount",
      type: "text",
      placeholder: "Enter discount amount",
    },
    {
      name: "priceIncTax",
      label: "Price (Inc. Tax)",
      type: "text",
      required: true,
      placeholder: "Enter price including tax",
    },
    {
      name: "subtotal",
      label: "Subtotal",
      type: "text",
      required: true,
      placeholder: "Subtotal will be calculated",
    },
  ];
  
  

interface ProductSectionProps {
  onFormStateChange: (methods: UseFormReturn< QuotationFormSchema>) => void;

}

export function ProductSection({
  onFormStateChange,

}: ProductSectionProps) {
  return (
    <>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={productFields}
          schema={quotationFormSchema }
          onFormStateChange={onFormStateChange}
        />
      </div>
     
    </>
  );
}
