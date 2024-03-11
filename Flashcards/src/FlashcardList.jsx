import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ cardSet }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = Math.floor(Math.random() * cardSet.cards.length);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flashcard-list">
      <h2>{cardSet.title}</h2>
      <p>{cardSet.description}</p>
      <p>Total Cards: {cardSet.cards.length}</p>
      <Flashcard question={cardSet.cards[currentIndex].question} answer={cardSet.cards[currentIndex].answer} />
      <div className="button-container">
        <button className="button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardList;
