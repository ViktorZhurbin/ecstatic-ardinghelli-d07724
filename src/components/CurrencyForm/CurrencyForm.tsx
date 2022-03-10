import { useEffect, useState } from "react";
import { useSearchAssetsBySymbol } from "../../graphql/asset/search";

import { useGetMarkets } from "../../graphql/market/get";
import { Market } from "../../types/Market";

import {
  Button,
  Form,
  HelperText,
  Input,
  Label,
  SearchResultInfo,
  SearchResultItem,
  SearchResults,
  Terms,
  TextField,
  Wrapper,
} from "./CurrencyForm.style";

interface CurrencyFormProps {
  onSubmit: (market: Market) => void;
}

export const CurrencyForm = ({ onSubmit }: CurrencyFormProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string>();
  const [assetSymbol, setAssetSymbol] = useState("");
  const [currency, setCurrency] = useState<Market>();
  const [showResults, setShowResults] = useState(false);

  const { data: assetData, loading, refetch } = useSearchAssetsBySymbol(input);
  const {
    data: marketData,
    loading: marketsLoading,
    refetch: marketsRefetch,
  } = useGetMarkets(assetSymbol);

  useEffect(() => {
    if (input && showResults) {
      refetch({ baseSymbol: input });
    }
  }, [input, refetch, showResults]);

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
        <TextField error={Boolean(error)}>
          <Label htmlFor="code">Cryptocurrency code</Label>
          <Input
            type="text"
            id="code"
            name="code"
            autoComplete="off"
            value={input}
            onChange={handleChange}
          />
          {error && <HelperText htmlFor="code">{error}</HelperText>}
          {showResults && (
            <SearchResults>
              {loading && <SearchResultInfo>Loading...</SearchResultInfo>}
              {!loading && !assetData?.assets.length && (
                <SearchResultInfo>No results</SearchResultInfo>
              )}
              {assetData &&
                assetData.assets.map(({ assetSymbol, assetName }) => {
                  const handleSetAsset = () => {
                    setInput(assetSymbol);
                    setAssetSymbol(assetSymbol);
                    setShowResults(false);
                  };

                  const handleKeyDown = (event: React.KeyboardEvent) => {
                    if (event.key === "Enter") {
                      handleSetAsset();
                    }
                  };

                  return (
                    <SearchResultItem
                      key={assetSymbol}
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                      onClick={handleSetAsset}
                    >
                      {assetSymbol} - {assetName}
                    </SearchResultItem>
                  );
                })}
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
