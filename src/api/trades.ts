import { Trade } from "../types";

const DELAY = 2000;
const ERROR_THRESHOLD = 0.9;

export const mockOpenTradeApi = (amount: number): Promise<Trade> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < ERROR_THRESHOLD) {
        const newTrade: Trade = {
          id: `${Date.now()}`,
          amount,
          currency: "USD",
        };
        resolve(newTrade);
      } else {
        reject(new Error("Something went wrong"));
      }
    }, DELAY);
  });
