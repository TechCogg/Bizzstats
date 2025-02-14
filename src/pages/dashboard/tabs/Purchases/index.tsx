"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { GetPurchasesList } from "@/services/hooks/purchases"
import type { ItemPurchases } from "@/services/hooks/purchases/quries/useGetPurchases/interface"
import { useDeletePurchase } from "@/services/hooks/purchases"
import { DataTable } from "@/components/common-components/DataTable/DataTable"
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"

const purchaseColumns = [
  { key: "date", label: "Date" },
  { key: "referenceNo", label: "Reference No" },
  { key: "businessLocation", label: "Business Location" },
  { key: "supplier", label: "Supplier" },
  { key: "purchaseStatus", label: "Purchase Status" },
  { key: "paymentStatus", label: "Payment Status" },
  { key: "grandTotal", label: "Grand Total" },
  { key: "paymentDue", label: "Payment Due" },
  { key: "addedBy", label: "Added By" },
]

export default function Purchases() {
  const { data: initialPurchasesData, isLoading } = GetPurchasesList()
  const [purchasesData, setPurchasesData] = useState<ItemPurchases[]>([])

  useEffect(() => {
    if (initialPurchasesData) {
      setPurchasesData(initialPurchasesData)
    }
  }, [initialPurchasesData])

  const deletePurchase = useDeletePurchase({
    successMessage: "Purchase(s) deleted successfully",
    errorMessage: "Failed to delete purchase(s)",
  })

  const handleDeletePurchase = async (purchaseId: string | number) => {
    try {
      await deletePurchase.mutateAsync({ PurchaseId: purchaseId })
      // After successful deletion, update the local state
      setPurchasesData((prevPurchases) => prevPurchases.filter((purchase) => purchase.id !== purchaseId))
    } catch (error) {
      console.error("Error deleting purchase:", error)
    }
  }

  const purchaseActions = (purchase: ItemPurchases) => (
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

          <DataTable<ItemPurchases>
            data={purchasesData}
            columns={purchaseColumns}
            onDelete={handleDeletePurchase}
            actions={purchaseActions}
          />

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                Total: Paid-
                {purchasesData.filter((p) => p.paymentStatus === "Paid").length}
              </div>
              <div>$ {purchasesData.reduce((sum, p) => sum + (p.grandTotal || 0), 0).toFixed(2)}</div>
              <div>
                <div>Purchase Due - $ {purchasesData.reduce((sum, p) => sum + (p.paymentDue || 0), 0).toFixed(2)}</div>
                <div>Purchase Return - $ 0.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

