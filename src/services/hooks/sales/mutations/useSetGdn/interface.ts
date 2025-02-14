export interface Gdn {
    serviceType: string;
    subscribe: boolean;
    customer: string;
    payTerm: string;
    gdnDate: string;
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
    sellNote: string;
    totalPayable: string;
  }
  
  