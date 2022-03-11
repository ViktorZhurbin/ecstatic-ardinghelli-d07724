import styled from "styled-components";

import { COLORS } from "../../style/colors";

export const Wrapper = styled.div`
  position: absolute;
  color: ${COLORS.BLACK};
  background-color: ${COLORS.WHITE};
  top: 100%;
  width: 100%;
  max-height: 38vh;
  overflow: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 20%), 0px 0px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px ${COLORS.BG_GREY};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5;
  padding: 6px 16px;
`;

export const Item = styled(Info)`
  cursor: pointer;

  &:focus {
    background-color: ${COLORS.BG_GREY};
  }

  &:hover {
    background-color: ${COLORS.BG_LIGHT_GREY};
  }
`;
