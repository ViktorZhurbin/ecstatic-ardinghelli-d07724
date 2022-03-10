import { ApolloClient, InMemoryCache } from "@apollo/client";

const headers: Record<string, string> = {};

if (process.env.BLOCKTAP_API_TOKEN) {
  headers.Authorization = `Bearer ${process.env.BLOCKTAP_API_TOKEN}`;
}

export const client = new ApolloClient({
  headers,
  uri: "https://api.blocktap.io/graphql",
  cache: new InMemoryCache(),
});
