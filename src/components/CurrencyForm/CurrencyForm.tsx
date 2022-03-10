import { useEffect, useState } from "react";

import { useSearchCurrenciesByCode } from "../../graphql/currency/search";

import {
  Button,
  Form,
  Input,
  Label,
  SearchResultItem,
  SearchResults,
  Terms,
  TextField,
  Wrapper,
} from "./CurrencyForm.style";

export const CurrencyForm = () => {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const { data, loading, refetch } = useSearchCurrenciesByCode(input);

  useEffect(() => {
    if (input && showResults) {
      refetch({ input });
    }
  }, [input, refetch, showResults]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowResults(true);
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Form>
        <TextField>
          <Label htmlFor="code">Cryptocurrency code</Label>
          <Input
            type="text"
            id="code"
            name="code"
            autoComplete="off"
            value={input}
            onChange={handleChange}
          />
          {showResults && (
            <SearchResults>
              {loading ? (
                <SearchResultItem>Loading...</SearchResultItem>
              ) : (
                data &&
                data.assets.length > 0 &&
                data.assets.map(({ assetSymbol, assetName }) => {
                  const handleSetValue = () => {
                    setInput(assetSymbol);
                    setShowResults(false);
                  };

                  const handleKeyDown = (event: React.KeyboardEvent) => {
                    if (event.key === "Enter") {
                      handleSetValue();
                    }
                  };

                  return (
                    <SearchResultItem
                      key={assetSymbol}
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                      onClick={handleSetValue}
                    >
                      {assetName} - {assetSymbol}
                    </SearchResultItem>
                  );
                })
              )}
            </SearchResults>
          )}
        </TextField>
        <Button type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </Form>
      <Terms>Use of this service is subject to terms and conditions.</Terms>
    </Wrapper>
  );
};
