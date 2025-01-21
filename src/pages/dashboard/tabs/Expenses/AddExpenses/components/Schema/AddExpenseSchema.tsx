import { z } from "zod"

export const expenseFormSchema = z.object({
  businessLocation: z.string().min(1, "Business location is required"),
  expenseCategory: z.string().min(1, "Expense category is required"),
  subCategory: z.string().optional(),
  referenceNo: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  expenseFor: z.string().optional(),
  expenseForContact: z.string().optional(),
  attachDocument: z.instanceof(File).nullable().optional(),
  applicableTax: z.string().min(1, "Applicable tax is required"),
  totalAmount: z.string().min(1, "Total amount is required"),
  expenseNote: z.string().optional(),
  isRefund: z.boolean().optional(),
  isRecurring: z.boolean().optional(),
  recurringInterval: z.string().optional(),
  noOfRepetitions: z.string().optional(),
})

export type ExpenseFormSchema = z.infer<typeof expenseFormSchema>