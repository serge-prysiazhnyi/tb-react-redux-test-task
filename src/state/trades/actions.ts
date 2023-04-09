import { Trade, Currencies } from "../../types";

export enum ActionType {
  ADD_TRADE = "TRADES/ADD_TRADE",
  OPEN_TRADE = "TRADES/OPEN_TRADE",
  OPEN_TRADE_FAILURE = "TRADES/OPEN_TRADE_FAILURE",
}

type OpenTradeAction = {
  type: ActionType.OPEN_TRADE;
  payload: {
    amount: number;
    currency: Currencies;
  };
};

type AddTradeAction = {
  type: ActionType.ADD_TRADE;
  payload: {
    trade: Trade;
  };
};

type OpenTradeFailure = {
  type: ActionType.OPEN_TRADE_FAILURE;
  payload: {
    error: Error;
  };
};

export const addTradeAction = (trade: Trade): AddTradeAction => ({
  type: ActionType.ADD_TRADE,
  payload: {
    trade,
  },
});

export const openTradeAction = (
  amount: number,
  currency: Currencies
): OpenTradeAction => ({
  type: ActionType.OPEN_TRADE,
  payload: {
    amount,
    currency,
  },
});

export const openTradeFailure = (error: Error): OpenTradeFailure => ({
  type: ActionType.OPEN_TRADE_FAILURE,
  payload: {
    error,
  },
});

export type ActionTypesUnion =
  | AddTradeAction
  | OpenTradeAction
  | OpenTradeFailure;
