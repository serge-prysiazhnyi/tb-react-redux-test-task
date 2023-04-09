import {
  openTradeAction,
  addTradeAction,
  openTradeFailure,
  ActionType,
} from "../actions";

import {
  mockAmount,
  mockCurrency,
  mockNewTrade,
  mockNewError,
} from "../../../testUtils";

describe("trade actions", () => {
  test("openTradeAction returns correct action object", () => {
    expect(openTradeAction(mockAmount, mockCurrency)).toEqual({
      type: ActionType.OPEN_TRADE,
      payload: {
        amount: mockAmount,
        currency: mockCurrency,
      },
    });
  });

  test("addTradeAction returns correct action object", () => {
    expect(addTradeAction(mockNewTrade)).toEqual({
      type: ActionType.ADD_TRADE,
      payload: {
        trade: mockNewTrade,
      },
    });
  });

  test("openTradeFailure returns correct action object", () => {
    expect(openTradeFailure(mockNewError)).toEqual({
      type: ActionType.OPEN_TRADE_FAILURE,
      payload: {
        error: mockNewError,
      },
    });
  });
});
