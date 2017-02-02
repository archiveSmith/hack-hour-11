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
  const output = [];
  for (let i = 0; i < numRows; i += 1) {
    if (i === 0 ) {
      output.push([1]);
    } else {
      const limit = i - 1;
      const subarr = [1];
      for (let j = 0; j < limit; j += 1) {
        subarr.push(output[i - 1][j] + output[i - 1][j + 1]);
      }
      subarr.push(1);
      output.push(subarr);
    }
  }
  return output;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
