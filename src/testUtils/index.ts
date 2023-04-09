import { Trade } from "../types";

export const mockAmount = 500;
export const mockCurrency = "USD";

export const mockNewTrade: Trade = {
  id: "1",
  amount: mockAmount,
  currency: mockCurrency,
};

export const mockNewError = new Error("foo");
