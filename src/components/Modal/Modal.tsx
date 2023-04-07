import React from "react";

import { Overlay } from "./Overlay";
import { ModalBody } from "./ModalBody";

export const Modal = () => {
  return (
    <Overlay>
      <ModalBody />
    </Overlay>
  );
};
