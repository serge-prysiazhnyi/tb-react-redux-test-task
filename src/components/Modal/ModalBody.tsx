import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoading } from "../../state/ui/selectors";
import { hideModalAction } from "../../state/ui/actions";
import { OpenTradeForm } from "../OpenTradeForm";

import { Loader } from "../Loader";

export const ModalBody = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleClose = () => {
    dispatch(hideModalAction());
  };

  return (
    <div className="modal-body">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <OpenTradeForm />
        </>
      )}
      <button className="modal-close-btn" onClick={handleClose}>
        X
      </button>
    </div>
  );
};
