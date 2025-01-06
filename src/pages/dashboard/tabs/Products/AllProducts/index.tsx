"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Paginate from "@/components/common-components/Paginate";
import { ProductFilters } from "./components/ProductFilters";
import { TableActions } from "./components/TableAction";
import { ProductTable } from "./components/ProductTable";
import { DeleteConfirmationModal } from "./components/DeleteConfirmationModal";
import { LocationModal } from "./components/LocationModal";
import { GetProductsList } from "@/services/hooks/products";
import { ItemProducts } from "@/services/hooks/products/quries/useGetProducts/interface";

const allCategories = ["All", "Mutton", "Chicken", "Beef", "Pork", "Lamb"];
const allLocations = ["All", "Candies Restaurant", "Steakhouse", "Butcher Shop", "Fine Dining"];

export default function Products() {
  const { data: productsData } = GetProductsList();
  const [products, setProducts] = useState<ItemProducts[]>([]);
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
    if (productsData) {
      const initializedProducts = productsData.map((product: ItemProducts) => ({
        ...product,   
      }));
      setProducts(initializedProducts);
    }
  }, [productsData]);



  useEffect(() => {
    // Apply filters
    let filteredProducts = products;
    if (filters.category !== "All") {
      filteredProducts = filteredProducts.filter((p) => p.category === filters.category);
    }
    if (filters.location !== "All") {
      filteredProducts = filteredProducts.filter((p) => p.location === filters.location);
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
  const handleLocationConfirm = (location: string) => {
    // Implement add/remove logic here
    console.log(`${modalAction} items to/from ${location}`);
    setShowLocationModal(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-sm text-muted-foreground">Manage your products</p>
      </div>

      {/* Filters Section */}
      <Card className="border rounded-lg bg-white border-gray-200 overflow-hidden" style={{ borderTop: "4px solid #2563eb" }}>
        <CardContent className="pt-6">
          <div className="mb-4">
            <h2 className="text-blue-600 text-sm font-medium mb-4">Filters</h2>
            <ProductFilters
              filters={filters}
              handleFilterChange={handleFilterChange}
              products={products}
              allCategories={allCategories}
              allLocations={allLocations}
            />
          </div>
        </CardContent>
      </Card>

      {/* Table Actions */}
      <div className="bg-white p-4 border rounded-lg border-gray-200 overflow-hidden" style={{ borderTop: "4px solid #2563eb" }}>
        <TableActions itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />

        <div className="border rounded-lg bg-white mt-4">
          <ProductTable
            currentItems={currentItems}
            selectedItems={selectedItems}
            toggleSelectAll={toggleSelectAll}
            toggleSelectItem={toggleSelectItem}
          />
          
        </div>
        <div className="flex justify-end space-x-2 p-4">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={handleDeleteSelected}>
            Delete Selected
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded" onClick={() => handleLocationAction("add")}>
            Add To Location
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => handleLocationAction("remove")}>
            Remove From Location
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded" onClick={() => handleLocationAction("remove")}>
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

      <DeleteConfirmationModal
        isOpen={showDeleteConfirmation}
        onClose={() => setShowDeleteConfirmation(false)}
        onConfirm={confirmDelete}
      />

      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
        onConfirm={handleLocationConfirm}
        locations={allLocations.filter(loc => loc !== "All")}
        action={modalAction || "add"}
      />
    </div>
  );
}

