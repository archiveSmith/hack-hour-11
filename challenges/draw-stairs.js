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
<<<<<<< HEAD
*/

function drawStairs(n) {
  for (let i = 1; i <= n; i++) {
    let level = '';
    for (let k = 0; k < n - i; k++) {
      level += ' ';
    }
    for (let j = 0; j < i; j++) {
      level += '*';
    }
    console.log(level);
  }

  // Solution 2
  // for (let i = 1; i <= n; i++) {
  //   let level = '';
  //   for (let k = 0; k < n - i; k++) {
  //     level += ' ';
  //   }
  //   for (let j = 1; j <= i; j++) {
  //     level += '*';
  //   }
  //   console.log(level);
  // }
}


module.exports = drawStairs;
=======

*/

function drawStairs(n) {

}


module.exports = drawStairs;
>>>>>>> fe0e09e39e24b93f6b7ba7713891d144539a85b7
