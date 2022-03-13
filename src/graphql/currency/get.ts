import { gql } from "@apollo/client";

export const GET_CURRENCIES = gql`
  query currencies($baseSymbol: String!, $quoteSymbol: String!) {
    markets(
      filter: {
        baseSymbol: { _eq: $baseSymbol }
        quoteSymbol: { _eq: $quoteSymbol }
      }
    ) {
      baseSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
