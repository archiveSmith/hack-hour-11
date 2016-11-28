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
  if (n < 1 || n > 100) return 'unacceptable input - must be 1 to 100';
  let star = [];
  let result=[];
  for (let i = n; i !== 0; i--){
    result.push(" ");
  }
  while (star.length < n) {
    star.push('*');
    result =  result.slice(0, n - star.length).concat(star);
    console.log(result.join(''));
  }
}


module.exports = drawStairs;
