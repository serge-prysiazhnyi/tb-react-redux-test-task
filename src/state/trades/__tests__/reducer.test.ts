import { reducer, initialState, State } from "../reducer";

import { addTradeAction, openTradeFailure } from "../actions";

import { mockNewTrade, mockNewError } from "../../../testUtils";

describe("trade reducer", () => {
  test("trade reducer returns correct state on addTradeAction", () => {
    const mockState: State = {
      trades: [mockNewTrade],
      error: null,
    };

    expect(reducer(initialState, addTradeAction(mockNewTrade))).toEqual(
      mockState
    );
  });

  test("trade reducer returns correct state on openTradeFailure", () => {
    const mockState: State = {
      trades: [],
      error: mockNewError,
    };

    expect(reducer(initialState, openTradeFailure(mockNewError))).toEqual(
      mockState
    );
  });
});
