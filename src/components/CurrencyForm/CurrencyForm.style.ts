import styled from "styled-components";

import { COLORS } from "../../style/colors";

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
  font-size: 0.9rem;
  text-align: center;
`;
