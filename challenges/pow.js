'use strict';
/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// function pow(base, power, total = 1) {
// 	return power > 1 ? pow(base, pow -1, base * total) : total;
// }

function pow(base, power) {
	if(power === 0) return 1;
	let total = arguments[2] || base;
	return power > 1 ? pow(base, power -1, base * total) : total;
}

console.log(pow(2, 5));
module.exports = pow;
