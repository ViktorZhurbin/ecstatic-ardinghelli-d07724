import styled from "styled-components";

import { COLORS } from "../../style/colors";
import { Spinner as _Spinner } from "../Spinner/Spinner";

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.6rem;
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
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 12px 35px 12px var(--horizontal-indent);
`;

export const StyledSpinner = styled(_Spinner)`
  position: absolute;
  right: 8px;
`;

export const HelperText = styled.label`
  margin: 3px var(--horizontal-indent) 0;
  font-size: 0.75rem;
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
