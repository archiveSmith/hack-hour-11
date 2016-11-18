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
	let str = "";
for(let i = n; i > 0; i--) {
	// if(n - i > 0) {
	// 	str = whiteSpace + str;
	// }
	let difference = n - i;
str = str + strGen(i) + "/n";
}

function whiteGen(num) {
		let str1 = "";
	if(num > 0) {
		str1 = str1 + " ";
		whiteGen(num - 1);
	}
	return str1;
}

function strGen(num) {
	let str1 = "";
	if(num > 0) {
	str1 = str1 + "*";
	strGen(num - 1);
} else {
	return str1;
}
return str1;
}


module.exports = drawStairs;