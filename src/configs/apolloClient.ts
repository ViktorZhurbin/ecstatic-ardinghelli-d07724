import { ApolloClient, InMemoryCache } from "@apollo/client";

import { BLOCKTAP_API_ENDPOINT } from "./constants";

const headers: Record<string, string> = {};

if (process.env.BLOCKTAP_API_TOKEN) {
  headers.Authorization = `Bearer ${process.env.BLOCKTAP_API_TOKEN}`;
}

export const client = new ApolloClient({
  headers,
  uri: BLOCKTAP_API_ENDPOINT,
  cache: new InMemoryCache(),
});
