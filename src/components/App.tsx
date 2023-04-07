import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { openTradeAction } from "../state/trades/actions";
import { selectTrades, selectTradesError } from "../state/trades/selectors";

import "../../resources/css/layout.scss";

import { TradesList } from "./TradesList";
import { Modal } from "./Modal";

export const App: React.FC = () => {
  const disaptch = useDispatch();
  const trades = useSelector(selectTrades);
  const error = useSelector(selectTradesError);

  const handleAddTrade = () => {
    disaptch(openTradeAction(500));
  };

  return (
    <div className="app">
      <h1 className="app-header">Application</h1>
      {error ? <div>{error.message}</div> : <TradesList trades={trades} />}
      <button onClick={handleAddTrade}>Open Trade</button>
      <Modal />
    </div>
  );
};
