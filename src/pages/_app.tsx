import { useApollo } from "@/apollo/client";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
