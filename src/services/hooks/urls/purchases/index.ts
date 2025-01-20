export const GET_PURCHASES_LIST = () => {
    return `http://localhost:3000/purchases`;
  };
export const DELETE_PURCHASE = (PurchaseId: string | number |any): string => {
    return `http://localhost:3000/purchases/${PurchaseId}`;
  };
