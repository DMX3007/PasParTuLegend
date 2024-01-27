import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { Header } from "@/widgets";
import { Layout } from "@/shared/ui/layouts";

const queryClient = new QueryClient();

export function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
            <Layout header={<Header />} >
              <Component {...pageProps} />
            </Layout>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}
