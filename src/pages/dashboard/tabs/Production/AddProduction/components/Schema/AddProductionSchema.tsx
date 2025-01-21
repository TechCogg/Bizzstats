import { z } from "zod";

export const productionFormSchema = z.object({
  recipeName: z.string().optional(),
  quantity: z.string().optional(),
  productType: z.string().optional(),
  unit: z.string().optional(),
  itemCode: z.string().optional(),
  ingredient: z.string().optional(),
  qty: z.string().optional(),
  rate: z.string().optional(),
  cost: z.string().optional(),
});



export type ProductionFormSchema = z.infer<typeof productionFormSchema>;

