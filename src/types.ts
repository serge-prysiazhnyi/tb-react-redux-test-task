export interface Trade {
  id: string;
  amount: number;
  currency: Currencies;
}

export type Currencies = "USD";
