import { ForwardedRef, forwardRef } from "react";

import { Currency } from "../../types/Currency";
import { Info, Item, Wrapper } from "./SearchResults.style";

interface SearchResultsProps {
  open: boolean;
  loading: boolean;
  currency?: Currency;
  onClose: () => void;
  onSelect: (symbol: string) => void;
}

export const SearchResults = forwardRef(
  (props: SearchResultsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { open, loading, currency, onClose, onSelect } = props;

    if (!open) {
      return null;
    }

    if (loading) {
      return (
        <Wrapper ref={ref}>
          <Info>Loading...</Info>
        </Wrapper>
      );
    }

    if (!currency) {
      return (
        <Wrapper ref={ref}>
          <Info>No results</Info>
        </Wrapper>
      );
    }

    const handleSelect = () => onSelect(currency.baseSymbol);

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSelect();
      }

      if (event.key === "Escape") {
        onClose();
      }
    };

    return (
      <Wrapper ref={ref}>
        <Item tabIndex={0} onKeyDown={handleKeyDown} onClick={handleSelect}>
          {currency.baseSymbol}
        </Item>
      </Wrapper>
    );
  }
);

SearchResults.displayName = "SearchResults";
