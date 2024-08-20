import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

const ChessboardComponent = ({ onPositionChange }) => {
  const [game, setGame] = useState(new Chess());

  const onDrop = (sourceSquare, targetSquare) => {
    let move = null;
    try {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // always promote to queen for simplicity
      });
    } catch (error) {
      return false; // illegal move
    }

    setGame(new Chess(game.fen()));
    onPositionChange(game.fen());
    return true;
  };

  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
};

export default ChessboardComponent;