import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import type { NormalizedCacheObject } from '@apollo/client';

const uri = process.env.NEXT_PUBLIC_GRAPH_QL_URL || 'http://localhost:3000/api';
const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri,
    }),
  });
};

export default createApolloClient;
