import { z } from "zod";

export const quotationFormSchema = z.object({
  serviceType: z.string().optional(),
  subscribe: z.boolean().optional(),
  customer: z.string().optional(),
  payTerm: z.string().optional(),
  quotationDate: z.string().optional(),
  quotationScheme: z.string().optional(),
  quotationNo: z.string().optional(),
  document: z.instanceof(File).nullable().optional(),
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

export type QuotationFormSchema = z.infer<typeof quotationFormSchema>;
