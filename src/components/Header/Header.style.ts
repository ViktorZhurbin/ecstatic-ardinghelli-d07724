import styled from "styled-components";

import { FONT_SIZE } from "../../style/fontSizes";

export const Wrapper = styled.header`
  background-color: transparent;
  font-size: ${FONT_SIZE.h2};
  padding: 30px var(--horizontal-padding);
`;

export const Logo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: "Roboto Slab", serif;
`;
