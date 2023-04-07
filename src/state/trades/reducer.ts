import { Trade } from "../../types";
import { ActionType, ActionTypesUnion } from "./actions";

export interface State {
  trades: Trade[];
  error: Error;
}

const initialState: State = {
  trades: [],
  error: null,
};

export const reducer = (
  state: State = initialState,
  action: ActionTypesUnion
): State => {
  switch (action.type) {
    case ActionType.ADD_TRADE:
      return {
        ...state,
        trades: [...state.trades, action.payload.trade],
      };

    case ActionType.OPEN_TRADE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
