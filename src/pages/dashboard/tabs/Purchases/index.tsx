"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  FileSpreadsheet,
  FileText,
  Printer,
  Columns,
  FileIcon as FilePdf,
  Plus,
  MoreHorizontal,
} from "lucide-react";

interface Purchase {
  date: string;
  referenceNo: string;
  businessLocation: string;
  supplier: string;
  purchaseStatus: "Received" | "Pending";
  paymentStatus: "Paid" | "Due";
  grandTotal: number;
  paymentDue: number;
  addedBy: string;
}

export default function Purchases() {
  const [entries, setEntries] = useState("25");
  const [searchQuery, setSearchQuery] = useState("");

  const purchases: Purchase[] = [
    {
      date: "11/04/2024 12:31",
      referenceNo: "PO2024/0003",
      businessLocation: "Candles Restaurant",
      supplier: "Mr. Purchaser",
      purchaseStatus: "Received",
      paymentStatus: "Paid",
      grandTotal: 2750.0,
      paymentDue: 0.0,
      addedBy: "Purchase: $0.00",
    },
    {
      date: "11/04/2024 05:27",
      referenceNo: "PO2024/0003",
      businessLocation: "Candles Restaurant",
      supplier: "Software",
      purchaseStatus: "Received",
      paymentStatus: "Paid",
      grandTotal: 2750.0,
      paymentDue: 0.0,
      addedBy: "Purchase: $0.00",
    },
  ];

  return (
    <div className="space-y-6">
      <div
        className="bg-white rounded-lg border border-gray-200"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">All Purchases</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-4 mb-6 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm">Show</span>
              <Select value={entries} onValueChange={setEntries}>
                <SelectTrigger className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm">Entries</span>
            </div>

            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-xs"
            />

            <div className="flex gap-2 ml-auto">
              <Button variant="outline" size="sm">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Export to CSV
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Export to Excel
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <Columns className="h-4 w-4 mr-2" />
                Column Visibility
              </Button>
              <Button variant="outline" size="sm">
                <FilePdf className="h-4 w-4 mr-2" />
                Export to PDF
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table className="table-auto w-full">
              <TableHeader>
                <TableRow>
                  {[
                    "Date",
                    "Reference No",
                    "Business Location",
                    "Supplier",
                    "Purchase Status",
                    "Payment Status",
                    "Grand Total",
                    "Payment Due",
                    "Added By",
                    "Actions",
                  ].map((header) => (
                    <TableHead key={header} className="px-4 py-2 text-left">
                      {header} <ChevronDown className="h-4 w-4 inline-block ml-1" />
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchases.map((purchase, index) => (
                  <TableRow key={index}>
                    {Object.values(purchase).map((value, i) => (
                      <TableCell key={i} className="px-4 py-2 whitespace-normal break-words">
                        {value}
                      </TableCell>
                    ))}
                    <TableCell className="px-4 py-2 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-blue-600 text-white hover:bg-blue-700"
                          >
                            Actions <ChevronDown className="h-4 w-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer */}
          <div className="mt-4 flex flex-wrap justify-between items-center">
            <div className="text-sm text-gray-500">Showing 1 To 25 Of 109 Entries</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                1
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>

          {/* Totals */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>Total: Paid-5</div>
              <div>$ 23,950.00</div>
              <div>
                <div>Purchase Due - $ 0.00</div>
                <div>Purchase Return - $</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
