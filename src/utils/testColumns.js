import { isSudokuArrayValid } from "./isSudokuValid";

export const testColumns = (board) => {
  const gatherColumn = (board, columnNum) =>
    board.reduce((total, row) => [...total, row[columnNum]], []);
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].every((i) =>
    isSudokuArrayValid(gatherColumn(board, i))
  );
};