import { all, put, takeEvery } from "redux-saga/effects";

import {
  showLoaderAction,
  hideLoaderAction,
  hideModalAction,
  showModalAction,
} from "../ui/actions";
import { ActionType } from "../trades/actions";

function* showLoader() {
  yield put(showLoaderAction());
}

function* hideLoader() {
  yield put(hideLoaderAction());
}

function* showModal() {
  yield put(showModalAction());
}

function* hideModal() {
  yield put(hideModalAction());
}

export default function* () {
  yield all([
    takeEvery(ActionType.OPEN_TRADE, showModal),
    takeEvery(ActionType.OPEN_TRADE, showLoader),
    takeEvery(ActionType.ADD_TRADE, hideLoader),
    takeEvery(ActionType.ADD_TRADE, hideModal),
  ]);
}
