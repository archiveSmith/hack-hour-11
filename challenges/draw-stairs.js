/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  let space = height;
  let stairs = "";
  for (let i = 1; i < height + 1; i++) {
    for (let j = 0; j < space; j++) {
      stairs += " ";
    }
    for (let j = 0; j < i; j++) {
      stairs += "*";
    }
    stairs += "\n";
    space--;
  }
  console.log(stairs);
}


module.exports = drawStairs;
