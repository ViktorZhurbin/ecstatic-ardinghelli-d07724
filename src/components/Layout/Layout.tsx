import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { Main, Wrapper } from "./Layout.style";

export const Layout = () => (
  <Wrapper>
    <Header />
    <Main>
      <h1>Now you can track all your cryptos here!</h1>
      <h2>Just enter the cryptocurrency code on the form to the right</h2>
    </Main>
    <Footer />
  </Wrapper>
);
