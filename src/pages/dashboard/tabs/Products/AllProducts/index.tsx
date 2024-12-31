"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileDown,
  FileSpreadsheet,
  Printer,
  Columns,
  FileText,
  Plus,
  ArrowUpDown,
} from "lucide-react";
import Image from "next/image";
import Bizzstat from "../../../../../../public/bizzlogo.png";
import Paginate from "@/components/common-components/Paginate";

// Mock data
const mockProducts = [
  {
    id: "1",
    name: "White Mutton",
    location: "Candies Restaurant",
    purchasePrice: 5.0,
    sellingPrice: 10.0,
    currentStock: 50,
    type: "Single",
    category: "Mutton",
  },
  {
    id: "2",
    name: "Chicken Breast",
    location: "Candies Restaurant",
    purchasePrice: 3.0,
    sellingPrice: 7.0,
    currentStock: 100,
    type: "Single",
    category: "Chicken",
  },
  {
    id: "3",
    name: "Beef Steak",
    location: "Steakhouse",
    purchasePrice: 8.0,
    sellingPrice: 20.0,
    currentStock: 30,
    type: "Single",
    category: "Beef",
  },
  {
    id: "4",
    name: "Pork Chops",
    location: "Butcher Shop",
    purchasePrice: 4.0,
    sellingPrice: 9.0,
    currentStock: 75,
    type: "Single",
    category: "Pork",
  },
  {
    id: "5",
    name: "Lamb Rack",
    location: "Fine Dining",
    purchasePrice: 12.0,
    sellingPrice: 30.0,
    currentStock: 20,
    type: "Single",
    category: "Lamb",
  },
];

const allCategories = ["All", "Mutton", "Chicken", "Beef", "Pork", "Lamb"];
const allLocations = [
  "All",
  "Candies Restaurant",
  "Steakhouse",
  "Butcher Shop",
  "Fine Dining",
];

export default function Products() {
  const [products, setProducts] = useState(mockProducts);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    name: "All",
    category: "All",
    unit: "All",
    tax: "All",
    brand: "All",
    location: "All",
    notForSelling: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [modalAction, setModalAction] = useState<"add" | "remove" | null>(null);

  useEffect(() => {
    // Apply filters
    let filteredProducts = mockProducts;
    if (filters.category !== "All") {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filters.category
      );
    }
    if (filters.location !== "All") {
      filteredProducts = filteredProducts.filter(
        (p) => p.location === filters.location
      );
    }
    // Add more filter logic here as needed
    setProducts(filteredProducts);
  }, [filters]);

  const handleFilterChange = (key: string, value: string | boolean) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === products.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products.map((p) => p.id));
    }
  };

  const toggleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedItems.length > 0) {
      setShowDeleteConfirmation(true);
    }
  };

  const confirmDelete = () => {
    setProducts((prev) => prev.filter((p) => !selectedItems.includes(p.id)));
    setSelectedItems([]);
    setShowDeleteConfirmation(false);
  };

  const handleLocationAction = (action: "add" | "remove") => {
    if (selectedItems.length > 0) {
      setModalAction(action);
      setShowLocationModal(true);
    }
  };

  const handleInfoClick = () => {
    alert("This section allows you to manage your product inventory.");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-sm text-muted-foreground">Manage your products</p>
      </div>

      {/* Filters Section */}
      <Card
        className="border rounded-lg bg-white  border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <CardContent className="pt-6">
          <div className="mb-4">
            <h2 className="text-blue-600 text-sm font-medium mb-4">Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Product Name Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Product Name:</label>
                <Select
                  value={filters.name}
                  onValueChange={(value) => handleFilterChange("name", value)}
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    <SelectItem
                      value="All"
                      className="hover:bg-gray-100 p-2 rounded"
                    >
                      All
                    </SelectItem>
                    {products.map((p) => (
                      <SelectItem
                        key={p.id}
                        value={p.name}
                        className="hover:bg-gray-100 p-2 rounded"
                      >
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Category:</label>
                <Select
                  value={filters.category}
                  onValueChange={(value) =>
                    handleFilterChange("category", value)
                  }
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    {allCategories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category}
                        className="hover:bg-gray-100 p-2 rounded"
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Unit Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Unit:</label>
                <Select
                  value={filters.unit}
                  onValueChange={(value) => handleFilterChange("unit", value)}
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    <SelectItem
                      value="All"
                      className="hover:bg-gray-100 p-2 rounded"
                    >
                      All
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tax Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Tax:</label>
                <Select
                  value={filters.tax}
                  onValueChange={(value) => handleFilterChange("tax", value)}
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    <SelectItem
                      value="All"
                      className="hover:bg-gray-100 p-2 rounded"
                    >
                      All
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Brand Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Brand:</label>
                <Select
                  value={filters.brand}
                  onValueChange={(value) => handleFilterChange("brand", value)}
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    <SelectItem
                      value="All"
                      className="hover:bg-gray-100 p-2 rounded"
                    >
                      All
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Business Location Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Business Location:
                </label>
                <Select
                  value={filters.location}
                  onValueChange={(value) =>
                    handleFilterChange("location", value)
                  }
                >
                  <SelectTrigger className="bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                    {allLocations.map((location) => (
                      <SelectItem
                        key={location}
                        value={location}
                        className="hover:bg-gray-100 p-2 rounded"
                      >
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Not For Selling Checkbox */}
              <div className="flex items-center space-x-2 pt-8">
                <Checkbox
                  id="not-selling"
                  checked={filters.notForSelling}
                  onCheckedChange={(checked) =>
                    handleFilterChange("notForSelling", checked as boolean)
                  }
                />
                <label htmlFor="not-selling" className="text-sm font-medium">
                  Not For Selling
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table Actions */}
      <div
        className="bg-white p-4 border rounded-lg b  border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
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
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" /> Add
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-white  bg-green-600"
              >
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

          <div className="border rounded-lg bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={selectedItems.length === products.length}
                      onCheckedChange={toggleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Business Location</TableHead>
                  <TableHead>Unit Purchase Price</TableHead>
                  <TableHead>Selling Price</TableHead>
                  <TableHead>Current Stock</TableHead>
                  <TableHead>Product Type</TableHead>
                  <TableHead>Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedItems.includes(product.id)}
                        onCheckedChange={() => toggleSelectItem(product.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Image
                        src={Bizzstat}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.location}</TableCell>
                    <TableCell>$ {product.purchasePrice.toFixed(2)}</TableCell>
                    <TableCell>$ {product.sellingPrice.toFixed(2)}</TableCell>
                    <TableCell>{product.currentStock}</TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{product.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-end space-x-2 p-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={handleDeleteSelected}
            >
              Delete Selected
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              onClick={() => handleLocationAction("add")}
            >
              Add To Location
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={() => handleLocationAction("remove")}
            >
              Remove From Location
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded"
              onClick={() => handleLocationAction("remove")}
            >
              Remove From Location
            </button>
            <button
              className="bg-blue-300 text-white-100 py-0 px-4 rounded-full border"
              onClick={handleInfoClick}
            >
              i
            </button>
          </div>

          <Paginate
            totalCount={products.length}
            pageSize={itemsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete the selected items?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <Button onClick={() => setShowDeleteConfirmation(false)}>
                Cancel
              </Button>
              <Button onClick={confirmDelete} className="bg-red-500 text-white">
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">
              {modalAction === "add"
                ? "Add to Location"
                : "Remove from Location"}
            </h2>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                {allLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="mt-4 flex justify-end space-x-2">
              <Button onClick={() => setShowLocationModal(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  // Implement add/remove logic here
                  setShowLocationModal(false);
                }}
                className="bg-blue-500 text-white"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
