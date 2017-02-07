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
  let masterArr = [];
  let tempArr;
  // if (numRows === 0) return masterArr;
  for (let i = 1; i <= numRows; i++) {
    tempArr = [];
    tempArr.unshift(1);
    if (i > 2) {
      for (let j = 0; j < i - 2; j++) {
        // console.log('masterArr', masterArr)
        // console.log('masterArr[i - 2][j]', masterArr[i - 2][j]);
        tempArr.push(masterArr[i - 2][j] + masterArr[i - 2][j + 1]);
      }
    }
    if (i > 1) tempArr.push(1);
    masterArr.push(tempArr);
  }
  return masterArr
}

module.exports = pascalTriangle;
