import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "Donkey";
    } else {
      nextSquares[i] = "Shrek";
    }
    //  function getImage(){
    //   if(nextSquares[i]=== "X"){
    //     return <img src="./assets/TikTac.png" alt="" />
    //   }
    //   else if(nextSquares[i] === "O"){
    //     return <img src="./assets/Toad.png" alt="" />
    //   }
    //  }
    //   getImage();
    console.log(i);
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares: string[]) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "Donkey" : "Shrek");
  }

  function handlePlayAgain() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <>
      <div className="bg">
        <audio autoPlay loop controls src="/Sound/allstar.mp3"></audio>
        <div className="row">
          <div className="col m-3">
            <h1>Shrek-Tak-Toe</h1>
          </div>
      
          <div className="col">
            <div className="status m-3">{status}</div>
            {winner || squares.every((square) => square !== null) ? (
              <button type="button"
              className="playAgain" 
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
            ) : null}
          </div>

          <div className="row">
            <div className="col">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
