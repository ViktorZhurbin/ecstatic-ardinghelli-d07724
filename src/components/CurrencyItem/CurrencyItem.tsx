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
  const formattedPrice = price
    ? new Intl.NumberFormat("en", {
        style: "currency",
        currency: "EUR",
      }).format(Number(price))
    : "N/A";

  return (
    <Wrapper>
      <Item>
        <CupIcon />
        <Info>
          <Symbol>{symbol}</Symbol>
          <Price>{formattedPrice}</Price>
        </Info>
      </Item>
      <RemoveIcon onClick={onClickRemove} />
    </Wrapper>
  );
};
