import { all, put, takeEvery } from "redux-saga/effects";

import {
  showLoaderAction,
  hideLoaderAction,
  hideModalAction,
} from "../ui/actions";
import { ActionType } from "../trades/actions";

export function* showLoader() {
  yield put(showLoaderAction());
}

export function* hideLoader() {
  yield put(hideLoaderAction());
}

export function* hideModal() {
  yield put(hideModalAction());
}

export default function* () {
  yield all([
    takeEvery(ActionType.OPEN_TRADE, showLoader),
    takeEvery(ActionType.ADD_TRADE, hideLoader),
    takeEvery(ActionType.ADD_TRADE, hideModal),
    takeEvery(ActionType.OPEN_TRADE_FAILURE, hideModal),
    takeEvery(ActionType.OPEN_TRADE_FAILURE, hideLoader),
  ]);
}
