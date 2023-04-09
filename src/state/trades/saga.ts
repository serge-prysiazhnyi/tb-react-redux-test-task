import { put, takeEvery, call } from "redux-saga/effects";

import {
  addTradeAction,
  openTradeAction,
  openTradeFailure,
  ActionType,
} from "./actions";
import { Trade } from "../../types";
import { mockOpenTradeApi } from "../../api";

export function* openTrade({ payload }: ReturnType<typeof openTradeAction>) {
  try {
    const newTrade: Trade = yield call(
      mockOpenTradeApi,
      payload.amount,
      payload.currency
    );
    yield put(addTradeAction(newTrade));
  } catch (e) {
    yield put(openTradeFailure(e));
  }
}

export default function* () {
  yield takeEvery(ActionType.OPEN_TRADE, openTrade);
}
