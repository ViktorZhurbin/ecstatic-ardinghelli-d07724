type Ticker = {
  lastPrice: string;
} | null;

export interface Currency {
  baseSymbol: string;
  ticker: Ticker;
}
