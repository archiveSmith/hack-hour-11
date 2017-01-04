/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // edge case for zeros
  if (!a || !b) return 1;
  const arrA = [];
  const arrB = [];
  // create an array of divisors for a, largest to smallest
  for (let i = a; i > 0; i -= 1) {
    if (a % i === 0) arrA.push(i);
  }
  // create an array of divisors for b, largest to smallest
  for (let i = b; i > 0; i -= 1) {
    if (b % i === 0) arrB.push(i);
  }
  // loop through first array
  let count = 0;
  for (let i = 0; i < arrA.length; i += 1) {
    if (arrB.includes(arrA[i])) {
      return arrA[i];
    }
  }
}

module.exports = gcd;