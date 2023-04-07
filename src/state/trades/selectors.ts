import { AppState } from "../store";

export const selectTrades = (state: AppState) => state.tradesSlice.trades;
export const selectTradesError = (state: AppState) => state.tradesSlice.error;
