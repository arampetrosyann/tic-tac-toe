import React, { useState, useCallback } from "react";
import UIfx from "uifx";
import hitSound from "./assets/sounds/hit-thin.wav";
import pingSound from "./assets/sounds/btn-click.mp3";
import "./styles/App.css";
import { Board, WinBox, Button } from "./components";

const hit = new UIfx(hitSound, { throttleMs: 50 });
const ping = new UIfx(pingSound, { throttleMs: 50 });

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (ind) => {
    if (board[ind]) {
      return;
    }

    const copyBoard = [...board];

    copyBoard[ind] = xIsNext ? "X" : "O";

    setBoard(copyBoard);
    setXisNext(!xIsNext);
    hit.setVolume(0.85).play();
    setWinner(checkWinner(copyBoard));
  };

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
    setWinner(null);

    ping.setVolume(0.92).play();
  };

  const checkWinner = useCallback((board = []) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (const line of winLines) {
      const [val1, val2, val3] = line;
      if (
        board[val1] &&
        board[val1] === board[val2] &&
        board[val1] === board[val3]
      ) {
        return board[val1];
      }
    }

    if (!board.includes(null)) {
      return -1;
    }

    return null;
  }, []);

  return (
    <div className="App">
      <Button
        value="Play again"
        onClick={handlePlayAgain}
        style={{ marginBottom: 86 }}
        disabled={board.every((elem, i, arr) => elem === arr[0])}
      />
      {winner ? (
        <WinBox winner={winner} className="winbox" />
      ) : (
        <Board squares={board} onClick={handleClick} />
      )}
    </div>
  );
}

export default App;
