import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [showQuestion, setShowQuestion] = useState(true);

  const toggleCard = () => {
    setShowQuestion(!showQuestion);
  };

  return (
    <div className={`card ${showQuestion ? 'show-question' : 'show-answer'}`} onClick={toggleCard}>
      {showQuestion ? (
        <div className="question">{question}</div>
      ) : (
        <div className="answer">{answer}</div>
      )}
    </div>
  );
};

export default Flashcard;
