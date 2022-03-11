import { ButtonStyled } from "./Button.style";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
