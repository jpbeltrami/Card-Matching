import React from "react";
import "./Card.css"

function Card(props) {
  const { id, view, num, viewCard } = props;

  return (
    <div className={'card'} onClick={cardId => { viewCard(id) }}>
      {view && num}
    </div>
  )
}

export default Card;