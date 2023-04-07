import { put, takeEvery, call } from "redux-saga/effects";

import { addTradeAction, openTradeAction, openTradeFailure } from "./actions";
import { Trade } from "../../types";
import { mockOpenTradeApi } from "../../api";

function* openTrade({ payload }: ReturnType<typeof openTradeAction>) {
  try {
    const newTrade: Trade = yield call(mockOpenTradeApi, payload.amount);
    yield put(addTradeAction(newTrade));
  } catch (e) {
    yield put(openTradeFailure(e));
  }
}

export default function* () {
  yield takeEvery("OPEN_TRADE", openTrade);
}
