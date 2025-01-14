
export const GET_PRODUCTS_LIST = () => {
    return `http://localhost:3000/products`;
  };
  
export const ADD_PRODUCT = () => {
  return `http://localhost:3000/products`;
};

export const DELETE_PRODUCT = (ProductId: string | number |any): string => {
  return `http://localhost:3000/products/${ProductId}`;
};

