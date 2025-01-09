"use client";

import * as React from "react";
import  {ProductInformationSection}  from "./components/AddProductInfo/AddProductInfo";
import { TaxInformationSection } from "./components/AddTaxInfo/AddTaxInfo";
import { ChangeEvent } from "react";
import { useState } from "react";
export default function AddProductForm() {
  const [brochureFile, setBrochureFile] = useState<File | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

 
  const handleBrochureUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBrochureFile(file);
    }
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
      />

      <TaxInformationSection />
    </div>
  );
}

