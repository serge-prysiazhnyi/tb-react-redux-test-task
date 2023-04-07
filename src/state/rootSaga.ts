import { all, fork } from "redux-saga/effects";

import tradeSagas from "./trades/saga";

export function* rootSaga() {
  yield all([fork(tradeSagas)]);
}
