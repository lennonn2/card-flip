import React from "react";
import classnames from "classnames";
import logo from "../../logo.svg";
import "./Card.css";
import { CardDataType } from "../../types/types";

export type CardPropTypes = {
  data: CardDataType;
  flipped: Array<CardDataType>;
  setState: any;
};

const Card: React.FC<CardPropTypes> = ({ data, setState, flipped }) => {
  const cardClass: string = classnames("card", {
    "card-turn":
      Boolean(data.matched) ||
      flipped.filter((card) => card.id === data.id).length > 0,
  });
  return (
    <div
      onClick={() => {
        setState(data);
      }}
      className={cardClass}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="card-back">
          <h1>{data.content}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
