import React, { ChangeEvent } from "react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  gopFormSchema,
  GopFormSchema,
} from "../Schema/GopSchema";
import type { FormFieldProps, GopForm } from "../type/GopType";
import { UseFormReturn } from "react-hook-form";
const gopFields1: FormFieldProps<GopForm>[] = [
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
      name: "gopDate",
      label: "Gate Out Pass Date",
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
  const gopFields2: FormFieldProps<GopForm>[] = [
    {
      name: "vehicleDetails",
      label: "Vehicle Details",
      type: "textarea",

    },
  ];

interface GopInformationSectionProps {
  onFormStateChange1: (methods: UseFormReturn< GopFormSchema>) => void;
  onFormStateChange2: (methods: UseFormReturn< GopFormSchema>) => void;

}

export function GopInformationSection({
  onFormStateChange1,
  onFormStateChange2,

}: GopInformationSectionProps) {
  return (
    <>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={gopFields1}
          schema={gopFormSchema }
          onFormStateChange={onFormStateChange1}
        />
      </div>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={gopFields2}
          schema={gopFormSchema }
          onFormStateChange={onFormStateChange2}
          columns={1}
        />
      </div>
      
     
    </>
  );
}
