import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ cardSet }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % cardSet.cards.length;
    setCurrentIndex(newIndex);
    setUserInput('');
    setIsCorrect(null);
  };

  const handleBack = () => {
    const newIndex = (currentIndex - 1 + cardSet.cards.length) % cardSet.cards.length;
    setCurrentIndex(newIndex);
    setUserInput('');
    setIsCorrect(null);
  };

  const handleShuffle = () => {
    const newIndex = Math.floor(Math.random() * cardSet.cards.length);
    setCurrentIndex(newIndex);
    setUserInput('');
    setIsCorrect(null);
  };

  const handleSubmit = () => {
    if (userInput.trim().toLowerCase() === cardSet.cards[currentIndex].answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="flashcard-list">
      <h2>{cardSet.title}</h2>
      <p>{cardSet.description}</p>
      <p>Total Cards: {cardSet.cards.length}</p>
      <Flashcard question={cardSet.cards[currentIndex].question} answer={cardSet.cards[currentIndex].answer} />
      <div>
        <input type="text" value={userInput} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {isCorrect !== null && (
        <p style={{ color: isCorrect ? 'green' : 'red' }}>
          {isCorrect ? 'Correct!' : 'Wrong!'}
        </p>
      )}
      <div className="button-container">
        <button className="button" onClick={handleBack}>Back</button>
        <button className="button" onClick={handleShuffle}>Shuffle</button>
        <button className="button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardList;

