import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProps } from "next/app";

const queryClient = new QueryClient();

export function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Component {...pageProps} />
    </QueryClientProvider>)
}