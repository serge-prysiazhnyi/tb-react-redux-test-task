import React from "react";

import { TradeItem } from "../TradeItem";
import { Trade } from "../../types";

interface TradesListProps {
  trades: Trade[];
}

export const TradesList: React.FC<TradesListProps> = ({ trades }) => {
  return (
    <>
      {trades.length === 0 ? (
        <div>please open trades</div>
      ) : (
        <ul>
          {trades.map(({ id, amount, currency }) => (
            <li key={id}>
              <TradeItem amount={amount} currency={currency} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
