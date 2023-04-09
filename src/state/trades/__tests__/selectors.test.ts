import { selectTrades, selectTradesError } from "../selectors";
import { AppState } from "../../store";

import { initialState as tradesInitialState } from "../reducer";

import { mockNewTrade, mockNewError } from "../../../testUtils";

describe("trades selectors", () => {
  const mockStateInitialState = {
    ...tradesInitialState,
  } as AppState["tradesSlice"];

  test("selectTrades must return correct isLoading value", () => {
    const mockState = {
      tradesSlice: {
        ...mockStateInitialState,
        trades: [mockNewTrade],
      },
    } as AppState;

    expect(selectTrades(mockState)).toEqual([mockNewTrade]);
  });

  test("selectTradesError must return correct isLoading value", () => {
    const mockState = {
      tradesSlice: {
        ...mockStateInitialState,
        error: mockNewError,
      },
    } as AppState;

    expect(selectTradesError(mockState)).toEqual(mockNewError);
  });
});
