import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { Main, Subtitle, Title, Wrapper } from "./Layout.style";

export const Layout = () => (
  <Wrapper>
    <Header />
    <Main>
      <Title>Now you can track all your cryptos here!</Title>
      <Subtitle>
        Just enter the cryptocurrency code on the form to the right
      </Subtitle>
    </Main>
    <Footer />
  </Wrapper>
);
