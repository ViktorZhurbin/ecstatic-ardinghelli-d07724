import { ApolloProvider } from "@apollo/client";

import { Layout } from "./components/Layout/Layout";
import { client } from "./configs/apolloClient";

import { GlobalStyle } from "./globalStyle";

export const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Layout />
  </ApolloProvider>
);
