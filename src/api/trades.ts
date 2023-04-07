import { Trade } from "../types";

const DELAY = 2000;

export const mockOpenTradeApi = (amount: number): Promise<Trade> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
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
