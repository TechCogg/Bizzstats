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

export function TaxInformationSection() {
  const handleSubmit = (data: TaxFormSchema) => {
    console.log("Form submitted:", data);
  };

  return (
    <Card
      className="p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}
    >
      <div className="space-y-6">
        <ReusableForm
          fields={fields1}
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
          schema={taxFormSchema}
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
            Save & Add Opening Stock
          </Button>
          <Button className="bg-pink-500 text-white hover:bg-pink-600">
            Save & Add Another
          </Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Save
          </Button>
        </div>
      </div>
    </Card>
  );
}
