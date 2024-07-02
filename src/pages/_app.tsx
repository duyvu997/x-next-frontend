import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ToastProvider } from 'react-toast-notifications';
import createApolloClient from '../lib/client';

const client = createApolloClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ToastProvider>
  );
}
