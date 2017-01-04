/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let arrA = [];
  let arrB = [];
  let result = 1;
  let tempProduct;
  for (let i = 2; i <= a / 2; i++) {
    if (a % i === 0) arrA.push(i);
  }
  for (let j = 2; j <= j / 2; j++) {
    if (b % j === 0) arrB.push(j);
  }
  if (arrA.length === 0 || arrB.length === 0) return result;
  for (let k = 0; k < arrA.length; k++) {
    if (arrB.indexOf(arrA[k]) !== -1) {
      tempProduct = arrB.splice(arrB.indexOf(arrA[k]), 1);
      result = result * tempProduct;
    }
  }
  return result;
}

module.exports = gcd;