import React from 'react';
import './App.css';
import FlashcardList from './FlashcardList'; 

const cards = {
  title: "Math Flashcards",
  description: "Practice your math skills with these flashcards!",
  cards: [
    { question: '2 + 2', answer: '4' },
    { question: '5 x 6', answer: '30' },
    { question: '10 - 3', answer: '7' },
    { question: '10 * 3', answer: '30' },
    { question: '4*9', answer: '36' }
    
  ]
};

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Flashcards for Kids</h1>
        <p className="description">Learn and practice with flashcards!</p>
      </div>
      <FlashcardList cardSet={cards} />
    </div>
  );
};

export default App; 