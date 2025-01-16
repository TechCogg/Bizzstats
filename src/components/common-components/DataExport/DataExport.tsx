import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown, FileSpreadsheet, FileText } from "lucide-react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

interface DataExportProps<T> {
  data: T[];
  filename: string;
  columnLabels: Record<keyof T, string>;
}

export const DataExport = <T,>({ data, filename, columnLabels }: DataExportProps<T>) => {
  const exportToCSV = () => {
    const headers = Object.values(columnLabels).join(",");
    const rows = data.map((row) =>
      (Object.keys(columnLabels) as (keyof T)[])
        .map((key) => row[key])
        .join(",")
    );
    const csv = [headers, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${filename}.csv`);
  };

  const exportToExcel = () => {
    const rows = data.map((row) =>
      (Object.keys(columnLabels) as (keyof T)[]).reduce((acc, key) => {
        acc[columnLabels[key]] = row[key];
        return acc;
      }, {} as Record<string, any>)
    );
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${filename}.xlsx`);
  };

  const exportToPDF = () => {
    const headers: string[][] = [Object.values(columnLabels)];
    const rows: string[][] = data.map((row) =>
      (Object.keys(columnLabels) as (keyof T)[]).map((key) =>
        String(row[key] ?? "") // Ensure all values are strings
      )
    );

    const doc = new jsPDF();
    autoTable(doc, { head: headers, body: rows });
    doc.save(`${filename}.pdf`);
  };

  return (
    <>
      <Button variant="outline" size="sm" className="bg-white" onClick={exportToCSV}>
        <FileDown className="h-4 w-4 mr-2" /> Export to CSV
      </Button>
      <Button variant="outline" size="sm" className="bg-white" onClick={exportToExcel}>
        <FileSpreadsheet className="h-4 w-4 mr-2" /> Export to Excel
      </Button>
      <Button variant="outline" size="sm" className="bg-white" onClick={exportToPDF}>
        <FileText className="h-4 w-4 mr-2" /> Export to PDF
      </Button>
    </>
  );
};
