// src/components/Square.js
import React from 'react';

const Square = ({ value, onClick,isWinnerSquare }) => {
    
    const squareClassName = isWinnerSquare ? 'square winner' : 'square';
  return (
    <button className={squareClassName} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
