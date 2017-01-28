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
function addStuff(stuff, times){
    let emptyString = ""
    for (let i = 0; i < times; i++){
      emptyString = emptyString + stuff;
    }
    return emptyString;
  }
  
  let whiteSpace = n - 1;
  let asterisks = 1;

  while (whiteSpace >= 0){
 let stair = ""
  stair = stair + addStuff(" ", whiteSpace) + addStuff("*", asterisks);
  whiteSpace--;
  asterisks++;
  console.log(stair);
  }
}


module.exports = drawStairs;
