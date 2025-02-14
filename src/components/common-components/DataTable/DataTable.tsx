import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ControlsSection } from "@/components/common-components/TableAction/TableAction";
import Paginate from "@/components/common-components/Paginate";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

interface DataTableProps<T> {
  data: T[];
  columns: { key: string; label: string }[];
  onDelete?: (id: string | number) => void;
  actions?: (item: T) => React.ReactNode;
}

export function DataTable<T extends { id: string | number }>({ data, columns, onDelete, actions }: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(columns.map((col) => col.key));

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.entries(item).some(([key, value]) => {
        if (value == null || typeof value === "undefined") return false;
        return String(value).toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const columnLabels = Object.fromEntries(columns.map((col) => [col.key, col.label]));

  return (
    <div className="space-y-6">
      <ControlsSection<T>
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentItems={currentItems}
        columns={columns}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        columnLabels={columnLabels}
      />

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.filter((col) => visibleColumns.includes(col.key)).map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
              {(actions || onDelete) && <TableHead>Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow key={item.id}>
                {columns
                  .filter((col) => visibleColumns.includes(col.key))
                  .map((column) => (
                    <TableCell key={column.key}>{String(item[column.key as keyof T] || "N/A")}</TableCell>
                  ))}
                {(actions || onDelete) && (
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                          Actions <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {actions && actions(item)}
                        {onDelete && (
                          <DropdownMenuItem onSelect={() => onDelete(item.id)}>Delete</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Paginate
        totalCount={filteredData.length}
        pageSize={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
