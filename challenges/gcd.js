/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 'use strict';

function gcd(a, b) {
	const prod = a * b;
	const max = a > b ? b : a;
	let g = 1;

	if (!a || !b) {
		return 0;
	}

	for (let i = 1; i <= max; i++) {
		if (a % i === 0 && b % i === 0) {
			g = i;
		}
	}

	return g;
}

module.exports = gcd;