import { gql, useQuery } from "@apollo/client";

import { Asset } from "../../types/Asset";

const SEARCH_ASSETS_BY_SYMBOL = gql`
  query searchCurrency($symbol: String!) {
    assets(filter: { assetSymbol: { _like: $symbol } }) {
      assetName
      assetSymbol
    }
  }
`;

export const useSearchAssetsBySymbol = (symbol?: string) =>
  useQuery<{ assets: Asset[] }>(SEARCH_ASSETS_BY_SYMBOL, {
    variables: { symbol: `${symbol}%` },
    skip: !symbol,
  });
