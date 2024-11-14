import { useState } from 'react';

type SquareValue = 'X' | 'O' | null;

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}
function Square({value, onSquareClick}: SquareProps) {
  return (
    <button
      className="w-16 h-16 flex items-center justify-center border-2 border-gray-300 text-xl font-bold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i:number) {
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    console.log(xIsNext);

  }

  const winner = calculateWinner(squares);
  console.log(winner);
  let status;
  if(winner) {
    status = 'Winner:' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  
   function calculateWinner(squares : SquareValue[]) {
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
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines [i];
      if (squares[a] && squares[a] === squares[b] && squares[a] ===squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  

  return (
    <div className="grid grid-rows-3 gap-2 mt">
      <div className='status'>{status}</div>
      <div className="flex justify-center space-x-2">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex justify-center space-x-2">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex justify-center space-x-2">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

