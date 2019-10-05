import React from "react";
import "./Card.css"

function Card(props) {
  const { card, toggleCard } = props;

  return (
    <div className={'card'} onClick={cardId => { toggleCard(card.id) }}>
      {card.view && card.num}
    </div>
  )
}

export default Card;