export enum ActionType {
  ADD_TRADE = "ADD_TRADE",
  OPEN_TRADE = "OPEN_TRADE",
}

import { Trade } from "../../types";

export const addTradeAction = (trade: Trade) => {
  return {
    type: ActionType.ADD_TRADE,
    payload: {
      trade,
    },
  };
};

export const openTrade = (amount: number) => {
  return {
    type: ActionType.OPEN_TRADE,
    payload: {
      amount,
    },
  };
};

export type ActionTypesUnion =
  | { type: ActionType.ADD_TRADE; payload: { trade: Trade } }
  | { type: ActionType.OPEN_TRADE; payload: { amount: number } };
