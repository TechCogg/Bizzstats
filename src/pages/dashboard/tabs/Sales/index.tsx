"use client";

import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

export default function ImportProducts() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle file submission logic here
    console.log("Submitting file:", selectedFile);
  };

  const handleDownloadTemplate = () => {
    // Handle template download logic here
    console.log("Downloading template");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Import Products</h1>

      {/* File Import Section */}
      <div className="bg-white rounded-lg border border-gray-200" style={{ borderTop: '4px solid #2563eb' }}>
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="text-base font-medium">File To Import:</label>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-white"
                      onClick={() => document.getElementById('fileInput')?.click()}
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
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white border-0"
                    onClick={handleDownloadTemplate}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download template file
                  </Button>
                </div>
              </div>
              <div>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      

      {/* Instructions Section */}
      <div className="bg-white rounded-lg border border-gray-200" style={{ borderTop: '4px solid #2563eb' }}>
        <div className="p-4">
          <h2 className="text-lg font-medium mb-4">Instructions</h2>
          <div className="min-h-[300px]">
            {/* Instructions content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

