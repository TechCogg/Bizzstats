"use client";

import * as React from "react";
import { ProductInformationSection } from "./components/AddProductInfo/AddProductInfo";
import { TaxInformationSection } from "./components/AddTaxInfo/AddTaxInfo";
import { ChangeEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function AddProductForm() {
  const [brochureFile, setBrochureFile] = useState<File | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");
   const [productData, setProductData] = useState({});
  const [taxData, setTaxData] = useState({});


  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const handleBrochureUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBrochureFile(file);
    }
  };
  const handleFormSubmit = (data: any) => {
    setProductData(data);
  };
  const handleTaxSubmit = (data: any) => {
    setTaxData(data);
  };

 
  const handleConsoleLog = () => {
    const combinedData = { ...productData, ...taxData };
    console.log("Combined Data:", combinedData);
  };

  return (
    <div className="p-2 space-y-6">
      <div className="pb-2">
        <h1 className="text-xl font-semibold">Add new Product</h1>
      </div>

      <ProductInformationSection
        editorContent={editorContent}
        setEditorContent={handleEditorChange}
        handleBrochureUpload={handleBrochureUpload}
        brochureFile={brochureFile}
        onSubmit={handleFormSubmit}
      />
      <TaxInformationSection onSubmit={handleTaxSubmit} />

      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
          Save & Add Opening Stock
        </Button>
        <Button className="bg-pink-500 text-white hover:bg-pink-600">
          Save & Add Another
        </Button>
        <Button onClick={handleConsoleLog} className="bg-blue-500 text-white hover:bg-blue-600">
          Save
        </Button>
      
      </div>
    </div>
  );
}
