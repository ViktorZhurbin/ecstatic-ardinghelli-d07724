import styled from "styled-components";

import { COLORS } from "../../style/colors";
import { FONT_SIZE } from "../../style/fontSizes";

export const Wrapper = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 36px;
  max-width: 400px;
  color: ${COLORS.GREY};
  display: grid;
  gap: 40px;
`;

export const Form = styled.form`
  display: grid;
  gap: 12px;
`;

export const Terms = styled.div`
  font-size: ${FONT_SIZE.body2};
  text-align: center;
`;
