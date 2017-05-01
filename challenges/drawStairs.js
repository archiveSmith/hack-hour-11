
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

// function drawStairs(n) {
// if(n=0){
// 	return *;
// }
// while(n>0){
// 	return drawStairs((n-1)* '*');
// }
// }


// module.exports = drawStairs;

function drawStairs(n) {
  let ans = '';
  let num = n;
  function stairs(n){
    if(n === 0) return ans;
    for(let i = 0; i < n; i++){
     ans += ' ';
    } 
    if (n<num){
      for(let i = 0; i< num - n; i++){
      ans +='*';
      }  
    }
    ans += '\n';
    stairs(n-1);
  } 
  stairs(n);
  return ans;
}