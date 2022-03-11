import styled from "styled-components";

import { COLORS } from "../../style/colors";

export const Wrapper = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 36px;
  max-width: 400px;
  color: ${COLORS.GREY};
  display: grid;
  gap: 40px;
`;

export const Form = styled.form`
  display: grid;
  gap: 12px;
`;

interface TextFieldProps {
  error: boolean;
}

export const TextField = styled.div<TextFieldProps>`
  --horizontal-indent: 10px;
  --color: ${(props) => (props.error ? COLORS.RED : COLORS.GREY)};

  position: relative;
  display: grid;
  color: var(--color);
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.6rem;
  transform: translate(var(--horizontal-indent), 50%);
  background-color: ${COLORS.WHITE};
  width: max-content;
  padding: 0 4px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid var(--color);
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 12px var(--horizontal-indent);
`;

export const HelperText = styled.label`
  margin: 3px var(--horizontal-indent) 0;
  font-size: 0.75rem;
`;

export const Button = styled.input`
  --height: 40px;

  background-color: ${COLORS.ORANGE};
  border: none;
  color: ${COLORS.WHITE};
  height: var(--height);
  border-radius: calc(var(--height) / 2);
  font-size: 0.875rem;
`;

export const Terms = styled.div`
  font-size: 0.9rem;
  text-align: center;
`;
