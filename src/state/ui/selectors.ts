import { AppState } from "../store";

export const selectIsLoading = (state: AppState) => state.uiSlice.isLoading;
