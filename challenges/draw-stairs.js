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
  let result = ""
  
  let myArea = n;
  for (let i=0; i<myArea; i++) {
 
    for (let j=1; j<myArea-i; j++) {
      result += " ";
    }
    for (let k=myArea-i; k<myArea+1; k++) {      
      result += "*";
    }
    console.log(result);
    result= "";
  }
  
}


module.exports = drawStairs;