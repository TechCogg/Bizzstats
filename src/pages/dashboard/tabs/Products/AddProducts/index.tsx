"use client";

import * as React from "react";
import { ProductInformationSection } from "./components/AddProductInfo";
import { TaxInformationSection } from "./components/AddTaxInfo";

export default function AddProductForm() {
  const [productImage, setProductImage] = React.useState<string | null>(null);
  const [brochureFile, setBrochureFile] = React.useState<File | null>(null);
  const [editorContent, setEditorContent] = React.useState<string>("");

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrochureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        handleImageUpload={handleImageUpload}
        handleBrochureUpload={handleBrochureUpload}
        brochureFile={brochureFile}
      />

      <TaxInformationSection />
    </div>
  );
}

