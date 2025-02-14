import { createQueryFn, useFetchQuery } from '@/services/hooks/query';
import {GET_SALES_LIST} from '@/services/hooks/urls/sales';
import { Sale } from '../../mutations/useSetSale/interface'; 

export const GetSalesList = () => {
  const {
    data: salesData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useFetchQuery<Sale>({
    queryKey: ['sales-list'],
    fetchFn: createQueryFn<Sale>({
      url: GET_SALES_LIST(),
    }),
  });

  return {
    data: salesData, // Return the Data array directly
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
