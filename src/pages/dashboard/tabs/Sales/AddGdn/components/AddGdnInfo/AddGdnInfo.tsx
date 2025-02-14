import React, { ChangeEvent } from "react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  gdnFormSchema,
  GdnFormSchema,
} from "../Schema/GdnSchema";
import type { FormFieldProps, GdnForm } from "../type/GdnType";
import { UseFormReturn } from "react-hook-form";
const gdnFields: FormFieldProps<GdnForm>[] = [
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
      name: "gdnDate",
      label: "GDN Date",
      type: "datetime",
      required: true,
    },
    {
      name: "invoiceScheme",
      label: "Invoice Scheme",
      type: "text",
      placeholder: "Enter invoice scheme",
      required: true,
    },
    {
      name: "invoiceNo",
      label: "Invoice No",
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
      name: "salesOrder",
      label: "Sales Order",
      type: "text",
   
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
  const gdnFields2: FormFieldProps<GdnForm>[] = [
    {
      name: "sellNote",
      label: "Sell Note",
      type: "textarea",

    },
  ];

interface GdnInformationSectionProps {
  onFormStateChange: (methods: UseFormReturn< GdnFormSchema>) => void;

}

export function GdnInformationSection({
  onFormStateChange,

}: GdnInformationSectionProps) {
  return (
    <>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={gdnFields}
          schema={gdnFormSchema }
          onFormStateChange={onFormStateChange}
        />
      </div>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={gdnFields2}
          schema={gdnFormSchema }
          onFormStateChange={onFormStateChange}
          columns={1}
        />
      </div>
      
     
    </>
  );
}
