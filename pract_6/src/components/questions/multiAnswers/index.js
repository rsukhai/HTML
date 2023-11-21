import { useRef } from 'react';
import './style.css';
import * as uuid from 'uuid';
import React, { useState } from 'react';

const isArrayEqual = (selected, correct) => {

 if (selected.length !== correct.length) {
  return false;
 }
 return correct.filter(e => !selected.includes(e)).length === 0;
};

/**
 * 
 * @param {Object} props 
 * @param {string} props.question
 * @param {string[]} props.answers
 * @param {number[]} props.correctAnswer
 * @returns 
 */
const MultiAnswerComponent = (props) => {

 const [selectedAnswerIndex, setSelectedAnswerIndex] = useState([]);
 const correctRef = useRef();
 const wrongRef = useRef();

 const checkboxClick = (index, checked) => {
  setSelectedAnswerIndex(prevSelected => {
    if (checked) {
      return prevSelected.includes(index) ? prevSelected : [...prevSelected, index];
    } else {
      return prevSelected.filter(e => e !== index);
    }
  });
  wrongRef.current.classList.remove('selected');
  correctRef.current.classList.remove('selected');
};




 const [wrongAttempts, setWrongAttempts] = useState(0);
 const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

 const changeColor = () => {
  if (wrongAttempts >= 3) {
    setShowCorrectAnswer(true);
  }
  };


 const checkOnClick = () => {
  if (isArrayEqual(selectedAnswerIndex, props.correctAnswer)) {
   correctRef.current.classList.add('selected');
   wrongRef.current.classList.remove('selected');
   setWrongAttempts(0);
  } else {
   wrongRef.current.classList.add('selected');
   correctRef.current.classList.remove('selected');
   setWrongAttempts(wrongAttempts + 1);
  }
 };

 return (
  <div className='question single-answer'>
   <div><h3>{props.question}</h3></div>
   <div className='answers'>
    {props.answers.map((answer, i) => {
     const id = uuid.v1();
     const answerStyle = showCorrectAnswer && props.correctAnswer.includes(i) ? { color: 'green' } : {};
     return (<div key={id} style={answerStyle}>
      <input
       id={id}
       type='checkbox'
       onChange={(e) => checkboxClick(i, e.currentTarget.checked)}
      />
      <label htmlFor={id}>{answer}</label>
     </div>);
    })}
   </div>
   <div className='check'>
    <div className='button' onClick={checkOnClick}>
     check my answer
     <div ref={correctRef} className='correct'>correct</div>
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

export default MultiAnswerComponent;