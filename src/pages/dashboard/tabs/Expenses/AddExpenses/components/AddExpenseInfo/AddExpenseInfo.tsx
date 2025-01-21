import React, { ChangeEvent } from "react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import { expenseFormSchema,ExpenseFormSchema } from "../Schema/AddExpenseSchema";
import type { FormFieldProps, ExpenseFormData } from "../type/ExpenseType";
import { UseFormReturn } from "react-hook-form";
const expenseFields1: FormFieldProps<ExpenseFormData>[] = [
  {
    name: "businessLocation",
    label: "Business Location",
    type: "select",
    required: true,
    options: ["Lahore", "Karachi", "Islamabad", "Multan"],
  },
  {
    name: "expenseCategory",
    label: "Expense Category",
    type: "select",
    required: true,
    options: ["Office Supplies", "Utilities", "Travel", "Miscellaneous"],
  },
  {
    name: "subCategory",
    label: "Sub Category",
    type: "select",
    options: ["Stationery", "Electricity", "Transport", "Others"],
  },
  {
    name: "referenceNo",
    label: "Reference No",
    type: "text",
    placeholder: "Leave empty to autogenerate",
  },
  {
    name: "date",
    label: "Date",
    type: "datetime",
    required: true,
  },
  {
    name: "expenseFor",
    label: "Expense For",
    type: "select",
    options: ["Person A", "Person B", "Person C", "Person D"],
  },
  {
    name: "expenseForContact",
    label: "Expense For Contact",
    type: "select",
    options: ["0301", "0302", "0303", "0304"],
  },
  {
    name: "attachDocument",
    label: "Attach Document",
    type: "file",
    helperText: "Max File size: 5MB",
  },
  {
    name: "applicableTax",
    label: "Applicable Tax",
    type: "select",
    required: true,
    options: ["None", "VAT", "GST"],
  },
  {
    name: "totalAmount",
    label: "Total Amount",
    type: "text",
    required: true,
    placeholder: "Enter total amount",
  },
  
  {
    name: "isRefund",
    label: "Is Refund?",
    type: "checkbox",
    helperText: "Expense will be refunded and added to net profit",
  },
  {
    name: "expenseNote",
    label: "Expense Note",
    type: "text",
    placeholder: "Add any additional notes",
  },

];
const expenseFields2: FormFieldProps<ExpenseFormData>[] = [
  
  
  {
    name: "isRecurring",
    label: "Is Recurring?",
    type: "checkbox",
    helperText: "Automatically generated expense at regular intervals",
  },
  {
    name: "recurringInterval",
    label: "Recurring Interval",
    type: "select",
    options: ["Days"],
    helperText: "Specify the recurring interval",
  },
  {
    name: "noOfRepetitions",
    label: "No. of Repetitions",
    type: "text",
    placeholder: "Leave blank for infinite repetitions",
  },
];


interface ExpenseInformationSectionProps {
  onForm1StateChange: (methods: UseFormReturn<ExpenseFormSchema>) => void
   onForm2StateChange: (methods: UseFormReturn<ExpenseFormSchema>) => void
}

export function ExpenseInformationSection({
  onForm1StateChange,
  onForm2StateChange,
}: ExpenseInformationSectionProps) {
  return (
    <>
    <div
      className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}
    >
      <ReusableForm
        fields={expenseFields1}
        schema={expenseFormSchema}
        onFormStateChange={onForm1StateChange}
      />
      
    </div>
     <div
     className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
     style={{ borderTop: "4px solid #2563eb" }}
   >
    <ReusableForm
    fields={expenseFields2}
    schema={expenseFormSchema}
    onFormStateChange={onForm2StateChange}
   
  />
  </div>
  </>
  );
}

