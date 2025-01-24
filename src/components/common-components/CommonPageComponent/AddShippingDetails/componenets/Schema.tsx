import { z } from "zod";

export const shippingSchema = z.object({
  shippingDetails: z.string().optional(),
  shippingAddress: z.string().optional(),
  shippingCharges: z.string().optional(),
  shippingStatus: z.string().optional(),
  deliveredTo: z.string().optional(),
  deliveryPerson: z.string().optional(),
  shippingDocument: z.instanceof(File).nullable().optional(),
  expenseName: z.string().optional(),
  amount: z.string().optional(),
});

export type ShippingSchema = z.infer<typeof shippingSchema>;
