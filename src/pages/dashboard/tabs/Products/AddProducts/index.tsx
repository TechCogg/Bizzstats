"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AddProductContent() {
  const [productImage, setProductImage] = useState<string | null>(null);

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

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Add new Product</h1>
      <Card className="bg-white">
        <CardContent className="p-6">
          <form className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="productName" className="text-sm font-medium">
                  Product Name*
                </Label>
                <Input id="productName" placeholder="Product Name" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="itemCode" className="text-sm font-medium">
                    Item Code:
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter a unique item code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input id="itemCode" placeholder="Item Code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="barcodeType" className="text-sm font-medium">
                  Barcode Type*
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Code 128 (C128)" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="code128">Code 128 (C128)</SelectItem>
                    <SelectItem value="ean13">EAN 13</SelectItem>
                    <SelectItem value="upc">UPC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="unit" className="text-sm font-medium">
                  Unit*
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="pieces">Pieces</SelectItem>
                    <SelectItem value="kg">Kilograms</SelectItem>
                    <SelectItem value="liters">Liters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand" className="text-sm font-medium">
                  Brand:
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="brand1">Brand 1</SelectItem>
                    <SelectItem value="brand2">Brand 2</SelectItem>
                    <SelectItem value="brand3">Brand 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium">
                  Category:
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="category1">Category 1</SelectItem>
                    <SelectItem value="category2">Category 2</SelectItem>
                    <SelectItem value="category3">Category 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="subCategory" className="text-sm font-medium">
                  Sub Category:
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="sub1">Sub Category 1</SelectItem>
                    <SelectItem value="sub2">Sub Category 2</SelectItem>
                    <SelectItem value="sub3">Sub Category 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="businessLocation"
                    className="text-sm font-medium"
                  >
                    Business Location:
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Select business location</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input id="businessLocation" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="alertQuantity"
                    className="text-sm font-medium"
                  >
                    Alert quantity:
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Quantity at which alert should be triggered</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input id="alertQuantity" placeholder="Alert quantity" />
              </div>
            </div>

            {/* Fourth Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="productType" className="text-sm font-medium">
                  Product Type:
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="variable">Variable</SelectItem>
                    <SelectItem value="combo">Combo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="productImage" className="text-sm font-medium">
                  Product Image:
                </Label>
                <div className="mt-2">
                  <Button
                    variant="outline"
                    className="w-24"
                    onClick={() =>
                      document.getElementById("productImage")?.click()
                    }
                  >
                    Browse...
                  </Button>
                  <Input
                    id="productImage"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Max File Size : 5MB
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Aspect Ratio should be 1:1
                  </p>
                </div>
              </div>
            </div>

            {/* Manage Stock Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="manageStock" />
              <div className="grid gap-1.5 leading-none">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="manageStock"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Manage Stock?
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enable stock management at product level</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Product Description:
              </Label>
              <div className="border rounded-md p-2">
                <div className="flex items-center gap-2 border-b pb-2">
                  <Button variant="ghost" size="sm">
                    My Favorites
                  </Button>
                  <Button variant="ghost" size="sm">
                    File
                  </Button>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    Insert
                  </Button>
                  <Button variant="ghost" size="sm">
                    Format
                  </Button>
                  <Button variant="ghost" size="sm">
                    Tools
                  </Button>
                  <Button variant="ghost" size="sm">
                    Table
                  </Button>
                  <Button variant="ghost" size="sm">
                    Help
                  </Button>
                </div>
                <Textarea
                  id="description"
                  className="min-h-[200px] border-0 focus-visible:ring-0"
                  placeholder="Enter product description"
                />
              </div>
            </div>

            {/* Product Brochure */}
            <div className="space-y-2">
              <Label htmlFor="brochure" className="text-sm font-medium">
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
                  accept=".pdf,.csv,.zip,.doc,.docx,.jpeg,.jpg,.png"
                />
                <p className="text-xs text-muted-foreground">No File Chosen</p>
                <p className="text-xs text-muted-foreground">
                  Max File Size : 5MB
                </p>
                <p className="text-xs text-muted-foreground">
                  Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className=" space-y-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <form className="space-y-6">
              {/* Previous form fields remain unchanged */}

              {/* Tax Information Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="applicableTax"
                    className="text-sm font-medium"
                  >
                    Applicable Tax:
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="None" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="vat">VAT</SelectItem>
                      <SelectItem value="gst">GST</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="sellingPriceTax"
                    className="text-sm font-medium"
                  >
                    Selling Price Tax Type:*
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Exclusive" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="exclusive">Exclusive</SelectItem>
                      <SelectItem value="inclusive">Inclusive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Product Type Row */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="productType" className="text-sm font-medium">
                    Product Type:
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Choose product type</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Single" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="variable">Variable</SelectItem>
                    <SelectItem value="combo">Combo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Information Grid */}
              <div className="w-full">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-emerald-600 text-white p-2 font-medium text-sm">
                    Default Purchase Price
                  </div>
                  <div className="bg-emerald-600 text-white p-2 font-medium text-sm flex items-center gap-2">
                    % Margin(%)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Set margin percentage</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="bg-emerald-600 text-white p-2 font-medium text-sm">
                    Default Selling Price
                  </div>
                  <div className="bg-emerald-600 text-white p-2 font-medium text-sm">
                    Product Image
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-2">
                  <div className="space-y-2">
                    <Label htmlFor="excTax" className="text-sm font-medium">
                      Exc. tax*
                    </Label>
                    <Input id="excTax" placeholder="Exc. tax" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="incTax" className="text-sm font-medium">
                      Inc. tax*
                    </Label>
                    <Input id="incTax" placeholder="Inc. tax" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="margin" className="text-sm font-medium">
                      Margin
                    </Label>
                    <Input id="margin" placeholder="25.00" />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="excTaxSelling"
                      className="text-sm font-medium"
                    >
                      Exc. tax
                    </Label>
                    <Input id="excTaxSelling" placeholder="Exc. tax" />
                  </div>
                </div>
              </div>

              {/* Previous form fields remain unchanged */}

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <Button
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Save & Add Opening Stock
                </Button>
                <Button
                  type="button"
                  className="bg-rose-500 hover:bg-rose-600 text-white"
                >
                  Save & Add Another
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Save
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
