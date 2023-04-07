import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoading } from "../../state/ui/selectors";
import { openTradeAction } from "../../state/trades/actions";
import { AmountInput } from "../AmountInput";
import { Loader } from "../Loader";

export const ModalBody = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [amount, setAmount] = useState<number>(0);

  const handleOpenTrade = () => {
    console.log(
      "🚀 ~ file: ModalBody.tsx:9 ~ handleOpenTrade ~ handleOpenTrade:"
    );

    if (amount > 0) {
      dispatch(openTradeAction(amount));
    }
  };

  const handleClose = () => {
    // dispatch(closeModal());
  };

  return (
    <div className="modal-body">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AmountInput
            label="Enter amount:"
            value={amount}
            onChange={setAmount}
          />
          <button
            onClick={handleOpenTrade}
            type="button"
            className="default-button"
          >
            Buy
          </button>
        </>
      )}
      <button className="modal-close-btn" onClick={handleClose}>
        X
      </button>
    </div>
  );
};
