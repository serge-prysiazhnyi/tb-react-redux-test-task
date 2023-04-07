import { Trade } from "../../types";

export enum ActionType {
  ADD_TRADE = "ADD_TRADE",
  OPEN_TRADE = "OPEN_TRADE",
  OPEN_TRADE_FAILURE = "OPEN_TRADE_FAILURE",
}

type OpenTradeAction = {
  type: ActionType.OPEN_TRADE;
  payload: {
    amount: number;
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

export const openTradeAction = (amount: number): OpenTradeAction => ({
  type: ActionType.OPEN_TRADE,
  payload: {
    amount,
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
