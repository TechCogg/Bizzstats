import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, FileDown, Columns, Printer } from "lucide-react";
import Link from "next/link";
import { DataExport } from "@/components/common-components/DataExport/DataExport";
import { ItemProducts } from "@/services/hooks/products/quries/useGetProducts/interface";

const columnLabels: Record<keyof ItemProducts, string> = {
  id: "ID",
  productName: "Product Name",
  itemCode: "Item Code",
  barcodeType: "Barcode Type",
  unit: "Unit",
  brand: "Brand",
  category: "Category",
  subCategory: "Sub-Category",
  businessLocation: "Business Location",
  alertQuantity: "Alert Quantity",
  productType: "Product Type",
  manageStock: "Manage Stock",
  sellingPriceTaxType: "Selling Price Tax Type",
  applicableTax: "Applicable Tax",
  excTax: "Excluding Tax",
  exctax: "Excluding Tax (Duplicate)",
  incTax: "Including Tax",
  margin: "Margin",
  description: "Description",
  productImage: "Product Image",
  brochureFile: "Brochure File",
};
interface TableActionsProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  currentItems: ItemProducts[];
}

export function TableActions({
  itemsPerPage,
  setItemsPerPage,
  currentItems,
}: TableActionsProps) {
  return (
    <div className="space-y-4">
      <div className="flex border-b">
        <Button
          variant="ghost"
          className="border-b-2 border-blue-600 text-blue-600 rounded-none px-4 py-2"
        >
          Accounts
        </Button>
        <Button variant="ghost" className="rounded-none px-4 py-2">
          Account Types
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Link href="/dashboard?tab=add-product">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="h-4 w-4 mr-2" /> Add
            </Button>
          </Link>
          <Button
            size="sm"
            variant="outline"
            className="text-white bg-green-600"
          >
            <FileDown className="h-4 w-4 mr-2" /> Download template file
          </Button>
        </div>
        <div className="flex gap-2">
          <DataExport<ItemProducts>
            data={currentItems}
            filename="products"
            columnLabels={columnLabels}
          />
          <Button variant="outline" size="sm" className="bg-white">
            <Printer className="h-4 w-4 mr-2" /> Print
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            <Columns className="h-4 w-4 mr-2" /> Column Visibility
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Select
          value={itemsPerPage.toString()}
          onValueChange={(value) => setItemsPerPage(Number(value))}
        >
          <SelectTrigger className="w-[70px]">
            <SelectValue placeholder="25" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black">
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm">entries</span>
      </div>
    </div>
  );
}
