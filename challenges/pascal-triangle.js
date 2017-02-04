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

  pascalTriangle(7) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [ 1,5,10,10,5,1]
    [1,6,15,20,15,6,1] 6/1  5/2  4/3  3/4  2/5 1/6
  ]
*/

function pascalTriangle(numRows) {
let result = [];
 while (numRows){
   let row = [1]
   let rowDigits = numRows;
   while(rowDigits){
     row.push(rowDigits)
     rowDigits -= 1;
   }
  //  row.map((val,index,array) =>  
   result.unshift(row)
   numRows -= 1
 }
 result.unshift([1])
 return result;
}

 console.log(pascalTriangle(3))

module.exports = pascalTriangle;
