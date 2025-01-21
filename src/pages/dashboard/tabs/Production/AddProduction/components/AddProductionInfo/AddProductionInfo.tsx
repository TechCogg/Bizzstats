import React, { useState } from "react"
import { Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm"
import { productionFormSchema, type ProductionFormSchema } from "../Schema/AddProductionSchema"
import type { FormFieldProps, ProductionFormData } from "../type/ProductionType"
import type { UseFormReturn } from "react-hook-form"

const initialFields: FormFieldProps<ProductionFormData>[] = [
  {
    name: "recipeName",
    label: "Recipe Name",
    type: "text",
    required: true,
    placeholder: "Recipe Name",
  },
  {
    name: "quantity",
    label: "Quantity",
    type: "text",
    required: true,
    placeholder: "Quantity",
  },
  {
    name: "productType",
    label: "Product Type",
    type: "select",
    required: true,
    options: ["Apple", "Banana", "Mango", "Strawberry"],
  },
  {
    name: "unit",
    label: "Unit",
    type: "select",
    required: true,
    options: ["Piece", "Kg", "Gram", "Dozen"],
  },
];

const ingredientFields: FormFieldProps<ProductionFormData>[] = [
  {
    name: "itemCode",
    label: "Item Code",
    type: "select",
    required: true,
    options: ["001", "002", "003", "004"],
  },
  {
    name: "ingredient",
    label: "Ingredient",
    type: "select",
    required: true,
    options: ["Pizza", "Brownie", "Shawarma", "Sauce"],
  },
  {
    name: "qty",
    label: "Quantity",
    type: "text",
    required: true,
    placeholder: "Quantity",
  },
  {
    name: "rate",
    label: "Rate",
    type: "text",
    required: true,
    placeholder: "Rate",
  },
  {
    name: "cost",
    label: "Cost",
    type: "text",
    required: true,
    placeholder: "Cost",
  },
];

interface ProductionInformationSectionProps {
  onForm1StateChange: (methods: UseFormReturn<ProductionFormSchema>) => void
  onForm2StateChange: (methods: UseFormReturn<ProductionFormSchema>) => void
}

export function ProductionInformationSection({
  onForm1StateChange,
  onForm2StateChange,
}: ProductionInformationSectionProps) {
  const [ingredientForms, setIngredientForms] = useState([ingredientFields]);
  const [totalCost, setTotalCost] = useState(0);

  const addIngredientRow = () => {
    setIngredientForms([...ingredientForms, ingredientFields]);
  };

  const removeIngredientRow = (index: number) => {
    if (ingredientForms.length > 1) {
      setIngredientForms(ingredientForms.filter((_, i) => i !== index));
    }
  };

  return (
    <>    
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <ReusableForm
          fields={initialFields}
          schema={productionFormSchema}
          onFormStateChange={onForm1StateChange}
          columns={4}
        />
      </div>
      <div
        className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        {ingredientForms.map((fields, index) => (
          <div key={index} className="flex items-start gap-2 mb-4">
            <ReusableForm
              fields={fields}
              schema={productionFormSchema}
              onFormStateChange={onForm2StateChange}
              columns={5}
            />
            {ingredientForms.length > 1 && (
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => removeIngredientRow(index)}
                className="mt-6"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <div className="flex justify-between items-center mt-4">
          <Button
            type="button"
            variant="default"
            size="icon"
            onClick={addIngredientRow}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium">
            Total Cost: {totalCost}
          </div>
        </div>
      </div>
    </>
  )
}
