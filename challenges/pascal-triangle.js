/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/



function pascalTriangle(numRows) {
  let array = [];
  if (numRows == 1) {
      array[0] = [];
      array[0][0] = 1;
  }

  else if (numRows == 2) {
      array[0] = [];
      array[0][0] = 1;
      array[1] = [];
      array[1][0] = 1;
      array[1][1] = 1;
  }

  else if (numRows > 2) {
      array[0] = [];
      array[1] = [];
      array[0][0] = 1;
      array[1][0] = 1;
      array[1][1] = 1;
      for (i = 2; i < numRows; i++) {
          array[i] = [];
          array[i][0] = 1;
          for (j = 1; j < i; j++) {
              array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
          }
          array[i][j] = 1;
      }
  }
  
return array;
}

module.exports = pascalTriangle;
