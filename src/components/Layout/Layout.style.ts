import styled from "styled-components";

import { COLORS } from "../../style/colors";
import { FONT_SIZE } from "../../style/fontSizes";
import { SCREEN_SIZE } from "../../style/screen";

import bg from "./assets/bg.png";
import figure from "./assets/figure.png";

export const Wrapper = styled.div`
  --horizontal-padding: 30px;

  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BG};
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
    gap: 35px;
    justify-content: space-between;
    align-items: start;
  }

  @media (min-width: ${SCREEN_SIZE.XL}) {
    background-image: url(${figure});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
  }
`;

export const Left = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;

  @media (min-width: ${SCREEN_SIZE.M}) {
    justify-items: start;
  }

  @media (min-width: ${SCREEN_SIZE.XL}) {
    width: 35%;
  }
`;

export const Title = styled.h1`
  font-size: ${FONT_SIZE.h1};
  font-weight: normal;
`;

export const Content = styled.div`
  display: grid;
  gap: 30px;
  max-width: 450px;

  @media (min-width: ${SCREEN_SIZE.M}) {
    max-width: 350px;
  }

  @media (min-width: ${SCREEN_SIZE.L}) {
    max-width: 400px;
  }

  @media (min-width: ${SCREEN_SIZE.XL}) {
    max-width: 450px;
  }
`;

export const Hint = styled.h2`
  color: ${COLORS.SUBTITLE};
  font-size: ${FONT_SIZE.h2};
  font-weight: normal;
`;
