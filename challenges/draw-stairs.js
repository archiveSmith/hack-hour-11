<<<<<<< HEAD
/* Write a function that console logs a
staircase of any given height where 1 <= N <= 100.
The staircase must climb up from left to right.
The last line should only consist of asterisks,
without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
=======
/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
>>>>>>> e5028ff0e5aac5e362c4d8ac99cdb5929204c68c
     *
    **
   ***
  ****
 *****
******
<<<<<<< HEAD
*/

function drawStairs(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (result !== '') result += '\n';
    result += ' '.repeat(n - i);
    result += '*'.repeat(i);
  }
  console.log(result)
=======

*/

function drawStairs(n) {

>>>>>>> e5028ff0e5aac5e362c4d8ac99cdb5929204c68c
}


module.exports = drawStairs;
