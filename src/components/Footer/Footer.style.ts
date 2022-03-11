import styled from "styled-components";

import { SCREEN_SIZE } from "../../style/screen";

export const Wrapper = styled.footer`
  background-color: var(--color-white);
  color: var(--color-grey);
  padding: 20px calc(var(--horizontal-padding));

  @media (min-width: ${SCREEN_SIZE.M}) {
    padding: 40px calc(var(--horizontal-padding) + 20px);
  }
`;
