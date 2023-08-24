// import React from "react";
// import questions from "./data/gk.json";
// import  Demo  from "./Demo";
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

  const handleOptionClick = (event, country) => {
    event.preventDefault();
    setSelectedOption(country);
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
                    : isWrongSelection && option.country === selectedOption // Check if the option is the selected wrong answer
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

// "list-group-item"
// // "list-group-item active"
// const getOptionClass = (qid, op, attempts) => {
//   let found = attempts.find(attempt => attempt.qid === qid && attempt.op === op);  
//   if(found)
//     return "list-group-item active";
//   else
//     return "list-group-item";
// }


// export default function App() {
//   let [attempts, setAttempts] = useState([]);

//   const handleOptionSelection = (qid, op) => {
//     let attempt = {qid: qid, op: op};    
//     setAttempts([...attempts, attempt]); // state update ?
//   }

//   return (
//     <div className="container">
//       <h1>GK Quiz</h1>
//       {questions.map(q => {
//         return (
//           <div key={q.id}>
//             <h4>{q.statement}</h4>
//             <ul className="list-group">
//              {q.options.map(op => (
//                 <li 
//                   key={op}
//                   className={getOptionClass(q.id, op, attempts)}
//                   onClick={() => handleOptionSelection(q.id, op)}
//                 >
//                   {op}
//                 </li>
//              ))}
//             </ul>
//           </div>
//       )})}
//     </div>
//   );
// }
