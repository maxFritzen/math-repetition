import React, { useEffect, useState } from 'react';
import Game from './game';

export const ADDITION = 'addition'
export const MULTIPICATION = 'multiplication'

export const Start = () => {
  // klicka addition => visa nivåer (om inte visa från början)
  // klicka nivå => byt till övningscomponent
  // klicka home => kom hit

  // Level 1 === 1-10 på addition. använd level för vilken gångertabell för multiplikation ?
  const [ route, setRoute ] = useState('home')
  const [ level, setLevel ] = useState(10)

  const handleOnClick = (route, level) => {
    setRoute(route)
    setLevel(level)
  }
  return (
    <div>
      {route === 'home' ? (
      <div>
      <h1>Math by repetition</h1>
      <div>
        Addition
        <ul>
          <li onClick={(() => handleOnClick(ADDITION, 10))}>1 - 10</li>
          <li onClick={(() => handleOnClick(ADDITION, 100))}>1 - 100</li>
          <li onClick={(() => handleOnClick(ADDITION, 1000))}>1 - 1000</li>
        </ul>
      </div>
      <div>
        Multiplication
        <ul>
          <li onClick={(() => handleOnClick('multi', 2))}>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
      </div>
    </div> 
    )
    : <div>
        <div onClick={() => setRoute('home')}>Back home</div>
        <Game level={level} type={route} />
      </div>
    
    }
    
    </div>
  )
}