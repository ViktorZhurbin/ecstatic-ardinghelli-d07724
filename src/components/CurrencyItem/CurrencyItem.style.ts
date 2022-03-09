import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-image: linear-gradient(
      to right,
      var(--color-subtitle),
      75%,
      var(--color-bg)
    )
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

export const Code = styled.div`
  font-size: 1.25rem;
`;

export const Price = styled.div`
  font-size: 0.875rem;
  color: var(--color-subtitle);
`;

export const RemoveIcon = styled.div`
  --size: 12px;

  position: relative;
  width: var(--size);
  height: var(--size);
  padding: 12px;
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
    background-color: var(--color-white);
  }

  ::before {
    transform: rotate(-45deg);
  }

  ::after {
    transform: rotate(45deg);
  }
`;
