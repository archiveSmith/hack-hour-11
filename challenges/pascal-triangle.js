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
  var tri = [];

  for (var i = 0; i < numRows; i++) {
    tri.push([]);
    for (var j = 0; j < i; j++) {
      if (tri[i - 1][j - 1] && tri[i - 1][j]) {
        tri[i][j] = tri[i - 1][j - 1] + tri[i - 1][j];
      } else {
        tri[i][j] = 1;
      }
    }
  }

  tri = tri.slice(1);

  return tri;
}

// console.log(pascalTriangle(10));
module.exports = pascalTriangle;
