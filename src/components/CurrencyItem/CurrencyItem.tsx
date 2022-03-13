import CupIcon from "../../../assets/icons/currencyCupWithCrown.svg";

import {
  Symbol,
  Info,
  Item,
  Price,
  RemoveIcon,
  Wrapper,
} from "./CurrencyItem.style";

interface CurrencyItemProps {
  symbol: string;
  price?: string;
  onClickRemove: () => void;
}

export const CurrencyItem = ({
  symbol,
  price,
  onClickRemove,
}: CurrencyItemProps) => {
  const formattedPrice = !price
    ? "N/A"
    : new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(Number(price));

  return (
    <Wrapper data-testid="currencyItem">
      <Item>
        <CupIcon />
        <Info>
          <Symbol>{symbol}</Symbol>
          <Price>{formattedPrice}</Price>
        </Info>
      </Item>
      <RemoveIcon data-testid="removeIcon" onClick={onClickRemove} />
    </Wrapper>
  );
};
