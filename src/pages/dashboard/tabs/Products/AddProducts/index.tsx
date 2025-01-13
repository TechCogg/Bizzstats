"use client";

import React, { useState, ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { ProductInformationSection } from "./components/AddProductInfo/AddProductInfo";
import { TaxInformationSection } from "./components/AddTaxInfo/AddTaxInfo";
import { Button } from "@/components/ui/button";
import { ProductFormSchema } from "./components/Schema/AddProductSchema";
import { TaxFormSchema } from "./components/Schema/AddTaxSchema";
import { useAddProduct } from "@/services/hooks/products/mutations/useSetProduct";
import { Product } from "@/services/hooks/products/mutations/useSetProduct/interface";
import { Toastify } from "@/components/common-components/Toastify/Toastify";

export default function AddProductForm() {
  const [productFormMethods, setProductFormMethods] =
    useState<UseFormReturn<ProductFormSchema> | null>(null);
  const [taxForm1Methods, setTaxForm1Methods] =
    useState<UseFormReturn<TaxFormSchema> | null>(null);
  const [taxForm2Methods, setTaxForm2Methods] =
    useState<UseFormReturn<TaxFormSchema> | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");
  const [brochureFile, setBrochureFile] = useState<File | null>(null);

  const addProductMutation = useAddProduct({
    successMessage: 'Product added successfully!',
    errorMessage: 'Failed to add product. Please try again.',
  });

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const handleBrochureUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBrochureFile(file);
    }
  };

  const handleSave = async () => {
    if (productFormMethods && taxForm1Methods && taxForm2Methods) {
      const isProductFormValid = await productFormMethods.trigger();
      const isTaxForm1Valid = await taxForm1Methods.trigger();
      const isTaxForm2Valid = await taxForm2Methods.trigger();

      if (isProductFormValid && isTaxForm1Valid && isTaxForm2Valid) {
        const productData = productFormMethods.getValues();
        const taxData1 = taxForm1Methods.getValues();
        const taxData2 = taxForm2Methods.getValues();
        const combinedData: Product = {
          ...productData,
          ...taxData1,
          ...taxData2,
          description: editorContent,
          brochureFile: brochureFile ? brochureFile.name : null,
        } as Product;

        addProductMutation.mutate(combinedData);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h1 className="text-xl font-semibold">Add new Product</h1>
      </div>

      <ProductInformationSection
        editorContent={editorContent}
        setEditorContent={handleEditorChange}
        handleBrochureUpload={handleBrochureUpload}
        brochureFile={brochureFile}
        onFormStateChange={setProductFormMethods}
      />
      <TaxInformationSection
        onForm1StateChange={setTaxForm1Methods}
        onForm2StateChange={setTaxForm2Methods}
      />
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
          Save & Add Opening Stock
        </Button>
        <Button className="bg-pink-500 text-white hover:bg-pink-600">
          Save & Add Another
        </Button>
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={
            !productFormMethods ||
            !taxForm1Methods ||
            !taxForm2Methods ||
            addProductMutation.isPending
          }
        >
          {addProductMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      <Toastify />
    </div>
  );
}

