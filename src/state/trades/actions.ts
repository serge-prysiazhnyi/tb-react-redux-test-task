import { Trade, Currencies } from "../../types";

export enum ActionType {
  ADD_TRADE = "ADD_TRADE",
  OPEN_TRADE = "OPEN_TRADE",
  OPEN_TRADE_FAILURE = "OPEN_TRADE_FAILURE",
  CLEAR_ERROR = "CLEAR_ERROR",
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

type ClearError = {
  type: ActionType.CLEAR_ERROR;
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

export const clearError = (): ClearError => ({
  type: ActionType.CLEAR_ERROR,
});

export type ActionTypesUnion =
  | AddTradeAction
  | OpenTradeAction
  | OpenTradeFailure
  | ClearError;
