import React, { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import type { ItemPurchases } from "@/services/hooks/purchases/quries/useGetPurchases/interface"
import { DeleteConfirmationModal } from "@/components/common-components/ConfirmationModals/DeleteConfirmationModal";

interface PurchasesTableProps {
  currentItems: ItemPurchases[]
  onDeletePurchase: (purchaseId: string | number) => void
}

export function PurchasesTable({ currentItems, onDeletePurchase }: PurchasesTableProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [purchaseToDelete, setPurchaseToDelete] = useState<string | number | null>(null)

  const handleDeleteClick = (purchaseId: string | number) => {
    setPurchaseToDelete(purchaseId)
    setIsDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    if (purchaseToDelete) {
      onDeletePurchase(purchaseToDelete)
      setIsDeleteModalOpen(false)
      setPurchaseToDelete(null)
    }
  }

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false)
    setPurchaseToDelete(null)
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Reference No</TableHead>
            <TableHead>Business Location</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Purchase Status</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Grand Total</TableHead>
            <TableHead>Payment Due</TableHead>
            <TableHead>Added By</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((purchase, index) => (
            <TableRow key={purchase.id || index}>
              <TableCell>{purchase.date || "N/A"}</TableCell>
              <TableCell>{purchase.referenceNo || "N/A"}</TableCell>
              <TableCell>{purchase.businessLocation || "N/A"}</TableCell>
              <TableCell>{purchase.supplier || "N/A"}</TableCell>
              <TableCell>{purchase.purchaseStatus || "N/A"}</TableCell>
              <TableCell>{purchase.paymentStatus || "N/A"}</TableCell>
              <TableCell>${(purchase.grandTotal || 0).toFixed(2)}</TableCell>
              <TableCell>${(purchase.paymentDue || 0).toFixed(2)}</TableCell>
              <TableCell>{purchase.addedBy || "N/A"}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                      Actions <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleDeleteClick(purchase.id)}>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  )
}

