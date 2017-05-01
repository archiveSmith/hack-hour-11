'use strict';
/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	let result;
	let fixedPower = Math.abs(Math.floor(power));
	if (fixedPower === 0) return 1;
	if (fixedPower === 1) return base;
	result = base * pow(base, (fixedPower - 1));
	if (power < 0) return 1 / result;
	else return result;
}

module.exports = pow;