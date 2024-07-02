import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import type { NormalizedCacheObject } from '@apollo/client';

// Function to create a new Apollo Client instance
const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "http://localhost:4000/",
    }),
  });
};

// Register the Apollo Client with Next.js experimental support
export default createApolloClient
