// src/components/Game.js
import React, { useState } from 'react';
import GameBoard from './GameBoard';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const getStatus = () => {
    const winner = calculateWinner(squares);
  
    if (winner) {
      
      return( <div className='plywin'>Winner: {squares[winner[0]]}</div>);
      
    } else if (squares.every((square) => square !== null)) {
    
        return (<div className='draw'>Draw!</div>);
    
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    
  };

  const winnerLine = calculateWinner(squares);
  return (
    <div className="game">
      <div className="game-info"></div>
      <GameBoard squares={squares} onClick={handleClick} winnerLine={winnerLine} />
      <div className="game-info">{getStatus()}</div>
      <button className="restart-btn" onClick={() => setSquares(Array(9).fill(null))}>
        Restart
      </button>
    </div>
  );
};

export default Game;

// Helper function to determine the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i] ;
    }
  }
  return null;
}
