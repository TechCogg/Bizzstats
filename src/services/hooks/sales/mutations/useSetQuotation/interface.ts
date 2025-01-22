export interface Quotation {
    serviceType: string;
    subscribe: boolean;
    customer: string;
    payTerm: string;
    quotationDate: string;
    quotationScheme: string;
    quotationNo?: string;
    document?: File | null;
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
    shippingAddress: string;
    shippingCharges: string;
    shippingStatus: string;
    deliveredTo: string;
    deliveryPerson?: string;
    shippingDocument?: File | null;
    expenseName: string;
    amount: string;
  }
  
  