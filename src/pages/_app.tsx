import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toastify } from '@/components/common-components/Toastify/Toastify';



// Create a QueryClient instance
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
   
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <Toastify />
    </QueryClientProvider>
   
  );
}
