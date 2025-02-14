import { z } from "zod";

export const paymentFormSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  paidOn: z.string().min(1, "Paid date is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  paymentAccount: z.string().optional(),
  paymentNote: z.string().optional(),
});

export type PaymentFormSchema = z.infer<typeof paymentFormSchema>;

