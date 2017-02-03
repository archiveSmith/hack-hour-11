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
  let container = [];
  let rowLen = 1;
  for(let i =1; i< numRows; i++){
    let row = [];
    row[0]=row[row.length-1]=1;
    if(rowLen <= 2){
      container.push(row)
      rowLen+=1;
    }else{
      while(row.length <numRows){
         row[i]= container[rowLen-1][+ container[]
      }
      container.push(row)
    }
  }
  for (let i = 1; i < numRows; i++) {
    let tep = container[i][]
    container.push()
  }
}

//looking at an array of arrays. 
//inside each nested array are n number of items. 
//each nested array  when nums are added is === to 2^n power
//the two items in the array above equal the item in the array below Ex: 2[0]+ 2[1] = 3[1]    , 2[1] + 2[2]=3[2]




module.exports = pascalTriangle;
