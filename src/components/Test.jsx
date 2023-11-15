import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function Test() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [clickCount, setClickCount] = useState(0);

  let max = 6;

 function handleSelectSquare(rowIndex, colIndex) {
   if (clickCount < max) {
     setGameBoard((prevGameBoard) => {
       const updatedBoard = [
         ...prevGameBoard.map((innerArray) => [...innerArray]),
       ];
       updatedBoard[rowIndex][colIndex] = "X";
       return updatedBoard;
     });
     setClickCount(clickCount + 1);
   } else {
     // Hier können Sie eine Aktion ausführen, wenn das Klick-Limit erreicht ist
     alert("Klick-Limit von 6 erreicht!");
   }
 }

  return (
    <ol id="game-board" style={{ border: "solid blue" }}>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex} style={{ border: "solid red" }}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} style={{ border: "solid yellow" }}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
