import { Currency } from "../../types/Currency";
import { CurrencyItem } from "../CurrencyItem/CurrencyItem";
import { Wrapper } from "./Currencies.style";

interface CurrenciesProps {
  currencies: Currency[];
  setCurrencies: (currencies: Currency[]) => void;
}

export const Currencies = ({ currencies, setCurrencies }: CurrenciesProps) =>
  currencies.length > 0 ? (
    <Wrapper>
      {currencies.map(({ baseSymbol, ticker }) => {
        const handleRemoveCurrency = () => {
          const filteredList = currencies.filter(
            (currency) => currency.baseSymbol !== baseSymbol
          );

          setCurrencies(filteredList);
        };

        return (
          <CurrencyItem
            key={baseSymbol}
            symbol={baseSymbol}
            price={ticker?.lastPrice}
            onClickRemove={handleRemoveCurrency}
          />
        );
      })}
    </Wrapper>
  ) : null;
