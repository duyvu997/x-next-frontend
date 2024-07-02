import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import createApolloClient from '../lib/client';

const client = createApolloClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
