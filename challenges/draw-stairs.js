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
    let stairs = '';
    for (let i = n - 1; i >= 0; i--) {
        let level = '';
        for (let j = i; j >= 1; j--) {
            level += ' ';
        }
        while(level.length < n) {
            level += '*';
        }
        stairs += level + '\n';
    }
    console.log(stairs);
}

// drawStairs(3);

module.exports = drawStairs;