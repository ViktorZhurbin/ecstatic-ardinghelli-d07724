import { ForwardedRef, forwardRef, useEffect } from "react";

import { useSearchAssetsBySymbol } from "../../graphql/asset/search";
import { Info, Item, Wrapper } from "./SearchResults.style";

interface SearchResultsProps {
  open: boolean;
  query: string;
  onClose: () => void;
  onSelect: (symbol: string) => void;
}

export const SearchResults = forwardRef(
  (props: SearchResultsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { open, query, onClose, onSelect } = props;

    const { data, loading, refetch } = useSearchAssetsBySymbol(query);

    const noResults = !loading && !data?.assets.length;

    useEffect(() => {
      if (query && open) {
        refetch({ baseSymbol: query });
      }
    }, [query, refetch, open]);

    if (!open || !query) {
      return null;
    }

    return (
      <Wrapper ref={ref}>
        {loading && <Info>Loading...</Info>}
        {noResults ? (
          <Info>No results</Info>
        ) : (
          data?.assets.map(({ assetSymbol, assetName }) => {
            const handleSelect = () => onSelect(assetSymbol);

            const handleKeyDown = (event: React.KeyboardEvent) => {
              if (event.key === "Enter") {
                handleSelect();
              }

              if (event.key === "Escape") {
                onClose();
              }
            };

            return (
              <Item
                key={assetSymbol}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={handleSelect}
              >
                {assetSymbol} - {assetName}
              </Item>
            );
          })
        )}
      </Wrapper>
    );
  }
);

SearchResults.displayName = "SearchResults";
