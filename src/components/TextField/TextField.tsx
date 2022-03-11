import {
  HelperText,
  Input,
  InputWrapper,
  Label,
  StyledSpinner,
  Wrapper,
} from "./TextField.style";

interface TextFieldProps extends React.ComponentPropsWithRef<"input"> {
  inputRef: React.RefObject<HTMLInputElement>;
  error?: string;
  loading: boolean;
  label: string;
}

export const TextField = ({
  inputRef,
  error,
  label,
  loading,
  id,
  ...props
}: TextFieldProps) => {
  return (
    <Wrapper error={Boolean(error)}>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        <Input {...props} id={id} name={id} ref={inputRef} spellCheck={false} />
        {loading && <StyledSpinner />}
      </InputWrapper>
      <HelperText htmlFor={id}>{error}</HelperText>
    </Wrapper>
  );
};
