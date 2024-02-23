import React from 'react';
import Square from './Square';

const GameBoard = ({ squares, onClick, winnerLine }) => {
  const renderSquare = (i) => {
    const isWinnerSquare = winnerLine && winnerLine.includes(i);
    
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        isWinnerSquare={isWinnerSquare}
      />
    );
  };

  const renderBoardRow = (start) => {
    return (
      <div key={start} className="board-row">
        {[0, 1, 2].map((offset) => renderSquare(start + offset))}
      </div>
    );
  };

  return (
    <div className="game-board">
      {[0, 3, 6].map((start) => renderBoardRow(start))}
    </div>
  );
};

export default GameBoard;
