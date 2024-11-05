export interface PriceRecord {
  id: string;
  timestamp: number;
  highestPrice: number;
  currentPrice: number;
  difference: number;
}