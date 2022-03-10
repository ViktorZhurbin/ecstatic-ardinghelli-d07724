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
  return (
    <Wrapper>
      <Item>
        <CupIcon />
        <Info>
          <Symbol>{symbol}</Symbol>
          <Price>{price || "N/A"}</Price>
        </Info>
      </Item>
      <RemoveIcon onClick={onClickRemove} />
    </Wrapper>
  );
};
