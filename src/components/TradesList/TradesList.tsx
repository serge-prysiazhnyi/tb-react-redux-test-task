import React from "react";

import { TradeItem } from "../TradeItem";
import { Trade } from "../../types";

interface TradesListProps {
  trades: Trade[];
}

export const TradesList: React.FC<TradesListProps> = ({ trades }) => {
  return (
    <>
      <h2 className="trades-list-header">Trades:</h2>
      <ul className="trades-list">
        {trades.length === 0 ? (
          <li className="trades-list-placeholder">please open trades</li>
        ) : (
          trades.map(({ id, amount, currency }) => (
            <li key={id}>
              <TradeItem amount={amount} currency={currency} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
