import styled from "styled-components";

import bg from "./assets/bg.png";
import figure from "./assets/figure.png";

export const Wrapper = styled.div`
  --horizontal-padding: 80px;

  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: white;
  background-color: #2a0a4a;
  background-image: url(${bg});
  background-position: right -125% top -200px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Main = styled.main`
  padding: 30px var(--horizontal-padding);
  background-image: url(${figure});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Subtitle = styled.h2`
  margin: 0;
`;
