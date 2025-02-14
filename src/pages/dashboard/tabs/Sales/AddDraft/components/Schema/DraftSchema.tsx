import { z } from "zod";

export const draftFormSchema = z.object({
  serviceType: z.string().optional(),
  subscribe: z.boolean().optional(),
  customer: z.string().optional(),
  payTerm: z.string().optional(),
  saleDate: z.string().optional(),
  invoiceScheme: z.string().optional(),
  invoiceNo: z.string().optional(),
  document: z.instanceof(File).nullable().optional(),
  salesOrder:  z.string().optional(),
  selectTable: z.string().optional(),
  serviceStaff: z.string().optional(),
  productName: z.string().optional(),
  sku: z.string().optional(),
  quantity: z.string().optional(),
  unitPrice: z.string().optional(),
  discount: z.string().optional(),
  priceIncTax: z.string().optional(),
  subtotal: z.string().optional(),


});

export type DraftFormSchema = z.infer<typeof draftFormSchema>;
