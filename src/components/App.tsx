import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTradeAction } from "../state/trades/actions";
import { selectTrades } from "../state/trades/selectors";

import "../../resources/css/layout.scss";

import { TradesList } from "./TradesList";
interface IProps {}

export const App: React.FunctionComponent<IProps> = ({}: IProps) => {
  const disaptch = useDispatch();
  const trades = useSelector(selectTrades);

  const handleAddTrade = () => {
    disaptch(
      addTradeAction({
        amount: 500,
        currency: "USD",
        id: "11111",
      })
    );
  };

  return (
    <div className={""}>
      Application
      <TradesList trades={trades} />
      <button onClick={handleAddTrade}>click</button>
    </div>
  );
};
