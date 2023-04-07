import { AppState } from "../store";

export const selectIsLoading = (state: AppState) => state.uiSlice.isLoading;
export const selectIsModalOpen = (state: AppState) => state.uiSlice.isModalOpen;
