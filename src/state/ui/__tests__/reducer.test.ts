import { reducer, initialState, State } from "../reducer";
import {
  showLoaderAction,
  hideLoaderAction,
  showModalAction,
  hideModalAction,
} from "../actions";

describe("ui reducer", () => {
  test("ui reducer returns correct state on showLoaderAction", () => {
    const mockState: State = { isLoading: true, isModalOpen: false };
    expect(reducer(initialState, showLoaderAction())).toEqual(mockState);
  });

  test("ui reducer returns correct state on hideLoaderAction", () => {
    const mockState: State = { isLoading: false, isModalOpen: false };
    expect(reducer(initialState, hideLoaderAction())).toEqual(mockState);
  });

  test("ui reducer returns correct state on showModalAction", () => {
    const mockState: State = { isLoading: false, isModalOpen: true };
    expect(reducer(initialState, showModalAction())).toEqual(mockState);
  });

  test("ui reducer returns correct state on hideModalAction", () => {
    const mockState: State = { isLoading: false, isModalOpen: false };
    expect(reducer(initialState, hideModalAction())).toEqual(mockState);
  });
});
