import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Classes from "./Modal.module.css";

interface ModalPropsInterface {
  hideModal: Function;
  children?: React.ReactElement;
}

const Modal: React.FC<ModalPropsInterface> = (props) => {
  const { hideModal } = props;
  const modalElement = document.getElementById("modal");
  const handleHideModal = (event: KeyboardEvent | React.SyntheticEvent) => {
    if ((event as KeyboardEvent).key === "Escape") hideModal();
    else if (!(event as KeyboardEvent).key) hideModal();
  };
  useEffect(() => {
    window.addEventListener("keyup", handleHideModal);
    return () => {
      window.removeEventListener("keyup", handleHideModal);
    };
  }, []);
  if (modalElement) {
    return ReactDOM.createPortal(
      <>
        <button
          onClick={handleHideModal}
          className={Classes.modal_close_button}
        >
          x
        </button>
        <div className={Classes.modal_container}>{props.children}</div>
      </>,
      modalElement
    );
  } else {
    return <></>;
  }
};

export default Modal;
