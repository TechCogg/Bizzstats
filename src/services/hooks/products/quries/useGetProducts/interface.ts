export interface IProductsListRes {
  data: ItemProducts[];
}
export interface ItemProducts {
  id: string;
  productName: string;
  itemCode: string;
  businessLocation: string | string[];
  alertQuantity: string;
  barcodeType: string;
  unit: string;
  brand: string;
  category: string;
  subCategory: string;
  productImage: string | null;
  description: string;
  brochureFile: string | null;
  applicableTax: string;
  excTax: string;
  exctax: string;
  incTax: string;
  manageStock: boolean;
  margin: string;
  productType: string;
  sellingPriceTaxType: string;
}

export interface IProductsListRes extends Array<ItemProducts> {}
