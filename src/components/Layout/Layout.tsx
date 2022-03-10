import { useState } from "react";

import { Market } from "../../types/Market";
import { CurrencyForm } from "../CurrencyForm/CurrencyForm";
import { CurrencyItem } from "../CurrencyItem/CurrencyItem";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { Main, Hint, Wrapper, Content, Left, Title } from "./Layout.style";

const mockData: Market[] = [
  { baseSymbol: "BTC", ticker: { lastPrice: "8000" } },
  { baseSymbol: "LTC", ticker: { lastPrice: "50" } },
];

export const Layout = () => {
  const [currencies, setCurrencies] = useState(mockData);

  const handleAddMarket = (currency: Market) => {
    setCurrencies([...currencies, currency]);
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
          </Content>
        </Left>
        <CurrencyForm onSubmit={handleAddMarket} />
      </Main>
      <Footer />
    </Wrapper>
  );
};
