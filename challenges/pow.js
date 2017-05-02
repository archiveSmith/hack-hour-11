/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	var isNegative = 1;
	var inverse = 0;
	if (base < 0) {
		base *= -1;
		if (power % 2 !== 0) {
		  isNegative = -1;
		}
	}
  
	if (power < 0) {
		power *= -1;
		inverse = 1;
	}

	if (!power) {
		return 1;
	}
	
	while (power) {
	  if (inverse) {
		  return 1/(isNegative * base * pow(base, power - 1));
	  } else {
		  return isNegative * base * pow(base, power - 1);
	  }
	}
}

module.exports = pow;
