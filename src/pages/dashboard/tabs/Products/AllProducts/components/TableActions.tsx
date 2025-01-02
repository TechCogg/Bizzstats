import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, FileDown, FileSpreadsheet, Printer, Columns, FileText } from 'lucide-react';

interface TableActionsProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
}

export function TableActions({ itemsPerPage, setItemsPerPage }: TableActionsProps) {
  return (
    <div className="space-y-4">
      <div className="flex border-b">
        <Button variant="ghost" className="border-b-2 border-blue-600 text-blue-600 rounded-none px-4 py-2">
          Accounts
        </Button>
        <Button variant="ghost" className="rounded-none px-4 py-2">
          Account Types
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" /> Add
          </Button>
          <Button size="sm" variant="outline" className="text-white bg-green-600">
            <FileDown className="h-4 w-4 mr-2" /> Download template file
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-white">
            <FileDown className="h-4 w-4 mr-2" /> Export to CSV
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            <FileSpreadsheet className="h-4 w-4 mr-2" /> Export to Excel
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            <Printer className="h-4 w-4 mr-2" /> Print
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            <Columns className="h-4 w-4 mr-2" /> Column Visibility
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            <FileText className="h-4 w-4 mr-2" /> Export to PDF
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

