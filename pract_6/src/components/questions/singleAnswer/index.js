import { useRef } from 'react';
import './style.css';
import * as uuid from 'uuid';
import React, { useState } from 'react';


/**
 * 
 * @param {Object} props 
 * @param {string} props.question
 * @param {string[]} props.answers
 * @param {number} props.correctAnswer
 * @returns 
 */
const SingleAnswerComponent = (props) => {

 let selectedAnswerIndex = null;
 const radioClick = (index) => {
  selectedAnswerIndex = index;
  wrongRef.current.classList.remove('selected');
  correctRef.current.classList.remove('selected');
 };

 const correctRef = useRef();
 const wrongRef = useRef();
 const [wrongAttempts, setWrongAttempts] = useState(0);
 const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

 const changeColor = () => {
  if (wrongAttempts >= 3) {
    setShowCorrectAnswer(true);
  }
  };




 const checkOnClick = () => {
  if (selectedAnswerIndex === props.correctAnswer) {
   correctRef.current.classList.add('selected');
   wrongRef.current.classList.remove('selected');
   setWrongAttempts(0);
  } else {
   wrongRef.current.classList.add('selected');
   correctRef.current.classList.remove('selected');
   setWrongAttempts(wrongAttempts + 1);
  }
 };
 






 const qId = uuid.v1();

 return (
  <div className='question single-answer'>
   <div><h3>{props.question}</h3></div>
   <div className='answers'>
    {props.answers.map((answer, i) => {
     const id = uuid.v1();
     const isCorrectAnswer = i === props.correctAnswer;
      const answerStyle = showCorrectAnswer && isCorrectAnswer ? { color: 'green' } : {};
     return (<div key={id} style={answerStyle}>
      <input
       id={id}
       type='radio'
       name={`group-${qId}`}
       onClick={() => radioClick(i)}
      />
      <label for={id}>{answer}</label>
     </div>);
    })}
   </div>
   <div className='check' >
    <div className='button' onClick={checkOnClick}>
     check my answer
     <div ref={correctRef}  className='correct'>correct</div>
     <div ref={wrongRef} className='wrong'>wrong</div>
    </div>
    
    {wrongAttempts >= 3 && (
        <div className='button2' onClick={changeColor}>
          Show me correct answer
          
        </div>
      )}
   </div>
  </div>
 );
};

export default SingleAnswerComponent;