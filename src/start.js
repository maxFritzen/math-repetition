import React, { useEffect, useState } from 'react';
import Game from './game';

export const ADDITION = 'addition'
export const SUBTRACTION = 'subtraction'
export const MULTIPLICATION = 'multiplication'
export const DIVISION = 'division' // vill jag kanske bara ha jämna tal?

export const Start = () => {
  // klicka addition => visa nivåer (om inte visa från början)
  // klicka nivå => byt till övningscomponent
  // klicka home => kom hit

  // Level 1 === 1-10 på addition. använd level för vilken gångertabell för multiplikation ?

  // Visuellt: fyra rutor. +, - , *, / (plus, minus, multiplikation, division)
  const [ route, setRoute ] = useState('home')
  const [ level, setLevel ] = useState(10)
  const [ showLevels, setShowLevels ] = useState('')

  const handleOnClick = (route, level) => {
    setRoute(route)
    setLevel(level)
  }
  return (
    <div className='container'>
      <h1 className='header'>Math by repetition</h1>
      {route === 'home' ? (
      <div className='content'>
      
      <div className='box'>
        <h2 onClick={() => setShowLevels(ADDITION)}>Addition</h2>
        {showLevels === ADDITION && <ul>
          <li onClick={(() => handleOnClick(ADDITION, 10))}>1 to 10</li>
          <li onClick={(() => handleOnClick(ADDITION, 100))}>1 to 100</li>
          <li onClick={(() => handleOnClick(ADDITION, 1000))}>1 to 1000</li>
        </ul>
        }
      </div>
      <div className='box'>
        <h2 onClick={() => setShowLevels(SUBTRACTION)}>Subtraction</h2>
        {showLevels === SUBTRACTION && <ul>
          <li onClick={(() => handleOnClick(SUBTRACTION, 10))}>1 to 10</li>
          <li onClick={(() => handleOnClick(SUBTRACTION, 100))}>1 to 100</li>
          <li onClick={(() => handleOnClick(SUBTRACTION, 1000))}>1 to 1000</li>
        </ul>
        }
      </div>
      <div className='box'>
        <h2 onClick={() => setShowLevels(MULTIPLICATION)}>Multiplication</h2>
        {showLevels === MULTIPLICATION && <ul>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 2))}>2</li>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 3))}>3</li>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 4))}>4</li>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 5))}>5</li>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 6))}>6</li>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 7))}>7</li>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 8))}>8</li>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 9))}>9</li>
          <li onClick={(() => handleOnClick(MULTIPLICATION, 1))}>10</li>
        </ul>
        }
      </div>
      <div className='box'>
        <h2 onClick={() => setShowLevels(DIVISION)}>Division</h2>
        {showLevels === DIVISION && <ul>
          <li onClick={(() => handleOnClick(DIVISION, 2))}>2</li>
          <li onClick={(() => handleOnClick(DIVISION, 3))}>3</li>
          <li onClick={(() => handleOnClick(DIVISION, 4))}>4</li>
          <li onClick={(() => handleOnClick(DIVISION, 5))}>5</li>
          <li onClick={(() => handleOnClick(DIVISION, 6))}>6</li>
          <li onClick={(() => handleOnClick(DIVISION, 7))}>7</li>
          <li onClick={(() => handleOnClick(DIVISION, 8))}>8</li>
          <li onClick={(() => handleOnClick(DIVISION, 9))}>9</li>
          <li onClick={(() => handleOnClick(DIVISION, 1))}>10</li>
        </ul>
        }
      </div>
    </div> 
    )
    : <div>
        <div 
        className='home-link' 
        onClick={() => setRoute('home')}>Back home</div>
        <Game level={level} type={route} />
      </div>
    
    }
    
    </div>
  )
}