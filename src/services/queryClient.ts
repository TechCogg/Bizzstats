import { QueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const queryClient = new QueryClient();

export const cacheClient = (url: string, callFn: () => Promise<AxiosResponse>) =>
  queryClient.fetchQuery({
    queryKey: [url],
    queryFn: callFn,
  });
