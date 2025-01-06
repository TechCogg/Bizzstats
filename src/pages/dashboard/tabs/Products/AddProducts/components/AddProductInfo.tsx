import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import QuillEditor from "@/components/common-components/QuillEditor/QuillEditor";
import { CommonForm, ProductFormData } from "@/components/common-components/Form/CommonForm";

interface ProductInformationSectionProps {
  editorContent: string;
  setEditorContent: (content: string) => void;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBrochureUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  brochureFile: File | null;
}

export function ProductInformationSection({
  editorContent,
  setEditorContent,
  handleImageUpload,
  handleBrochureUpload,
  brochureFile,
}: ProductInformationSectionProps) {
  const initialValues: ProductFormData = {
    productName: "",
    itemCode: "",
    barcodeType: "",
    unit: "",
    brand: "",
    category: "",
    subCategory: "",
    businessLocation: "",
    alertQuantity: 0,
    productType: "",
    productImage: null,
  };

  const handleSubmit = (values: ProductFormData) => {
    // Handle form submission
    console.log(values,'testinggggg');
  };

  return (
    <div
      className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}
    >
    <CommonForm initialValues={initialValues} onSubmit={handleSubmit} />


      {/* Manage Stock */}
      <div className="flex items-center gap-2">
        <Checkbox id="manageStock" />
        <div className="flex items-center gap-2">
          <Label htmlFor="manageStock" className="text-sm">
            Manage Stock?
          </Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Enable Stock Management at product level</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

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
