export interface Gop {
    serviceType: string;
    subscribe: boolean;
    customer: string;
    payTerm: string;
    gopDate: string;
    invoiceScheme: string;
    invoiceNo?: string;
    document?: File | null;
    salesOrder?: string;
    selectTable: string;
    serviceStaff: string;
    vehicleDetails: string;
  }
  
  