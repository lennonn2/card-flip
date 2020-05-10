import React, { useState } from "react";
import Card from "../Card";
import { shuffle } from "../../utils";
import cardData from "../../data";
import { CardDataType } from "../../types/types";

import "./CardGrid.css";

const CardGrid: React.FC = (): JSX.Element => {
  const [cardState, setCardState] = useState<Array<CardDataType>>(
    shuffle(cardData)
  );
  const [flipped, setFlipped] = useState<Array<CardDataType>>([]);
  const [clickBlocked, setClickBlocked] = useState<boolean>(false);

  const onSetState = (card: CardDataType): void => {
    const { key, id } = card;
    if (!clickBlocked) {
      let updatedState;
      // If there's already a flipped card
      if (flipped.length > 0) {
        const currentKey = flipped[0].key;
        const match = currentKey === key;

        if (match) {
          updatedState = cardState.map((card) => {
            return card.key === key || card.key === currentKey
              ? { ...card, matched: true }
              : card;
          });
          setFlipped([]);
        } else {
          updatedState = cardState.map((card) => {
            return card.id === id ? { ...card } : card;
          });
          setFlipped([...flipped, card]);
          setClickBlocked(true);
          setTimeout(() => {
            const rupdatedState = cardState.map((card) => {
              return card.key === key || card.key === currentKey
                ? { ...card, matched: false }
                : card;
            });
            setFlipped([]);
            setCardState(rupdatedState);
            setClickBlocked(false);
          }, 2000);
        }
      } else {
        updatedState = cardState.map((card) => {
          return card.id === id ? { ...card } : card;
        });
        setFlipped([...flipped, card]);
      }
      setCardState(updatedState);
    }
  };

  return (
    <div className="card-grid">
      {cardState.map((card) => {
        return (
          <Card
            key={card.id}
            flipped={flipped}
            setState={onSetState}
            data={card}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
