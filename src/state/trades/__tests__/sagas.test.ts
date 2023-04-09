import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import { openTrade } from "../saga";
import { openTradeAction, addTradeAction, openTradeFailure } from "../actions";
import { mockOpenTradeApi } from "../../../api/trades";

import {
  mockAmount,
  mockCurrency,
  mockNewTrade,
  mockNewError,
} from "../../../testUtils";

describe("trade sagas", () => {
  test("openTrade saga success", () => {
    return expectSaga(openTrade, openTradeAction(mockAmount, mockCurrency))
      .provide([
        [call(mockOpenTradeApi, mockAmount, mockCurrency), mockNewTrade],
      ])
      .put(addTradeAction(mockNewTrade))
      .run();
  });

  test("openTrade saga failure", () => {
    return expectSaga(openTrade, openTradeAction(mockAmount, mockCurrency))
      .provide([
        [
          call(mockOpenTradeApi, mockAmount, mockCurrency),
          throwError(mockNewError),
        ],
      ])
      .put(openTradeFailure(mockNewError))
      .run();
  });
});
