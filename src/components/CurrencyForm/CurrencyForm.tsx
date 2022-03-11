import { useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

import { useGetCurrencies } from "../../graphql/currency/get";
import { Currency } from "../../types/Currency";
import { SearchResults } from "../SearchResults/SearchResults";

import {
  Button,
  Form,
  HelperText,
  Input,
  Label,
  Terms,
  TextField,
  Wrapper,
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
  const [showResults, setShowResults] = useState(false);

  const { data, loading } = useGetCurrencies(debouncedInput);

  const inputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setShowResults(true);
    setInput(event.target.value.toUpperCase());
  };

  const handleHideResults = () => {
    setShowResults(false);
  };

  const handleCloseResults = () => {
    handleHideResults();
    inputRef?.current?.focus();
  };

  const handleSelect = (symbol: string) => {
    setInput(symbol);
    handleHideResults();
    inputRef?.current?.focus();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!currency) {
      setError(`No prices available for ${input}`);

      return;
    }

    const submitError = onSubmit(currency);

    if (submitError) {
      setError(submitError);
    } else {
      setInput("");
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      handleHideResults();
    }
  };

  useClickAway(searchResultsRef, () => {
    setShowResults(false);
  });

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
          <Input
            ref={inputRef}
            type="text"
            id="code"
            name="code"
            autoComplete="off"
            spellCheck={false}
            value={input}
            onKeyDown={handleInputKeyDown}
            onChange={handleChange}
          />
          {error && <HelperText htmlFor="code">{error}</HelperText>}
          <SearchResults
            ref={searchResultsRef}
            open={showResults && Boolean(input)}
            loading={loading}
            currency={currency}
            onClose={handleCloseResults}
            onSelect={handleSelect}
          />
        </TextField>
        <Button type="submit" disabled={!input} value="Add" />
      </Form>
      <Terms>Use of this service is subject to terms and conditions.</Terms>
    </Wrapper>
  );
};
