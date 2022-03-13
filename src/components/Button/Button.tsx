import { Spinner } from "../Spinner/Spinner";

import { ButtonStyled } from "./Button.style";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export const Button = ({
  children,
  disabled,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled disabled={disabled || loading} {...props}>
      {loading ? <Spinner /> : children}
    </ButtonStyled>
  );
};
