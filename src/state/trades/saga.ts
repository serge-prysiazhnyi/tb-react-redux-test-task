import { put, takeEvery } from "redux-saga/effects";
import { addTradeAction, openTradeAction } from "./actions";

import { Trade } from "../../types";

function* openTrade({ payload }: ReturnType<typeof openTradeAction>) {
  console.log("🚀 ~ file: saga openTrade:");

  const newTrade: Trade = {
    id: `${Date.now()}`,
    amount: payload.amount,
    currency: "USD",
  };

  yield put(addTradeAction(newTrade));
}

export default function* () {
  yield takeEvery("OPEN_TRADE", openTrade);
}
