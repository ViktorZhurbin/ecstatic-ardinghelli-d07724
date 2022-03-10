type Ticker = {
  lastPrice: string;
} | null;

export interface Market {
  baseSymbol: string;
  ticker: Ticker;
}
