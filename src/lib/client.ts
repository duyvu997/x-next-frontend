import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import type { NormalizedCacheObject } from '@apollo/client';

const uri = process.env.NEXT_PUBLIC_GRAPH_QL_URL || 'http://localhost:3000/api';
// Function to create a new Apollo Client instance
const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri,
    }),
  });
};

// Register the Apollo Client with Next.js experimental support
export default createApolloClient;
