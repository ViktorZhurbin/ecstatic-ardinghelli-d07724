import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--color-white);
  padding: 36px;
  width: 400px;
  color: var(--color-grey);
  display: grid;
  gap: 40px;
`;

export const Form = styled.form`
  display: grid;
  gap: 12px;
`;

export const TextField = styled.div`
  position: relative;
  display: grid;
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.6rem;
  transform: translate(8px, 50%);
  background-color: var(--color-white);
  width: max-content;
  padding: 0 4px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid var(--color-grey);
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 10px;
`;

export const Button = styled.button`
  --height: 40px;

  background-color: var(--color-orange);
  border: none;
  color: var(--color-white);
  height: var(--height);
  border-radius: calc(var(--height) / 2);
  font-size: 0.875rem;
`;

export const Terms = styled.div`
  font-size: 0.9rem;
  text-align: center;
`;

export const SearchResults = styled.div`
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

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5;
  padding: 6px 16px;
  cursor: pointer;

  &:focus {
    background-color: var(--color-bg-grey);
  }

  &:hover {
    background-color: var(--color-bg-light-grey);
  }
`;
