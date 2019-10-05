import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Board.css';
import cardDeck from '../cards.json';

function startCards(arr) {
  const randomNums = shuffle(arr.concat([...arr]))
  const numsWithId = randomNums.map((card, index) => {
    return {
      ...card,
      id: index
    }
  });
  return numsWithId
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr;
}

const initialDeck = startCards(cardDeck)

function Board() {
  const [cards, setCards] = useState(initialDeck);
  const [selectedCards, setSelectedCards] = useState([])

  const toggleCard = (cardId) => {
    const newCards = cards.map(card => {
      if (card.id === cardId) {
        return {
          ...card,
          view: true
        }
      } else {
        return card
      }
    })
    setCards(newCards);
    if (!selectedCards.find(card => card.id === cardId)) {
      selectedCards.push(newCards.find(card => card.id === cardId));
      setSelectedCards(selectedCards);
    }

  }

  useEffect(() => {
    // if two cards are open and not found
    console.log(selectedCards)
    if (selectedCards.length === 2) {
      if (selectedCards[0]['num'] === selectedCards[1]['num']) {
        const newCards = cards.map(card => {
          if (card.id === selectedCards[0]['id'] || card.id === selectedCards[1]['id']) {
            return {
              ...card,
              view: true,
              found: true
            }
          } else {
            return card
          }
        });
        setSelectedCards([])
        setCards(newCards);
      }
    } else if (selectedCards.length > 2) {
      const thirdSelection = selectedCards[2]
      const newCards = cards.map(card => {
        if (card.id === thirdSelection.id) {
          return {
            ...card,
            view: true
          }
        }
        if (!card.found && card.view) {
          return {
            ...card,
            view: false
          }
        }
        return card
      });
      setSelectedCards([thirdSelection])
      setCards(newCards);
    }


  }, [cards, selectedCards]);

  return (
    <div className={'board'}>
      {cards.map(card => {
        return (
          <Card key={card.id} toggleCard={toggleCard} card={card} />
        )
      })}
    </div >
  )
}

export default Board;