import { z } from "zod";
export const discountSchema = z.object({
  discount: z.string().optional(),
  discountAmount: z.string().optional(),
  discountType: z.string().optional(),
  orderTax: z.string().optional(),
  sellNote: z.string().optional(),
});

export type DiscountSchema = z.infer<typeof discountSchema>;
