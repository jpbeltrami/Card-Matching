import React, { useState } from 'react';
import Card from './Card'
import './Board.css';

const initialNumbers = [
  {
    num: 1,
    view: false,
    found: false,
  },
  {
    num: 2,
    view: false,
    found: false,
  },
  {
    num: 3,
    view: false,
    found: false,
  },
  {
    num: 4,
    view: false,
    found: false,
  },
  {
    num: 5,
    view: false,
    found: false,
  },
  {
    num: 6,
    view: false,
    found: false,
  },
  {
    num: 7,
    view: false,
    found: false,
  },
  {
    num: 8,
    view: false,
    found: false,
  }
];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr;
}

const randomNums = shuffle(initialNumbers.concat([...initialNumbers]))
const numsWithId = randomNums.map((card, index) => {
  return {
    ...card,
    id: index
  }
});

function Board() {
  const [numbers, setNumbers] = useState(numsWithId);

  const viewCard = (cardId) => {
    const newCards = numbers.map(card => {
      if (card.id === cardId) {
        return {
          ...card,
          view: true
        }
      } else {
        return card
      }
    })
    setNumbers(newCards)
  }

  return (
    <div className={'board'}>
      {numbers.map(card => {
        return (
          <Card key={card.id} id={card.id} viewCard={viewCard} num={card.num} view={card.view} found={card.found} />
        )
      })}
    </div >
  )
}

export default Board;