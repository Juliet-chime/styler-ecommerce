import React from "react";
import Rodal from 'rodal';
import "rodal/lib/rodal.css";
import "./modal.css";

const Modal = ({
  visible,
  handleClose,
  title,
  paragraph,
  body,
  width,
  height,
}) => {
  return (
    <div>
      <Rodal
        visible={visible}
        onClose={handleClose}
        width={width}
        height={height}
      >
        <div className="modContainer">
          <div className="modalTitle">{title}</div>
          <div className="modalPar">{paragraph}</div>
          <div className="modalBody">{body}</div>
        </div>
      </Rodal>
    </div>
  );
};

export default Modal;
