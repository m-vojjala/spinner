const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix.length; i++) {
  // console.log(matrix[i])
    newArray[i] = [];
    for (let j = 0; j <  matrix[i].length; j++) {
  
      // console.log(matrix[j][i])
      // console.log('i: ' + i + '\nj: ' + j + '\n');
      
      newArray[i][j] = matrix[j][i];
   
    }
  
  }
  console.log(newArray);
  return newArray;
};
  
  
  
// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};
  
printMatrix(transpose([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]));
  