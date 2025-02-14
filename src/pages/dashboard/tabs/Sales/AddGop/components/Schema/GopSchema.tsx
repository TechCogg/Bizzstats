import { z } from "zod";

export const gopFormSchema = z.object({
  serviceType: z.string().optional(),
  subscribe: z.boolean().optional(),
  customer: z.string().optional(),
  payTerm: z.string().optional(),
  gopDate: z.string().optional(),
  invoiceScheme: z.string().optional(),
  invoiceNo: z.string().optional(),
  document: z.instanceof(File).nullable().optional(),
  salesOrder:  z.string().optional(),
  selectTable: z.string().optional(),
  serviceStaff: z.string().optional(),
  vehicleDetails:  z.string().optional(),

});

export type GopFormSchema = z.infer<typeof gopFormSchema>;
