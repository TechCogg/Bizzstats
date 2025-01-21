"use client";

import React, { useState, ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { ProductionInformationSection } from "./components/AddProductionInfo/AddProductionInfo";
import { Button } from "@/components/ui/button";
import { ProductionFormSchema } from "./components/Schema/AddProductionSchema";
import { useAddProduction } from "@/services/hooks/productions/mutations/useSetProduction";
import { Production } from "@/services/hooks/productions/mutations/useSetProduction/interface";
import { Toastify } from "@/components/common-components/Toastify/Toastify";

export default function AddProductionForm() {
  const [productionForm1Methods, setProductionForm1Methods] =
    useState<UseFormReturn<ProductionFormSchema> | null>(null);
  const [productionForm2Methods, setProductionForm2Methods] =
    useState<UseFormReturn<ProductionFormSchema> | null>(null);

  const addProductionMutation = useAddProduction({
    successMessage: "Production added successfully!",
    errorMessage: "Failed to add production. Please try again.",
  });

  const handleSave = async () => {
    if (productionForm1Methods && productionForm2Methods ) {
      const isProductionForm1Valid = await productionForm1Methods.trigger();
      const isProductionForm2Valid = await productionForm2Methods.trigger();

      if (isProductionForm1Valid && isProductionForm2Valid ) {
        const productionData1 = productionForm1Methods.getValues();
        const productionData2 = productionForm2Methods.getValues();

        const combinedData: Production = {
          ...productionData1,
          ...productionData2,
        } as Production;

        addProductionMutation.mutate(combinedData);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h1 className="text-xl font-semibold">Add new Product</h1>
      </div>

      <ProductionInformationSection
        onForm1StateChange={setProductionForm1Methods}
        onForm2StateChange={setProductionForm2Methods}
      />

      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={!productionForm1Methods || !productionForm2Methods || addProductionMutation.isPending}
        >
          {addProductionMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      <Toastify />
    </div>
  );
}
