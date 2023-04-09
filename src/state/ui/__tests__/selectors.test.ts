import { selectIsLoading, selectIsModalOpen } from "../selectors";
import { AppState } from "../../store";

import { initialState as uiInitialState } from "../reducer";

describe("ui selectors", () => {
  const mockStateInitialState = {
    ...uiInitialState,
  } as AppState["uiSlice"];

  test("selectIsLoading must return correct isLoading value", () => {
    const mockState = {
      uiSlice: {
        ...mockStateInitialState,
        isLoading: true,
      },
    } as AppState;

    expect(selectIsLoading(mockState)).toBe(true);
  });

  test("selectIsModalOpen must return correct isModalOpen value", () => {
    const mockState = {
      uiSlice: {
        ...mockStateInitialState,
        isModalOpen: true,
      },
    } as AppState;

    expect(selectIsModalOpen(mockState)).toBe(true);
  });
});
