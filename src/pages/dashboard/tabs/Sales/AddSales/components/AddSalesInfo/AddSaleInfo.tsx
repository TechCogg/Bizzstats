import React, { ChangeEvent } from "react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  salesFormSchema,
  SalesFormSchema,
} from "../Schema/SalesSchema";
import type { FormFieldProps, SalesForm } from "../type/SalesType";
import { UseFormReturn } from "react-hook-form";
const salesFields: FormFieldProps<SalesForm>[] = [
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
      name: "saleDate",
      label: "Sale Date",
      type: "datetime",
      required: true,
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      required: true,
      options: ["Final", "Draft", "Quotation","Proforma"],
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
  

interface SalesInformationSectionProps {
  onFormStateChange: (methods: UseFormReturn< SalesFormSchema>) => void;

}

export function SalesInformationSection({
  onFormStateChange,

}: SalesInformationSectionProps) {
  return (
    <>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={salesFields}
          schema={salesFormSchema }
          onFormStateChange={onFormStateChange}
        />
      </div>
     
    </>
  );
}
