import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clfto714y32fb01uibuc93qes/master',
  cache: new InMemoryCache()
})