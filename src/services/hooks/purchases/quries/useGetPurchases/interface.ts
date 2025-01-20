export interface IPurchasesListRes {
  data: ItemPurchases[]; 
}
export interface ItemPurchases {
    id: string | number;
    date: string;
    referenceNo: string;
    businessLocation: string;
    supplier: string;
    purchaseStatus: "Received" | "Pending";
    paymentStatus: "Paid" | "Due";
    grandTotal: number;
    paymentDue: number;
    addedBy: string;
  }
    export interface IPurchasesListRes extends Array<ItemPurchases> {}