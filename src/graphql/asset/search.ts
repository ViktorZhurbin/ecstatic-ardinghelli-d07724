import { gql, useQuery } from "@apollo/client";

import { Asset } from "../../types/Asset";

const SEARCH_ASSETS_BY_SYMBOL = gql`
  query currency($symbol: String!) {
    assets(filter: { assetSymbol: { _like: $symbol } }) {
      assetName
      assetSymbol
    }
  }
`;

export const useSearchAssetsBySymbol = (assetSymbol?: string) =>
  useQuery<{ assets: Asset[] }>(SEARCH_ASSETS_BY_SYMBOL, {
    variables: { assetSymbol: `${assetSymbol}%` },
    skip: !assetSymbol,
  });
