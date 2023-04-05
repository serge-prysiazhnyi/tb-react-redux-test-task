import "../../resources/css/layout.scss";

import React from "react";

import { TradesList } from "./TradesList";
interface IProps {}

export const App: React.FunctionComponent<IProps> = ({}: IProps) => {
  const mockTrades = [
    {
      id: "1",
      amount: 1500,
      currency: "USD",
    },
    {
      id: "2",
      amount: 10000,
      currency: "USD",
    },
  ];

  return (
    <div className={""}>
      Application
      <TradesList trades={mockTrades} />
    </div>
  );
};
