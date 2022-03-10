import { useEffect, useState } from "react";

import { useSearchAssetsBySymbol } from "../../graphql/asset/search";

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
  const [assetSymbol, setAssetSymbol] = useState("");
  const [showResults, setShowResults] = useState(false);

  const { data, loading, refetch } = useSearchAssetsBySymbol(assetSymbol);

  useEffect(() => {
    if (assetSymbol && showResults) {
      refetch({ assetSymbol });
    }
  }, [assetSymbol, refetch, showResults]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowResults(true);
    setAssetSymbol(event.target.value);
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
            value={assetSymbol}
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
                  const handleSetInput = () => {
                    setAssetSymbol(assetSymbol);
                    setShowResults(false);
                  };

                  const handleKeyDown = (event: React.KeyboardEvent) => {
                    if (event.key === "Enter") {
                      handleSetInput();
                    }
                  };

                  return (
                    <SearchResultItem
                      key={assetSymbol}
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                      onClick={handleSetInput}
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
