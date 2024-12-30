"use client";

import React, { useState } from "react";
import { Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  name: string;
  labels: number;
  packingDate: string;
  sellingPriceGroup: string;
}

export default function PrintLabels() {
  const [products, setProducts] = useState<Product[]>([
    {
      name: "Aloo Methi Paratha",
      labels: 1,
      packingDate: "12/17/2024",
      sellingPriceGroup: "None",
    },
    {
      name: "Pancake",
      labels: 2,
      packingDate: "12/16/2024",
      sellingPriceGroup: "None",
    },
  ]);

  const [formData, setFormData] = useState({
    productNameSize: "15",
    productVariationSize: "17",
    productPriceSize: "17",
    businessNameSize: "20",
    packingDateSize: "12",
    showPrice: "Inc. Tax",
    barcodeSettings: "20 Labels per Sheet",
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Print Labels</h1>

      {/* Add Products Section */}
      <div
        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <div className="p-4">
          <h2 className="text-lg font-medium mb-4">
            Add Products to generate Labels
          </h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Enter Products name to print labels"
              className="pl-10"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left font-medium">
                    Products
                  </th>
                  <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left font-medium">
                    No. of Labels
                  </th>
                  <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left font-medium">
                    Packing Date
                  </th>
                  <th className="border border-gray-200 px-4 py-2 bg-gray-50 text-left font-medium">
                    Selling price Group
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-4 py-2">
                      {product.name}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {product.labels}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {product.packingDate}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      <Select defaultValue={product.sellingPriceGroup}>
                        <SelectTrigger className="w-32 border-0 bg-transparent shadow-none">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="None">None</SelectItem>
                          <SelectItem value="Group1">Group 1</SelectItem>
                          <SelectItem value="Group2">Group 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div
        className="bg-white rounded-lg border border-gray-200"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <div className="p-4">
          <h2 className="text-lg font-medium mb-8">
            Information to show in Labels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {/* Product Name */}
            <div className="min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Checkbox id="productName" defaultChecked />
                <label htmlFor="productName" className="text-sm">
                  Product Name
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Size</span>
                <Input
                  type="text"
                  value={formData.productNameSize}
                  className="max-w-[250px]"
                />
              </div>
            </div>

            {/* Product Variation */}
            <div className="min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Checkbox id="productVariation" defaultChecked />
                <label htmlFor="productVariation" className="text-sm">
                  Product Variation (Recommended)
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Size</span>
                <Input
                  type="text"
                  value={formData.productVariationSize}
                  className="max-w-[250px]"
                />
              </div>
            </div>

            {/* Product Price */}
            <div className="min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Checkbox id="productPrice" defaultChecked />
                <label htmlFor="productPrice" className="text-sm">
                  Product Price
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Size</span>
                <Input
                  type="text"
                  value={formData.productPriceSize}
                  className="max-w-[250px]"
                />
              </div>
            </div>

            {/* Business Name */}
            <div className="min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Checkbox id="businessName" defaultChecked />
                <label htmlFor="businessName" className="text-sm">
                  Business Name
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Size</span>
                <Input
                  type="text"
                  value={formData.businessNameSize}
                  className="max-w-[250px]"
                />
              </div>
            </div>

            {/* Print Packing Date */}
            <div className="min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Checkbox id="packingDate" defaultChecked />
                <label htmlFor="packingDate" className="text-sm">
                  Print Packing date
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Size</span>
                <Input
                  type="text"
                  value={formData.packingDateSize}
                  className="max-w-[250px]"
                />
              </div>
            </div>

            {/* Show Price */}
            <div className="min-w-[200px]">
              <label className="text-sm block mb-2">Show Price:</label>
              <div className="flex items-center gap-2">
                <label className="text-sm block mb-2">Size</label>
                <Select defaultValue={formData.showPrice}>
                  <SelectTrigger className="w-[250px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inc. Tax">Inc. Tax</SelectItem>
                    <SelectItem value="Exc. Tax">Exc. Tax</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200 "></div>

          {/* Barcode Settings */}
          <div className="mb-6">
            <label className="text-sm block mb-2">Barcode Setting:</label>
            <Select defaultValue={formData.barcodeSettings}>
              <SelectTrigger className="w-64">
                <Settings className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20 Labels per Sheet">
                  20 Labels per Sheet, Sheet
                </SelectItem>
                <SelectItem value="30 Labels per Sheet">
                  30 Labels per Sheet, Sheet
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Preview Button */}
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
