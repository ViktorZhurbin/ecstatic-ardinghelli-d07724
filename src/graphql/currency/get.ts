import { gql, useQuery } from "@apollo/client";

import { Currency } from "../../types/Currency";

export const GET_CURRENCIES = gql`
  query currencies($symbol: String!) {
    markets(
      filter: { baseSymbol: { _eq: $symbol }, quoteSymbol: { _eq: "EUR" } }
    ) {
      baseSymbol
      ticker {
        lastPrice
      }
    }
  }
`;

export const useGetCurrencies = (symbol?: string) =>
  useQuery<{ markets: Currency[] }>(GET_CURRENCIES, {
    variables: { symbol },
    skip: !symbol,
  });
