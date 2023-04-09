import { Trade, Currencies } from "../types";

const DELAY = 2000;
const ERROR_THRESHOLD = 0.95;

export const mockOpenTradeApi = (
  amount: number,
  currency: Currencies
): Promise<Trade> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < ERROR_THRESHOLD) {
        const newTrade: Trade = {
          id: `${Date.now()}`,
          amount,
          currency,
        };
        resolve(newTrade);
      } else {
        reject(new Error("Oops! API Error :( Please try again"));
      }
    }, DELAY);
  });
