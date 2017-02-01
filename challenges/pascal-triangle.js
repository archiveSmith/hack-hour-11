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
  if(numRows === 1) return [[1]];
  if (numRows === undefined || numRows === 0) return [];
  let ans = [[1]];
  let count = 0;

  const pascal = (num) => {
    let temp = [1]
    if(num === 0) temp.push(1);
    
    for (let i = 0; i < num; i += 1) {
      if (i + 1 >= num) temp.push(1);
      else temp.push(ans[num][i] + ans[num][i + 1]);
    }
    
    ans.push(temp)
    if (count + 1 >= numRows) return ans;
    
    else {
      count += 1;
      pascal(count);
    }
    
  }

  pascal(count)
  
  let temp = ans.shift();
  ans.shift();
  ans.unshift([1])
  return ans;
}

module.exports = pascalTriangle;
