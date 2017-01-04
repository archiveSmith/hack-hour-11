/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if(b === 0) return a;
  const dividend = Math.max(a, b);
  const divisor = Math.min(a, b);
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;
  console.log(`Quotient-Remainder Form: ${dividend} = ${divisor} x ${quotient} + ${remainder}`);
  return gcd(divisor, remainder);
}

console.log(gcd(210, 45));

module.exports = gcd;