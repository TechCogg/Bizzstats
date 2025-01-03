import React from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TaxInformationSection() {
  return (
    <Card className="p-6 bg-white rounded-lg border border-gray-200 overflow-hidden" style={{ borderTop: "4px solid #2563eb" }}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Applicable Tax */}
          <div className="space-y-2">
            <Label htmlFor="applicableTax" className="text-sm">Applicable Tax:</Label>
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

          {/* Selling Price Tax Type */}
          <div className="space-y-2">
            <Label htmlFor="sellingPriceTax" className="text-sm">Selling Price Tax Type:*</Label>
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

        {/* Product Type */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="productType2" className="text-sm">Product Type:</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-500" />
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
        <div>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-green-600 text-white p-2 text-sm font-medium">Default Purchase Price</div>
            <div className="bg-green-600 text-white p-2 text-sm font-medium flex items-center gap-2">
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
            <div className="bg-green-600 text-white p-2 text-sm font-medium">Default Selling Price</div>
            <div className="bg-green-600 text-white p-2 text-sm font-medium">Product Image</div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="excTax" className="text-sm">Exc. tax*</Label>
              <Input id="excTax" placeholder="Exc. tax" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="margin" className="text-sm">Inc. tax*</Label>
              <Input id="margin" placeholder="25.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excTaxSelling" className="text-sm">Exc. tax</Label>
              <Input id="excTaxSelling" placeholder="Exc. tax" />
            </div>
            <div className="space-y-2">
              <Button variant="outline" onClick={() => document.getElementById("productImage2")?.click()}>
                Choose File
              </Button>
              <Input id="productImage2" type="file" className="hidden" accept="image/*" />
              <p className="text-xs text-gray-500">No File Chosen</p>
              <p className="text-xs text-gray-500">Max File Size : 5MB</p>
              <p className="text-xs text-gray-500">Aspect Ratio should be 1:1</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Save & Add Opening Stock</Button>
          <Button className="bg-pink-500 text-white hover:bg-pink-600">Save & Add Another</Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Save</Button>
        </div>
      </div>
    </Card>
  );
}

