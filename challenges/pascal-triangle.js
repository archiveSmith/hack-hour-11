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

function pascalTriangle(n, triangle = [[1]]) {
  for (let i = 1; i < n; i ++) {
    for (let j = 0; j <= triangle.length; j ++) {
      const left = triangle[i - 1][j - 1] ?  triangle[i - 1][j - 1] : 0;
      const right = triangle[i - 1][j] ?  triangle[i - 1][j] : 0;
      console.log('left', left);
      console.log('right', right);
      
    }
  }
  return triangle
}

console.log(pascalTriangle(1));

module.exports = pascalTriangle;
