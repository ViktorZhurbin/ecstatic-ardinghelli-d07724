import { gql, useQuery } from "@apollo/client";

import { Currency } from "../../types/Currency";
import { QUOTE_SYMBOL } from "../../components/Layout/Layout";

export const GET_CURRENCIES = gql`
  query currencies($symbol: String!) {
    markets(
      filter: { baseSymbol: { _eq: $symbol }, quoteSymbol: { _eq: ${QUOTE_SYMBOL} } }
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
