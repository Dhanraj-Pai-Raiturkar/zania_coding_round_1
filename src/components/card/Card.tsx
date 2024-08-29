import React, { useRef, useState } from "react";
import DataInterface from "../../interface/data";
import Classes from "./Card.module.css";
import Modal from "../modal/Modal";
import ImagePreview from "../imagePreview/ImagePreview";
import { useDrag, useDrop } from "react-dnd";

const Card: React.FC<DataInterface> = (props) => {
  const ItemType = "CARD";
  const { title, position, moveCard } = props;
  const [showModal, setShowModal] = useState<boolean>(false);

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item: DataInterface) => {
      if (item.position !== position) {
        moveCard(item.position, position);
        item.position = position;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { position: position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // drag(ref);
  // drop(ref);
  return (
    <>
      <div
        // ref={ref}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className={Classes.card_container}
      >
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
