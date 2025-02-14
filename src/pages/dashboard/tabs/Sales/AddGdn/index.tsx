"use client"

import React, { useState, useEffect } from "react"
import type { UseFormReturn } from "react-hook-form"
import { GdnInformationSection } from "./components/AddGdnInfo/AddGdnInfo"
import { ProductSearch } from "@/components/common-components/CommonPageComponent/AddSearchPrduct/AddSearchPrduct"
import { Button } from "@/components/ui/button"
import type { GdnFormSchema } from "./components/Schema/GdnSchema"
import type { ShippingSchema } from "@/components/common-components/CommonPageComponent/AddShippingDetails/componenets/Schema"
import type { DiscountSchema } from "@/components/common-components/CommonPageComponent/AddDiscountDetails/componenets/Schema"
import { useAddGdn } from "@/services/hooks/sales/mutations/useSetGdn"
import type { Gdn } from "@/services/hooks/sales/mutations/useSetGdn/interface"
import { Toastify } from "@/components/common-components/Toastify/Toastify"

export default function AddGdnForm() {
  const [gdnFormMethods, setGdnFormMethods] = useState<UseFormReturn<GdnFormSchema> | null>(null)
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])
  const [totalAmount, setTotalAmount] = useState(0)

  const [payableAmount, setPayableAmount] = useState(0)

  const addGdnMutation = useAddGdn({
    successMessage: "Gdn added successfully!",
    errorMessage: "Failed to add gdn. Please try again.",
  })

  const handleProductsChange = (products: any[]) => {
    setSelectedProducts(products)
    const newTotalAmount = products.reduce(
      (sum, product) => sum + Number(product.unitPrice) * Number(product.quantity),
      0,
    )
    setTotalAmount(newTotalAmount)
  }
  

  useEffect(() => {

    const newPayableAmount = totalAmount
    console.log("New Payable Amount:", newPayableAmount)
    setPayableAmount(newPayableAmount)
  }, [totalAmount])

  const handleSave = async () => {
    if (gdnFormMethods ) {
      const isGdnFormValid = await gdnFormMethods.trigger()
  
      if (isGdnFormValid) {
        const gdnData = gdnFormMethods.getValues()
   
        const combinedData: Gdn = {
          ...gdnData,
          products: selectedProducts,
          amount: payableAmount.toString(),
        } as unknown as Gdn

        addGdnMutation.mutate(combinedData)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h1 className="text-xl font-semibold">Add Good Delivery Notes</h1>
      </div>

      <GdnInformationSection onFormStateChange={setGdnFormMethods} />
      <ProductSearch onProductsChange={handleProductsChange} />


      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Summary</h2>
        <div className="space-y-2">
          <div className="text-xl font-bold">Total Payable: ${payableAmount.toFixed(2)}</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={
            !gdnFormMethods ||
            selectedProducts.length === 0 ||
            addGdnMutation.isPending
          }
        >
          {addGdnMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      <Toastify />
    </div>
  )
}

