import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Columns } from "lucide-react";
import { DataExport } from "@/components/common-components/DataExport/DataExport";
import { ItemPurchases } from "@/services/hooks/purchases/quries/useGetPurchases/interface";
const columnLabels: Record<keyof ItemPurchases, string> = {
  date: "Date",
  referenceNo: "Reference Number",
  businessLocation: "Business Location",
  supplier: "Supplier",
  purchaseStatus: "Purchase Status",
  paymentStatus: "Payment Status",
  grandTotal: "Grand Total",
  paymentDue: "Payment Due",
  addedBy: "Added By",
  id: ""
};
interface ControlsSectionProps<T> {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentItems: ItemPurchases[];
}
export function ControlsSection<T>({
  itemsPerPage,
  setItemsPerPage,
  searchQuery,
  setSearchQuery,
  currentItems,
}: ControlsSectionProps<T>) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Select
          value={itemsPerPage.toString()}
          onValueChange={(value) => setItemsPerPage(Number(value))}
        >
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
        <DataExport<ItemPurchases>
          data={currentItems}
          filename="purchases"
          columnLabels={columnLabels}
        />

        <Button variant="outline" size="sm">
          <Columns className="h-4 w-4 mr-2" />
          Column Visibility
        </Button>
      </div>
    </div>
  );
}
