export interface ISalesListRes {
  data: Sale[];
}
export interface Sale {
  id: string;
  paymentDue: number;
  paymentStatus: string;
  grandTotal: number;
  serviceType: string;
  subscribe: boolean;
  customer: string;
  payTerm: string;
  saleDate: string;
  status: string;
  invoiceScheme: string;
  invoiceNo?: string;
  document?: File | null;
  salesOrder?: string;
  selectTable: string;
  serviceStaff: string;
  productName: string;
  sku: string;
  quantity: string;
  unitPrice: string;
  discount: string;
  priceIncTax: string;
  subtotal: string;
  discountType: string;
  discountAmount: string;
  orderTax: string;
  sellNote?: string;
  shippingDetails: string;
  shippingAddress: string;
  shippingCharges: string;
  shippingStatus: string;
  deliveredTo: string;
  deliveryPerson?: string;
  shippingDocument?: File | null;
  expenseName: string;
  amount: string;
}


export interface ISalesListRes extends Array<Sale> {}
