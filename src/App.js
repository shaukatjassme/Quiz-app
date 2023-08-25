import React, { useState } from 'react';
import optionsData from './options.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const correctAnswer = 'Pakistan';
  const isAnswerCorrect = selectedOption === correctAnswer;
  const isWrongSelection = selectedOption !== null && !isAnswerCorrect;
  const isFirstQuestion = false; // Set this to true for the first question

  const handleOptionClick = (event, country) => {
    event.preventDefault();
    setSelectedOption(country);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null); // Reset selected option for the next question
  };

  const handlePreviousQuestion = () => {
    setSelectedOption(null); // Reset selected option when going back
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Guess the Flag!</h2>
        <p className="card-text">
          <img src={require('./images/R.png')} alt="Flag R" className="flag-img" />
        </p>
        {optionsData.map((option, index) => (
          <div key={index} className="inline-buttons d-inline-block text-center mt-3">
            <button
              className={`btn btn-primary mx-2 btn-default btn-equal-size ${selectedOption === option.country
                  ? selectedOption === correctAnswer
                    ? 'correct-answer'
                    : isWrongSelection && option.country === selectedOption
                      ? 'wrong-answer wrong-selection'
                      : 'wrong-answer'
                  : ''
                }`}
              onClick={(event) => handleOptionClick(event, option.country)}
            >
              {option.country}
              {selectedOption === correctAnswer && option.country === correctAnswer && (
                <FontAwesomeIcon icon={faCheck} className="mark-icon mark-icc" />
              )}
              {isWrongSelection && option.country === selectedOption && (
                <FontAwesomeIcon icon={faTimes} className="mark-icon cross-icon" />
              )}
            </button>
          </div>
        ))}
        <div className="button-group mt-3 d-flex justify-content-between">
          <button className={`btn btn-primary ${isFirstQuestion ? 'disabled' : ''}`} onClick={handlePreviousQuestion}>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
        {/* Display feedback messages */}
        {isWrongSelection && (
          <p className={`answer-message ${isWrongSelection ? 'wrong-answer-message' : 'correct-answer-message'}`}>
            {isWrongSelection
              ? `You selected the wrong answer. The correct answer is: ${correctAnswer}.`
              : `Congratulations! You selected the correct answer: ${correctAnswer}.`}
          </p>
        )}
        {selectedOption === correctAnswer && (
          <p className={`answer-message correct-answer-message ${isWrongSelection ? 'popup' : ''}`}>
            Congratulations! You selected the correct answer: {correctAnswer}.
          </p>
        )}
      </div>
    </div>
  );
}
