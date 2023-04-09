import { ActionTypesUnion, ActionTypes } from "./actions";

export interface State {
  isLoading: boolean;
  isModalOpen: boolean;
}

export const initialState: State = {
  isLoading: false,
  isModalOpen: false,
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

    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };

    case ActionTypes.HIDE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };

    default:
      return state;
  }
};
