import CupIcon from "../../../assets/icons/currencyCupWithCrown.svg";

import {
  Code,
  Info,
  Item,
  Price,
  RemoveIcon,
  Wrapper,
} from "./CurrencyItem.style";

interface CurrencyItemProps {
  code: string;
  price: string;
}

export const CurrencyItem = ({ code, price }: CurrencyItemProps) => {
  return (
    <Wrapper>
      <Item>
        <CupIcon />
        <Info>
          <Code>{code}</Code>
          <Price>{price}</Price>
        </Info>
      </Item>
      <RemoveIcon />
    </Wrapper>
  );
};
