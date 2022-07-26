export const adjustPuzzle = (puzzle) =>{
    
    return puzzle.map(squareValue => {
        if(squareValue === null){
            return '';
        }else if(squareValue === 0){
            return '9';
        }   
        return String(squareValue);
    });
    
}   