import styled from "styled-components";

import bg from "./assets/bg.png";
import figure from "./assets/figure.png";

export const Wrapper = styled.div`
  --horizontal-padding: 80px;

  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: var(--color-white);
  background-color: var(--color-bg);
  background-image: url(${bg});
  background-position: right -125% top -200px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 30px var(--horizontal-padding);
  background-image: url(${figure});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Left = styled.div`
  display: grid;
  gap: 20px;
  width: 35%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
`;

export const Content = styled.div`
  display: grid;
  gap: 30px;
  max-width: 300px;
`;

export const Hint = styled.h2`
  color: var(--color-subtitle);
  font-weight: normal;
`;
