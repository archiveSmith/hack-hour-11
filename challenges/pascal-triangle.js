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
  if (numRows < 1) return [];
  const result = [];
  let prevLevel = [];
  for (let i = 0; i < numRows; i += 1) {
    const thisLevel = [1];
    for (let i = 1; i <= prevLevel.length; i += 1) {
      thisLevel.push(prevLevel[i - 1] + (prevLevel[i] || 0))
    }
    result.push(thisLevel);
    prevLevel = thisLevel;
  }
  return result;
}

module.exports = pascalTriangle;

console.log(pascalTriangle(6));