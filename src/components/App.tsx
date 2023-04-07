import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTrades, selectTradesError } from "../state/trades/selectors";
import { selectIsModalOpen } from "../state/ui/selectors";
import { showModal } from "../state/ui/actions";

import "../../resources/css/layout.scss";

import { TradesList } from "./TradesList";
import { Modal } from "./Modal";

export const App: React.FC = () => {
  const disaptch = useDispatch();
  const trades = useSelector(selectTrades);
  const error = useSelector(selectTradesError);
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleAddTrade = () => {
    disaptch(showModal());
  };

  return (
    <div className="app">
      <h1 className="app-header">Application</h1>
      {error ? <div>{error.message}</div> : <TradesList trades={trades} />}
      <button className="default-button" onClick={handleAddTrade}>
        Open Trade
      </button>
      {isModalOpen && <Modal />}
    </div>
  );
};
