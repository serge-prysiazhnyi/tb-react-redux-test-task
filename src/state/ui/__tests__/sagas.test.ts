import { expectSaga } from "redux-saga-test-plan";

import { showLoader, hideLoader, hideModal } from "../saga";
import {
  showLoaderAction,
  hideLoaderAction,
  hideModalAction,
} from "../actions";

describe("ui sagas", () => {
  test("showLoader saga", () => {
    return expectSaga(showLoader).put(showLoaderAction()).run();
  });

  test("hideLoader saga", () => {
    return expectSaga(hideLoader).put(hideLoaderAction()).run();
  });
  test("hideModal saga", () => {
    return expectSaga(hideModal).put(hideModalAction()).run();
  });
});
