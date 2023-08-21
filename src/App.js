import React from "react";
// import questions from "./data/gk.json";
import  Demo  from "./Demo";
import './App.css';
export default function App() {
  return(
   
    <Demo />
  
  )
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
