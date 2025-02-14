"use client";

import React, { useState, ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { ExpenseInformationSection } from "./components/AddExpenseInfo/AddExpenseInfo";
import { PaymentInformationSection } from "@/components/common-components/CommonPageComponent/AddPaymentDetails/AddPaymentDetails";
import { Button } from "@/components/ui/button";
import { ExpenseFormSchema } from "./components/Schema/AddExpenseSchema";
import { PaymentFormSchema } from "@/components/common-components/CommonPageComponent/AddPaymentDetails/components/Schema";
import { useAddExpense } from "@/services/hooks/expenses/mutations/useSetExpense";
import { Expense } from "@/services/hooks/expenses/mutations/useSetExpense/interface";
import { Toastify } from "@/components/common-components/Toastify/Toastify";

export default function AddExpenseForm() {
  const [expenseForm1Methods, setExpenseForm1Methods] =
    useState<UseFormReturn<ExpenseFormSchema> | null>(null);
    const [expenseForm2Methods, setExpenseForm2Methods] =
    useState<UseFormReturn<ExpenseFormSchema> | null>(null);

  const [paymentFormMethods, setPaymentFormMethods] =
    useState<UseFormReturn<PaymentFormSchema> | null>(null);


  const addExpenseMutation = useAddExpense({
    successMessage: "Expense added successfully!",
    errorMessage: "Failed to add expense. Please try again.",
  });



  const handleSave = async () => {
    if (expenseForm1Methods && expenseForm2Methods && paymentFormMethods) {
      const isExpenseForm1Valid = await expenseForm1Methods.trigger();
      const isExpenseForm2Valid = await expenseForm2Methods.trigger();
      const isPaymentFormValid = await paymentFormMethods.trigger();

      if (isExpenseForm1Valid && isExpenseForm2Valid &&  isPaymentFormValid) {
        const expenseData1 = expenseForm1Methods.getValues();
        const expenseData2 = expenseForm2Methods.getValues();
        const paymentData = paymentFormMethods.getValues();

        const combinedData: Expense = {
          ...expenseData1,
          ...expenseData2,
          ...paymentData,
   
        } as Expense;

        addExpenseMutation.mutate(combinedData);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h1 className="text-xl font-semibold">Add Expense</h1>
      </div>

      <ExpenseInformationSection
        onForm1StateChange={setExpenseForm1Methods}
        onForm2StateChange={setExpenseForm2Methods}
      />
      <PaymentInformationSection
        onFormStateChange={setPaymentFormMethods}
   
      />
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={
            !expenseForm1Methods ||
            !expenseForm2Methods ||
            !paymentFormMethods ||
            addExpenseMutation.isPending
          }
        >
          {addExpenseMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      <Toastify />
    </div>
  );
}
