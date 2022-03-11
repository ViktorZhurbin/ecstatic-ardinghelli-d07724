import { SpinnerStyled } from "./Spinner.style";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  return <SpinnerStyled className={className} />;
};
