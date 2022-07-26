import { getSquareIndexes } from "./getSquareIndexes";

export const getSquareValues = (x, y, board) => {
  let values = [],
    rows = getSquareIndexes(x),
    columns = getSquareIndexes(y);

  rows.forEach((row) => {
    columns.forEach((column) => {
      values.push(board[row][column]);
    });
  });

  return values;
};