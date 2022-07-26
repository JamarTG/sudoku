export const handleChange = (event,puzzle, setPuzzle,sol) =>{

  puzzle[event.target.id] = event.target.value;
  event.target.value = puzzle[event.target.id];
  setPuzzle([...puzzle]);
   
}