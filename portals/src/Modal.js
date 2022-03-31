import React from "react";
import ReactDOM from "react-dom" 
import "./Modal.css";

const Modal = (props) => {
  if (!props.open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="OVERLAY_STYLES" />
      <div className="MODAL_STYLES">
        <button onClick={props.onClose}>Close Modal</button>
        {props.children}
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
