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

function drawStairs(n){
  // our result string
  let result = "";
  // a space counter that will decrease as we iterate
  let totalSpaces = n;

  // iterate each line
  for (let i = 1; i <= n; i++){
    // create the spaces for each line
    let spaces = " ".repeat(totalSpaces);
    // add the spaces before the asterisk line
    result += spaces;

    //on each line, add asterisks
    for (let j = 0; j < i; j++){
      result += "*";
    }
    // create a line break
    result += "\n"
    // reduce the total spaces
    totalSpaces--;
  }
  console.log(result);
}


module.exports = drawStairs;
