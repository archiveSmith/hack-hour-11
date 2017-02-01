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
  if(numRows === 0) return [];

  const triangle = [[1]];
  let row, len, num;

  for(let i = 1; i < numRows; i++){
    len = triangle[i - 1].length + 1;
    row = [];
    for(let n = 0; n < len; n++){
      if(n > 0){
        num = triangle[i - 1][n - 1] + (triangle[i - 1][n] ? triangle[i - 1][n] : 0);
      }else{
        num = triangle[i - 1][n];
      }
      row.push(num);
    }
    triangle.push(row);
  }
  return triangle;
}

module.exports = pascalTriangle;
