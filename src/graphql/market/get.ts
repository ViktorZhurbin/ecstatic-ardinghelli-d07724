import { gql, useQuery } from "@apollo/client";

import { Market } from "../../types/Market";

export const GET_MARKETS = gql`
  query market($symbol: String!) {
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

export const useGetMarkets = (symbol?: string) =>
  useQuery<{ markets: Market[] }>(GET_MARKETS, {
    variables: { symbol },
    skip: !symbol,
  });

// export const useGetMarketBySymbol = (symbol?: string) => {
//   const { data, loading, error, refetch } = useQuery<{ markets: Market[] }>(
//     GET_MARKETS,
//     {
//       variables: { baseSymbol: symbol },
//       skip: !symbol,
//     }
//   );

//   const response: Partial<QueryResult<Market>> = {
//     loading,
//     error,
//     refetch,
//   };

//   if (data && data?.markets?.length > 0) {
//     response.market =
//       data?.markets.find(({ ticker }) => Boolean(ticker?.lastPrice)) ||
//       data?.markets[0];
//   }

//   return response;
// };
