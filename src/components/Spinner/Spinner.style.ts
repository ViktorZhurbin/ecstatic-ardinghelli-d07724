import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import { COLORS } from "../../style/colors";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const SPINNER_SIZE = "20px";
const SPINNER_STROKE = "2px";

export const SpinnerStyled = styled.div`
  height: ${SPINNER_SIZE};
  width: ${SPINNER_SIZE};
  animation: ${rotation} 1s infinite linear;
  border: ${SPINNER_STROKE} solid ${lighten(0.4, COLORS.DISABLED_TEXT)};
  border-radius: 100%;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -${SPINNER_STROKE};
    top: -${SPINNER_STROKE};
    height: ${SPINNER_SIZE};
    width: ${SPINNER_SIZE};
    border-width: ${SPINNER_STROKE};
    border-style: solid;
    border-color: transparent;
    border-top-color: ${COLORS.DISABLED_TEXT};
    border-radius: 100%;
  }
`;
