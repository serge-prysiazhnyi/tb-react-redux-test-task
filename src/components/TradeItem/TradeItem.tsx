import React from "react";

import { Trade } from "../../types";

type TradeItemProps = Pick<Trade, "amount" | "currency">;

export const TradeItem: React.FC<TradeItemProps> = ({ amount, currency }) => (
  <div>
    amount: {amount} {currency}
  </div>
);
