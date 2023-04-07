import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoading } from "../../state/ui/selectors";
import { openTradeAction } from "../../state/trades/actions";
import { hideModalAction } from "../../state/ui/actions";
import { AmountInput } from "../AmountInput";
import { Loader } from "../Loader";

export const ModalBody = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [amount, setAmount] = useState<number>(0);
  const [showValidationHint, setShowValidationHint] = useState<boolean>(false);

  const handleOpenTrade = () => {
    if (amount > 0) {
      setShowValidationHint(false);
      dispatch(openTradeAction(amount));
      return;
    }

    setShowValidationHint(true);
  };

  const handleClose = () => {
    dispatch(hideModalAction());
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
            validationHint="amount must higher then zero"
            showValidationHint={showValidationHint}
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
