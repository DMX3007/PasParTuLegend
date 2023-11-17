import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { Header } from "@/widgets";
import { Layout } from "@/shared/ui/layouts";

export function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Layout header={<Header />} >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
