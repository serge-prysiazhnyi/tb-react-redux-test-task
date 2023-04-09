import {
  showLoaderAction,
  hideLoaderAction,
  showModalAction,
  hideModalAction,
  ActionTypes,
} from "../actions";

describe("ui actions", () => {
  test("showLoaderAction returns correct action object", () => {
    expect(showLoaderAction()).toEqual({ type: ActionTypes.SHOW_LOADER });
  });

  test("hideLoaderAction returns correct action object", () => {
    expect(hideLoaderAction()).toEqual({ type: ActionTypes.HIDE_LOADER });
  });

  test("showModalAction returns correct action object", () => {
    expect(showModalAction()).toEqual({ type: ActionTypes.SHOW_MODAL });
  });

  test("hideModalAction returns correct action object", () => {
    expect(hideModalAction()).toEqual({ type: ActionTypes.HIDE_MODAL });
  });
});
