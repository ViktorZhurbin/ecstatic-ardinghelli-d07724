import { gql, useQuery } from "@apollo/client";

import { Currency } from "../../types/Currency";

const SEARCH_CURRENCIES_BY_CODE = gql`
  query currency($code: String!) {
    assets(filter: { assetSymbol: { _like: $code } }) {
      assetName
      assetSymbol
    }
  }
`;

export const useSearchCurrenciesByCode = (code?: string) =>
  useQuery<{ assets: Currency[] }>(SEARCH_CURRENCIES_BY_CODE, {
    variables: { code: `${code}%` },
    skip: !code,
  });
