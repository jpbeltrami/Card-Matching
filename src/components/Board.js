import React, { useState } from 'react';
import Card from './Card'
import './Board.css';

function Board() {
  return (
    <div className={'board'}>
      <Card />
    </div>
  )
}

export default Board;