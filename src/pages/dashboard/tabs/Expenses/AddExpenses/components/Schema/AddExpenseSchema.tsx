import { z } from "zod"

export const expenseFormSchema = z.object({
  businessLocation: z.string().optional(),
  expenseCategory: z.string().optional(),
  subCategory: z.string().optional(),
  referenceNo: z.string().optional(),
  date: z.string().optional(),
  expenseFor: z.string().optional(),
  expenseForContact: z.string().optional(),
  attachDocument: z.instanceof(File).nullable().optional(),
  applicableTax: z.string().optional(),
  totalAmount: z.string().optional(),
  expenseNote: z.string().optional(),
  isRefund: z.boolean().optional(),
  isRecurring: z.boolean().optional(),
  recurringInterval: z.string().optional(),
  noOfRepetitions: z.string().optional(),
})

export type ExpenseFormSchema = z.infer<typeof expenseFormSchema>