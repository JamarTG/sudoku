import React, { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle } from "sudoku"; //ratepuzzle

// Utility Functions
import { convertArrayDimension } from "../utils/convertArrayDimension";
import { checkSolved } from "../utils/checkSolved";
import { adjustPuzzle } from "../utils/adjustPuzzle";
import { handleChange } from "../utils/handleChange";

export default function Board({ primaryColor }) {
  const [puzzle, setPuzzle] = useState(makepuzzle);
  const [puzzleSolution, setPuzzleSolution] = useState(solvepuzzle(puzzle));
  const [showPuzzle, setShowPuzzle] = useState(true);
  const [solved, setSolved] = useState("");
  const [editable, setEditable] = useState([]);
  let EDITABLE = [];

  useEffect(() => {
    puzzle.forEach((item, itemIndex) => {
      //check if null
      if (typeof item != "number") {
        EDITABLE.push(itemIndex);
      }
    });

    setEditable([...EDITABLE]);

    let adjustedPuzzle = adjustPuzzle(puzzle);
    let adjustedSolution = adjustPuzzle(puzzleSolution);

    setPuzzle(adjustedPuzzle);
    setPuzzleSolution(adjustedSolution);
  }, []);

  const squares = puzzle.map((square, i) => {
    return (
      <>
        {square === "" || editable.includes(i) ? (
          <input
            onChange={(event) => {
              handleChange(event, puzzle, setPuzzle, puzzleSolution);
            }}
            className={`square ${primaryColor}`}
            id={i}
            value={String(square)}
          />
        ) : (
          <input
            onChange={(event) => {
              handleChange(event, puzzle, setPuzzle, puzzleSolution);
            }}
            className="square"
            id={i}
            value={square}
            disabled
          />
        )}
      </>
    );
  });

  const solutionSquares = puzzleSolution.map((square) => {
    return <>{<input className="square" value={square} />}</>;
  });

  return (
    <div className="container">
      <div className="flex-h">
        <button
          className="show-btn"
          onClick={() => setShowPuzzle((prevState) => !prevState)}
        >
          Show Puzzle Solution
        </button>

        <button
          onClick={() => {
            if (
              checkSolved(convertArrayDimension([...puzzle]), solved, setSolved)
            ) {
              setSolved(true);
            }
          }}
          className="show-btn"
        >
          Submit Puzzle
        </button>
        {solved ? (
          <h3>CONGRATS!YOU SOLVED IT!🥳</h3>
        ) : solved === "" ? null : (
          <h3>😢SORRY. YOU ARE NOT CORRECT.</h3>
        )}
      </div>

      <div id="board">{showPuzzle ? squares : solutionSquares}</div>
    </div>
  );
}
