import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { openTradeAction } from "../state/trades/actions";
import { selectTrades, selectTradesError } from "../state/trades/selectors";

import "../../resources/css/layout.scss";

import { TradesList } from "./TradesList";
interface IProps {}

export const App: React.FunctionComponent<IProps> = ({}: IProps) => {
  const disaptch = useDispatch();
  const trades = useSelector(selectTrades);
  const error = useSelector(selectTradesError);

  const handleAddTrade = () => {
    disaptch(openTradeAction(500));
  };

  return (
    <div className={""}>
      Application
      {error ? <div>{error.message}</div> : <TradesList trades={trades} />}
      <button onClick={handleAddTrade}>click</button>
    </div>
  );
};
