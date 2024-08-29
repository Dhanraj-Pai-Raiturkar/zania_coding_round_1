import React, { useRef, useState } from "react";
import DataInterface from "../../interface/data";
import Classes from "./Card.module.css";
import Modal from "../modal/Modal";
import ImagePreview from "../imagePreview/ImagePreview";
import { useDrag, useDrop } from "react-dnd";

const Card: React.FC<DataInterface> = (props) => {
  const { title } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div className={Classes.card_container}>
        <h2>{title}</h2>
        <img
          onClick={() => setShowModal(true)}
          className={Classes.card_image}
          src={props.image}
        />
      </div>
      {showModal && props.image && (
        <Modal hideModal={setShowModal}>
          <ImagePreview src={props.image} />
        </Modal>
      )}
    </>
  );
};
export default Card;
