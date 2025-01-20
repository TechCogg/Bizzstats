import { createQueryFn, useFetchQuery } from '@/services/hooks/query';
import {GET_PURCHASES_LIST} from '@/services/hooks/urls/products';
import { IPurchasesListRes } from './interface'; 

export const GetPurchasesList = () => {
  const {
    data: purchasesData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useFetchQuery<IPurchasesListRes>({
    queryKey: ['purchase-list'],
    fetchFn: createQueryFn<IPurchasesListRes>({
      url: GET_PURCHASES_LIST(),
    }),
  });

  return {
    data: purchasesData, // Return the Data array directly
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
