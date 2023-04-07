import { Trade } from "../../types";

export enum ActionType {
  ADD_TRADE = "ADD_TRADE",
  OPEN_TRADE = "OPEN_TRADE",
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

export type ActionTypesUnion = AddTradeAction | OpenTradeAction;
