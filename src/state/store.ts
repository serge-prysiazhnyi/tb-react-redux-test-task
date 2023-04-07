import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddlware from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

import { reducer as tradesReducer } from "./trades/reducer";
import { reducer as uiReducer } from "./ui/reducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddlware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const reducer = combineReducers({
  tradesSlice: tradesReducer,
  uiSlice: uiReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof reducer>;
