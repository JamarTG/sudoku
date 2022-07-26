import { isSudokuArrayValid } from "./isSudokuValid";

export const testRows = (board) => board.every(row => isSudokuArrayValid(row));
    