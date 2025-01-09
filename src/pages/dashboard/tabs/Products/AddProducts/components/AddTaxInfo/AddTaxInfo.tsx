import React from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  TaxFormSchema,
  taxFormSchema,
} from "../Schema/AddTaxSchema";
import type { FormFieldProps,TaxFormData } from "../type/ProductType";
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
    name: "incTax",
    label: "Inc. tax",
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
    name: "excTax",
    label: "Exc. tax",
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
  onSubmit: (data: any) => void; // Callback to pass combined data to the parent
}

export function TaxInformationSection({ onSubmit }: TaxInformationSectionProps) {
  const handleSubmit = (formData: Partial<TaxFormData>, formIndex: number) => {
    // Dynamically handle each form's data and combine into one object
    formResults[`form${formIndex}`] = formData;

    // Combine all form data
    const combinedData = Object.values(formResults).reduce(
      (acc, current) => ({ ...acc, ...current }),
      {}
    );

    // Pass combined data to parent
    onSubmit(combinedData);
  };

  const formResults: Record<string, Partial<TaxFormData>> = {};


  return (
    <Card
      className="p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}
    >
      <div className="space-y-6">
        <ReusableForm
           fields={fields1}
           onSubmit={(data) => handleSubmit(data, 1)}
           schema={taxFormSchema}
        />

        {/* Price Information Grid */}
        <div>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-green-600 text-white p-2 text-sm font-medium">
              Default Purchase Price
            </div>
            <div className="bg-green-600 text-white p-2 text-sm font-medium flex items-center gap-2">
              % Margin(%)
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Set margin percentage</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="bg-green-600 text-white p-2 text-sm font-medium">
              Default Selling Price
            </div>
            <div className="bg-green-600 text-white p-2 text-sm font-medium">
              Product Image
            </div>
          </div>
        </div>

        <ReusableForm
          fields={fields2}
          onSubmit={(data) => handleSubmit(data, 1)}
          schema={taxFormSchema}
        />

      </div>
    </Card>
  );
}
