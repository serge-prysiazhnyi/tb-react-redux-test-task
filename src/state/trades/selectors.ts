import { AppState } from "../store";

export const selectTrades = (state: AppState) => state.tradesSlice.trades;
