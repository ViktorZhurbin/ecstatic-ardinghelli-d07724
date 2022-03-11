import { useEffect, useRef, useState } from "react";
import { useDebounce } from "react-use";

import { useGetCurrencies } from "../../graphql/currency/get";
import { Currency } from "../../types/Currency";

import { Button } from "../Button/Button";

import {
  Form,
  HelperText,
  Input,
  Label,
  Terms,
  TextField,
  StyledSpinner,
  Wrapper,
  InputWrapper,
} from "./CurrencyForm.style";

interface CurrencyFormProps {
  error?: string;
  setError: (error?: string) => void;
  onSubmit: (market: Currency) => string | void;
}

export const CurrencyForm = ({
  error,
  setError,
  onSubmit,
}: CurrencyFormProps) => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [currency, setCurrency] = useState<Currency>();

  const { data, loading } = useGetCurrencies(debouncedInput);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setCurrency(undefined);
    setInput(event.target.value.toUpperCase());
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!currency) {
      setError(`No prices available for ${debouncedInput}`);

      return;
    }

    const submitError = onSubmit(currency);

    if (submitError) {
      setError(submitError);
    } else {
      setInput("");
      setError(undefined);
    }
  };

  useDebounce(
    () => {
      setDebouncedInput(input);
    },
    400,
    [input]
  );

  useEffect(() => {
    const currency =
      data?.markets.find(({ ticker }) => Boolean(ticker?.lastPrice)) ||
      data?.markets[0];

    setCurrency(currency);
  }, [data]);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <TextField error={Boolean(error)}>
          <Label htmlFor="code">Cryptocurrency code</Label>
          <InputWrapper>
            <Input
              ref={inputRef}
              type="text"
              id="code"
              name="code"
              autoComplete="off"
              spellCheck={false}
              value={input}
              onChange={handleChange}
            />
            {loading && <StyledSpinner />}
          </InputWrapper>
          <HelperText htmlFor="code">{error}</HelperText>
        </TextField>
        <Button type="submit" disabled={!input || loading}>
          Add
        </Button>
      </Form>
      <Terms>Use of this service is subject to terms and conditions.</Terms>
    </Wrapper>
  );
};
