import { ForwardedRef, forwardRef, useEffect } from "react";

import { useSearchAssetsBySymbol } from "../../graphql/asset/search";
import { Info, Item, Wrapper } from "./SearchResults.style";

interface SearchResultsProps {
  open: boolean;
  query: string;
  onSelect: (symbol: string) => void;
}

export const SearchResults = forwardRef(
  (props: SearchResultsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { open, query, onSelect } = props;

    const { data, loading, refetch } = useSearchAssetsBySymbol(query);

    useEffect(() => {
      if (query && open) {
        refetch({ baseSymbol: query });
      }
    }, [query, refetch, open]);

    if (!open) {
      return null;
    }

    return (
      <Wrapper ref={ref}>
        {loading && <Info>Loading...</Info>}
        {!loading && !data?.assets.length && <Info>No results</Info>}
        {data?.assets.map(({ assetSymbol, assetName }) => {
          const handleSetAsset = () => onSelect(assetSymbol);

          const handleKeyDown = (event: React.KeyboardEvent) => {
            if (event.key === "Enter") {
              handleSetAsset();
            }
          };

          return (
            <Item
              key={assetSymbol}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onClick={handleSetAsset}
            >
              {assetSymbol} - {assetName}
            </Item>
          );
        })}
      </Wrapper>
    );
  }
);

SearchResults.displayName = "SearchResults";
