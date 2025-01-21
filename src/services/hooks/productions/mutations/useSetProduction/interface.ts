export interface Production {
  recipeName: string;
  quantity: string;
  productType: string;
  unit: string;
  items: {
    itemCode: string;
    ingredient: string;
    qty: string;
    rate: string;
    cost: string;
  }[];
}
