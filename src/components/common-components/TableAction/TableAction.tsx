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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ControlsSectionProps<T> {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentItems: T[];
  columns: { key: string; label: string }[];
  visibleColumns: string[];
  setVisibleColumns: (columns: string[]) => void;
  columnLabels: Record<string, string>;
}

export function ControlsSection<T>({
  itemsPerPage,
  setItemsPerPage,
  searchQuery,
  setSearchQuery,
  currentItems,
  columns,
  visibleColumns,
  setVisibleColumns,
  columnLabels,
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
        <DataExport<T>
          data={currentItems}
          filename="data-export"
          columnLabels={columnLabels as Record<keyof T, string>}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Columns className="h-4 w-4 mr-2" />
              Column Visibility
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {columns.map((column) => (
              <DropdownMenuCheckboxItem
                key={column.key}
                checked={visibleColumns.includes(column.key)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setVisibleColumns([...visibleColumns, column.key]);
                  } else {
                    setVisibleColumns(
                      visibleColumns.filter((col) => col !== column.key)
                    );
                  }
                }}
              >
                {column.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
