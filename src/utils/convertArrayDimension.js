export const convertArrayDimension = (arr) => {
   
    const newArr = [];

    while(arr.length){
        newArr.push(arr.splice(0,9));
    }
    
    return newArr;
}