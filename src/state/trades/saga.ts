import { put, takeEvery, call } from "redux-saga/effects";

import { addTradeAction, openTradeAction, openTradeFailure } from "./actions";
import { showLoaderAction, hideLoaderAction } from "../ui/actions";
import { Trade } from "../../types";
import { mockOpenTradeApi } from "../../api";

function* openTrade({ payload }: ReturnType<typeof openTradeAction>) {
  try {
    yield put(showLoaderAction());
    const newTrade: Trade = yield call(mockOpenTradeApi, payload.amount);

    yield put(addTradeAction(newTrade));
    yield put(hideLoaderAction());
  } catch (e) {
    yield put(openTradeFailure(e));
    yield put(hideLoaderAction());
  }
}

export default function* () {
  yield takeEvery("OPEN_TRADE", openTrade);
}
