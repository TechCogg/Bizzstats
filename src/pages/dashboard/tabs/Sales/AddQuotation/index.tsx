"use client";

import React, { useState, ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import {QuotationInformationSection} from "./components/AddQuotationInfo/AddQuotationInfo";
import { ProductSearch } from "@/components/common-components/CommonPageComponent/AddSearchPrduct/AddSearchPrduct"
import {DiscountSection} from "@/components/common-components/CommonPageComponent/AddDiscountDetails/AddDiscountDetails";
import {ShippingSection} from "@/components/common-components/CommonPageComponent/AddShippingDetails/AddShippingDetails";
import { Button } from "@/components/ui/button";
import { QuotationFormSchema } from "./components/Schema/QuotationSchema";
import { ShippingSchema } from "@/components/common-components/CommonPageComponent/AddShippingDetails/componenets/Schema";
import { DiscountSchema } from "@/components/common-components/CommonPageComponent/AddDiscountDetails/componenets/Schema";
import { useAddQuotation} from "@/services/hooks/sales/mutations/useSetQuotation";
import { Quotation } from "@/services/hooks/sales/mutations/useSetQuotation/interface";
import { Toastify } from "@/components/common-components/Toastify/Toastify";

export default function AddQuotationForm() {
  const [quotationFormMethods, setquotationFormMethods] =
    useState<UseFormReturn<QuotationFormSchema> | null>(null);
    const [discountFormMethods, setdiscountFormMethods] =
    useState<UseFormReturn<DiscountSchema> | null>(null);
    const [shippingFormMethods, setshippingFormMethods] =
    useState<UseFormReturn<ShippingSchema> | null>(null);
    useState<UseFormReturn<QuotationFormSchema> | null>(null)
    const [selectedProducts, setSelectedProducts] = useState<any[]>([])
  

  const addQuotationMutation = useAddQuotation({
    successMessage: "Quotation added successfully!",
    errorMessage: "Failed to add quotation. Please try again.",
  });
  const handleProductsChange = (products: any[]) => {
    setSelectedProducts(products)
  }



  const handleSave = async () => {
    if (quotationFormMethods && discountFormMethods && shippingFormMethods) {
      const isQuotationFormValid = await quotationFormMethods.trigger();
      const isDiscountFormValid = await discountFormMethods.trigger();
      const isShippingFormValid = await shippingFormMethods.trigger();

      if (isQuotationFormValid && isDiscountFormValid &&  isShippingFormValid) {
        const quotationData = quotationFormMethods.getValues();
        const discountData = discountFormMethods.getValues();
        const shippingdata = shippingFormMethods.getValues();

        const combinedData: Quotation = {
          ...quotationData,
          ...discountData,
          ...shippingdata ,

        } as Quotation;

        addQuotationMutation.mutate(combinedData);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h1 className="text-xl font-semibold">Add Quotation</h1>
      </div>

      <QuotationInformationSection
        onFormStateChange={setquotationFormMethods}
      />
          <ProductSearch onProductsChange={handleProductsChange} />

      <DiscountSection
        onFormStateChange={setdiscountFormMethods}
      />
      <ShippingSection
        onFormStateChange={setshippingFormMethods}
      />
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={
            !quotationFormMethods ||
            !discountFormMethods ||
            !shippingFormMethods ||
            selectedProducts.length === 0 ||
            addQuotationMutation.isPending
          }
        >
          {addQuotationMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      <Toastify />
    </div>
  );
}
