import React, { ChangeEvent } from "react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  quotationFormSchema,
  QuotationFormSchema,
} from "../Schema/QuotationSchema";
import type { FormFieldProps, ShippingForm} from "../type/QuotationType";
import { UseFormReturn } from "react-hook-form";
const shippingFields: FormFieldProps<ShippingForm>[] = [
    {
      name: "shippingAddress",
      label: "Shipping Address",
      type: "textarea",
      required: true,
      placeholder: "Enter shipping address",
    },
    {
      name: "shippingCharges",
      label: "Shipping Charges",
      type: "text",
      required: true,
      placeholder: "Enter shipping charges",
    },
    {
      name: "shippingStatus",
      label: "Shipping Status",
      type: "select",
      required: true,
      options: ["Pending", "Shipped", "Delivered", "Cancelled"],
    },
    {
      name: "deliveredTo",
      label: "Delivered To",
      type: "text",
      required: true,
      placeholder: "Enter recipient name",
    },
    {
      name: "deliveryPerson",
      label: "Delivery Person",
      type: "text",
      placeholder: "Enter delivery person's name",
    },
    {
      name: "shippingDocument",
      label: "Shipping Document",
      type: "file",
      helperText: "Max File size: 5MB. ",
    },
  ];
  
interface ShippingSectionProps {
  onFormStateChange: (methods: UseFormReturn< QuotationFormSchema>) => void;

}

export function ShippingSection({
  onFormStateChange,

}: ShippingSectionProps) {
  return (
    <>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={shippingFields}
          schema={quotationFormSchema }
          onFormStateChange={onFormStateChange}
        />
      </div>
     
    </>
  );
}
