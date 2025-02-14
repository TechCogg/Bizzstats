"use client"

import React, { useState, useEffect } from "react"
import type { UseFormReturn } from "react-hook-form"
import { QuotationInformationSection } from "./components/AddQuotationInfo/AddQuotationInfo"
import { ProductSearch } from "@/components/common-components/CommonPageComponent/AddSearchPrduct/AddSearchPrduct"
import { DiscountSection } from "@/components/common-components/CommonPageComponent/AddDiscountDetails/AddDiscountDetails"
import { ShippingSection } from "@/components/common-components/CommonPageComponent/AddShippingDetails/AddShippingDetails"
import { Button } from "@/components/ui/button"
import type { QuotationFormSchema } from "./components/Schema/QuotationSchema"
import type { ShippingSchema } from "@/components/common-components/CommonPageComponent/AddShippingDetails/componenets/Schema"
import type { DiscountSchema } from "@/components/common-components/CommonPageComponent/AddDiscountDetails/componenets/Schema"
import { useAddQuotation } from "@/services/hooks/sales/mutations/useSetQuotation"
import type { Quotation } from "@/services/hooks/sales/mutations/useSetQuotation/interface"
import { Toastify } from "@/components/common-components/Toastify/Toastify"

export default function AddQuotationForm() {
  const [quotationFormMethods, setQuotationFormMethods] = useState<UseFormReturn<QuotationFormSchema> | null>(null)
  const [discountFormMethods, setDiscountFormMethods] = useState<UseFormReturn<DiscountSchema> | null>(null)
  const [shippingFormMethods, setShippingFormMethods] = useState<UseFormReturn<ShippingSchema> | null>(null)
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [shippingCost, setShippingCost] = useState(0)
  const [payableAmount, setPayableAmount] = useState(0)

  const addQuotationMutation = useAddQuotation({
    successMessage: "Quotation added successfully!",
    errorMessage: "Failed to add quotation. Please try again.",
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
    if (discountFormMethods) {
      const subscription = discountFormMethods.watch((value) => {
        if (value.discountType === "percentage") {
          setDiscountAmount(totalAmount * (Number(value.discount || "0") / 100))
        } else {
          setDiscountAmount(Number(value.discountAmount || "0"))
        }
      })
      return () => subscription.unsubscribe()
    }
  }, [discountFormMethods, totalAmount])
  
  useEffect(() => {
    if (shippingFormMethods) {
      const subscription = shippingFormMethods.watch((value) => {
        setShippingCost(Number(value.shippingCharges || "0"))
      })
      return () => subscription.unsubscribe()
    }
  }, [shippingFormMethods])
  

  useEffect(() => {
    console.log("Total Amount:", totalAmount)
    console.log("Discount Amount:", discountAmount)
    console.log("Shipping Cost:", shippingCost)
    const newPayableAmount = totalAmount - discountAmount + shippingCost
    console.log("New Payable Amount:", newPayableAmount)
    setPayableAmount(newPayableAmount)
  }, [totalAmount, discountAmount, shippingCost])

  const handleSave = async () => {
    if (quotationFormMethods && discountFormMethods && shippingFormMethods) {
      const isQuotationFormValid = await quotationFormMethods.trigger()
      const isDiscountFormValid = await discountFormMethods.trigger()
      const isShippingFormValid = await shippingFormMethods.trigger()

      if (isQuotationFormValid && isDiscountFormValid && isShippingFormValid) {
        const quotationData = quotationFormMethods.getValues()
        const discountData = discountFormMethods.getValues()
        const shippingData = shippingFormMethods.getValues()
        const combinedData: Quotation = {
          ...quotationData,
          ...discountData,
          ...shippingData,
          products: selectedProducts,
          subtotal: totalAmount.toString(),
          discountAmount: discountAmount.toString(),
          shippingCharges: shippingCost.toString(),
          amount: payableAmount.toString(),
        } as Quotation

        addQuotationMutation.mutate(combinedData)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h1 className="text-xl font-semibold">Add Quotation</h1>
      </div>

      <QuotationInformationSection onFormStateChange={setQuotationFormMethods} />
      <ProductSearch onProductsChange={handleProductsChange} />
      <DiscountSection onFormStateChange={setDiscountFormMethods} />
      <ShippingSection onFormStateChange={setShippingFormMethods} />

      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Summary</h2>
        <div className="space-y-2">
          <div>Subtotal: ${totalAmount.toFixed(2)}</div>
          <div>Discount: ${discountAmount.toFixed(2)}</div>
          <div>Shipping: ${shippingCost.toFixed(2)}</div>
          <div className="text-xl font-bold">Total Payable: ${payableAmount.toFixed(2)}</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={
            !quotationFormMethods ||
            !discountFormMethods ||
            !shippingFormMethods ||
            selectedProducts.length === 0 ||
            addQuotationMutation.isPending
          }
        >
          {addQuotationMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      <Toastify />
    </div>
  )
}

