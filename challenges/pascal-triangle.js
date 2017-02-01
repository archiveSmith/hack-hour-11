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
  const rows = [];
  for (let i = 0; i <= numRows; i++){
    let row = Math.pow(11,i).toString();
    let newRow = row.split("");
    for (let i = 0; i < newRow.length; i++){
      parseInt(newRow[i]);
    }
    rows.push(newRow)
  }
  return rows

}

console.log(pascalTriangle(5))

module.exports = pascalTriangle;
