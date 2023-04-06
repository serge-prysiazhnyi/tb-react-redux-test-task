import { createStore, combineReducers } from "redux";
import { reducer as tradesReducer } from "./trades/reducer";

const reducer = combineReducers({
  tradesSlice: tradesReducer,
});

export const store = createStore(reducer);

export type AppState = ReturnType<typeof reducer>;
