import { gql, useQuery } from "@apollo/client";

import { Currency } from "../../types/Currency";

export const GET_CURRENCIES = gql`
  query currencies($symbol: String!) {
    markets(
      filter: { baseSymbol: { _like: $symbol }, quoteSymbol: { _eq: "EUR" } }
    ) {
      baseSymbol
      ticker {
        lastPrice
      }
    }
  }
`;

export const useGetCurrencies = (input?: string) =>
  useQuery<{ markets: Currency[] }>(GET_CURRENCIES, {
    variables: { symbol: `${input}%` },
    skip: !input,
  });
