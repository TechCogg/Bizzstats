import React, { ChangeEvent } from "react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  discountSchema ,
  DiscountSchema ,
} from "./componenets/Schema";
import type { FormFieldProps, DiscountForm} from "./componenets/type";
import { UseFormReturn } from "react-hook-form";
const discountFields: FormFieldProps<DiscountForm>[] = [
    {
      name: "discountType",
      label: "Discount Type",
      type: "select",
      required: true,
      options: ["Percentage", "Fixed Amount"],
    },
    {
      name: "discountAmount",
      label: "Discount Amount",
      type: "text",
      required: true,
      placeholder: "Enter discount amount",
    },
    {
      name: "orderTax",
      label: "Order Tax",
      type: "text",
      required: true,
      placeholder: "Enter order tax",
    },
    {
      name: "sellNote",
      label: "Sell Note",
      type: "textarea",
      placeholder: "Add any additional notes",
    },
  ];
  
  

interface DiscountSectionProps {
  onFormStateChange: (methods: UseFormReturn< DiscountSchema >) => void;

}

export function DiscountSection({
  onFormStateChange,

}: DiscountSectionProps) {
  return (
    <>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={discountFields}
          schema={discountSchema  }
          onFormStateChange={onFormStateChange}
        />
      </div>
     
    </>
  );
}
