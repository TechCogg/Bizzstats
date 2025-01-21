"use client";

import React, { useState, ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { ExpenseInformationSection } from "./components/AddExpenseInfo/AddExpenseInfo";
import { PaymentInformationSection } from "./components/AddPaymentInfo/AddPaymentInfo";
import { Button } from "@/components/ui/button";
import { ExpenseFormSchema } from "./components/Schema/AddExpenseSchema";
import { PaymentFormSchema } from "./components/Schema/AddPaymentSchema";
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
  const [editorContent, setEditorContent] = useState<string>("");

  const addProductionMutation = useAddExpense({
    successMessage: "Product added successfully!",
    errorMessage: "Failed to add product. Please try again.",
  });

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

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
          description: editorContent,
        } as Expense;

        addProductionMutation.mutate(combinedData);
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
        editorContent={editorContent}
        setEditorContent={handleEditorChange}
      />
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
          disabled={
            !expenseForm1Methods ||
            !expenseForm2Methods ||
            !paymentFormMethods ||
            addProductionMutation.isPending
          }
        >
          {addProductionMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      <Toastify />
    </div>
  );
}
