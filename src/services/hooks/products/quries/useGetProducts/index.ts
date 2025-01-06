import { createQueryFn, useFetchQuery } from '@/services/hooks/query';
import { GET_PRODUCTS_LIST } from '@/services/hooks/urls/products';
import { IProductsListRes } from './interface'; 

export const GetProductsList = () => {
  const {
    data: productsData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useFetchQuery<IProductsListRes>({
    queryKey: ['product-list'],
    fetchFn: createQueryFn<IProductsListRes>({
      url: GET_PRODUCTS_LIST(),
    }),
  });

  return {
    data: productsData, // Return the Data array directly
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
