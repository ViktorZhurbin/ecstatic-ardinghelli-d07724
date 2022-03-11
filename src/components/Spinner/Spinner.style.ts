import styled, { keyframes } from "styled-components";

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
  border: ${SPINNER_STROKE} solid rgba(0 0 0 / 20%);
  border-radius: 100%;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -${SPINNER_STROKE};
    top: -${SPINNER_STROKE};
    height: 100%;
    width: 100%;
    border-width: ${SPINNER_STROKE};
    border-style: solid;
    border-color: transparent;
    border-top-color: rgba(0 0 0 / 80%);
    border-radius: 100%;
  }
`;
