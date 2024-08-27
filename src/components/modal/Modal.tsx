import React, { SyntheticEvent, useEffect } from "react";
import ReactDOM from "react-dom";
import Classes from "./Modal.module.css";

interface ModalPropsInterface {
  hideModal: Function;
  children?: React.ReactElement;
}

const Modal: React.FC<ModalPropsInterface> = (props) => {
  const { hideModal } = props;
  const modalElement = document.getElementById("modal");
  const handleHideModal = (event: KeyboardEvent) => {
    console.log(event.key);
    if (event.key === "Escape") hideModal();
  };
  useEffect(() => {
    window.addEventListener("keyup", handleHideModal);
    return () => {
      window.removeEventListener("keyup", handleHideModal);
    };
  }, []);
  if (modalElement) {
    return ReactDOM.createPortal(
      <div className={Classes.modal_container}>{props.children}</div>,
      modalElement
    );
  } else {
    return <></>;
  }
};

export default Modal;
