import { ActionTypesUnion, ActionTypes } from "./actions";

interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

export const reducer = (
  state: State = initialState,
  action: ActionTypesUnion
) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
