export const isSudokuArrayValid = (array) => {
    const row = array.slice(0).sort().join(''),
    passingRow = [1,2,3,4,5,6,7,8,9].join('');
  
    return (row === passingRow);
};