/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	var isNegative = 1;
	if (power < 0) {
		power *= -1;
		isNegative = -1;
	}
	if (!power) {
		return 1;
	}
	while (power) {
		return isNegative * base * pow(base, power - 1);
	}
}

module.exports = pow;
