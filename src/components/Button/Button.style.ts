import styled from "styled-components";

import { COLORS } from "../../style/colors";
import { FONT_SIZE } from "../../style/fontSizes";

interface ButtonStyledProps {
  loading?: boolean;
}

const disabledStyle = `
  cursor: default;
  color: ${COLORS.BLACK};
  background-color: rgba(0, 0, 0, 0.26);
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  --height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.ORANGE};
  border: none;
  color: ${COLORS.WHITE};
  height: var(--height);
  border-radius: calc(var(--height) / 2);
  font-size: ${FONT_SIZE.body2};
  cursor: pointer;
  outline-color: ${COLORS.BLACK};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover:not(:disabled) {
    background-color: rgb(241 58 18);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 2px 0px rgb(0 0 0 / 12%);
  }

  &:disabled {
    ${disabledStyle}
  }

  ${(props) => props.loading && disabledStyle}
`;
