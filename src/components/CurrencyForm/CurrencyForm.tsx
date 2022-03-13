import { useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import { useDebounce } from "react-use";

import { Currency } from "../../types/Currency";
import { GET_CURRENCIES } from "../../graphql/currency/get";

import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import { QUOTE_SYMBOL } from "../Layout/Layout";

import { Form, Terms, Wrapper } from "./CurrencyForm.style";

interface CurrencyFormProps {
  error?: string;
  setError: (error?: string) => void;
  onSubmit: (market: Currency) => string | void;
}

interface MarketsData {
  markets: Currency[];
}

export const CurrencyForm = ({
  error,
  setError,
  onSubmit,
}: CurrencyFormProps) => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [currency, setCurrency] = useState<Currency>();

  useDebounce(() => setDebouncedInput(input), 400, [input]);

  const inputRef = useRef<HTMLInputElement>(null);

  const { loading } = useQuery<MarketsData>(GET_CURRENCIES, {
    variables: { baseSymbol: debouncedInput, quoteSymbol: QUOTE_SYMBOL },
    skip: !debouncedInput,
    onCompleted: (data: MarketsData) => {
      const currency =
        data.markets.find(({ ticker }) => Boolean(ticker?.lastPrice)) ||
        data.markets[0];

      if (!currency) {
        setError(`No prices available for ${debouncedInput}`);
      } else {
        setCurrency(currency);
      }
    },
    onError: () => {
      setError("There was an error fetching currencies data");
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setCurrency(undefined);
    setInput(event.target.value.toUpperCase());
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (currency) {
      const submitError = onSubmit(currency);

      if (submitError) {
        setError(submitError);
      } else {
        setInput("");
        setError(undefined);
      }
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <TextField
          inputRef={inputRef}
          error={error}
          type="text"
          id="code"
          label="Cryptocurrency code"
          name="code"
          autoComplete="off"
          spellCheck={false}
          value={input}
          onChange={handleChange}
        />
        <Button
          type="submit"
          disabled={!input || Boolean(error)}
          loading={loading}
        >
          Add
        </Button>
      </Form>
      <Terms>Use of this service is subject to terms and conditions.</Terms>
    </Wrapper>
  );
};
