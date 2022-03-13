import styled from "styled-components";

import { COLORS } from "../../style/colors";
import { FONT_SIZE } from "../../style/fontSizes";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-image: linear-gradient(to right, ${COLORS.SUBTITLE}, 75%, ${COLORS.BG})
    1;
`;

export const Item = styled.div`
  display: flex;
  gap: 28px;
`;

export const Info = styled.div`
  display: grid;
  gap: 8px;
`;

export const Symbol = styled.div`
  font-size: ${FONT_SIZE.h3};
`;

export const Price = styled.div`
  font-size: ${FONT_SIZE.body2};
  color: ${COLORS.SUBTITLE};
`;

export const RemoveIcon = styled.div`
  --size: 12px;

  position: relative;
  width: var(--size);
  height: var(--size);
  padding: var(--size);
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.1s ease-in;

  :hover {
    opacity: 1;
  }

  ::before,
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    height: inherit;
    width: 2px;
    top: calc(var(--size) / 2);
    background-color: ${COLORS.WHITE};
  }

  ::before {
    transform: rotate(-45deg);
  }

  ::after {
    transform: rotate(45deg);
  }
`;
