import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  color: var(--color-black);
  background-color: var(--color-white);
  top: 100%;
  width: 100%;
  max-height: 38vh;
  overflow: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
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
    background-color: var(--color-bg-grey);
  }

  &:hover {
    background-color: var(--color-bg-light-grey);
  }
`;
