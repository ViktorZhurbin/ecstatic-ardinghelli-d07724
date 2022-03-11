import { useState } from "react";

import { Currency } from "../../types/Currency";
import { CurrencyForm } from "../CurrencyForm/CurrencyForm";
import { CurrencyItem } from "../CurrencyItem/CurrencyItem";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { Main, Hint, Wrapper, Content, Left, Title } from "./Layout.style";

export const Layout = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [formError, setFormError] = useState<string>();

  const handleAddCurrency = (currency: Currency) => {
    const isUnique = !currencies.find(
      ({ baseSymbol }) => baseSymbol === currency.baseSymbol
    );

    if (isUnique) {
      setFormError(undefined);
      setCurrencies([...currencies, currency]);
    } else {
      return `${currency.baseSymbol} is already listed`;
    }
  };

  return (
    <Wrapper>
      <Header />
      <Main>
        <Left>
          <Title>Now you can track all your cryptos here!</Title>
          <Content>
            <Hint>
              Just enter the cryptocurrency code on the form to the right
            </Hint>
            {currencies.length > 0 && (
              <div>
                {currencies.map(({ baseSymbol, ticker }) => {
                  const handleRemoveCurrency = () => {
                    const filteredList = currencies.filter(
                      (market) => market.baseSymbol !== baseSymbol
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
              </div>
            )}
          </Content>
        </Left>
        <CurrencyForm
          error={formError}
          setError={setFormError}
          onSubmit={handleAddCurrency}
        />
      </Main>
      <Footer />
    </Wrapper>
  );
};
