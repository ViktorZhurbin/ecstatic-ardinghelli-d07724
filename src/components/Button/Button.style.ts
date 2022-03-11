import styled from "styled-components";
import { COLORS } from "../../style/colors";

export const ButtonStyled = styled.button`
  --height: 40px;

  background-color: ${COLORS.ORANGE};
  border: none;
  color: ${COLORS.WHITE};
  height: var(--height);
  border-radius: calc(var(--height) / 2);
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover:not(:disabled) {
    background-color: rgb(241 58 18);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 2px 0px rgb(0 0 0 / 12%);
  }

  &:disabled {
    cursor: arrow;
    background-color: rgba(0, 0, 0, 0.26);
  }
`;
