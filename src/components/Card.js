import React from "react";
import "./Card.css"

function Card({ num }) {
  return (
    <div className={'card'}>
      {num}
    </div>
  )
}

export default Card;