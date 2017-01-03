
function drawStairs(n,  i = 1, sp = n){
	while(i++ <= n){console.log(Array(sp).join(" ") + Array(i).join("*")); sp--; }
}


module.exports = drawStairs;

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
