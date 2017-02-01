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
  if(!numRows) return [];
  let triangle = [[1]];
  if(numRows === 1) return triangle;
  triangle.push([1,1]);
  if(numRows === 2) return triangle;
  console.log(triangle)
  if(numRows > 2){
    let row = 3;
    while(row <= numRows){
      let newRow =[1]
      for(let i = 1; i < triangle[row-2].length; i++){
        newRow.push((triangle[row-2][i-1]+triangle[row-2][i]));
      }
      newRow.push(1);
      triangle.push(newRow);
      row++;
    }

  }
  return triangle;
}

module.exports = pascalTriangle;
