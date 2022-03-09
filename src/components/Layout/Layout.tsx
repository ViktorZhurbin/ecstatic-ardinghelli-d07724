import { CurrencyItem } from "../CurrencyItem/CurrencyItem";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { Main, Hint, Wrapper, Content, Left, Title } from "./Layout.style";

const mockData = [
  { code: "BTC", price: "8000" },
  { code: "LTC", price: "50" },
];

export const Layout = () => (
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
            {mockData.map(({ code, price }) => (
              <CurrencyItem code={code} price={price} />
            ))}
          </div>
        </Content>
      </Left>
    </Main>
    <Footer />
  </Wrapper>
);
