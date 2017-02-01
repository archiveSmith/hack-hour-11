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
  if (!numRows) {
    return false;
  }
  let result = [];
  let isDone = false;
  let curr = 0;
  while (curr < numRows) {
    if (result.length < 1) {
      result.push([1]);
      curr++;
    } else {
    
    for (let i=0; i<curr+1; i++) {
      
      if (i === 0) {
        result.push([1]);
      }

      else if (i > result[(curr-1)].length-1 || result[(curr-1)].length === 1) {
        result[curr].push(1);
        curr++;
        break;
      } else {
        result[curr].push(result[curr-1][i] + result[curr-1][i-1])
      }
    }

    }
  }
  return result;

}

// pascalTriangle(2)

module.exports = pascalTriangle;
