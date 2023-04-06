import { Trade } from "../../types";
import { ActionType, ActionTypesUnion } from "./actions";

export interface State {
  trades: Trade[];
}

const initialState: State = {
  trades: [],
};

export const reducer = (
  state: State = initialState,
  action: ActionTypesUnion
) => {
  switch (action.type) {
    case ActionType.ADD_TRADE:
      return {
        trades: [...state.trades, action.payload.trade],
      };

    default:
      return state;
  }
};
