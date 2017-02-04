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
  if (!numRows || numRows < 1) {
    return [];
  }
  let result = [];

  for (let i = 0; i <= numRows; i += 1) {
    let tempArr = [];
    
      for (let k = 0; k < i; k += 1) {
        let tempVar = 0;
        if (k === 0 || k === i-1) {
          tempVar = 1;
          tempArr.push(tempVar);
        } else {
          let tempVar = result[i-1][k-1] + result[i-1][k]
          tempArr.push(tempVar)
        }
      }
    result.push(tempArr)
    }
  result.shift();
  return result;
}

module.exports = pascalTriangle;
