import React, { useState } from 'react';
import Card from './Card'
import './Board.css';

function Board() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className={'board'}>
      {numbers.map(cardNum => {
        return (
          <Card num={cardNum} ></Card>
        )
      })}
    </div >
  )
}

export default Board;