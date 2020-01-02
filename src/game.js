import React, { useEffect, useState } from 'react';
import { ADDITION, MULTIPLICATION } from './start'


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

const getQuestionForMultiplication = () => {
  // multiplicationtable
  // returnera object data med 'fråga' och 'svar'.
  const a = getRandomInt(10)
  const b = getRandomInt(10)
  const answer = a + b
  const question = `${a} + ${b}`
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
    if (props.type === ADDITION) {
      setQuestion(getQuestionForAddition(props.level))
    }
  }

  
  const handleOnClick = (e) => {
    e.preventDefault()
    console.log('onclick', typeof inputValue, typeof question.answer)
    if (question.answer === parseInt(inputValue)) {
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
      ? <button type='submit'onClick={newQuestion}>Next</button>
      : <button type='submit'onClick={handleOnClick}>Rätta</button>
      }</div>
    <div><button type='button' onClick={handleHelp}>Help</button></div>
    </form>
  </div>
  )
}

export default Game;
