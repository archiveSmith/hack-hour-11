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
var maxWidth = n;
for ( var i = 0; i < maxWidth; i++) {
	let row = "";
	for (var j = maxWidth; j > i; j--){
		row += " ";
	}
	for ( var k = 0; k <= i; k++) {
		row += "*";
	}
	console.log(row);
}
}



module.exports = drawStairs;
=======

*/

function drawStairs(n) {

}


module.exports = drawStairs;
>>>>>>> e5028ff0e5aac5e362c4d8ac99cdb5929204c68c
