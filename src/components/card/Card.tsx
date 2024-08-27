import React from "react";
import DataInterface from "../../interface/data";
import Classes from "./Card.module.css";

const Card: React.FC<DataInterface> = (props) => {
  const { title, type, position } = props;
  return (
    <div className={Classes.card_container}>
      <h2>{title}</h2>
      {props?.image && <img className={Classes.card_image} src={props.image} />}
    </div>
  );
};
export default Card;
