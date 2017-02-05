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

function pascalTriangle(n, t = [[1]]) {
  if (n === 1) return t;

  const r = [];
  const prevRow = t[t.length - 1];

  let left;
  let right;

  for (let i = 0; i <= prevRow.length; i++) {
    left = prevRow[i - 1] || 0;
    right = prevRow[i] || 0;
    r.push(left + right);
  }

  t.push(r);

  return pascalTriangle(n - 1, t);
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
