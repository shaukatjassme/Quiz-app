import React, { useState } from 'react';
import countriesData from './countriesData.json';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleOptionClick = (event, capital) => {
    event.preventDefault();
    if (selectedOption !== null) return; // Only allow selection if no option is already selected
    setSelectedOption(capital);

    const isCorrectAnswer = capital === countriesData[currentQuestionIndex].capital;
    const options = document.querySelectorAll('.OptionButton');

    options.forEach(option => {
      const countryData = countriesData.find(data => data.capital === option.innerText);
      option.classList.remove('selected', 'correct', 'wrong');

      if (option.innerText === capital) {
        option.classList.add('selected', isCorrectAnswer ? 'correct' : 'wrong');
      } else if (isCorrectAnswer && countryData.capital === countriesData[currentQuestionIndex].capital) {
        option.classList.add('correct');
      }
    });

    if (isCorrectAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = countriesData[currentQuestionIndex];
  const totalQuestions = countriesData.length;
  const progress = currentQuestionIndex + 1;
  const correctPercentage = (correctAnswersCount / totalQuestions) * 100;

  return (
    <div className="App">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body text-center">
                <h1 className="mb-4">Capital Quiz</h1>
                {currentQuestion && (
                  <div className="Question">
                    <h2 className="mb-4">What is the capital of {currentQuestion.country}?</h2>
                    <ul className="Options">
                      {countriesData.map((countryData, index) => (
                        <li
                          key={index}
                          className={`OptionButton ${
                            selectedOption === countryData.capital ? 'selected' : ''
                          }`}
                          onClick={(event) => handleOptionClick(event, countryData.capital)}
                        >
                          {countryData.capital}
                        </li>
                      ))}
                    </ul>
                    {selectedOption && (
                      <p className={`Result mt-3 ${selectedOption === currentQuestion.capital ? 'text-success' : 'text-danger'}`}>
                        Your answer is {selectedOption === currentQuestion.capital ? 'correct' : 'wrong'}.
                      </p>
                    )}
                    <p className="Progress mt-3">
                      Question {progress} of {totalQuestions}
                    </p>
                    <button
                      className="NextButton btn btn-primary mt-3"
                      disabled={!selectedOption}
                      onClick={handleNextQuestion}
                    >
                      {currentQuestionIndex === totalQuestions - 1 ? 'Show Results' : 'Next Question'}
                    </button>
                  </div>
                )}
                {currentQuestionIndex === totalQuestions && (
                  <div className="Results mt-4">
                    <h2>Quiz Results</h2>
                    <p>Your score: {correctPercentage.toFixed(2)}%</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
