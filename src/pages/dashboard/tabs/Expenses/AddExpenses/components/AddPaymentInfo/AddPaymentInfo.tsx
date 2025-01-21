import React from "react";
import { Card } from "@/components/ui/card";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  PaymentFormSchema,
  paymentFormSchema,
} from "../Schema/AddPaymentSchema";
import type { FormFieldProps, PaymentFormData } from "../type/ExpenseType";
import { UseFormReturn } from "react-hook-form";
import QuillEditor from "@/components/common-components/QuillEditor/QuillEditor";
import { Label } from "@radix-ui/react-label";

const paymentFields: FormFieldProps<PaymentFormData>[] = [
  {
    name: "amount",
    label: "Amount",
    type: "text",
    required: true,
    placeholder: "Enter amount",
  },
  {
    name: "paidOn",
    label: "Paid On",
    type: "datetime",
  },
  {
    name: "paymentMethod",
    label: "Payment Method",
    type: "select",
    options: ["Cash", "Credit Card", "Bank Transfer", "Other"],
    required: true,
  },
  {
    name: "paymentAccount",
    label: "Payment Account",
    type: "select",
    options: ["Person A", "Person B", "Person C", "Person D"],
  },

];

interface TaxInformationSectionProps {
  onFormStateChange: (methods: UseFormReturn<PaymentFormSchema>) => void;

  editorContent: string;
  setEditorContent: (content: string) => void;
}

export function PaymentInformationSection({
  onFormStateChange,
  editorContent,
  setEditorContent,
}: TaxInformationSectionProps) {
  return (
    <Card
      className="p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}
    >
      <div className="space-y-6 ">
        <ReusableForm
          fields={paymentFields}
          schema={paymentFormSchema}
          onFormStateChange={onFormStateChange}
        />
        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-bold">
            Payment Note:
          </Label>
          <QuillEditor value={editorContent} onChange={setEditorContent} />
        </div>
      </div>
    </Card>
  );
}
