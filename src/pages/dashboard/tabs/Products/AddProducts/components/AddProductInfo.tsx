import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  return (
    <div
      className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{ borderTop: "4px solid #2563eb" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Name */}
        <div className="space-y-2">
          <Label htmlFor="productName" className="text-sm">
            Product Name*
          </Label>
          <Input id="productName" placeholder="Product Name" />
        </div>

        {/* Item Code */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="itemCode" className="text-sm">
              Item Code:
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Enter a unique item code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input id="itemCode" placeholder="Item Code" />
        </div>

        {/* Barcode Type */}
        <div className="space-y-2">
          <Label htmlFor="barcodeType" className="text-sm">
            Barcode Type*
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Code 128 (C128)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="code128">Code 128 (C128)</SelectItem>
              <SelectItem value="ean13">EAN 13</SelectItem>
              <SelectItem value="upc">UPC</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Unit */}
        <div className="space-y-2">
          <Label htmlFor="unit" className="text-sm">
            Unit*
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pieces">Pieces</SelectItem>
              <SelectItem value="kg">Kilograms</SelectItem>
              <SelectItem value="liters">Liters</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Brand */}
        <div className="space-y-2">
          <Label htmlFor="brand" className="text-sm">
            Brand:
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brand1">Brand 1</SelectItem>
              <SelectItem value="brand2">Brand 2</SelectItem>
              <SelectItem value="brand3">Brand 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm">
            Category:
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="category1">Category 1</SelectItem>
              <SelectItem value="category2">Category 2</SelectItem>
              <SelectItem value="category3">Category 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sub Category */}
        <div className="space-y-2">
          <Label htmlFor="subCategory" className="text-sm">
            Sub Category:
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sub1">Sub Category 1</SelectItem>
              <SelectItem value="sub2">Sub Category 2</SelectItem>
              <SelectItem value="sub3">Sub Category 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Business Location */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="businessLocation" className="text-sm">
              Business Location:
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Select business location</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input id="businessLocation" />
        </div>

        {/* Alert Quantity */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="alertQuantity" className="text-sm">
              Alert quality
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Alert quality</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input id="alertQuantity" placeholder="Alert quality" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Type */}
        <div className="space-y-2">
          <Label htmlFor="productType" className="text-sm">
            Product Type:
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="variable">Variable</SelectItem>
              <SelectItem value="combo">Combo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Image */}
        <div className="space-y-2">
          <Label htmlFor="productImage" className="text-sm">
            Product Image:
          </Label>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => document.getElementById("productImage")?.click()}
            >
              Browse...
            </Button>
            <Input
              id="productImage"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </div>
          <div className="text-xs text-gray-500">
            <p>Max File Size : 5MB</p>
            <p>Aspect Ratio should be 1:1</p>
          </div>
        </div>
      </div>

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
