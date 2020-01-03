import React, { useEffect, useState } from 'react';
import { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from './start'


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const getQuestionForAddition = (level = 10) => {
  // returnera object data med 'fråga' och 'svar'.
  const a = getRandomInt(level)
  const b = getRandomInt(level)
  const answer = a + b
  const question = `${a} + ${b}`
  return {
    answer,
    question
  }
}

const getQuestionForSubtraction = (level = 10) => {
  // returnera object data med 'fråga' och 'svar'.
  const a = getRandomInt(level)
  const b = getRandomInt(a) // vill inte kunna få negativt resultat än.
  const answer = a - b
  const question = `${a} - ${b}`
  return {
    answer,
    question
  }
}

const getQuestionForMultiplication = (table) => {
  // multiplicationtable
  // returnera object data med 'fråga' och 'svar'.
  const a = table
  const b = getRandomInt(10)
  const answer = a * b
  const question = `${a} * ${b}`
  return {
    answer,
    question
  }
}

const getQuestionForDivision = (table) => {
  // returnera object data med 'fråga' och 'svar'.
  const a = getRandomInt(10)
  const b = table
  const answer = a / b
  const question = `${a} / ${b}`
  return {
    answer,
    question
  }
}

const Game = (props) => {
  const [ question, setQuestion ] = useState({})
  const [ inputValue, setInputValue ] = useState('')
  const [ isAnswerCorrect, setIsAnswerCorrect ] = useState(false)
  const [ help, setHelp ] = useState(null)

  useEffect(() => {
    console.log('mount', props);
    getQuestion()
  }, [])

  const getQuestion = () => {
    switch (props.type) {
      case ADDITION: 
        setQuestion(getQuestionForAddition(props.level))
        break;
      case SUBTRACTION: 
        setQuestion(getQuestionForSubtraction(props.level))
        break;
      case MULTIPLICATION: 
        setQuestion(getQuestionForMultiplication(props.level))
        break;
      case DIVISION: 
        setQuestion(getQuestionForDivision(props.level))
        break;
      default:
        alert('something went wrong. Restart and contact developer to let the person know he messed up.')
        break;
    }
    if (props.type === ADDITION) {
      setQuestion(getQuestionForAddition(props.level))
    } else if (props.type === MULTIPLICATION) {
      setQuestion(getQuestionForMultiplication(props.level))
    }
  }

  
  const handleOnClick = (e) => {
    e.preventDefault()
    console.log('onclick', typeof inputValue, typeof question.answer)
    console.log('onclick',  inputValue,  question.answer)
    console.log('onclick',  parseFloat(inputValue, 10))
    if (question.answer === parseFloat(inputValue, 10)) {
      console.log('correct')
      setIsAnswerCorrect(true)
      
    } else {
      console.log('wrong answer')
    }
  }

  const handleInput = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const newQuestion = () => {
    getQuestion()
    setInputValue('')
    setIsAnswerCorrect(false)
    setHelp(null)
  }

  const handleHelp = () => {
    setHelp(question.answer)
  }
  console.log('question: ', question)
  return (
  <div>
    <div> {question && question.question} = {help && help}</div>
    <form type='' onSubmit={handleOnClick}>
    <div> svar:<input type='number' value={inputValue} onChange={(e) => handleInput(e)} /></div>
    <div>{ isAnswerCorrect 
      ? <button className='button' type='submit'onClick={newQuestion}>Next</button>
      : <button className='button' type='submit'onClick={handleOnClick}>Rätta</button>
      }</div>
    <div><button className='button' type='button' onClick={handleHelp}>Help</button></div>
    </form>
  </div>
  )
}

export default Game;
