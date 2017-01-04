/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
// console.log(gcd(10, -5));

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number');
  let max, min;
  if (a > b) {
    max = a;
    min = b;
  } else {
    min = a;
    max = b;
  }
  while (a % min !== 0 || b % min !== 0) {
    min -= 1;
  }
  return min;
}

module.exports = gcd;