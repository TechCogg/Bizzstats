import React, { ChangeEvent } from "react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  quotationFormSchema,
  QuotationFormSchema,
} from "../Schema/QuotationSchema";
import type { FormFieldProps, QuotationForm } from "../type/QuotationType";
import { UseFormReturn } from "react-hook-form";
const quotationFields: FormFieldProps<QuotationForm>[] = [
    {
      name: "serviceType",
      label: "Select types of service",
      type: "select",
      required: true,
      options: ["Service A", "Service B", "Service C"],
    },
    {
      name: "subscribe",
      label: "Subscribe?",
      type: "checkbox",
      helperText: "This Invoice Will be automatically generated",
    },
    {
      name: "customer",
      label: "Customer",
      type: "text",
      placeholder: "Enter customer name",
      required: true,
    },
    {
      name: "payTerm",
      label: "Pay term",
      type: "select",
      required: true,
      options: ["Net 30", "Net 60", "Net 90"],
    },
    {
      name: "quotationDate",
      label: "Quotation Date",
      type: "datetime",
      required: true,
    },
    {
      name: "quotationScheme",
      label: "Quotation Scheme",
      type: "text",
      placeholder: "Enter quotation scheme",
      required: true,
    },
    {
      name: "quotationNo",
      label: "Quotation No",
      type: "text",
      placeholder: "Leave blank to auto generate",
    },
    {
      name: "document",
      label: "Attach Document",
      type: "file",
      helperText: "Max File size: 5MB.",
    },
    {
      name: "selectTable",
      label: "Select Table",
      type: "select",
      required: true,
      options: ["Table 1", "Table 2", "Table 3"],
    },
    {
      name: "serviceStaff",
      label: "Select service staff",
      type: "select",
      required: true,
      options: ["Staff A", "Staff B", "Staff C"],
    },
  ];
  

interface QuotationInformationSectionProps {
  onFormStateChange: (methods: UseFormReturn< QuotationFormSchema>) => void;

}

export function QuotationInformationSection({
  onFormStateChange,

}: QuotationInformationSectionProps) {
  return (
    <>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={quotationFields}
          schema={quotationFormSchema }
          onFormStateChange={onFormStateChange}
        />
      </div>
     
    </>
  );
}
