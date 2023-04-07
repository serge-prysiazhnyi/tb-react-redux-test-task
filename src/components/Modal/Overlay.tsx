import React, { useRef } from "react";
import { useDispatch } from "react-redux";

interface OverlayProps {
  children: React.ReactNode;
}

export const Overlay: React.FC<OverlayProps> = ({ children }) => {
  const dispatch = useDispatch();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!modalRef.current?.contains(e.target as Node)) {
      console.log("close modal");

      // dispatch(closeModal());
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleClose}
      role="button"
      tabIndex={0}
    >
      <div className="modal-overlay-background"></div>
      <div ref={modalRef}>{children}</div>
    </div>
  );
};
