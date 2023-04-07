import { all, fork } from "redux-saga/effects";

import tradeSagas from "./trades/saga";
import uiSagas from "./ui/saga";

export function* rootSaga() {
  yield all([fork(tradeSagas), fork(uiSagas)]);
}
