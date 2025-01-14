import React from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import { TaxFormSchema, taxFormSchema } from "../Schema/AddTaxSchema";
import type { FormFieldProps, TaxFormData } from "../type/ProductType";
import { UseFormReturn } from "react-hook-form";

const fields1: FormFieldProps<TaxFormData>[] = [
  {
    name: "sellingPriceTaxType",
    label: "Selling Price Tax Type",
    type: "select",
    options: ["Inclusive", "Exclusive"],
  },
  {
    name: "applicableTax",
    label: "Applicable Tax",
    type: "select",
    options: ["VAT", "GST", "None"],
  },
  {
    name: "productType",
    label: "Product Type",
    type: "select",
    options: ["Single", "Variable"],
  },
];

const fields2: FormFieldProps<TaxFormData>[] = [
  {
    name: "exctax",
    label: "Exc. tax",
    type: "text",
    placeholder: "0.00",
  },
  {
    name: "excTax",
    label: "Exc. tax",
    type: "text",
    placeholder: "0.00",
  },
  {
    name: "margin",
    label: "Margin (%)",
    type: "text",
    placeholder: "0.00",
  },

  {
    name: "incTax",
    label: "Inc. tax",
    type: "text",
    placeholder: "0.00",
  },
  {
    name: "productImage",
    label: "Product Image",
    type: "file",
    helperText: "Max File Size: 5MB\nAspect Ratio should be 1:1",
  },
];

interface TaxInformationSectionProps {
  onForm1StateChange: (methods: UseFormReturn<TaxFormSchema>) => void;
  onForm2StateChange: (methods: UseFormReturn<TaxFormSchema>) => void;
}

export function TaxInformationSection({
  onForm1StateChange,
  onForm2StateChange,
}: TaxInformationSectionProps) {
  return (
    <Card
      className="p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}
    >
      <div className="space-y-6 ">
        <ReusableForm
          fields={fields1}
          schema={taxFormSchema}
          onFormStateChange={onForm1StateChange}
        />

        <div>
          <div className="grid grid-cols-3 gap-x-6">
            <div className="bg-green-500 text-white p-2 text-sm font-medium text-center">
              Default Purchase Price
            </div>
            <div className="bg-green-500 text-center text-white p-2 text-sm font-medium">
              Default Selling Price
            </div>
            <div className="bg-green-500 text-center text-white p-2 text-sm font-medium">
              % Margin(%)
            </div>
          </div>
        </div>

        <ReusableForm
          fields={fields2}
          schema={taxFormSchema}
          onFormStateChange={onForm2StateChange}
        />
      </div>
    </Card>
  );
}
