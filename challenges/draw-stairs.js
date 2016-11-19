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

  for (let i = 1; i <= n; i += 1) {
    let str = '';
    for (let j = i; j < n; j += 1) {
      str += ' ';
    }
    for (let k = n - i; k <= n; k += 1) {
      str += '*';
    }
    console.log(str);
  }
}


module.exports = drawStairs;