import { z } from "zod";

export const productFormSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  itemCode: z.string().min(1, "Item code is required"),
  barcodeType: z.string().min(1, "Barcode type is required"),
  unit: z.string().min(1, "Unit is required"),
  brand: z.string().optional(),
  category: z.string().optional(),
  subCategory: z.string().optional(),
  businessLocation: z.string().optional(),
  alertQuantity: z.string().optional(),
  productType: z.string().optional(),
  productImage: z.any().optional(),
  manageStock: z.boolean().optional(),
  margin: z.string().optional(),
});



export type ProductFormSchema = z.infer<typeof productFormSchema>;

