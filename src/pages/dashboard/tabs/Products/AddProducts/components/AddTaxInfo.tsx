import React from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CommonForm, ProductFormData } from "@/components/common-components/Forms/CommonForm";

export function TaxInformationSection() {
  const initialValues: ProductFormData = {
    applicableTax: '',
    sellingPriceTaxType: '',
    productType: '',
    exctax: 0,
    margin: 0,
    excTax: 0,
    productImage: null,
  };

  const handleSubmit = (values: ProductFormData) => {
    console.log(values);
    // Handle form submission
  };

  const includedFields: (keyof ProductFormData)[] = [
    
    'sellingPriceTaxType',
    'applicableTax',
    'productType',
    
   
  ];
  const includedFields2: (keyof ProductFormData)[] = [
    
   'exctax',
    'incTax',
    'margin',
    'excTax',
    'productImage'
  
  ];
  return (
    <Card className="p-6 bg-white rounded-lg border border-gray-200 overflow-hidden" style={{ borderTop: "4px solid #2563eb" }}>
      <div className="space-y-6">
        
      <CommonForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      includedFields={includedFields}
    />
       
        {/* Price Information Grid */}
        <div>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-green-600 text-white p-2 text-sm font-medium">Default Purchase Price</div>
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
            <div className="bg-green-600 text-white p-2 text-sm font-medium">Default Selling Price</div>
            <div className="bg-green-600 text-white p-2 text-sm font-medium">Product Image</div>
          </div>

       
        </div>
        <CommonForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      includedFields={includedFields2}
    />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Save & Add Opening Stock</Button>
          <Button className="bg-pink-500 text-white hover:bg-pink-600">Save & Add Another</Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Save</Button>
        </div>
      </div>
    </Card>
  );
}

