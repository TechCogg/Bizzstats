import React, { ChangeEvent } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuillEditor from "@/components/common-components/QuillEditor/QuillEditor";
import { ReusableForm } from "@/components/common-components/Formss/ReuseableForm";
import {
  productFormSchema,
  ProductFormSchema,
} from "../Schema/AddProductSchema";
import type { FormFieldProps,ProductFormData } from "../type/ProductType";

const fields: FormFieldProps<ProductFormData>[] = [
  {
    name: "productName",
    label: "Product Name",
    type: "text",
    required: true,
    placeholder: "Product Name",
  },
  {
    name: "itemCode",
    label: "Item Code",
    type: "text",
    required: true,
    placeholder: "Item Code",
    hasInfoIcon: true,
  },
  {
    name: "barcodeType",
    label: "Barcode Type",
    type: "select",
    required: true,
    options: ["Code 128 (C128)", "Code 39", "EAN-13", "UPC-A"],
  },
  {
    name: "unit",
    label: "Unit",
    type: "select",
    required: true,
    options: ["Piece", "Kg", "Gram", "Dozen"],
  },
  {
    name: "brand",
    label: "Brand",
    type: "select",
    options: ["Brand 1", "Brand 2", "Brand 3"],
  },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: ["Category 1", "Category 2", "Category 3"],
  },
  {
    name: "subCategory",
    label: "Sub Category",
    type: "select",
    options: ["Sub Category 1", "Sub Category 2", "Sub Category 3"],
  },
  {
    name: "businessLocation",
    label: "Business Location",
    type: "text",
    hasInfoIcon: true,
  },
  {
    name: "alertQuantity",
    label: "Alert quantity",
    type: "text",
    hasInfoIcon: true,
    placeholder: "Alert quantity",
  },
  {
    name: "productType",
    label: "Product Type",
    type: "select",
    options: ["Single", "Variable"],
  },
  {
    name: "productImage",
    label: "Product Image",
    type: "file",
    helperText: "Max File Size: 5MB\nAspect Ratio should be 1:1",
  },
  {
    name: "manageStock",
    label: "Manage Stock?",
    type: "checkbox",
    helperText: "Enable Stock Management at product level",
  },
];

interface ProductInformationSectionProps {
  editorContent: string;
  setEditorContent: (content: string) => void;
  handleBrochureUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  brochureFile: File | null;
  onSubmit: (data: any) => void;
}

export function ProductInformationSection({
  editorContent,
  setEditorContent,
  handleBrochureUpload,
  brochureFile,
  onSubmit,
}: ProductInformationSectionProps) {
  const handleSubmit = (formData: ProductFormSchema) => {
    // Combine all data
    const combinedData = {
      ...formData,
      description: editorContent,
      brochureFile: brochureFile ? brochureFile.name : null,
    };

    onSubmit(combinedData); // Pass combined data to the parent
  };
  return (
    <div
      className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}
    >
      {/* Reusable Form */}
      <ReusableForm
        fields={fields}
        onSubmit={handleSubmit}
        schema={productFormSchema}
      />

      {/* Product Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm">
          Product Description:
        </Label>
        <QuillEditor value={editorContent} onChange={setEditorContent} />
      </div>

      {/* Product Brochure */}
      <div className="space-y-2">
        <Label htmlFor="brochure" className="text-sm">
          Product Brochure:
        </Label>
        <div className="space-y-2">
          <Button
            variant="outline"
            onClick={() => document.getElementById("brochure")?.click()}
          >
            Choose File
          </Button>
          <Input
            id="brochure"
            type="file"
            className="hidden"
            onChange={handleBrochureUpload}
            accept=".pdf,.csv,.zip,.doc,.docx,.jpeg,.jpg,.png"
          />
          <p className="text-xs text-gray-500">
            {brochureFile ? brochureFile.name : "No File Chosen"}
          </p>
          <p className="text-xs text-gray-500">Max File Size : 5MB</p>
          <p className="text-xs text-gray-500">
            Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
          </p>
          
        </div>
      </div>
    </div>
  );
}
