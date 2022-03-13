import { useState } from "react";

import { Currency } from "../../types/Currency";
import { Currencies } from "../Currencies/Currencies";
import { CurrencyForm } from "../CurrencyForm/CurrencyForm";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { Main, Hint, Wrapper, Content, Left, Title } from "./Layout.style";

export const QUOTE_SYMBOL = "EUR";

export const Layout = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [formError, setFormError] = useState<string>();

  const handleAddCurrency = (currency: Currency) => {
    const isPresent = currencies.find(
      ({ baseSymbol }) => baseSymbol === currency.baseSymbol
    );

    if (isPresent) {
      return `${currency.baseSymbol} was already added`;
    } else {
      setCurrencies([...currencies, currency]);
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
            <Currencies currencies={currencies} setCurrencies={setCurrencies} />
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
