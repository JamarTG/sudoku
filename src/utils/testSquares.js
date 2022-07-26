import { getSquareValues } from "./getSquareValues";
import { isSudokuArrayValid } from "./isSudokuValid";

export const testSquares = (board) => {
  const squareSections = [1, 2, 3];
  return squareSections.every((squareX) => {
    return squareSections.every((squareY) =>
      isSudokuArrayValid(getSquareValues(squareX, squareY, board))
    );
  });
};