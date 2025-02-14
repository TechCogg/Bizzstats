"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { GetSalesList } from "@/services/hooks/sales/quries/useGetSales"
import type { Sale } from "@/services/hooks/sales/mutations/useSetSale/interface"
import { useDeletePurchase } from "@/services/hooks/purchases"
import { DataTable } from "@/components/common-components/DataTable/DataTable"
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"

const salesColumns = [
  { key: "saleDate", label: "Date" },
  { key: "invoiceNo", label: "Invoice No." },
  { key: "customer", label: "Customer Name" },
  { key: "contactNumber", label: "Contact Number" },
  { key: "location", label: "Location" },
  { key: "paymentStatus", label: "Payment Status" },
  { key: "paymentMethod", label: "Payment Method" },
  { key: "totalAmount", label: "Total Amount" },
  { key: "totalPaid", label: "Total Paid" },
  { key: "sellDue", label: "Sell Due" },
  { key: "sellReturnDue", label: "Sell Return Due" },
  { key: "shippingStatus", label: "Shipping Status" },
  { key: "totalItems", label: "Total Items" },
  { key: "serviceType", label: "Types of Service" },
  { key: "addedBy", label: "Added By" },
  { key: "sellNote", label: "Sell Note" },
  { key: "staffNote", label: "Staff Note" },
  { key: "shippingDetails", label: "Shipping Details" },
  { key: "selectTable", label: "Table" },
  { key: "serviceStaff", label: "Service Staff" }
]

export default function Sales() {
  const { data: initialSalesData, isLoading } = GetSalesList()
  const [salesData, setSalesData] = useState<Sale[]>([])
  useEffect(() => {
    if (initialSalesData) {
      setSalesData(Array.isArray(initialSalesData) ? initialSalesData : [initialSalesData])
    }
  }, [initialSalesData])
  
  const deletePurchase = useDeletePurchase({
    successMessage: "Purchase(s) deleted successfully",
    errorMessage: "Failed to delete purchase(s)",
  })

  const handleDeletePurchase = async (purchaseId: string | number) => {
    try {
      await deletePurchase.mutateAsync({ PurchaseId: purchaseId })
      // After successful deletion, update the local state
      setSalesData((prevPurchases) => prevPurchases.filter((purchase) => purchase.id !== purchaseId))
    } catch (error) {
      console.error("Error deleting purchase:", error)
    }
  }

  const Actions = (purchase: Sale) => (
    <DropdownMenu>
      <DropdownMenuItem>View</DropdownMenuItem>
      <DropdownMenuItem>Edit</DropdownMenuItem>
    </DropdownMenu>
  )

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200" style={{ borderTop: "4px solid #2563eb" }}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">All Purchases</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>

          <DataTable<Sale>
            data={salesData}
            columns={salesColumns}
            onDelete={handleDeletePurchase}
            actions={Actions}
          />

    
        </div>
      </div>
    </div>
  )
}

