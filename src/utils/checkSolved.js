import { testRows } from "./testRows";
import { testColumns } from "./testColumns";
import { testSquares } from "./testSquares";

export const checkSolved = (board, solved, setSolved) => {
  if (!(testRows(board) && testColumns(board) && testSquares(board))) {
    if (solved === false) {
      setSolved("");
    } else {
      setSolved(false);
    }
  }
  return testRows(board) && testColumns(board) && testSquares(board);
};
