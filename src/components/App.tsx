import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { openTradeAction } from "../state/trades/actions";
import { selectTrades, selectTradesError } from "../state/trades/selectors";
import { selectIsLoading } from "../state/ui/selectors";

import "../../resources/css/layout.scss";

import { TradesList } from "./TradesList";
import { Loader } from "./Loader";

interface IProps {}

export const App: React.FunctionComponent<IProps> = ({}: IProps) => {
  const disaptch = useDispatch();
  const trades = useSelector(selectTrades);
  const error = useSelector(selectTradesError);
  const isLoading = useSelector(selectIsLoading);

  const handleAddTrade = () => {
    disaptch(openTradeAction(500));
  };

  return (
    <div className={""}>
      <h1>Application</h1>
      {error ? (
        <div>{error.message}</div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <TradesList trades={trades} />
      )}
      <button onClick={handleAddTrade}>click</button>
    </div>
  );
};
