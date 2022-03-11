import styled from "styled-components";

import { SCREEN_SIZE } from "../../style/screen";

import bg from "./assets/bg.png";
import figure from "./assets/figure.png";

export const Wrapper = styled.div`
  --horizontal-padding: 30px;

  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: var(--color-white);
  background-color: var(--color-bg);
  background-image: url(${bg});
  background-position: right -500px top;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: ${SCREEN_SIZE.M}) {
    --horizontal-padding: 80px;
  }
`;

export const Main = styled.main`
  display: grid;
  gap: 20px;
  justify-items: center;
  padding: 30px var(--horizontal-padding);

  @media (min-width: ${SCREEN_SIZE.M}) {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: start;
  }

  @media (min-width: ${SCREEN_SIZE.XL}) {
    background-image: url(${figure});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 35%;
  }
`;

export const Left = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: ${SCREEN_SIZE.XL}) {
    width: 35%;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
`;

export const Content = styled.div`
  display: grid;
  gap: 30px;

  @media (min-width: ${SCREEN_SIZE.M}) {
    max-width: 300px;
  }
`;

export const Hint = styled.h2`
  color: var(--color-subtitle);
  font-weight: normal;
`;
