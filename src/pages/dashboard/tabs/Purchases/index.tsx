"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Paginate from "@/components/common-components/Paginate";
import { GetPurchasesList } from "@/services/hooks/purchases";
import { ItemPurchases } from "@/services/hooks/purchases/quries/useGetPurchases/interface";
import { PurchasesTable } from "./components/PurchaseTable";
import { ControlsSection } from "./components/TableAction";
import { useDeletePurchase } from "@/services/hooks/purchases";

export default function Purchases() {
  const { data: purchasesData, isLoading } = GetPurchasesList();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPurchases, setFilteredPurchases] = useState<ItemPurchases[]>(
    []
  );

    const deletePurchase = useDeletePurchase({
      successMessage: "Purchase(s) deleted successfully",
      errorMessage: "Failed to delete purchase(s)",
    });
  

  useEffect(() => {
    if (purchasesData) {
      const filtered = purchasesData.filter((purchase) =>
        Object.values(purchase).some((value) => {
          if (value == null || typeof value === "undefined") return false; // Skip null or undefined
          return String(value)
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      );
      setFilteredPurchases(filtered);
    }
  }, [searchQuery, purchasesData]);

  const handleDeletePurchase = async (purchaseId: string | number) => {
    try {
      await deletePurchase.mutateAsync({ PurchaseId: purchaseId })
      // After successful deletion, update the filteredPurchases state
      setFilteredPurchases((prevPurchases) => prevPurchases.filter((purchase) => purchase.id !== purchaseId))
    } catch (error) {
      console.error("Error deleting purchase:", error)
    }
  }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPurchases.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="space-y-6">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
            <ControlsSection<ItemPurchases>
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              currentItems={currentItems}
             
            />

            {/* Table */}
            <div className="overflow-x-auto">
              <PurchasesTable 
              currentItems={currentItems} 
              onDeletePurchase={handleDeletePurchase} 
              />
            </div>

            {/* Pagination */}
            <Paginate
              totalCount={filteredPurchases.length}
              pageSize={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />

            {/* Totals */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  Total: Paid-
                  {
                    filteredPurchases.filter((p) => p.paymentStatus === "Paid")
                      .length
                  }
                </div>
                <div>
                  ${" "}
                  {filteredPurchases
                    .reduce((sum, p) => sum + (p.grandTotal || 0), 0)
                    .toFixed(2)}
                </div>
                <div>
                  <div>
                    Purchase Due - ${" "}
                    {filteredPurchases
                      .reduce((sum, p) => sum + (p.paymentDue || 0), 0)
                      .toFixed(2)}
                  </div>
                  <div>Purchase Return - $ 0.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
