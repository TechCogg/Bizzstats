import { z } from "zod";

export const taxFormSchema = z.object({
  sellingPriceTaxType: z.string().optional(),
  applicableTax: z.string().optional(),
  productType: z.string().optional(),
  exctax: z.string().optional(),
  incTax: z.string().optional(),
  margin: z.string().optional(),
  excTax: z.string().optional(),
  productImage: z.any().optional(),
});

export type TaxFormSchema = z.infer<typeof taxFormSchema>;

