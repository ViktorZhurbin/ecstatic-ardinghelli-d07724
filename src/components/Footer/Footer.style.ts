import styled from "styled-components";

import { COLORS } from "../../style/colors";
import { SCREEN_SIZE } from "../../style/screen";

export const Wrapper = styled.footer`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.GREY};
  padding: 20px calc(var(--horizontal-padding));

  @media (min-width: ${SCREEN_SIZE.M}) {
    padding: 40px calc(var(--horizontal-padding) + 20px);
  }
`;
