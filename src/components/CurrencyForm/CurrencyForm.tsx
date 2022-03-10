import { useEffect, useState } from "react";

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
  onSubmit: (market: Currency) => void;
}

export const CurrencyForm = ({
  error: errorProp,
  onSubmit,
}: CurrencyFormProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(errorProp);
  const [assetSymbol, setAssetSymbol] = useState("");
  const [currency, setCurrency] = useState<Currency>();
  const [showResults, setShowResults] = useState(false);

  const errorMessage = error || errorProp;

  const {
    data: marketData,
    // loading: marketsLoading,
    refetch: marketsRefetch,
  } = useGetCurrencies(assetSymbol);

  useEffect(() => {
    if (assetSymbol) {
      marketsRefetch({ symbol: assetSymbol });
    }
  }, [assetSymbol, marketsRefetch]);

  useEffect(() => {
    const currency =
      marketData?.markets.find(({ ticker }) => Boolean(ticker?.lastPrice)) ||
      marketData?.markets[0];

    setCurrency(currency);
  }, [marketData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setShowResults(true);
    setInput(event.target.value);
  };

  const handleSelect = (symbol: string) => {
    setInput(symbol);
    setAssetSymbol(symbol);
    setShowResults(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (currency) {
      onSubmit(currency);
    } else {
      setError(`No prices available for ${assetSymbol}`);
    }
  };

  return (
    <Wrapper>
      <Form>
        <TextField error={Boolean(errorMessage)}>
          <Label htmlFor="code">Cryptocurrency code</Label>
          <Input
            type="text"
            id="code"
            name="code"
            autoComplete="off"
            value={input}
            onChange={handleChange}
          />
          {errorMessage && (
            <HelperText htmlFor="code">{errorMessage}</HelperText>
          )}
          <SearchResults
            open={showResults}
            query={input}
            onSelect={handleSelect}
          />
        </TextField>
        <Button type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </Form>
      <Terms>Use of this service is subject to terms and conditions.</Terms>
    </Wrapper>
  );
};
