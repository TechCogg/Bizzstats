"use client"

import React, { useState, useEffect } from "react"
import type { UseFormReturn } from "react-hook-form"
import { GopInformationSection } from "./components/AddGopInfo/AddGopInfo"
import { Button } from "@/components/ui/button"
import type { GopFormSchema } from "./components/Schema/GopSchema"
import { useAddGop } from "@/services/hooks/sales/mutations/useSetGop"
import type { Gop } from "@/services/hooks/sales/mutations/useSetGop/interface"
import { Toastify } from "@/components/common-components/Toastify/Toastify"

export default function AddGopForm() {
  const [gopFormMethods1, setGopFormMethods1] = useState<UseFormReturn<GopFormSchema> | null>(null)
  const [gopFormMethods2, setGopFormMethods2] = useState<UseFormReturn<GopFormSchema> | null>(null)
  const [totalAmount, setTotalAmount] = useState(0)
  const [payableAmount, setPayableAmount] = useState(0)

  const addGopMutation = useAddGop({
    successMessage: "Gop added successfully!",
    errorMessage: "Failed to add gop. Please try again.",
  })

  

  useEffect(() => {

    const newPayableAmount = totalAmount
    console.log("New Payable Amount:", newPayableAmount)
    setPayableAmount(newPayableAmount)
  }, [totalAmount])

  const handleSave = async () => {
    if (gopFormMethods1 && gopFormMethods2  ) {
      const isGopFormValid1 = await gopFormMethods1.trigger()
      const isGopFormValid2 = await gopFormMethods2.trigger()
  
  
      if (isGopFormValid1 && isGopFormValid2) {
        const gopData1 = gopFormMethods1.getValues()
        const gopData2 = gopFormMethods2.getValues()
   
        const combinedData: Gop = {
          ...gopData1,
          ...gopData2,
          amount: payableAmount.toString(),
        } as unknown as Gop

        addGopMutation.mutate(combinedData)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h1 className="text-xl font-semibold">Gate Out Ward Pass</h1>
      </div>

      <GopInformationSection onFormStateChange1={setGopFormMethods1} onFormStateChange2={setGopFormMethods2}  />


      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={
            !gopFormMethods1 ||
            !gopFormMethods2 ||
            addGopMutation.isPending
          }
        >
          {addGopMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      <Toastify />
    </div>
  )
}

