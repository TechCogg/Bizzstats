"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Paginate from "@/components/common-components/Paginate";
import { ProductFilters } from "./components/ProductFilters";
import { TableActions } from "./components/TableAction";
import { ProductTable } from "./components/ProductTable";
import { DeleteConfirmationModal } from "@/components/common-components/ConfirmationModals/DeleteConfirmationModal";
import { LocationModal } from "./components/LocationModal";
import { GetProductsList } from "@/services/hooks/products";
import { ItemProducts } from "@/services/hooks/products/quries/useGetProducts/interface";
import { useDeleteProduct } from "@/services/hooks/products";
import { useUpdateProductLocation } from "@/services/hooks/products";
import { Toastify } from "@/components/common-components/Toastify/Toastify";

const allCategories = ["All", "Mutton", "Chicken", "Beef", "Pork", "Lamb"];
const allLocations = ["All", "Lahore", "Karachi", "Islamabad", "Multan"];

export default function Products() {
  const { data: productsData } = GetProductsList();
  const [products, setProducts] = useState<ItemProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ItemProducts[]>([]); 
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
  const [searchQuery, setSearchQuery] = useState("");

  const deleteProduct = useDeleteProduct({
    successMessage: "Product(s) deleted successfully",
    errorMessage: "Failed to delete product(s)",
  });

  const updateProductLocation = useUpdateProductLocation({
    successMessage: "Product location updated successfully",
    errorMessage: "Failed to update product location",
  });

  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }
  }, [productsData]);

  useEffect(() => {
    let updatedProducts = products;

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        Object.values(product).some((value) => 
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    if (filters.category !== "All") {
      updatedProducts = updatedProducts.filter((p) => p.category === filters.category);
    }
    if (filters.location !== "All") {
      updatedProducts = updatedProducts.filter((p) => p.businessLocation === filters.location);
    }
    setFilteredProducts(updatedProducts);
  }, [products, searchQuery, filters]);

  const handleFilterChange = (key: string, value: string | boolean) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredProducts.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredProducts.map((p) => p.id));
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

  const confirmDelete = async () => {
    try {
      for (const id of selectedItems) {
        await deleteProduct.mutateAsync({ ProductId: id });
      }
      setProducts((prev) => prev.filter((p) => !selectedItems.includes(p.id)));
      setSelectedItems([]);
    } finally {
      setShowDeleteConfirmation(false);
    }
  };

  const handleLocationAction = (action: "add" | "remove") => {
    if (selectedItems.length > 0) {
      setModalAction(action);
      setShowLocationModal(true);
    }
  };

  const handleLocationConfirm = async (location: string) => {
    for (const productId of selectedItems) {
      const product = products.find((p) => p.id === productId);
      if (product) {
        let updatedLocations: string[];
        if (modalAction === "add") {
          updatedLocations = Array.isArray(product.businessLocation)
            ? [...new Set([...product.businessLocation, location])]
            : [product.businessLocation, location].filter(Boolean);
        } else {
          updatedLocations = Array.isArray(product.businessLocation)
            ? product.businessLocation.filter((loc) => loc !== location)
            : product.businessLocation === location
            ? []
            : [product.businessLocation];
        }

        try {
          await updateProductLocation.mutateAsync({
            ProductId: productId,
            businessLocation: updatedLocations,
            existingProductData: product, // Pass the entire product object
          });

          // Update the local state immediately
          setProducts((prevProducts) =>
            prevProducts.map((p) =>
              p.id === productId
                ? { ...p, businessLocation: updatedLocations }
                : p
            )
          );
        } catch (error) {
          console.error("Failed to update product location:", error);
        }
      }
    }
    setShowLocationModal(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-sm text-muted-foreground">Manage your products</p>
      </div>

      {/* Filters Section */}
      <Card
        className="border rounded-lg bg-white border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
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
      <div
        className="bg-white p-4 border rounded-lg border-gray-200 overflow-hidden"
        style={{ borderTop: "4px solid #2563eb" }}
      >
        <TableActions
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentItems={currentItems}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="border rounded-lg bg-white mt-4">
          <ProductTable
            currentItems={currentItems}
            selectedItems={selectedItems}
            toggleSelectAll={toggleSelectAll}
            toggleSelectItem={toggleSelectItem}
            businessLocations={products.map((p) => ({
              id: p.id,
              locations: p.businessLocation,
            }))}
          />
        </div>
        <div className="flex justify-end space-x-2 p-4">
          <Button
            variant="destructive"
            onClick={handleDeleteSelected}
            disabled={selectedItems.length === 0 || deleteProduct.isPending}
          >
            {deleteProduct.isPending ? "Deleting..." : "Delete Selected"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleLocationAction("add")}
            disabled={selectedItems.length === 0}
          >
            Add To Location
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleLocationAction("remove")}
            disabled={selectedItems.length === 0}
          >
            Remove From Location
          </Button>
          <Button
            variant="outline"
            className="rounded-full w-8 h-8 p-0"
            onClick={() => alert("This section allows you to manage your product inventory.")}
          >
            i
          </Button>
        </div>

        <Paginate
          totalCount={filteredProducts.length}
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
        locations={allLocations.filter((loc) => loc !== "All")}
        action={modalAction || "add"}
      />
      <Toastify />
    </div>
  );
}
