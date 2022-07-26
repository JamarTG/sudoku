export const getSquareIndexes = (num) => {
    if (num === 1) {
      return [0,1,2];
    } else if (num === 2) {
      return [3,4,5];
    } else {
      return [6,7,8];
    }
}