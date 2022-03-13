import styled from "styled-components";

import { COLORS } from "../../style/colors";
import { FONT_SIZE } from "../../style/fontSizes";

export const Label = styled.label`
  text-transform: uppercase;
  font-size: ${FONT_SIZE.label};
  transform: translate(var(--horizontal-indent), 50%);
  background-color: ${COLORS.WHITE};
  width: max-content;
  padding: 0 4px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  flex: 1;
  border-radius: 4px;
  border: 1px solid ${COLORS.LIGHT_GREY};
  outline-color: ${COLORS.BLACK};
  font-size: ${FONT_SIZE.body2};
  line-height: 1.5;
  padding: 12px var(--horizontal-indent) 12px;
`;

export const HelperText = styled.label`
  margin: 3px var(--horizontal-indent) 0;
  font-size: ${FONT_SIZE.caption};
`;

interface WrapperProps {
  error: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  --horizontal-indent: 10px;

  position: relative;
  display: grid;

  ${(props) =>
    props.error &&
    `
    color: ${COLORS.RED};

    ${Input} {
      border-color: ${COLORS.RED};
      outline-color: ${COLORS.RED};
    }`}
`;
