"use client";

import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export default function UpdatePrice() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleExport = () => {
    // Handle export logic here
    console.log("Exporting product prices");
  };

  const handleImport = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle import logic here
    console.log("Importing file:", selectedFile);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Update Price</h1>
      <div
        className="bg-white rounded-lg border border-gray-200"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        {/* Price Update Section */}
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Export Section */}
            <div>
              <h2 className="text-base font-medium mb-4">
                Export Product Price
              </h2>
              <Button
                onClick={handleExport}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Import Export Product Price
              </Button>
            </div>

            {/* Import Section */}
            <div>
              <h2 className="text-base font-medium mb-4">
                Import Product Price
              </h2>
              <form onSubmit={handleImport} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-white"
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  >
                    Choose File
                  </Button>
                  <span className="text-sm text-gray-500">
                    {selectedFile ? selectedFile.name : "No File Chosen"}
                  </span>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".csv,.xlsx,.xls"
                  />
                </div>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Instructions Section */}
        <div className="p-4">
          <h2 className="text-base font-medium mb-4">Instructions:</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Export Product Prices by clicking on above button
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Make changes in product price including tax & selling price
              groups.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Do not change any product name, sku & headers
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              After making changes import the file
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
